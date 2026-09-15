import type { Accelerator, QuantStage } from "@/lib/types";

export function stagesFor(target: Accelerator): QuantStage[] {
  const common: QuantStage[] = [
    { name: "Probe accelerators", detail: "Priority TPU → GPU → CPU. Lock the first that can take the graph." },
    { name: "Fetch MiniCPM5-2B", detail: "openbmb/MiniCPM5-2B · LlamaForCausalLM · 2.52B · 42L · GQA 16/2 · 131k ctx" },
    { name: "Export StableHLO", detail: "Trace 42 decoder layers, embed, LM head. No custom kernels." },
    { name: "Calibrate OCTAV", detail: "Representative prefill on UltraData mix. Scale linears per block-32." },
    { name: "Quantize weights", detail: "INT4 blockwise-32 on linears, INT8 embeddings, fp32 activations declared." },
    { name: "Pack LiteRT-LM", detail: "Write MiniCPM5-2B_int4.litertlm (1.55 GB) with thought channel + tool parser." },
  ];
  if (target === "tpu") {
    return [
      ...common,
      { name: "AOT compile TPU", detail: "Google Tensor CompiledModel · QNN HTP · Neuron. All signatures delegated." },
      { name: "Verify delegates", detail: "Every node of every signature on TPU. Warm KV 4096, max 131072." },
    ];
  }
  if (target === "gpu") {
    return [
      ...common,
      { name: "Bind GPU delegate", detail: "LiteRT Backend.GPU() / OpenCL. Fall back only if a node refuses." },
      { name: "Warm kernels", detail: "Prefill 256, decode 1. Thought channel on GPU." },
    ];
  }
  return [
    ...common.slice(0, 5),
    { name: "Export GGUF Q4_K_M", detail: "llama.cpp quantization. 1.6 GB. WASM SIMD or NEON." },
    { name: "CPU graph", detail: "XNNPACK threads = cores−1. Speculative DSpark optional." },
  ];
}

export function pickTarget(preferred: Accelerator, available: { tpu: boolean; gpu: boolean }): Accelerator {
  const order: Accelerator[] = [preferred, "tpu", "gpu", "cpu"];
  const seen = new Set<Accelerator>();
  for (const id of order) {
    if (seen.has(id)) continue;
    seen.add(id);
    if (id === "tpu" && available.tpu) return "tpu";
    if (id === "gpu" && available.gpu) return "gpu";
    if (id === "cpu") return "cpu";
  }
  return "cpu";
}
