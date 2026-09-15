import { t as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-A6pJPYTF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/grab-nBy8iGwC.js
var PATHS = [
	"SKILL.md",
	"skill.md",
	"SKILL.MD",
	"skills/SKILL.md",
	".agents/SKILL.md",
	"agents/SKILL.md",
	"AGENTS.md",
	"README.md"
];
function parseGithub(input) {
	const trimmed = input.trim().replace(/\.git$/, "");
	const short = trimmed.match(/^([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)$/);
	if (short) return {
		owner: short[1],
		repo: short[2]
	};
	try {
		const u = new URL(trimmed);
		if (!/github\.com$/i.test(u.hostname)) return null;
		const parts = u.pathname.split("/").filter(Boolean);
		if (parts.length < 2) return null;
		const owner = parts[0];
		const repo = parts[1].replace(/\.git$/, "");
		if (parts[2] === "blob" && parts.length >= 5) return {
			owner,
			repo,
			ref: parts[3],
			file: parts.slice(4).join("/")
		};
		if (parts[2] === "tree" && parts.length >= 4) return {
			owner,
			repo,
			ref: parts[3]
		};
		return {
			owner,
			repo
		};
	} catch {
		return null;
	}
}
function parseFrontmatter(text) {
	if (!text.startsWith("---")) return { body: text };
	const end = text.indexOf("\n---", 3);
	if (end < 0) return { body: text };
	const fm = text.slice(3, end);
	const body = text.slice(end + 4).trim();
	return {
		name: fm.match(/^name:\s*["']?(.+?)["']?\s*$/m)?.[1],
		description: fm.match(/^description:\s*["']?(.+?)["']?\s*$/m)?.[1],
		body
	};
}
function guessCategory(text) {
	const t = text.toLowerCase();
	if (/(android|compose|kotlin|gradle)/.test(t)) return "android";
	if (/(osint|recon|threat)/.test(t)) return "osint";
	if (/(security|pentest|reverse)/.test(t)) return "security";
	if (/(swarm|multi-agent|orchestr)/.test(t)) return "swarm";
	if (/(memory|context|rag)/.test(t)) return "memory";
	if (/(quant|tokenizer|runtime|gpu|tpu)/.test(t)) return "runtime";
	if (/(ui|design|diagram|canvas)/.test(t)) return "design";
	if (/(arxiv|research|search|crawl)/.test(t)) return "research";
	if (/(code|repo|patch|lsp)/.test(t)) return "code";
	return "harness";
}
async function fetchRaw(url) {
	try {
		const res = await fetch(url, { headers: {
			Accept: "text/plain",
			"User-Agent": "sable-skill-grab"
		} });
		if (!res.ok) return null;
		const text = await res.text();
		if (!text || text.length < 40) return null;
		if (text.startsWith("<!DOCTYPE") || text.startsWith("<html")) return null;
		return text;
	} catch {
		return null;
	}
}
var grabSkillFromGithub_createServerFn_handler = createServerRpc({
	id: "1cf051f321140ac2a6c447bb8af8f9b1468b7b1760118abd0e81b198d8ede8a2",
	name: "grabSkillFromGithub",
	filename: "src/lib/server/grab.ts"
}, (opts) => grabSkillFromGithub.__executeServer(opts));
var grabSkillFromGithub = createServerFn({ method: "POST" }).validator((input) => input).handler(grabSkillFromGithub_createServerFn_handler, async ({ data }) => {
	const parsed = parseGithub(data.url);
	if (!parsed) return {
		ok: false,
		error: "Need a GitHub URL or owner/repo."
	};
	const refs = parsed.ref ? [parsed.ref, "HEAD"] : [
		"HEAD",
		"main",
		"master"
	];
	const files = parsed.file ? [parsed.file, ...PATHS] : PATHS;
	let text = null;
	let used = "";
	outer: for (const ref of refs) for (const file of files) {
		text = await fetchRaw(`https://raw.githubusercontent.com/${parsed.owner}/${parsed.repo}/${ref}/${file}`);
		if (text) {
			used = file;
			break outer;
		}
	}
	if (!text) return {
		ok: false,
		error: `No SKILL.md (or README) found in ${parsed.owner}/${parsed.repo}.`
	};
	const fm = parseFrontmatter(text);
	const repo = `${parsed.owner}/${parsed.repo}`;
	const name = fm.name?.trim() || parsed.repo;
	const description = fm.description?.trim() || fm.body.split("\n").find((l) => l.trim() && !l.startsWith("#") && !l.startsWith("["))?.slice(0, 220) || `Grabbed skill from ${repo}`;
	const body = fm.body.slice(0, 8e3);
	return {
		ok: true,
		skill: {
			id: `grab-${parsed.owner}-${parsed.repo}`.toLowerCase(),
			name,
			repo,
			description,
			category: guessCategory(`${name} ${description} ${body}`),
			tags: [used.replace(/\.md$/i, "").toLowerCase(), parsed.owner.toLowerCase()],
			trigger: `${name} ${description}`.toLowerCase(),
			source: "grabbed",
			body
		},
		file: used
	};
});
//#endregion
export { grabSkillFromGithub_createServerFn_handler };
