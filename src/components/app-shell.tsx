import * as React from "react";
import { BottomNav, StatusBar } from "@/components/chrome";
import { ChatView } from "@/components/chat-view";
import { SkillsView } from "@/components/skills-view";
import { RuntimeView } from "@/components/runtime-view";
import { MemoryView } from "@/components/memory-view";
import { StudioPanel } from "@/components/studio-panel";
import { useSable } from "@/lib/store";
import { probeAccelerators } from "@/lib/runtime/detect";
import type { Accelerator } from "@/lib/types";

export function AppShell() {
  const [ready, setReady] = React.useState(false);
  const tab = useSable((s) => s.tab);
  const probe = useSable((s) => s.probe);
  const job = useSable((s) => s.job);
  const preferred = useSable((s) => s.preferred);

  React.useEffect(() => {
    void Promise.resolve(useSable.persist.rehydrate()).finally(() => setReady(true));
  }, []);

  React.useEffect(() => {
    if (!ready) return;
    void probeAccelerators().then((p) => useSable.getState().setProbe(p));
  }, [ready]);

  const accelerator: Accelerator = job.artifact?.accelerator ?? probe?.chosen ?? preferred;

  if (!ready) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-bg text-muted">
        <p className="font-mono text-xs uppercase tracking-[0.2em]">Sable</p>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <div className="mx-auto flex min-h-dvh max-w-[1280px] items-stretch lg:gap-8 lg:px-8 lg:py-8">
        <div className="flex min-h-dvh w-full justify-center lg:min-h-0 lg:w-[420px] lg:shrink-0 lg:py-0">
          <div className="flex h-dvh w-full max-w-[430px] flex-col bg-surface lg:h-[min(844px,calc(100dvh-4rem))] lg:rounded-[var(--radius-3xl)] lg:p-3 lg:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_40px_80px_-40px_rgba(0,0,0,0.7)]">
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden bg-bg lg:rounded-[calc(var(--radius-3xl)-12px)]">
              <StatusBar accelerator={accelerator} />
              {tab === "chat" ? <ChatView accelerator={accelerator} /> : null}
              {tab === "skills" ? <SkillsView /> : null}
              {tab === "runtime" ? <RuntimeView accelerator={accelerator} /> : null}
              {tab === "memory" ? <MemoryView /> : null}
              <BottomNav />
            </div>
          </div>
        </div>
        <StudioPanel accelerator={accelerator} />
      </div>
    </div>
  );
}
