import * as React from "react";
import { Brain, Cpu, MessageSquare, Puzzle } from "lucide-react";
import { cn } from "@/lib/cn";
import { Badge } from "@/components/ui/badge";
import { useSable } from "@/lib/store";
import { acceleratorLabel } from "@/lib/runtime/detect";
import type { Accelerator, TabId } from "@/lib/types";

function useClock() {
  const [t, setT] = React.useState("09:41");
  React.useEffect(() => {
    const tick = () => {
      const d = new Date();
      setT(`${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`);
    };
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export function StatusBar({ accelerator }: { accelerator: Accelerator }) {
  const time = useClock();
  return (
    <div className="flex h-11 items-center justify-between px-5 pt-1 text-[11px] font-medium text-fg">
      <span className="font-mono tabular-nums">{time}</span>
      <span className="flex items-center gap-2 text-muted">
        <span className="inline-block h-2 w-2 rounded-full bg-primary" />
        <span className="tracking-wide">SABLE</span>
      </span>
      <Badge tone={accelerator}>{acceleratorLabel(accelerator)}</Badge>
    </div>
  );
}

const TABS: { id: TabId; label: string; icon: typeof MessageSquare }[] = [
  { id: "chat", label: "Chat", icon: MessageSquare },
  { id: "skills", label: "Skills", icon: Puzzle },
  { id: "runtime", label: "Runtime", icon: Cpu },
  { id: "memory", label: "Memory", icon: Brain },
];

export function BottomNav() {
  const tab = useSable((s) => s.tab);
  const setTab = useSable((s) => s.setTab);
  return (
    <nav className="grid grid-cols-4 border-t border-border bg-surface px-2 pb-[max(10px,env(safe-area-inset-bottom))] pt-1">
      {TABS.map((t) => {
        const on = tab === t.id;
        const Icon = t.icon;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={cn(
              "flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-[var(--radius-md)] text-[10px] font-medium tracking-wide",
              on ? "text-primary" : "text-muted",
            )}
          >
            <Icon className="size-5" strokeWidth={on ? 2.2 : 1.7} />
            {t.label}
          </button>
        );
      })}
    </nav>
  );
}
