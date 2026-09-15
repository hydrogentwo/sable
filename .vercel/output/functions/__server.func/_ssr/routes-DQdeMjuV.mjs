import { i as __toESM } from "../_runtime.mjs";
import { R as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as Search, c as LoaderCircle, d as Brain, i as SendHorizontal, l as Download, o as Puzzle, r as Trash2, s as MessageSquare, t as Zap, u as Cpu } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DQdeMjuV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Badge({ children, tone = "neutral", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex h-6 items-center rounded-full px-2 font-mono text-[10px] font-medium uppercase tracking-wide", {
			neutral: "bg-surface-2 text-muted",
			primary: "bg-primary/15 text-primary",
			ok: "bg-ok/15 text-ok",
			warn: "bg-warn/15 text-warn",
			tpu: "bg-tpu/15 text-tpu",
			gpu: "bg-gpu/15 text-gpu",
			cpu: "bg-cpu/15 text-cpu"
		}[tone], className),
		children
	});
}
var SKILL_CATALOG = [
	{
		id: "jcode",
		name: "Jcode harness",
		repo: "1jehuang/jcode",
		description: "RAM-efficient agent harness: semantic skill injection, swarm, memory graph, and a tight tool loop.",
		category: "harness",
		tags: [
			"harness",
			"swarm",
			"memory",
			"tools",
			"agent loop"
		],
		trigger: "agent harness tools swarm loop jcode coding",
		source: "builtin",
		stars: 19700
	},
	{
		id: "minicpm-litert",
		name: "MiniCPM5 LiteRT",
		repo: "OpenBMB/MiniCPM",
		description: "On-device MiniCPM5-2B via LiteRT-LM. INT4 blockwise-32 + OCTAV, INT8 embeddings. Android CPU/GPU/NPU.",
		category: "runtime",
		tags: [
			"minicpm",
			"litert",
			"android",
			"quant",
			"tpu"
		],
		trigger: "model convert quantize litert android on-device minicpm",
		source: "builtin"
	},
	{
		id: "circuit",
		name: "Circuit screens",
		repo: "slackhq/circuit",
		description: "Compose-driven Presenter + UI + Screen architecture used for Sable's Android navigation model.",
		category: "android",
		tags: [
			"android",
			"compose",
			"circuit",
			"architecture"
		],
		trigger: "android compose navigation presenter screen",
		source: "builtin",
		stars: 1852
	},
	{
		id: "foundry",
		name: "Foundry build",
		repo: "slackhq/foundry",
		description: "Gradle/IntelliJ Android build tooling. Used as the reference build graph for the native module.",
		category: "android",
		tags: [
			"android",
			"gradle",
			"foundry"
		],
		trigger: "android gradle build foundry",
		source: "builtin"
	},
	{
		id: "keeper",
		name: "Keeper R8",
		repo: "slackhq/keeper",
		description: "Infers Proguard/R8 keep rules so LiteRT JNI and NNAPI delegates survive shrinking.",
		category: "android",
		tags: [
			"android",
			"r8",
			"proguard",
			"keeper"
		],
		trigger: "r8 proguard shrink android keep rules",
		source: "builtin"
	},
	{
		id: "plan-manager",
		name: "Plan manager",
		repo: "yurihbm/opencode-plan-manager",
		description: "Plan management tools so coding agents keep a live, editable task graph.",
		category: "harness",
		tags: [
			"plan",
			"opencode",
			"tasks"
		],
		trigger: "plan tasks steps checklist",
		stars: 15
	},
	{
		id: "workaholic",
		name: "Workaholic",
		repo: "RoderickQiu/opencode-workaholic",
		description: "Stops the agent from ending a task early. Pairs with plans.",
		category: "harness",
		tags: ["persistence", "plans"],
		trigger: "finish complete premature stop keep going",
		stars: 12
	},
	{
		id: "snip",
		name: "Snip",
		repo: "VincentHardouin/opencode-snip",
		description: "Prefix shell output with snip to cut tokens from tool traces.",
		category: "runtime",
		tags: ["tokens", "shell"],
		trigger: "tokens compress shell output",
		stars: 142
	},
	{
		id: "canvas",
		name: "OpenCode canvas",
		repo: "mailshieldai/opencode-canvas",
		description: "Interactive canvases: calendars, documents, booking boards.",
		category: "design",
		tags: ["canvas", "ui"],
		trigger: "canvas calendar document board ui",
		stars: 76
	},
	{
		id: "harness-memory",
		name: "Harness memory",
		repo: "smc2315/harness-memory",
		description: "Project memory layer for coding harnesses. Durable facts across sessions.",
		category: "memory",
		tags: ["memory", "harness"],
		trigger: "remember memory preference project",
		stars: 19
	},
	{
		id: "hiai",
		name: "HiAI orchestration",
		repo: "HiAi-gg/hiai-opencode",
		description: "Multi-agent slots, hooks, memory search, LSP diagnostics, completion controller.",
		category: "swarm",
		tags: [
			"multi-agent",
			"hooks",
			"lsp"
		],
		trigger: "orchestrate multi agent slots hooks lsp",
		stars: 17
	},
	{
		id: "magic-context",
		name: "Magic context",
		repo: "cortexkit/magic-context",
		description: "Self-managing long memory. One session for life — the hippocampus for agents.",
		category: "memory",
		tags: [
			"memory",
			"context",
			"hippocampus"
		],
		trigger: "long context memory session lifetime",
		stars: 2113
	},
	{
		id: "morph",
		name: "Morph fast apply",
		repo: "JRedeker/opencode-morph-fast-apply",
		description: "10x faster code edits with lazy markers. No MCP server.",
		category: "code",
		tags: [
			"edit",
			"apply",
			"code"
		],
		trigger: "edit apply patch code change",
		stars: 172
	},
	{
		id: "shepherd",
		name: "Shepherd traces",
		repo: "shepherd-agents/shepherd",
		description: "Reversible Git-like traces of agent runs. Fork, replay, revert.",
		category: "harness",
		tags: [
			"trace",
			"replay",
			"git"
		],
		trigger: "trace replay revert fork run history",
		stars: 2410
	},
	{
		id: "short-term",
		name: "Short-term memory",
		repo: "andrejtonev/opencode-short-term-memory",
		description: "Keeps user instructions and preferences alive across a long session.",
		category: "memory",
		tags: ["memory", "preferences"],
		trigger: "remember what I said preference instruction",
		stars: 9
	},
	{
		id: "throughput",
		name: "Throughput",
		repo: "Howardzhangdqs/opencode-throughput",
		description: "Throughput instrumentation for OpenCode runs.",
		category: "runtime",
		tags: ["perf", "throughput"],
		trigger: "speed throughput latency tokens per second",
		stars: 28
	},
	{
		id: "plan-annotator",
		name: "Plan annotator",
		repo: "ndom91/open-plan-annotator",
		description: "Local-first agent plan annotator.",
		category: "harness",
		tags: ["plan", "annotate"],
		trigger: "annotate plan review steps",
		stars: 94
	},
	{
		id: "bg-agents",
		name: "Background agents",
		repo: "kdcokenny/opencode-background-agents",
		description: "Async delegation with context persistence. Claude Code-style background agents.",
		category: "swarm",
		tags: [
			"background",
			"async",
			"delegate"
		],
		trigger: "background async delegate later",
		stars: 387
	},
	{
		id: "swarm",
		name: "OpenCode swarm",
		repo: "ZaxbyHub/opencode-swarm",
		description: "Hub-and-spoke swarm: architect, SME consult, generate, QA review.",
		category: "swarm",
		tags: [
			"swarm",
			"architect",
			"qa"
		],
		trigger: "swarm team parallel architect qa",
		stars: 469
	},
	{
		id: "manage-skills",
		name: "ManageSkills",
		repo: "Randroids-Dojo/ManageSkills",
		description: "Skill manager for installing, enabling, and routing agent skills.",
		category: "harness",
		tags: ["skills", "manager"],
		trigger: "install skill enable disable catalog",
		stars: 4
	},
	{
		id: "announcer",
		name: "Model announcer",
		repo: "ramarivera/opencode-model-announcer",
		description: "Announces the active model and runtime so the user always knows what is answering.",
		category: "runtime",
		tags: ["model", "status"],
		trigger: "which model runtime accelerator",
		stars: 35
	},
	{
		id: "sessions",
		name: "Sessions",
		repo: "malhashemi/opencode-sessions",
		description: "Session management with multi-agent collaboration support.",
		category: "harness",
		tags: ["session", "collab"],
		trigger: "session resume list conversations",
		stars: 176
	},
	{
		id: "synced",
		name: "Synced config",
		repo: "iHildy/opencode-synced",
		description: "Sync global agent config between machines.",
		category: "harness",
		tags: ["sync", "config"],
		trigger: "sync config machines settings",
		stars: 151
	},
	{
		id: "papers",
		name: "Research papers",
		repo: "saim-x/opencode-research-papers",
		description: "Search arXiv and OpenAlex with recency, citation, and relevance filters.",
		category: "research",
		tags: [
			"arxiv",
			"papers",
			"research"
		],
		trigger: "paper arxiv research cite paper",
		stars: 18
	},
	{
		id: "typeui",
		name: "TypeUI",
		repo: "bergside/typeui",
		description: "Build better UI with AI. Typed interface generation.",
		category: "design",
		tags: [
			"ui",
			"type",
			"frontend"
		],
		trigger: "ui design frontend interface",
		stars: 1925
	},
	{
		id: "liter-llm",
		name: "Liter LLM",
		repo: "xberg-io/liter-llm",
		description: "Universal LLM client — 163 providers, Rust core, 14 language bindings.",
		category: "runtime",
		tags: ["client", "providers"],
		trigger: "provider api client openai compatible",
		stars: 254
	},
	{
		id: "makefaster",
		name: "Make Faster",
		repo: "jjcm/makefaster",
		description: "Website performance tools and site leaderboard.",
		category: "runtime",
		tags: ["perf", "web"],
		trigger: "performance web vitals faster",
		stars: 137
	},
	{
		id: "reverse-skill",
		name: "Reverse skill",
		repo: "zhaoxuya520/reverse-skill",
		description: "Authorized reverse engineering / pentest skill router. On-demand toolchain + evolving knowledge base.",
		category: "security",
		tags: [
			"reverse",
			"security",
			"pentest"
		],
		trigger: "reverse engineer binary security authorized pentest",
		stars: 35946
	},
	{
		id: "agenttrail",
		name: "Agenttrail",
		repo: "sodiumsun/agenttrail",
		description: "Local observability for coding agents. Map + 3D kitchen of tasks and roles.",
		category: "harness",
		tags: [
			"observe",
			"trace",
			"map"
		],
		trigger: "observe trace visualize agent activity",
		stars: 664
	},
	{
		id: "spiderfoot",
		name: "SpiderFoot",
		repo: "smicallef/spiderfoot",
		description: "Automates OSINT for threat intelligence and attack-surface mapping.",
		category: "osint",
		tags: ["osint", "recon"],
		trigger: "osint recon threat surface domain",
		stars: 22112
	},
	{
		id: "archify",
		name: "Archify",
		repo: "tt-a1i/archify",
		description: "Architecture, workflow, sequence, data-flow, and lifecycle diagrams as self-contained HTML.",
		category: "design",
		tags: [
			"architecture",
			"diagram",
			"mermaid"
		],
		trigger: "architecture diagram sequence flowchart mermaid",
		stars: 62643
	},
	{
		id: "code-graph-rag",
		name: "Code graph RAG",
		repo: "vitali87/code-graph-rag",
		description: "Knowledge-graph RAG over a monorepo. Query, understand, and edit multi-language code.",
		category: "code",
		tags: [
			"rag",
			"graph",
			"codebase"
		],
		trigger: "codebase rag graph repo understand edit",
		stars: 5135
	},
	{
		id: "semantica",
		name: "Semantica",
		repo: "semantica-agi/semantica",
		description: "Graph-native infrastructure for context and accountable AI systems.",
		category: "memory",
		tags: [
			"graph",
			"context",
			"accountable"
		],
		trigger: "knowledge graph accountable context",
		stars: 12898
	},
	{
		id: "gigatoken",
		name: "Gigatoken",
		repo: "marcelroed/gigatoken",
		description: "Language-model tokenization at GB/s. Fast tokenizer for on-device prefill.",
		category: "runtime",
		tags: ["tokenizer", "perf"],
		trigger: "tokenize tokenizer prefill speed",
		stars: 4096
	},
	{
		id: "wigolo",
		name: "Wigolo",
		repo: "KnockOutEZ/wigolo",
		description: "Local-first search, fetch, crawl, and research for coding agents. No API keys.",
		category: "research",
		tags: [
			"search",
			"crawl",
			"local"
		],
		trigger: "search web crawl fetch research local",
		stars: 5259
	},
	{
		id: "openspace",
		name: "OpenSpace",
		repo: "HKUDS/OpenSpace",
		description: "Skill management layer for AI agents. Install, route, version skills.",
		category: "harness",
		tags: ["skills", "registry"],
		trigger: "skill manager registry install route",
		stars: 7667
	},
	{
		id: "cognetivy",
		name: "Cognetivy",
		repo: "meitarbe/cognetivy",
		description: "Open-source state layer. Structured, traceable agent runs and collections.",
		category: "harness",
		tags: [
			"state",
			"runs",
			"trace"
		],
		trigger: "state run event collection workspace",
		stars: 783
	},
	{
		id: "headroom",
		name: "Headroom",
		repo: "headroomlabs-ai/headroom",
		description: "Compress tool outputs, logs, files, and RAG chunks before they hit the model.",
		category: "runtime",
		tags: ["compress", "tokens"],
		trigger: "compress tokens context window headroom",
		stars: 72199
	},
	{
		id: "heretic",
		name: "Heretic",
		repo: "p-e-w/heretic",
		description: "Automatic refusal/censorship removal for local language models you host.",
		category: "runtime",
		tags: ["uncensor", "local"],
		trigger: "refusal uncensored local model",
		stars: 31431
	},
	{
		id: "understand-anything",
		name: "Understand Anything",
		repo: "Egonex-AI/Understand-Anything",
		description: "Turn any codebase into an interactive knowledge graph you can ask questions about.",
		category: "code",
		tags: [
			"graph",
			"understand",
			"code"
		],
		trigger: "understand code graph explore ask repo",
		stars: 82846
	},
	{
		id: "opentui",
		name: "OpenTUI",
		repo: "anomalyco/opentui",
		description: "Library to build terminal user interfaces. Jcode's TUI cousin.",
		category: "design",
		tags: ["tui", "terminal"],
		trigger: "terminal tui cli interface",
		stars: 13307
	},
	{
		id: "ez-tree",
		name: "ez-tree",
		repo: "dgreenheck/ez-tree",
		description: "Procedural tree generator. Useful for spatial / generative skills.",
		category: "design",
		tags: ["procedural", "tree"],
		trigger: "tree procedural generate mesh",
		stars: 1633
	},
	{
		id: "opencove",
		name: "OpenCove",
		repo: "DeadWaveWave/opencove",
		description: "Infinite canvas for agents, tasks, knowledge, and research.",
		category: "design",
		tags: ["canvas", "workspace"],
		trigger: "canvas workspace infinite board research",
		stars: 1588
	},
	{
		id: "terrarium",
		name: "KohakuTerrarium",
		repo: "Kohaku-Lab/KohakuTerrarium",
		description: "Compose self-contained agents and multi-agent teams with built-in tools.",
		category: "swarm",
		tags: ["multi-agent", "compose"],
		trigger: "compose team agents terrarium",
		stars: 500
	},
	{
		id: "opensquilla",
		name: "OpenSquilla",
		repo: "TokenRhythm/opensquilla",
		description: "Token-efficient agent: same budget, higher intelligence density.",
		category: "runtime",
		tags: ["tokens", "density"],
		trigger: "token efficient density budget",
		stars: 7020
	},
	{
		id: "iii",
		name: "iii",
		repo: "iii-hq/iii",
		description: "Compose, extend, and observe every service in real time.",
		category: "harness",
		tags: [
			"observe",
			"compose",
			"services"
		],
		trigger: "observe services compose extend realtime",
		stars: 18701
	}
].map((s) => ({
	...s,
	source: s.source ?? "curated"
}));
var CATEGORY_LABEL = {
	harness: "Harness",
	memory: "Memory",
	swarm: "Swarm",
	code: "Code",
	research: "Research",
	security: "Security",
	runtime: "Runtime",
	design: "Design",
	osint: "OSINT",
	android: "Android"
};
var DEFAULT_INSTALLED = [
	"jcode",
	"minicpm-litert",
	"circuit",
	"harness-memory",
	"openspace",
	"headroom",
	"archify",
	"magic-context"
];
function ua() {
	if (typeof navigator === "undefined") return "";
	return navigator.userAgent;
}
function isPixelTensor() {
	const u = ua();
	return /Pixel (6|7|8|9|10)/i.test(u) || /Pixel Tablet/i.test(u);
}
function looksAndroid() {
	return /Android/i.test(ua());
}
async function probeAccelerators() {
	const nav = typeof navigator === "undefined" ? null : navigator;
	const webgpu = Boolean(nav?.gpu);
	let gpuName = webgpu ? "WebGPU adapter" : "No WebGPU";
	if (nav?.gpu) try {
		const adapter = await nav.gpu.requestAdapter();
		const info = adapter?.info;
		if (info?.device || info?.description || info?.vendor) gpuName = [info.vendor, info.device || info.description].filter(Boolean).join(" ");
		else if (adapter) gpuName = "WebGPU adapter present";
		else gpuName = "WebGPU with no adapter";
	} catch {
		gpuName = "WebGPU probe failed";
	}
	const webnn = Boolean(nav && "ml" in nav);
	const cores = nav?.hardwareConcurrency ?? 4;
	const pixel = isPixelTensor();
	const android = looksAndroid();
	const tpuPresent = pixel || webnn;
	const tpuLabel = pixel ? "Google Tensor TPU" : webnn ? "WebNN NPU path" : android ? "NNAPI / Hexagon / APU (on device)" : "No TPU on this host";
	const tpuDetail = pixel ? "Pixel Tensor detected. LiteRT CompiledModel will AOT to NPU." : webnn ? "WebNN is available. Prefer NPU device type when compiling." : android ? "On a phone Sable probes NNAPI, Qualcomm HTP, MediaTek Neuron, then GPU." : "This preview host has no Edge TPU / Tensor / HTP. Conversion still targets TPU first for the Android build.";
	const gpuPresent = webgpu;
	const cpuPresent = true;
	let chosen = "cpu";
	if (tpuPresent) chosen = "tpu";
	else if (gpuPresent) chosen = "gpu";
	return {
		tpu: {
			present: tpuPresent,
			label: tpuLabel,
			detail: tpuDetail
		},
		gpu: {
			present: gpuPresent,
			label: gpuPresent ? gpuName : "No GPU delegate",
			detail: gpuPresent ? "Adreno / Mali / WebGPU path. LiteRT GPU (OpenCL) or WebGPU kernels." : "GPU delegate unavailable here."
		},
		cpu: {
			present: cpuPresent,
			label: `${cores} cores · WASM / XNNPACK`,
			detail: "Always available. Q4_K_M GGUF or LiteRT INT4 on CPU."
		},
		chosen,
		previewHost: !pixel
	};
}
function acceleratorLabel(id) {
	if (id === "tpu") return "TPU";
	if (id === "gpu") return "GPU";
	return "CPU";
}
function recipeFor(id) {
	if (id === "tpu") return {
		format: "LiteRT-LM INT4 + TPU AOT",
		file: "MiniCPM5-2B_int4.tpu.litertlm",
		sizeLabel: "1.55 GB",
		recipe: "int4 blockwise-32 + OCTAV linears, int8 embeddings, CompiledModel NPU (Tensor / QNN HTP / Neuron)",
		compiledFor: "Google Tensor TPU · Qualcomm HTP · MediaTek APU"
	};
	if (id === "gpu") return {
		format: "LiteRT-LM INT4 GPU",
		file: "MiniCPM5-2B_int4.litertlm",
		sizeLabel: "1.55 GB",
		recipe: "int4 blockwise-32 + OCTAV, OpenCL / WebGPU delegate, fp32 activations",
		compiledFor: "Adreno · Mali · WebGPU"
	};
	return {
		format: "GGUF Q4_K_M",
		file: "MiniCPM5-2B-Q4_K_M.gguf",
		sizeLabel: "1.6 GB",
		recipe: "llama.cpp Q4_K_M, AVX2 / NEON / WASM SIMD",
		compiledFor: "CPU XNNPACK · llama.cpp"
	};
}
function stagesFor(target) {
	const common = [
		{
			name: "Probe accelerators",
			detail: "Priority TPU → GPU → CPU. Lock the first that can take the graph."
		},
		{
			name: "Fetch MiniCPM5-2B",
			detail: "openbmb/MiniCPM5-2B · LlamaForCausalLM · 2.52B · 42L · GQA 16/2 · 131k ctx"
		},
		{
			name: "Export StableHLO",
			detail: "Trace 42 decoder layers, embed, LM head. No custom kernels."
		},
		{
			name: "Calibrate OCTAV",
			detail: "Representative prefill on UltraData mix. Scale linears per block-32."
		},
		{
			name: "Quantize weights",
			detail: "INT4 blockwise-32 on linears, INT8 embeddings, fp32 activations declared."
		},
		{
			name: "Pack LiteRT-LM",
			detail: "Write MiniCPM5-2B_int4.litertlm (1.55 GB) with thought channel + tool parser."
		}
	];
	if (target === "tpu") return [
		...common,
		{
			name: "AOT compile TPU",
			detail: "Google Tensor CompiledModel · QNN HTP · Neuron. All signatures delegated."
		},
		{
			name: "Verify delegates",
			detail: "Every node of every signature on TPU. Warm KV 4096, max 131072."
		}
	];
	if (target === "gpu") return [
		...common,
		{
			name: "Bind GPU delegate",
			detail: "LiteRT Backend.GPU() / OpenCL. Fall back only if a node refuses."
		},
		{
			name: "Warm kernels",
			detail: "Prefill 256, decode 1. Thought channel on GPU."
		}
	];
	return [
		...common.slice(0, 5),
		{
			name: "Export GGUF Q4_K_M",
			detail: "llama.cpp quantization. 1.6 GB. WASM SIMD or NEON."
		},
		{
			name: "CPU graph",
			detail: "XNNPACK threads = cores−1. Speculative DSpark optional."
		}
	];
}
function pickTarget(preferred, available) {
	const order = [
		preferred,
		"tpu",
		"gpu",
		"cpu"
	];
	const seen = /* @__PURE__ */ new Set();
	for (const id of order) {
		if (seen.has(id)) continue;
		seen.add(id);
		if (id === "tpu" && available.tpu) return "tpu";
		if (id === "gpu" && available.gpu) return "gpu";
		if (id === "cpu") return "cpu";
	}
	return "cpu";
}
function nid$1(prefix) {
	return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}
function tokensOf(text) {
	return text.toLowerCase().split(/[^a-z0-9+]+/g).filter((t) => t.length > 2).slice(0, 24);
}
var STARTER = {
	id: "m-welcome",
	role: "assistant",
	content: "Sable is ready. MiniCPM5-2B sits behind the Jcode harness. Skills load on demand from the open list. Runtime priority is TPU, then GPU, then CPU — convert once and the matching LiteRT or GGUF artifact sticks.\n\nAsk something, grab a GitHub skill, or open Runtime to quantize.",
	createdAt: Date.now()
};
var SWARM = [
	{
		id: "architect",
		name: "Architect",
		role: "Plan and split work",
		status: "idle",
		last: "Waiting"
	},
	{
		id: "sme",
		name: "Specialist",
		role: "Deepen the active skill",
		status: "idle",
		last: "Waiting"
	},
	{
		id: "qa",
		name: "Reviewer",
		role: "Check tool use and claims",
		status: "idle",
		last: "Waiting"
	}
];
var useSable = create()(persist((set, get) => ({
	tab: "chat",
	think: true,
	installedIds: DEFAULT_INSTALLED,
	grabbed: [],
	messages: [STARTER],
	memories: [{
		id: "mem-runtime",
		text: "Prefer TPU, then GPU, then CPU. Auto-quantize MiniCPM5-2B to LiteRT INT4 for TPU.",
		kind: "preference",
		createdAt: Date.now(),
		tokens: [
			"tpu",
			"gpu",
			"cpu",
			"quantize",
			"minicpm"
		]
	}],
	swarm: SWARM,
	busy: false,
	error: null,
	probe: null,
	preferred: "tpu",
	job: {
		status: "idle",
		stageIndex: 0,
		stages: stagesFor("tpu"),
		log: [],
		artifact: null
	},
	grabUrl: "",
	grabBusy: false,
	grabError: null,
	setTab: (tab) => set({ tab }),
	setThink: (think) => set({ think }),
	setPreferred: (preferred) => set({ preferred }),
	setProbe: (probe) => set({ probe }),
	setBusy: (busy) => set({ busy }),
	setError: (error) => set({ error }),
	toggleSkill: (id) => set((s) => ({ installedIds: s.installedIds.includes(id) ? s.installedIds.filter((x) => x !== id) : [...s.installedIds, id] })),
	installAll: () => set((s) => ({ installedIds: Array.from(/* @__PURE__ */ new Set([...s.installedIds, ...SKILL_CATALOG.map((k) => k.id)])) })),
	addGrabbed: (skill) => set((s) => ({
		grabbed: [...s.grabbed.filter((g) => g.id !== skill.id), skill],
		installedIds: s.installedIds.includes(skill.id) ? s.installedIds : [...s.installedIds, skill.id]
	})),
	addMessage: (msg) => set((s) => ({ messages: [...s.messages, msg].slice(-80) })),
	remember: (text, kind) => set((s) => ({ memories: [...s.memories, {
		id: nid$1("mem"),
		text,
		kind,
		createdAt: Date.now(),
		tokens: tokensOf(text)
	}].slice(-80) })),
	forget: (id) => set((s) => ({ memories: s.memories.filter((m) => m.id !== id) })),
	setSwarm: (swarm) => set({ swarm }),
	setGrabUrl: (grabUrl) => set({ grabUrl }),
	setGrabBusy: (grabBusy) => set({ grabBusy }),
	setGrabError: (grabError) => set({ grabError }),
	startJob: (target) => set({ job: {
		status: "running",
		stageIndex: 0,
		stages: stagesFor(target),
		log: [`Locked target ${target.toUpperCase()}. MiniCPM5-2B conversion started.`],
		artifact: null
	} }),
	advanceJob: () => set((s) => {
		const next = s.job.stageIndex + 1;
		if (next >= s.job.stages.length) {
			const acc = s.preferred;
			const r = recipeFor(acc);
			return { job: {
				...s.job,
				status: "done",
				stageIndex: s.job.stages.length,
				log: [...s.job.log, `Artifact ready · ${r.file}`],
				artifact: {
					accelerator: acc,
					...r,
					completedAt: Date.now()
				}
			} };
		}
		const stage = s.job.stages[next];
		return { job: {
			...s.job,
			stageIndex: next,
			log: [...s.job.log, `${stage.name} — ${stage.detail}`]
		} };
	}),
	failJob: (error) => set((s) => ({ job: {
		...s.job,
		status: "error",
		error
	} })),
	resetChat: () => set({
		messages: [STARTER],
		error: null
	}),
	skills: () => {
		const { grabbed } = get();
		const ids = new Set(grabbed.map((g) => g.id));
		return [...SKILL_CATALOG.filter((s) => !ids.has(s.id)), ...grabbed];
	},
	installed: () => {
		const { installedIds } = get();
		return get().skills().filter((s) => installedIds.includes(s.id));
	}
}), {
	name: "sable-v1",
	skipHydration: true,
	partialize: (s) => ({
		think: s.think,
		installedIds: s.installedIds,
		grabbed: s.grabbed,
		messages: s.messages.slice(-40),
		memories: s.memories,
		preferred: s.preferred,
		job: s.job.status === "done" ? s.job : {
			...s.job,
			status: "idle",
			stageIndex: 0,
			log: s.job.artifact ? s.job.log : []
		}
	})
}));
function useClock() {
	const [t, setT] = import_react.useState("09:41");
	import_react.useEffect(() => {
		const tick = () => {
			const d = /* @__PURE__ */ new Date();
			setT(`${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`);
		};
		tick();
		const id = setInterval(tick, 15e3);
		return () => clearInterval(id);
	}, []);
	return t;
}
function StatusBar({ accelerator }) {
	const time = useClock();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-11 items-center justify-between px-5 pt-1 text-[11px] font-medium text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono tabular-nums",
				children: time
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2 text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-2 w-2 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tracking-wide",
					children: "SABLE"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: accelerator,
				children: acceleratorLabel(accelerator)
			})
		]
	});
}
var TABS = [
	{
		id: "chat",
		label: "Chat",
		icon: MessageSquare
	},
	{
		id: "skills",
		label: "Skills",
		icon: Puzzle
	},
	{
		id: "runtime",
		label: "Runtime",
		icon: Cpu
	},
	{
		id: "memory",
		label: "Memory",
		icon: Brain
	}
];
function BottomNav() {
	const tab = useSable((s) => s.tab);
	const setTab = useSable((s) => s.setTab);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "grid grid-cols-4 border-t border-border bg-surface px-2 pb-[max(10px,env(safe-area-inset-bottom))] pt-1",
		children: TABS.map((t) => {
			const on = tab === t.id;
			const Icon = t.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setTab(t.id),
				className: cn("flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-[var(--radius-md)] text-[10px] font-medium tracking-wide", on ? "text-primary" : "text-muted"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-5",
					strokeWidth: on ? 2.2 : 1.7
				}), t.label]
			}, t.id);
		})
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 active:scale-[0.98]", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-fg hover:bg-primary/90",
			secondary: "bg-surface-2 text-fg hover:bg-surface-2/80 shadow-[var(--shadow-border)]",
			ghost: "bg-transparent text-fg hover:bg-surface-2",
			danger: "bg-danger text-fg hover:bg-danger/90"
		},
		size: {
			sm: "h-8 rounded-[var(--radius-sm)] px-3 text-xs",
			md: "h-11 rounded-[var(--radius-md)] px-4 text-sm",
			icon: "size-11 rounded-[var(--radius-md)]",
			pill: "h-8 rounded-full px-3 text-xs"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
	ref,
	className: cn(buttonVariants({
		variant,
		size
	}), className),
	...props
}));
Button.displayName = "Button";
function MessageBody({ text, className }) {
	const parts = text.split(/```/);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("space-y-2 text-[13.5px] leading-relaxed text-fg", className),
		children: parts.map((part, i) => {
			if (i % 2 === 1) {
				const nl = part.indexOf("\n");
				const code = nl >= 0 ? part.slice(nl + 1) : part;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "overflow-x-auto rounded-[var(--radius-md)] bg-bg px-3 py-2 font-mono text-[11.5px] leading-snug text-primary shadow-[var(--shadow-border)]",
					children: code.replace(/\n$/, "")
				}, i);
			}
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "whitespace-pre-wrap",
				children: part
			}, i);
		})
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var runSableTurn = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("87a9557e2f50c40b37faac98b149539793fff8e2adc5a252efe4204a1ad3611c"));
function tokenize(text) {
	return text.toLowerCase().split(/[^a-z0-9+]+/g).filter((t) => t.length > 2);
}
function scoreSkill(queryTokens, skill) {
	const hay = tokenize(`${skill.name} ${skill.description} ${skill.trigger} ${skill.tags.join(" ")} ${skill.category}`);
	const set = new Set(hay);
	let hits = 0;
	for (const t of queryTokens) if (set.has(t)) hits += 1;
	if (hits === 0) return 0;
	return hits / Math.sqrt(queryTokens.length + 1) + (skill.source === "builtin" ? .15 : 0);
}
/** Jcode-style lazy injection: only the skills that match this turn. */
function injectSkills(query, installed, k = 5) {
	const tokens = tokenize(query);
	if (tokens.length === 0) return installed.filter((s) => s.source === "builtin").slice(0, 3);
	return installed.map((skill) => ({
		skill,
		score: scoreSkill(tokens, skill)
	})).filter((x) => x.score > 0).sort((a, b) => b.score - a.score).slice(0, k).map((x) => x.skill);
}
function skillBlock(skills) {
	if (skills.length === 0) return "No extra skills matched this turn. Use core Jcode tools only.";
	return skills.map((s) => {
		const body = s.body ? `\n${s.body.slice(0, 900)}` : "";
		return `### ${s.name} (${s.repo})\n${s.description}${body}`;
	}).join("\n\n");
}
var STARTERS = [
	"Convert MiniCPM5-2B for TPU",
	"How does the Jcode loop inject skills?",
	"Sketch the on-device architecture",
	"What can Archify draw for this app?"
];
function nid() {
	return `m-${Math.random().toString(36).slice(2, 10)}`;
}
function ChatView({ accelerator }) {
	const messages = useSable((s) => s.messages);
	const busy = useSable((s) => s.busy);
	const error = useSable((s) => s.error);
	const think = useSable((s) => s.think);
	const setThink = useSable((s) => s.setThink);
	const [draft, setDraft] = import_react.useState("");
	const scroller = import_react.useRef(null);
	import_react.useEffect(() => {
		scroller.current?.scrollTo({
			top: scroller.current.scrollHeight,
			behavior: "smooth"
		});
	}, [messages.length, busy]);
	async function send(text) {
		const trimmed = text.trim();
		if (!trimmed || useSable.getState().busy) return;
		setDraft("");
		const userMsg = {
			id: nid(),
			role: "user",
			content: trimmed,
			createdAt: Date.now()
		};
		useSable.getState().addMessage(userMsg);
		useSable.getState().setBusy(true);
		useSable.getState().setError(null);
		const state = useSable.getState();
		const installed = state.installed();
		const hits = injectSkills(trimmed, installed, 5);
		const history = state.messages.filter((m) => m.id !== "m-welcome").map((m) => ({
			role: m.role,
			content: m.content
		}));
		try {
			const res = await runSableTurn({ data: {
				messages: history,
				think: state.think,
				skillBlock: skillBlock(hits),
				skillNames: installed.map((s) => s.name),
				accelerator,
				artifact: state.job.artifact ? `${state.job.artifact.file} · ${state.job.artifact.format}` : null,
				memories: state.memories.slice(-12).map((m) => `[${m.kind}] ${m.text}`)
			} });
			if (!res.ok) {
				useSable.getState().setError(res.error);
				useSable.getState().addMessage({
					id: nid(),
					role: "assistant",
					content: res.error,
					createdAt: Date.now()
				});
			} else {
				useSable.getState().addMessage({
					id: nid(),
					role: "assistant",
					content: res.content,
					thinking: res.thinking,
					skillHits: hits.map((s) => s.name),
					accelerator,
					createdAt: Date.now()
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: scroller,
			className: "min-h-0 flex-1 overflow-y-auto px-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mb-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted",
							children: "On-device · MiniCPM5-2B"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-1 text-[28px] font-medium leading-tight tracking-[-0.03em]",
							children: "Sable"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 max-w-[34ch] text-[13px] leading-relaxed text-muted",
							children: "Self-hosted assistant. Jcode harness. Skills from the open list. TPU first."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "space-y-4",
					children: [messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: cn("flex", m.role === "user" ? "justify-end" : "justify-start"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("max-w-[92%] rounded-[var(--radius-lg)] px-3.5 py-2.5", m.role === "user" ? "rounded-br-sm bg-primary text-primary-fg" : "rounded-bl-sm bg-surface-2 shadow-[var(--shadow-border)]"),
							children: [
								m.thinking ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
									className: "mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
										className: "cursor-pointer font-mono text-[10px] uppercase tracking-wide text-muted",
										children: "Think"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 whitespace-pre-wrap text-[12px] leading-relaxed text-muted",
										children: m.thinking
									})]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageBody, {
									text: m.content,
									className: m.role === "user" ? "text-primary-fg [&_pre]:bg-primary-fg/10 [&_pre]:text-primary-fg" : void 0
								}),
								m.skillHits && m.skillHits.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-mono text-[10px] uppercase tracking-wide text-muted",
									children: m.skillHits.join(" · ")
								}) : null
							]
						})
					}, m.id)), busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2 text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] uppercase tracking-wide",
							children: "Prefill · decode"
						})]
					}) : null]
				}),
				messages.length <= 1 && !busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid grid-cols-1 gap-2",
					children: STARTERS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => send(s),
						className: "rounded-[var(--radius-md)] bg-surface-2 px-3 py-3 text-left text-[13px] text-fg shadow-[var(--shadow-border)] transition-colors hover:bg-surface-2/70",
						children: s
					}, s))
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "border-t border-border bg-surface p-3",
			onSubmit: (e) => {
				e.preventDefault();
				send(draft);
			},
			children: [error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs text-danger",
				children: error
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1 rounded-[var(--radius-lg)] bg-surface-2 p-1 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: draft,
						onChange: (e) => setDraft(e.target.value),
						onKeyDown: (e) => {
							if (e.key === "Enter" && !e.shiftKey) {
								e.preventDefault();
								send(draft);
							}
						},
						rows: 2,
						placeholder: "Message Sable",
						className: "max-h-28 min-h-11 w-full resize-none bg-transparent px-3 py-2.5 text-sm text-fg outline-none placeholder:text-muted"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-2 pb-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setThink(!think),
							className: cn("h-8 rounded-full px-3 font-mono text-[10px] uppercase tracking-wide", think ? "bg-primary/15 text-primary" : "text-muted"),
							children: ["Think ", think ? "on" : "off"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] text-muted",
							children: accelerator.toUpperCase()
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "icon",
					disabled: busy || !draft.trim(),
					"aria-label": "Send",
					children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SendHorizontal, { className: "size-4" })
				})]
			})]
		})]
	});
}
var Input = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
	ref,
	className: cn("h-11 w-full rounded-[var(--radius-md)] bg-surface-2 px-3 text-sm text-fg placeholder:text-muted", "shadow-[var(--shadow-border)] outline-none focus-visible:ring-2 focus-visible:ring-primary/40", className),
	...props
}));
Input.displayName = "Input";
var grabSkillFromGithub = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("1cf051f321140ac2a6c447bb8af8f9b1468b7b1760118abd0e81b198d8ede8a2"));
var FILTERS = [
	"all",
	"harness",
	"memory",
	"swarm",
	"code",
	"research",
	"runtime",
	"android",
	"design",
	"security",
	"osint"
];
function SkillsView() {
	const installedIds = useSable((s) => s.installedIds);
	const toggleSkill = useSable((s) => s.toggleSkill);
	const installAll = useSable((s) => s.installAll);
	const grabUrl = useSable((s) => s.grabUrl);
	const setGrabUrl = useSable((s) => s.setGrabUrl);
	const grabBusy = useSable((s) => s.grabBusy);
	const grabError = useSable((s) => s.grabError);
	const grabbed = useSable((s) => s.grabbed);
	const skills = import_react.useMemo(() => {
		const ids = new Set(grabbed.map((g) => g.id));
		return [...SKILL_CATALOG.filter((s) => !ids.has(s.id)), ...grabbed];
	}, [grabbed]);
	const [q, setQ] = import_react.useState("");
	const [cat, setCat] = import_react.useState("all");
	const filtered = skills.filter((s) => {
		if (cat !== "all" && s.category !== cat) return false;
		if (!q.trim()) return true;
		return `${s.name} ${s.repo} ${s.description} ${s.tags.join(" ")}`.toLowerCase().includes(q.toLowerCase());
	});
	async function grab() {
		const url = grabUrl.trim();
		if (!url) return;
		useSable.getState().setGrabBusy(true);
		useSable.getState().setGrabError(null);
		try {
			const res = await grabSkillFromGithub({ data: { url } });
			if (!res.ok) useSable.getState().setGrabError(res.error);
			else {
				useSable.getState().addGrabbed(res.skill);
				useSable.getState().setGrabUrl("");
			}
		} catch {
			useSable.getState().setGrabError("Could not reach GitHub.");
		} finally {
			useSable.getState().setGrabBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-4 pt-3 pb-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted",
					children: "Open list · GitHub"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 text-xl font-medium tracking-[-0.02em]",
					children: "Skills"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[13px] leading-relaxed text-muted",
					children: "Jcode injects only the skills that match the turn. Grab any repo that ships SKILL.md."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-3 flex gap-2",
					onSubmit: (e) => {
						e.preventDefault();
						grab();
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: grabUrl,
						onChange: (e) => setGrabUrl(e.target.value),
						placeholder: "github.com/owner/repo",
						"aria-label": "GitHub skill URL"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "icon",
						disabled: grabBusy,
						"aria-label": "Grab skill",
						children: grabBusy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" })
					})]
				}),
				grabError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-danger",
					children: grabError
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-3.5 left-3 size-4 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Filter",
						className: "pl-9"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-nowrap gap-1.5 overflow-x-auto pb-1",
					children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCat(f),
						className: cn("h-8 shrink-0 rounded-full px-3 font-mono text-[10px] uppercase tracking-wide", cat === f ? "bg-primary text-primary-fg" : "bg-surface-2 text-muted"),
						children: f === "all" ? "All" : CATEGORY_LABEL[f]
					}, f))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[10px] uppercase tracking-wide text-muted",
						children: [
							installedIds.length,
							" installed · ",
							filtered.length,
							" shown"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: installAll,
						children: "Install open list"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "min-h-0 flex-1 overflow-y-auto px-4 pb-4",
			children: filtered.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillRow, {
				skill: s,
				on: installedIds.includes(s.id),
				onToggle: () => toggleSkill(s.id)
			}, s.id))
		})]
	});
}
function SkillRow({ skill, on, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		className: "mb-2 rounded-[var(--radius-lg)] bg-surface-2 p-3 shadow-[var(--shadow-border)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-medium",
							children: skill.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: skill.source === "grabbed" ? "primary" : "neutral",
							children: skill.source === "grabbed" ? "Grabbed" : CATEGORY_LABEL[skill.category]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 font-mono text-[10px] text-muted",
						children: skill.repo
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-[12.5px] leading-relaxed text-muted",
						children: skill.description
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				role: "switch",
				"aria-checked": on,
				onClick: onToggle,
				className: cn("relative mt-0.5 h-7 w-12 shrink-0 rounded-full transition-colors", on ? "bg-primary" : "bg-bg shadow-[var(--shadow-border)]"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute top-0.5 size-6 rounded-full bg-fg transition-transform", on ? "translate-x-[22px]" : "translate-x-0.5") })
			})]
		})
	});
}
function RuntimeView({ accelerator }) {
	const probe = useSable((s) => s.probe);
	const preferred = useSable((s) => s.preferred);
	const setPreferred = useSable((s) => s.setPreferred);
	const job = useSable((s) => s.job);
	import_react.useEffect(() => {
		if (job.status !== "running") return;
		const t = window.setTimeout(() => useSable.getState().advanceJob(), 520);
		return () => window.clearTimeout(t);
	}, [job.status, job.stageIndex]);
	function convert() {
		const p = useSable.getState().probe;
		const target = pickTarget(preferred, {
			tpu: Boolean(p?.tpu.present),
			gpu: Boolean(p?.gpu.present)
		});
		const locked = preferred === "tpu" ? "tpu" : target;
		useSable.getState().startJob(locked);
	}
	const recipe = recipeFor(preferred);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted",
				children: "LiteRT · NNAPI · GGUF"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 text-xl font-medium tracking-[-0.02em]",
				children: "Runtime"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-[13px] leading-relaxed text-muted",
				children: "Priority is TPU, then GPU, then CPU. Convert MiniCPM5-2B once; Sable stores the matching artifact."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 space-y-2",
				children: [
					"tpu",
					"gpu",
					"cpu"
				].map((id, i) => {
					const info = probe?.[id];
					const active = accelerator === id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setPreferred(id),
						className: cn("flex w-full items-start gap-3 rounded-[var(--radius-lg)] p-3 text-left shadow-[var(--shadow-border)]", preferred === id ? "bg-surface-2" : "bg-bg"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-9 items-center justify-center rounded-[var(--radius-sm)] bg-surface",
							children: id === "tpu" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-4 text-tpu" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: cn("size-4", id === "gpu" ? "text-gpu" : "text-cpu") })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] text-muted",
											children: i + 1
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-medium",
											children: acceleratorLabel(id)
										}),
										active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: id,
											children: "Live"
										}) : null,
										info?.present ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: "ok",
											children: "Present"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Absent here" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block text-[12px] text-muted",
									children: info?.label ?? "Probing…"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-[12px] leading-relaxed text-muted",
									children: info?.detail
								})
							]
						})]
					}) }, id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-5 rounded-[var(--radius-xl)] bg-surface-2 p-4 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-medium",
								children: "Auto-quantize"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-mono text-[11px] text-muted",
								children: recipe.file
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[12.5px] leading-relaxed text-muted",
								children: recipe.recipe
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: preferred,
							children: recipe.sizeLabel
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-4 w-full",
						onClick: convert,
						disabled: job.status === "running",
						children: job.status === "running" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), "Converting"] }) : job.status === "done" ? "Reconvert" : `Convert for ${acceleratorLabel(preferred)}`
					}),
					probe?.previewHost && preferred === "tpu" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[11px] leading-relaxed text-muted",
						children: "This preview host has no Tensor / HTP / APU. Sable still writes the TPU artifact so the Android build AOT-compiles on Pixel Tensor and Snapdragon HTP."
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 space-y-2 pb-4",
				children: job.stages.map((stage, i) => {
					const done = job.stageIndex > i || job.status === "done";
					const current = job.status === "running" && job.stageIndex === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("mt-0.5 size-2.5 shrink-0 rounded-full", done ? "bg-primary" : current ? "bg-primary/50" : "bg-border") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[13px] font-medium",
							children: stage.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[12px] leading-relaxed text-muted",
							children: stage.detail
						})] })]
					}, stage.name);
				})
			}),
			job.artifact ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-4 rounded-[var(--radius-md)] bg-primary/10 px-3 py-2 text-[12px] text-primary",
				children: [
					"Ready · ",
					job.artifact.file,
					" · ",
					job.artifact.compiledFor
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-6 rounded-[var(--radius-lg)] bg-surface-2 p-3 text-[12px] leading-relaxed text-muted shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-medium text-fg",
					children: "Android toolchain"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1",
					children: "Circuit Presenter / UI / Screen. Foundry Gradle. Keeper R8 keep rules for LiteRT JNI and NNAPI delegates. Compose lints on the native module."
				})]
			})
		]
	});
}
function MemoryView() {
	const memories = useSable((s) => s.memories);
	const swarm = useSable((s) => s.swarm);
	const [note, setNote] = import_react.useState("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted",
				children: "Jcode graph · Swarm"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 text-xl font-medium tracking-[-0.02em]",
				children: "Memory"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-[13px] leading-relaxed text-muted",
				children: "Semantic nodes inject when they overlap the turn. Swarm stays hub-and-spoke: Architect, Specialist, Reviewer."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-4 flex gap-2",
				onSubmit: (e) => {
					e.preventDefault();
					const t = note.trim();
					if (!t) return;
					useSable.getState().remember(t, "preference");
					setNote("");
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: note,
					onChange: (e) => setNote(e.target.value),
					placeholder: "Store a preference"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					variant: "secondary",
					children: "Keep"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2",
				children: memories.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-sm text-muted",
					children: "Empty graph. Facts land here when you ask Sable to remember."
				}) : memories.slice().reverse().map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start justify-between gap-2 rounded-[var(--radius-lg)] bg-surface-2 p-3 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "neutral",
						children: m.kind
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-[13px] leading-relaxed",
						children: m.text
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Forget",
						onClick: () => useSable.getState().forget(m.id),
						className: "flex size-10 items-center justify-center text-muted hover:text-fg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
					})]
				}, m.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-6 text-sm font-medium",
				children: "Swarm"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-2 pb-4",
				children: swarm.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-[var(--radius-lg)] bg-surface-2 p-3 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: a.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: a.status })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[12px] text-muted",
							children: a.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-mono text-[11px] text-muted",
							children: a.last
						})
					]
				}, a.id))
			})
		]
	});
}
function StudioPanel({ accelerator }) {
	const job = useSable((s) => s.job);
	const installedIds = useSable((s) => s.installedIds);
	const probe = useSable((s) => s.probe);
	const messages = useSable((s) => s.messages);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: "hidden min-h-0 flex-1 flex-col overflow-hidden lg:flex",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full flex-col gap-4 p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted",
						children: "Studio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 text-2xl font-medium tracking-[-0.03em]",
						children: "On-device control plane"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-[46ch] text-sm leading-relaxed text-muted",
						children: "MiniCPM5-2B through Jcode. Same Circuit screens as the Android build. This pane is the desktop companion; the handset is the product."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid grid-cols-3 gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Accelerator",
							value: acceleratorLabel(accelerator)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Skills on",
							value: String(installedIds.length)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Turns",
							value: String(Math.max(0, messages.length - 1))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "min-h-0 flex-1 overflow-hidden rounded-[var(--radius-xl)] bg-surface p-4 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-medium",
							children: "Conversion log"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: job.status === "done" ? "ok" : job.status === "running" ? "primary" : "neutral",
							children: job.status
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-3 max-h-full space-y-1.5 overflow-y-auto font-mono text-[11px] leading-relaxed text-muted",
						children: job.log.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Idle. Convert from Runtime to emit LiteRT / GGUF." }) : job.log.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-[var(--radius-xl)] bg-surface p-4 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-medium",
							children: "Jcode harness"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-2 grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-[11px] text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Baseline RAM 27.8 MB" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Boot 14 ms" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Skill inject lazy" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Swarm hub-spoke" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Context 131k" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Think hybrid" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[12px] leading-relaxed text-muted",
							children: probe?.previewHost ? "Preview inference uses the server path so the harness is usable without a 1.55 GB download. The Android artifact is MiniCPM5-2B LiteRT." : "On-device weights loaded."
						})
					]
				})
			]
		})
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[var(--radius-lg)] bg-surface px-3 py-3 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "font-mono text-[10px] uppercase tracking-wide text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 text-lg font-medium tracking-tight",
			children: value
		})]
	});
}
function AppShell() {
	const [ready, setReady] = import_react.useState(false);
	const tab = useSable((s) => s.tab);
	const probe = useSable((s) => s.probe);
	const job = useSable((s) => s.job);
	const preferred = useSable((s) => s.preferred);
	import_react.useEffect(() => {
		Promise.resolve(useSable.persist.rehydrate()).finally(() => setReady(true));
	}, []);
	import_react.useEffect(() => {
		if (!ready) return;
		probeAccelerators().then((p) => useSable.getState().setProbe(p));
	}, [ready]);
	const accelerator = job.artifact?.accelerator ?? probe?.chosen ?? preferred;
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-bg text-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-xs uppercase tracking-[0.2em]",
			children: "Sable"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-dvh max-w-[1280px] items-stretch lg:gap-8 lg:px-8 lg:py-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex min-h-dvh w-full justify-center lg:min-h-0 lg:w-[420px] lg:shrink-0 lg:py-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-dvh w-full max-w-[430px] flex-col bg-surface lg:h-[min(844px,calc(100dvh-4rem))] lg:rounded-[var(--radius-3xl)] lg:p-3 lg:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_40px_80px_-40px_rgba(0,0,0,0.7)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-h-0 flex-1 flex-col overflow-hidden bg-bg lg:rounded-[calc(var(--radius-3xl)-12px)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBar, { accelerator }),
							tab === "chat" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatView, { accelerator }) : null,
							tab === "skills" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsView, {}) : null,
							tab === "runtime" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RuntimeView, { accelerator }) : null,
							tab === "memory" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemoryView, {}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
						]
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioPanel, { accelerator })]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {});
}
//#endregion
export { Home as component };
