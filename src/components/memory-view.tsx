import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useSable } from "@/lib/store";
import * as React from "react";

export function MemoryView() {
  const memories = useSable((s) => s.memories);
  const swarm = useSable((s) => s.swarm);
  const [note, setNote] = React.useState("");

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-3">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Jcode graph · Swarm</p>
      <h1 className="mt-1 text-xl font-medium tracking-[-0.02em]">Memory</h1>
      <p className="mt-1 text-[13px] leading-relaxed text-muted">
        Semantic nodes inject when they overlap the turn. Swarm stays hub-and-spoke: Architect, Specialist, Reviewer.
      </p>

      <form
        className="mt-4 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          const t = note.trim();
          if (!t) return;
          useSable.getState().remember(t, "preference");
          setNote("");
        }}
      >
        <Input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Store a preference" />
        <Button type="submit" variant="secondary">
          Keep
        </Button>
      </form>

      <ul className="mt-4 space-y-2">
        {memories.length === 0 ? (
          <li className="text-sm text-muted">Empty graph. Facts land here when you ask Sable to remember.</li>
        ) : (
          memories
            .slice()
            .reverse()
            .map((m) => (
              <li
                key={m.id}
                className="flex items-start justify-between gap-2 rounded-[var(--radius-lg)] bg-surface-2 p-3 shadow-[var(--shadow-border)]"
              >
                <div>
                  <Badge tone="neutral">{m.kind}</Badge>
                  <p className="mt-1.5 text-[13px] leading-relaxed">{m.text}</p>
                </div>
                <button
                  type="button"
                  aria-label="Forget"
                  onClick={() => useSable.getState().forget(m.id)}
                  className="flex size-10 items-center justify-center text-muted hover:text-fg"
                >
                  <Trash2 className="size-4" />
                </button>
              </li>
            ))
        )}
      </ul>

      <h2 className="mt-6 text-sm font-medium">Swarm</h2>
      <ul className="mt-2 space-y-2 pb-4">
        {swarm.map((a) => (
          <li key={a.id} className="rounded-[var(--radius-lg)] bg-surface-2 p-3 shadow-[var(--shadow-border)]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{a.name}</p>
              <Badge>{a.status}</Badge>
            </div>
            <p className="mt-1 text-[12px] text-muted">{a.role}</p>
            <p className="mt-1 font-mono text-[11px] text-muted">{a.last}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
