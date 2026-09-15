import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  Accelerator,
  ChatMessage,
  MemoryNode,
  ProbeResult,
  QuantJob,
  Skill,
  SwarmAgent,
  TabId,
} from "@/lib/types";
import { DEFAULT_INSTALLED, SKILL_CATALOG } from "@/lib/skills/catalog";
import { recipeFor } from "@/lib/runtime/detect";
import { stagesFor } from "@/lib/runtime/pipeline";

function nid(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

function tokensOf(text: string) {
  return text
    .toLowerCase()
    .split(/[^a-z0-9+]+/g)
    .filter((t) => t.length > 2)
    .slice(0, 24);
}

const STARTER: ChatMessage = {
  id: "m-welcome",
  role: "assistant",
  content:
    "Sable is ready. MiniCPM5-2B sits behind the Jcode harness. Skills load on demand from the open list. Runtime priority is TPU, then GPU, then CPU — convert once and the matching LiteRT or GGUF artifact sticks.\n\nAsk something, grab a GitHub skill, or open Runtime to quantize.",
  createdAt: Date.now(),
};

const SWARM: SwarmAgent[] = [
  { id: "architect", name: "Architect", role: "Plan and split work", status: "idle", last: "Waiting" },
  { id: "sme", name: "Specialist", role: "Deepen the active skill", status: "idle", last: "Waiting" },
  { id: "qa", name: "Reviewer", role: "Check tool use and claims", status: "idle", last: "Waiting" },
];

type SableState = {
  tab: TabId;
  think: boolean;
  installedIds: string[];
  grabbed: Skill[];
  messages: ChatMessage[];
  memories: MemoryNode[];
  swarm: SwarmAgent[];
  busy: boolean;
  error: string | null;
  probe: ProbeResult | null;
  preferred: Accelerator;
  job: QuantJob;
  grabUrl: string;
  grabBusy: boolean;
  grabError: string | null;
  setTab: (tab: TabId) => void;
  setThink: (v: boolean) => void;
  setPreferred: (v: Accelerator) => void;
  setProbe: (p: ProbeResult) => void;
  setBusy: (v: boolean) => void;
  setError: (v: string | null) => void;
  toggleSkill: (id: string) => void;
  installAll: () => void;
  addGrabbed: (skill: Skill) => void;
  addMessage: (msg: ChatMessage) => void;
  remember: (text: string, kind: MemoryNode["kind"]) => void;
  forget: (id: string) => void;
  setSwarm: (agents: SwarmAgent[]) => void;
  setGrabUrl: (v: string) => void;
  setGrabBusy: (v: boolean) => void;
  setGrabError: (v: string | null) => void;
  startJob: (target: Accelerator) => void;
  advanceJob: () => void;
  failJob: (error: string) => void;
  resetChat: () => void;
  skills: () => Skill[];
  installed: () => Skill[];
};

export const useSable = create<SableState>()(
  persist(
    (set, get) => ({
      tab: "chat",
      think: true,
      installedIds: DEFAULT_INSTALLED,
      grabbed: [],
      messages: [STARTER],
      memories: [
        {
          id: "mem-runtime",
          text: "Prefer TPU, then GPU, then CPU. Auto-quantize MiniCPM5-2B to LiteRT INT4 for TPU.",
          kind: "preference",
          createdAt: Date.now(),
          tokens: ["tpu", "gpu", "cpu", "quantize", "minicpm"],
        },
      ],
      swarm: SWARM,
      busy: false,
      error: null,
      probe: null,
      preferred: "tpu",
      job: { status: "idle", stageIndex: 0, stages: stagesFor("tpu"), log: [], artifact: null },
      grabUrl: "",
      grabBusy: false,
      grabError: null,
      setTab: (tab) => set({ tab }),
      setThink: (think) => set({ think }),
      setPreferred: (preferred) => set({ preferred }),
      setProbe: (probe) => set({ probe }),
      setBusy: (busy) => set({ busy }),
      setError: (error) => set({ error }),
      toggleSkill: (id) =>
        set((s) => ({
          installedIds: s.installedIds.includes(id)
            ? s.installedIds.filter((x) => x !== id)
            : [...s.installedIds, id],
        })),
      installAll: () =>
        set((s) => ({
          installedIds: Array.from(new Set([...s.installedIds, ...SKILL_CATALOG.map((k) => k.id)])),
        })),
      addGrabbed: (skill) =>
        set((s) => ({
          grabbed: [...s.grabbed.filter((g) => g.id !== skill.id), skill],
          installedIds: s.installedIds.includes(skill.id) ? s.installedIds : [...s.installedIds, skill.id],
        })),
      addMessage: (msg) => set((s) => ({ messages: [...s.messages, msg].slice(-80) })),
      remember: (text, kind) =>
        set((s) => ({
          memories: [
            ...s.memories,
            { id: nid("mem"), text, kind, createdAt: Date.now(), tokens: tokensOf(text) },
          ].slice(-80),
        })),
      forget: (id) => set((s) => ({ memories: s.memories.filter((m) => m.id !== id) })),
      setSwarm: (swarm) => set({ swarm }),
      setGrabUrl: (grabUrl) => set({ grabUrl }),
      setGrabBusy: (grabBusy) => set({ grabBusy }),
      setGrabError: (grabError) => set({ grabError }),
      startJob: (target) =>
        set({
          job: {
            status: "running",
            stageIndex: 0,
            stages: stagesFor(target),
            log: [`Locked target ${target.toUpperCase()}. MiniCPM5-2B conversion started.`],
            artifact: null,
          },
        }),
      advanceJob: () =>
        set((s) => {
          const next = s.job.stageIndex + 1;
          if (next >= s.job.stages.length) {
            const acc = s.preferred;
            const r = recipeFor(acc);
            return {
              job: {
                ...s.job,
                status: "done",
                stageIndex: s.job.stages.length,
                log: [...s.job.log, `Artifact ready · ${r.file}`],
                artifact: { accelerator: acc, ...r, completedAt: Date.now() },
              },
            };
          }
          const stage = s.job.stages[next];
          return {
            job: {
              ...s.job,
              stageIndex: next,
              log: [...s.job.log, `${stage.name} — ${stage.detail}`],
            },
          };
        }),
      failJob: (error) => set((s) => ({ job: { ...s.job, status: "error", error } })),
      resetChat: () => set({ messages: [STARTER], error: null }),
      skills: () => {
        const { grabbed } = get();
        const ids = new Set(grabbed.map((g) => g.id));
        return [...SKILL_CATALOG.filter((s) => !ids.has(s.id)), ...grabbed];
      },
      installed: () => {
        const { installedIds } = get();
        return get()
          .skills()
          .filter((s) => installedIds.includes(s.id));
      },
    }),
    {
      name: "sable-v1",
      skipHydration: true,
      partialize: (s) => ({
        think: s.think,
        installedIds: s.installedIds,
        grabbed: s.grabbed,
        messages: s.messages.slice(-40),
        memories: s.memories,
        preferred: s.preferred,
        job: s.job.status === "done" ? s.job : { ...s.job, status: "idle", stageIndex: 0, log: s.job.artifact ? s.job.log : [] },
      }),
    },
  ),
);
