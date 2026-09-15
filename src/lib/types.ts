export type TabId = "chat" | "skills" | "runtime" | "memory";

export type Accelerator = "tpu" | "gpu" | "cpu";

export type SkillCategory =
  | "harness"
  | "memory"
  | "swarm"
  | "code"
  | "research"
  | "security"
  | "runtime"
  | "design"
  | "osint"
  | "android";

export type Skill = {
  id: string;
  name: string;
  repo: string;
  description: string;
  category: SkillCategory;
  tags: string[];
  trigger: string;
  source: "curated" | "grabbed" | "builtin";
  stars?: number;
  body?: string;
};

export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  thinking?: string;
  skillHits?: string[];
  accelerator?: Accelerator;
  createdAt: number;
};

export type MemoryNode = {
  id: string;
  text: string;
  kind: "fact" | "preference" | "task" | "trace";
  createdAt: number;
  tokens: string[];
};

export type SwarmAgent = {
  id: string;
  name: string;
  role: string;
  status: "idle" | "running" | "done";
  last: string;
};

export type QuantStage = {
  name: string;
  detail: string;
};

export type QuantArtifact = {
  accelerator: Accelerator;
  format: string;
  file: string;
  sizeLabel: string;
  recipe: string;
  compiledFor: string;
  completedAt: number;
};

export type QuantJob = {
  status: "idle" | "running" | "done" | "error";
  stageIndex: number;
  stages: QuantStage[];
  log: string[];
  artifact: QuantArtifact | null;
  error?: string;
};

export type ProbeResult = {
  tpu: { present: boolean; label: string; detail: string };
  gpu: { present: boolean; label: string; detail: string };
  cpu: { present: boolean; label: string; detail: string };
  chosen: Accelerator;
  previewHost: boolean;
};
