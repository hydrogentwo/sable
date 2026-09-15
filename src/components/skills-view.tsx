import * as React from "react";
import { Download, Loader2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { grabSkillFromGithub } from "@/lib/server/grab";
import { CATEGORY_LABEL, SKILL_CATALOG } from "@/lib/skills/catalog";
import { useSable } from "@/lib/store";
import { cn } from "@/lib/cn";
import type { Skill, SkillCategory } from "@/lib/types";

const FILTERS: Array<SkillCategory | "all"> = [
  "all",
  "harness",
  "memory",
  "swarm",
  "code",
  "research",
  "runtime",
  "android",
  "design",
  "security",
  "osint",
];

export function SkillsView() {
  const installedIds = useSable((s) => s.installedIds);
  const toggleSkill = useSable((s) => s.toggleSkill);
  const installAll = useSable((s) => s.installAll);
  const grabUrl = useSable((s) => s.grabUrl);
  const setGrabUrl = useSable((s) => s.setGrabUrl);
  const grabBusy = useSable((s) => s.grabBusy);
  const grabError = useSable((s) => s.grabError);
  const grabbed = useSable((s) => s.grabbed);
  const skills = React.useMemo(() => {
    const ids = new Set(grabbed.map((g) => g.id));
    return [...SKILL_CATALOG.filter((s) => !ids.has(s.id)), ...grabbed];
  }, [grabbed]);
  const [q, setQ] = React.useState("");
  const [cat, setCat] = React.useState<(typeof FILTERS)[number]>("all");

  const filtered = skills.filter((s) => {
    if (cat !== "all" && s.category !== cat) return false;
    if (!q.trim()) return true;
    const hay = `${s.name} ${s.repo} ${s.description} ${s.tags.join(" ")}`.toLowerCase();
    return hay.includes(q.toLowerCase());
  });

  async function grab() {
    const url = grabUrl.trim();
    if (!url) return;
    useSable.getState().setGrabBusy(true);
    useSable.getState().setGrabError(null);
    try {
      const res = await grabSkillFromGithub({ data: { url } });
      if (!res.ok) useSable.getState().setGrabError(res.error);
      else {
        useSable.getState().addGrabbed(res.skill);
        useSable.getState().setGrabUrl("");
      }
    } catch {
      useSable.getState().setGrabError("Could not reach GitHub.");
    } finally {
      useSable.getState().setGrabBusy(false);
    }
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="px-4 pt-3 pb-2">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Open list · GitHub</p>
        <h1 className="mt-1 text-xl font-medium tracking-[-0.02em]">Skills</h1>
        <p className="mt-1 text-[13px] leading-relaxed text-muted">
          Jcode injects only the skills that match the turn. Grab any repo that ships SKILL.md.
        </p>
        <form
          className="mt-3 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            void grab();
          }}
        >
          <Input
            value={grabUrl}
            onChange={(e) => setGrabUrl(e.target.value)}
            placeholder="github.com/owner/repo"
            aria-label="GitHub skill URL"
          />
          <Button type="submit" size="icon" disabled={grabBusy} aria-label="Grab skill">
            {grabBusy ? <Loader2 className="size-4 animate-spin" /> : <Download className="size-4" />}
          </Button>
        </form>
        {grabError ? <p className="mt-2 text-xs text-danger">{grabError}</p> : null}
        <div className="relative mt-3">
          <Search className="pointer-events-none absolute top-3.5 left-3 size-4 text-muted" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filter" className="pl-9" />
        </div>
        <div className="mt-3 flex flex-nowrap gap-1.5 overflow-x-auto pb-1">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setCat(f)}
              className={cn(
                "h-8 shrink-0 rounded-full px-3 font-mono text-[10px] uppercase tracking-wide",
                cat === f ? "bg-primary text-primary-fg" : "bg-surface-2 text-muted",
              )}
            >
              {f === "all" ? "All" : CATEGORY_LABEL[f]}
            </button>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-wide text-muted">
            {installedIds.length} installed · {filtered.length} shown
          </p>
          <Button variant="ghost" size="sm" onClick={installAll}>
            Install open list
          </Button>
        </div>
      </div>
      <ul className="min-h-0 flex-1 overflow-y-auto px-4 pb-4">
        {filtered.map((s) => (
          <SkillRow key={s.id} skill={s} on={installedIds.includes(s.id)} onToggle={() => toggleSkill(s.id)} />
        ))}
      </ul>
    </div>
  );
}

function SkillRow({ skill, on, onToggle }: { skill: Skill; on: boolean; onToggle: () => void }) {
  return (
    <li className="mb-2 rounded-[var(--radius-lg)] bg-surface-2 p-3 shadow-[var(--shadow-border)]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-sm font-medium">{skill.name}</h2>
            <Badge tone={skill.source === "grabbed" ? "primary" : "neutral"}>
              {skill.source === "grabbed" ? "Grabbed" : CATEGORY_LABEL[skill.category]}
            </Badge>
          </div>
          <p className="mt-0.5 font-mono text-[10px] text-muted">{skill.repo}</p>
          <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">{skill.description}</p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={on}
          onClick={onToggle}
          className={cn(
            "relative mt-0.5 h-7 w-12 shrink-0 rounded-full transition-colors",
            on ? "bg-primary" : "bg-bg shadow-[var(--shadow-border)]",
          )}
        >
          <span
            className={cn(
              "absolute top-0.5 size-6 rounded-full bg-fg transition-transform",
              on ? "translate-x-[22px]" : "translate-x-0.5",
            )}
          />
        </button>
      </div>
    </li>
  );
}
