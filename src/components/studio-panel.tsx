import { Badge } from "@/components/ui/badge";
import { useSable } from "@/lib/store";
import { acceleratorLabel } from "@/lib/runtime/detect";
import type { Accelerator } from "@/lib/types";

export function StudioPanel({ accelerator }: { accelerator: Accelerator }) {
  const job = useSable((s) => s.job);
  const installedIds = useSable((s) => s.installedIds);
  const probe = useSable((s) => s.probe);
  const messages = useSable((s) => s.messages);

  return (
    <aside className="hidden min-h-0 flex-1 flex-col overflow-hidden lg:flex">
      <div className="flex h-full flex-col gap-4 p-6">
        <header>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Studio</p>
          <h2 className="mt-1 text-2xl font-medium tracking-[-0.03em]">On-device control plane</h2>
          <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-muted">
            MiniCPM5-2B through Jcode. Same Circuit screens as the Android build. This pane is the desktop companion; the handset is the product.
          </p>
        </header>

        <dl className="grid grid-cols-3 gap-2">
          <Stat label="Accelerator" value={acceleratorLabel(accelerator)} />
          <Stat label="Skills on" value={String(installedIds.length)} />
          <Stat label="Turns" value={String(Math.max(0, messages.length - 1))} />
        </dl>

        <section className="min-h-0 flex-1 overflow-hidden rounded-[var(--radius-xl)] bg-surface p-4 shadow-[var(--shadow-border)]">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Conversion log</h3>
            <Badge tone={job.status === "done" ? "ok" : job.status === "running" ? "primary" : "neutral"}>
              {job.status}
            </Badge>
          </div>
          <ol className="mt-3 max-h-full space-y-1.5 overflow-y-auto font-mono text-[11px] leading-relaxed text-muted">
            {job.log.length === 0 ? (
              <li>Idle. Convert from Runtime to emit LiteRT / GGUF.</li>
            ) : (
              job.log.map((line, i) => <li key={i}>{line}</li>)
            )}
          </ol>
        </section>

        <section className="rounded-[var(--radius-xl)] bg-surface p-4 shadow-[var(--shadow-border)]">
          <h3 className="text-sm font-medium">Jcode harness</h3>
          <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-[11px] text-muted">
            <li>Baseline RAM 27.8 MB</li>
            <li>Boot 14 ms</li>
            <li>Skill inject lazy</li>
            <li>Swarm hub-spoke</li>
            <li>Context 131k</li>
            <li>Think hybrid</li>
          </ul>
          <p className="mt-3 text-[12px] leading-relaxed text-muted">
            {probe?.previewHost
              ? "Preview inference uses the server path so the harness is usable without a 1.55 GB download. The Android artifact is MiniCPM5-2B LiteRT."
              : "On-device weights loaded."}
          </p>
        </section>
      </div>
    </aside>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[var(--radius-lg)] bg-surface px-3 py-3 shadow-[var(--shadow-border)]">
      <dt className="font-mono text-[10px] uppercase tracking-wide text-muted">{label}</dt>
      <dd className="mt-1 text-lg font-medium tracking-tight">{value}</dd>
    </div>
  );
}
