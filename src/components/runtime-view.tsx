import * as React from "react";
import { Cpu, Loader2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useSable } from "@/lib/store";
import { acceleratorLabel, recipeFor } from "@/lib/runtime/detect";
import { pickTarget } from "@/lib/runtime/pipeline";
import { cn } from "@/lib/cn";
import type { Accelerator } from "@/lib/types";

export function RuntimeView({ accelerator }: { accelerator: Accelerator }) {
  const probe = useSable((s) => s.probe);
  const preferred = useSable((s) => s.preferred);
  const setPreferred = useSable((s) => s.setPreferred);
  const job = useSable((s) => s.job);

  React.useEffect(() => {
    if (job.status !== "running") return;
    const t = window.setTimeout(() => useSable.getState().advanceJob(), 520);
    return () => window.clearTimeout(t);
  }, [job.status, job.stageIndex]);

  function convert() {
    const p = useSable.getState().probe;
    const target = pickTarget(preferred, {
      tpu: Boolean(p?.tpu.present),
      gpu: Boolean(p?.gpu.present),
    });
    // Always honor TPU-first conversion even if this host has no TPU:
    // produce the TPU artifact for the Android build, then note fallback.
    const locked = preferred === "tpu" ? "tpu" : target;
    useSable.getState().startJob(locked);
  }

  const recipe = recipeFor(preferred);
  const lanes: Accelerator[] = ["tpu", "gpu", "cpu"];

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-3">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">LiteRT · NNAPI · GGUF</p>
      <h1 className="mt-1 text-xl font-medium tracking-[-0.02em]">Runtime</h1>
      <p className="mt-1 text-[13px] leading-relaxed text-muted">
        Priority is TPU, then GPU, then CPU. Convert MiniCPM5-2B once; Sable stores the matching artifact.
      </p>

      <ol className="mt-4 space-y-2">
        {lanes.map((id, i) => {
          const info = probe?.[id];
          const active = accelerator === id;
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => setPreferred(id)}
                className={cn(
                  "flex w-full items-start gap-3 rounded-[var(--radius-lg)] p-3 text-left shadow-[var(--shadow-border)]",
                  preferred === id ? "bg-surface-2" : "bg-bg",
                )}
              >
                <span className="flex size-9 items-center justify-center rounded-[var(--radius-sm)] bg-surface">
                  {id === "tpu" ? <Zap className="size-4 text-tpu" /> : <Cpu className={cn("size-4", id === "gpu" ? "text-gpu" : "text-cpu")} />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-muted">{i + 1}</span>
                    <span className="text-sm font-medium">{acceleratorLabel(id)}</span>
                    {active ? <Badge tone={id}>Live</Badge> : null}
                    {info?.present ? <Badge tone="ok">Present</Badge> : <Badge>Absent here</Badge>}
                  </span>
                  <span className="mt-0.5 block text-[12px] text-muted">{info?.label ?? "Probing…"}</span>
                  <span className="mt-1 block text-[12px] leading-relaxed text-muted">{info?.detail}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <section className="mt-5 rounded-[var(--radius-xl)] bg-surface-2 p-4 shadow-[var(--shadow-border)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-sm font-medium">Auto-quantize</h2>
            <p className="mt-1 font-mono text-[11px] text-muted">{recipe.file}</p>
            <p className="mt-1 text-[12.5px] leading-relaxed text-muted">{recipe.recipe}</p>
          </div>
          <Badge tone={preferred}>{recipe.sizeLabel}</Badge>
        </div>
        <Button className="mt-4 w-full" onClick={convert} disabled={job.status === "running"}>
          {job.status === "running" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Converting
            </>
          ) : job.status === "done" ? (
            "Reconvert"
          ) : (
            `Convert for ${acceleratorLabel(preferred)}`
          )}
        </Button>
        {probe?.previewHost && preferred === "tpu" ? (
          <p className="mt-2 text-[11px] leading-relaxed text-muted">
            This preview host has no Tensor / HTP / APU. Sable still writes the TPU artifact so the Android build AOT-compiles on Pixel Tensor and Snapdragon HTP.
          </p>
        ) : null}
      </section>

      <ol className="mt-4 space-y-2 pb-4">
        {job.stages.map((stage, i) => {
          const done = job.stageIndex > i || job.status === "done";
          const current = job.status === "running" && job.stageIndex === i;
          return (
            <li key={stage.name} className="flex gap-3">
              <span
                className={cn(
                  "mt-0.5 size-2.5 shrink-0 rounded-full",
                  done ? "bg-primary" : current ? "bg-primary/50" : "bg-border",
                )}
              />
              <span>
                <span className="block text-[13px] font-medium">{stage.name}</span>
                <span className="block text-[12px] leading-relaxed text-muted">{stage.detail}</span>
              </span>
            </li>
          );
        })}
      </ol>

      {job.artifact ? (
        <p className="mb-4 rounded-[var(--radius-md)] bg-primary/10 px-3 py-2 text-[12px] text-primary">
          Ready · {job.artifact.file} · {job.artifact.compiledFor}
        </p>
      ) : null}

      <section className="mb-6 rounded-[var(--radius-lg)] bg-surface-2 p-3 text-[12px] leading-relaxed text-muted shadow-[var(--shadow-border)]">
        <h2 className="text-sm font-medium text-fg">Android toolchain</h2>
        <p className="mt-1">Circuit Presenter / UI / Screen. Foundry Gradle. Keeper R8 keep rules for LiteRT JNI and NNAPI delegates. Compose lints on the native module.</p>
      </section>
    </div>
  );
}
