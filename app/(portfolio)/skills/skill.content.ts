import { SkillSectionData, SkillSectionKey } from "@/lib/portfolio/skills";

export const SKILL_SECTIONS: Record<SkillSectionKey, SkillSectionData> = {
  CURRENT_SKILLS: {
    name: "현재 집중",
    skills: ["react", "nextjs", "tailwind", "typescript"] as const
  },
  EXPERIENCE_SKILLS: {
    name: "실무 경험",
    skills: ["vue", "php", "mysql", "websocket", "axios", "fastapi"] as const
  },
  TOOLS: {
    name: "사용가능 툴",
    skills: ["figma", "chatgpt", "apple", "notion", "git", "cursor"] as const
  },
  STUDYING_SKILLS: {
    name: "학습중",
    skills: ["prisma", "python"] as const
  },
  INTEREST_SKILLS: {
    name: "관심 기술",
    skills: ["swiftui", "rn"] as const
  }
};

export const SKILL_SECTION_KEYS = [
  "CURRENT_SKILLS",
  "EXPERIENCE_SKILLS",
  "TOOLS",
  "STUDYING_SKILLS",
  "INTEREST_SKILLS"
] as const satisfies readonly SkillSectionKey[];
