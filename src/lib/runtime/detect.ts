import type { Accelerator, ProbeResult } from "@/lib/types";

type GpuAdapter = {
  info?: { device?: string; vendor?: string; description?: string };
};

type GpuNav = Navigator & {
  gpu?: { requestAdapter: () => Promise<GpuAdapter | null> };
};

function ua(): string {
  if (typeof navigator === "undefined") return "";
  return navigator.userAgent;
}

function isPixelTensor(): boolean {
  const u = ua();
  return /Pixel (6|7|8|9|10)/i.test(u) || /Pixel Tablet/i.test(u);
}

function looksAndroid(): boolean {
  return /Android/i.test(ua());
}

export async function probeAccelerators(): Promise<ProbeResult> {
  const nav = typeof navigator === "undefined" ? null : (navigator as GpuNav);
  const webgpu = Boolean(nav?.gpu);
  let gpuName = webgpu ? "WebGPU adapter" : "No WebGPU";
  if (nav?.gpu) {
    try {
      const adapter = await nav.gpu.requestAdapter();
      const info = adapter?.info;
      if (info?.device || info?.description || info?.vendor) {
        gpuName = [info.vendor, info.device || info.description].filter(Boolean).join(" ");
      } else if (adapter) {
        gpuName = "WebGPU adapter present";
      } else {
        gpuName = "WebGPU with no adapter";
      }
    } catch {
      gpuName = "WebGPU probe failed";
    }
  }

  const webnn = Boolean(nav && "ml" in nav);
  const cores = nav?.hardwareConcurrency ?? 4;
  const pixel = isPixelTensor();
  const android = looksAndroid();

  const tpuPresent = pixel || webnn;
  const tpuLabel = pixel
    ? "Google Tensor TPU"
    : webnn
      ? "WebNN NPU path"
      : android
        ? "NNAPI / Hexagon / APU (on device)"
        : "No TPU on this host";
  const tpuDetail = pixel
    ? "Pixel Tensor detected. LiteRT CompiledModel will AOT to NPU."
    : webnn
      ? "WebNN is available. Prefer NPU device type when compiling."
      : android
        ? "On a phone Sable probes NNAPI, Qualcomm HTP, MediaTek Neuron, then GPU."
        : "This preview host has no Edge TPU / Tensor / HTP. Conversion still targets TPU first for the Android build.";

  const gpuPresent = webgpu;
  const cpuPresent = true;

  let chosen: Accelerator = "cpu";
  if (tpuPresent) chosen = "tpu";
  else if (gpuPresent) chosen = "gpu";

  return {
    tpu: { present: tpuPresent, label: tpuLabel, detail: tpuDetail },
    gpu: {
      present: gpuPresent,
      label: gpuPresent ? gpuName : "No GPU delegate",
      detail: gpuPresent
        ? "Adreno / Mali / WebGPU path. LiteRT GPU (OpenCL) or WebGPU kernels."
        : "GPU delegate unavailable here.",
    },
    cpu: {
      present: cpuPresent,
      label: `${cores} cores · WASM / XNNPACK`,
      detail: "Always available. Q4_K_M GGUF or LiteRT INT4 on CPU.",
    },
    chosen,
    previewHost: !pixel,
  };
}

export function acceleratorLabel(id: Accelerator): string {
  if (id === "tpu") return "TPU";
  if (id === "gpu") return "GPU";
  return "CPU";
}

export function recipeFor(id: Accelerator) {
  if (id === "tpu") {
    return {
      format: "LiteRT-LM INT4 + TPU AOT",
      file: "MiniCPM5-2B_int4.tpu.litertlm",
      sizeLabel: "1.55 GB",
      recipe: "int4 blockwise-32 + OCTAV linears, int8 embeddings, CompiledModel NPU (Tensor / QNN HTP / Neuron)",
      compiledFor: "Google Tensor TPU · Qualcomm HTP · MediaTek APU",
    };
  }
  if (id === "gpu") {
    return {
      format: "LiteRT-LM INT4 GPU",
      file: "MiniCPM5-2B_int4.litertlm",
      sizeLabel: "1.55 GB",
      recipe: "int4 blockwise-32 + OCTAV, OpenCL / WebGPU delegate, fp32 activations",
      compiledFor: "Adreno · Mali · WebGPU",
    };
  }
  return {
    format: "GGUF Q4_K_M",
    file: "MiniCPM5-2B-Q4_K_M.gguf",
    sizeLabel: "1.6 GB",
    recipe: "llama.cpp Q4_K_M, AVX2 / NEON / WASM SIMD",
    compiledFor: "CPU XNNPACK · llama.cpp",
  };
}
