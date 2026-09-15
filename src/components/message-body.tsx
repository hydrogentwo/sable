import { cn } from "@/lib/cn";

export function MessageBody({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/```/);
  return (
    <div className={cn("space-y-2 text-[13.5px] leading-relaxed text-fg", className)}>
      {parts.map((part, i) => {
        if (i % 2 === 1) {
          const nl = part.indexOf("\n");
          const code = nl >= 0 ? part.slice(nl + 1) : part;
          return (
            <pre
              key={i}
              className="overflow-x-auto rounded-[var(--radius-md)] bg-bg px-3 py-2 font-mono text-[11.5px] leading-snug text-primary shadow-[var(--shadow-border)]"
            >
              {code.replace(/\n$/, "")}
            </pre>
          );
        }
        return (
          <p key={i} className="whitespace-pre-wrap">
            {part}
          </p>
        );
      })}
    </div>
  );
}
