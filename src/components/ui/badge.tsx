import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "neutral" | "primary" | "ok" | "warn" | "tpu" | "gpu" | "cpu";
  className?: string;
}) {
  const tones: Record<string, string> = {
    neutral: "bg-surface-2 text-muted",
    primary: "bg-primary/15 text-primary",
    ok: "bg-ok/15 text-ok",
    warn: "bg-warn/15 text-warn",
    tpu: "bg-tpu/15 text-tpu",
    gpu: "bg-gpu/15 text-gpu",
    cpu: "bg-cpu/15 text-cpu",
  };
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-full px-2 font-mono text-[10px] font-medium uppercase tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
