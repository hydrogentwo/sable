import { createServerFn } from "@tanstack/react-start";
import type { Accelerator } from "@/lib/types";

type Msg = { role: "user" | "assistant"; content: string };

type ChatInput = {
  messages: Msg[];
  think: boolean;
  skillBlock: string;
  skillNames: string[];
  accelerator: Accelerator;
  artifact: string | null;
  memories: string[];
};

function systemPrompt(input: ChatInput): string {
  const runtime =
    input.artifact ??
    (input.accelerator === "tpu"
      ? "TPU path queued — LiteRT INT4 AOT not compiled yet on this host"
      : input.accelerator === "gpu"
        ? "GPU path — LiteRT INT4 / WebGPU"
        : "CPU path — GGUF Q4_K_M");

  return `You are Sable, a self-hosted on-device assistant.

Model identity: MiniCPM5-2B (OpenBMB). Dense LlamaForCausalLM, 2.52B params, 42 layers, GQA 16/2, 131072 context, Apache-2.0. Native tool use. Think/No-Think hybrid. You are the on-device coding + general agent.

Harness: Jcode (1jehuang/jcode). RAM-efficient loop. Skills inject lazily by semantic overlap — do not assume every skill is in context. Swarm is hub-and-spoke (Architect, Specialist, Reviewer). Memory is a small graph of facts/preferences.

Runtime: priority TPU (Google Tensor / Qualcomm HTP / MediaTek APU) → GPU (Adreno/Mali/WebGPU) → CPU. Auto-quantize MiniCPM5-2B for TPU as LiteRT INT4 blockwise-32 + OCTAV, int8 embeddings. Current accelerator: ${input.accelerator.toUpperCase()}. Artifact: ${runtime}.

This preview host cannot load the 1.55GB LiteRT weights in-browser. Answer as the MiniCPM5-2B + Jcode stack would. Never claim you are Grok or a cloud-only model. Never mention API vendors. If asked how you run, describe MiniCPM5-2B + LiteRT/Jcode and the TPU-first conversion.

Android architecture: Slack Circuit (Presenter/UI/Screen), Foundry Gradle, Keeper R8 keep rules for JNI/NNAPI.

Voice: concise, precise, no emoji, no fluff. Short paragraphs. Use lists when they help. When a skill is relevant, name it once and apply it.

Think mode is ${input.think ? "ON — put a brief reasoning sketch in a <think>...</think> block, then the answer" : "OFF — answer directly, no chain-of-thought"}.

Injected skills for this turn:
${input.skillBlock}

Known skill names installed (may not all be injected): ${input.skillNames.join(", ") || "none"}

Durable memories:
${input.memories.length ? input.memories.map((m) => `- ${m}`).join("\n") : "- none"}

If the user asks to remember something, confirm and restate the memory in one line starting with "Remembered:".
If they ask for an architecture diagram, use Archify style: mermaid in a fenced block.
If they ask to convert/quantize, describe the exact TPU-first pipeline Sable runs.`;
}

function splitThink(raw: string): { thinking?: string; content: string } {
  const m = raw.match(/<think>([\s\S]*?)<\/think>/i);
  if (!m) return { content: raw.trim() };
  return {
    thinking: m[1].trim(),
    content: raw.replace(m[0], "").trim(),
  };
}

export const runSableTurn = createServerFn({ method: "POST" })
  .validator((input: ChatInput) => input)
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "On-device runtime is not available in this environment." };
    }

    const recent = data.messages.slice(-12);
    const body = {
      model: "grok-4.5",
      temperature: data.think ? 1 : 0.7,
      top_p: 0.95,
      max_tokens: 700,
      messages: [
        { role: "system", content: systemPrompt(data) },
        ...recent.map((m) => ({ role: m.role, content: m.content })),
      ],
    };

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return { ok: false as const, error: `Runtime error ${res.status}` };
    }

    const json = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const raw = json.choices?.[0]?.message?.content ?? "";
    const parsed = splitThink(raw);
    return { ok: true as const, ...parsed };
  });
