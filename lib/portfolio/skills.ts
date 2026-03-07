import { ReactNode } from "react";

export const SKILL_KEYS = [
  "nextjs"
  , "typescript"
  , "tailwind"
  , "vue"
  , "php"
  , "mysql"
  , "prisma"
  , "python"
  , "appdevelop"
] as const;

export type SkillKey = (typeof SKILL_KEYS)[number];

export type SkillData = {
  name: string;
  icon: string | ReactNode;
  subtext?: string;
  features: string[];
  projects?: {
    name: string;
    summary: string;
    path?: string;
  }[];
};

export const SKILL_SECTION_KEYS = [
  "CURRENT_SKILLS",
  "EXPERIENCE_SKILLS",
  "STUDYING_SKILLS",
  "INTEREST_SKILLS",
] as const;

export type SkillSectionKey = (typeof SKILL_SECTION_KEYS)[number];

export type SkillSectionData = {
  name: string;
  skills: readonly SkillKey[];
};