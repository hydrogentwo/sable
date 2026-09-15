import * as React from "react";
import { Loader2, SendHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageBody } from "@/components/message-body";
import { runSableTurn } from "@/lib/server/chat";
import { injectSkills, skillBlock } from "@/lib/skills/inject";
import { useSable } from "@/lib/store";
import { cn } from "@/lib/cn";
import type { Accelerator } from "@/lib/types";

const STARTERS = [
  "Convert MiniCPM5-2B for TPU",
  "How does the Jcode loop inject skills?",
  "Sketch the on-device architecture",
  "What can Archify draw for this app?",
];

function nid() {
  return `m-${Math.random().toString(36).slice(2, 10)}`;
}

export function ChatView({ accelerator }: { accelerator: Accelerator }) {
  const messages = useSable((s) => s.messages);
  const busy = useSable((s) => s.busy);
  const error = useSable((s) => s.error);
  const think = useSable((s) => s.think);
  const setThink = useSable((s) => s.setThink);
  const [draft, setDraft] = React.useState("");
  const scroller = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [messages.length, busy]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || useSable.getState().busy) return;
    setDraft("");
    const userMsg = { id: nid(), role: "user" as const, content: trimmed, createdAt: Date.now() };
    useSable.getState().addMessage(userMsg);
    useSable.getState().setBusy(true);
    useSable.getState().setError(null);

    const state = useSable.getState();
    const installed = state.installed();
    const hits = injectSkills(trimmed, installed, 5);
    const history = state.messages
      .filter((m) => m.id !== "m-welcome")
      .map((m) => ({
        role: m.role,
        content: m.content,
      }));

    try {
      const res = await runSableTurn({
        data: {
          messages: history,
          think: state.think,
          skillBlock: skillBlock(hits),
          skillNames: installed.map((s) => s.name),
          accelerator,
          artifact: state.job.artifact
            ? `${state.job.artifact.file} · ${state.job.artifact.format}`
            : null,
          memories: state.memories.slice(-12).map((m) => `[${m.kind}] ${m.text}`),
        },
      });
      if (!res.ok) {
        useSable.getState().setError(res.error);
        useSable.getState().addMessage({
          id: nid(),
          role: "assistant",
          content: res.error,
          createdAt: Date.now(),
        });
      } else {
        useSable.getState().addMessage({
          id: nid(),
          role: "assistant",
          content: res.content,
          thinking: res.thinking,
          skillHits: hits.map((s) => s.name),
          accelerator,
          createdAt: Date.now(),
        });
        const mem = res.content.match(/^Remembered:\s*(.+)$/m);
        if (mem) useSable.getState().remember(mem[1], "fact");
      }
    } catch {
      useSable.getState().setError("Turn failed.");
    } finally {
      useSable.getState().setBusy(false);
    }
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div ref={scroller} className="min-h-0 flex-1 overflow-y-auto px-4 py-3">
        <header className="mb-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">On-device · MiniCPM5-2B</p>
          <h1 className="mt-1 text-[28px] font-medium leading-tight tracking-[-0.03em]">Sable</h1>
          <p className="mt-1 max-w-[34ch] text-[13px] leading-relaxed text-muted">
            Self-hosted assistant. Jcode harness. Skills from the open list. TPU first.
          </p>
        </header>

        <ol className="space-y-4">
          {messages.map((m) => (
            <li key={m.id} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
              <div
                className={cn(
                  "max-w-[92%] rounded-[var(--radius-lg)] px-3.5 py-2.5",
                  m.role === "user"
                    ? "rounded-br-sm bg-primary text-primary-fg"
                    : "rounded-bl-sm bg-surface-2 shadow-[var(--shadow-border)]",
                )}
              >
                {m.thinking ? (
                  <details className="mb-2">
                    <summary className="cursor-pointer font-mono text-[10px] uppercase tracking-wide text-muted">
                      Think
                    </summary>
                    <p className="mt-1 whitespace-pre-wrap text-[12px] leading-relaxed text-muted">{m.thinking}</p>
                  </details>
                ) : null}
                <MessageBody
                  text={m.content}
                  className={m.role === "user" ? "text-primary-fg [&_pre]:bg-primary-fg/10 [&_pre]:text-primary-fg" : undefined}
                />
                {m.skillHits && m.skillHits.length > 0 ? (
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-wide text-muted">
                    {m.skillHits.join(" · ")}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
          {busy ? (
            <li className="flex items-center gap-2 text-muted">
              <Loader2 className="size-4 animate-spin text-primary" />
              <span className="font-mono text-[11px] uppercase tracking-wide">Prefill · decode</span>
            </li>
          ) : null}
        </ol>

        {messages.length <= 1 && !busy ? (
          <div className="mt-6 grid grid-cols-1 gap-2">
            {STARTERS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => send(s)}
                className="rounded-[var(--radius-md)] bg-surface-2 px-3 py-3 text-left text-[13px] text-fg shadow-[var(--shadow-border)] transition-colors hover:bg-surface-2/70"
              >
                {s}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <form
        className="border-t border-border bg-surface p-3"
        onSubmit={(e) => {
          e.preventDefault();
          void send(draft);
        }}
      >
        {error ? <p className="mb-2 text-xs text-danger">{error}</p> : null}
        <div className="flex items-end gap-2">
          <div className="min-w-0 flex-1 rounded-[var(--radius-lg)] bg-surface-2 p-1 shadow-[var(--shadow-border)]">
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  void send(draft);
                }
              }}
              rows={2}
              placeholder="Message Sable"
              className="max-h-28 min-h-11 w-full resize-none bg-transparent px-3 py-2.5 text-sm text-fg outline-none placeholder:text-muted"
            />
            <div className="flex items-center justify-between px-2 pb-1">
              <button
                type="button"
                onClick={() => setThink(!think)}
                className={cn(
                  "h-8 rounded-full px-3 font-mono text-[10px] uppercase tracking-wide",
                  think ? "bg-primary/15 text-primary" : "text-muted",
                )}
              >
                Think {think ? "on" : "off"}
              </button>
              <span className="font-mono text-[10px] text-muted">{accelerator.toUpperCase()}</span>
            </div>
          </div>
          <Button type="submit" size="icon" disabled={busy || !draft.trim()} aria-label="Send">
            {busy ? <Loader2 className="size-4 animate-spin" /> : <SendHorizontal className="size-4" />}
          </Button>
        </div>
      </form>
    </div>
  );
}
