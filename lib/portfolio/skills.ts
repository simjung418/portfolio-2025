import { ReactNode } from "react";

export const SKILL_KEYS = [
  "react",
  "nextjs",
  "typescript",
  "tailwind",
  "vue",
  "php",
  "mysql",
  "prisma",
  "python",
  "figma",
  "chatgpt",
  "apple",
  "notion",
  "git",
  "cursor",
  "swiftui",
  "rn",
  "websocket",
  "fastapi",
  "axios"
] as const;

export type SkillKey = (typeof SKILL_KEYS)[number];

export type SkillData = {
  name: string;
  icon: string | ReactNode;
  percent: number;
  subtext?: string;
  projects?: {
    name: string;
    summary: string;
    path?: string;
  }[];
};

export const SKILL_SECTION_KEYS = [
  "CURRENT_SKILLS",
  "EXPERIENCE_SKILLS",
  "TOOLS",
  "STUDYING_SKILLS",
  "INTEREST_SKILLS"
] as const;

export type SkillSectionKey = (typeof SKILL_SECTION_KEYS)[number];

export type SkillSectionData = {
  name: string;
  skills: readonly SkillKey[];
};
