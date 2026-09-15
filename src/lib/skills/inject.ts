import type { Skill } from "@/lib/types";

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^a-z0-9+]+/g)
    .filter((t) => t.length > 2);
}

function scoreSkill(queryTokens: string[], skill: Skill): number {
  const hay = tokenize(`${skill.name} ${skill.description} ${skill.trigger} ${skill.tags.join(" ")} ${skill.category}`);
  const set = new Set(hay);
  let hits = 0;
  for (const t of queryTokens) {
    if (set.has(t)) hits += 1;
  }
  if (hits === 0) return 0;
  return hits / Math.sqrt(queryTokens.length + 1) + (skill.source === "builtin" ? 0.15 : 0);
}

/** Jcode-style lazy injection: only the skills that match this turn. */
export function injectSkills(query: string, installed: Skill[], k = 5): Skill[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return installed.filter((s) => s.source === "builtin").slice(0, 3);
  return installed
    .map((skill) => ({ skill, score: scoreSkill(tokens, skill) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, k)
    .map((x) => x.skill);
}

export function skillBlock(skills: Skill[]): string {
  if (skills.length === 0) return "No extra skills matched this turn. Use core Jcode tools only.";
  return skills
    .map((s) => {
      const body = s.body ? `\n${s.body.slice(0, 900)}` : "";
      return `### ${s.name} (${s.repo})\n${s.description}${body}`;
    })
    .join("\n\n");
}
