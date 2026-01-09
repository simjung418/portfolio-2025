import { ReactNode } from "react";

export interface Todo {
  id: number;
  label: string;
  isDone: boolean;
  isRoutine: boolean;
  isEditing: boolean;
  status?: string;
}

export interface TodoInputProps {
  initialValue?: string;
  onSubmit: (value: string) => void;
  onCancel?: () => void;
}

export type SkillKey =
  | 'nextjs'
  | 'typescript'
  | 'tailwind'
  | 'prisma'
  | 'vue'
  | 'php'
  | 'mysql'
  | 'python'
  | 'appdevelop';

export type SkillData = {
  name: string;
  subtext?: string;
  features: string[];
  projects?: {
    name: string;
    summary: string;
  }[];
}

export const SKILL_SECTION_KEYS = [
  "CURRENT_SKILLS"
  , "EXPERIENCE_SKILLS"
  , "STUDYING_SKILLS"
  , "INTEREST_SKILLS"
] as const

export type SkillSectionKey = typeof SKILL_SECTION_KEYS[number]

export type SkillSectionData = {
  name: string;
  skills: readonly SkillKey[];
}

export const PROJECT_LIST = [
  "todos"
  , "portfolio"
  , "wotd"
] as const

export type ProjectListKeys = typeof PROJECT_LIST[number]

export const PROJECT_STATUSES = [
  "PROCESSING"
  , "UPCOMING"
] as const

export type ProjectStatus = typeof PROJECT_STATUSES[number]

export type BaseCards = {
  title: string;
  desc: ReactNode;
  tech?: string[];
  status?: ProjectStatus;
} // 기본 카드정보 설정

export type Cards<TDetail = ReactNode> = BaseCards & { detail?: TDetail } // 제네릭을 이용하여 옵션정보 설정

export type CareerDetail = {
  challenge: ReactNode,
  action: ReactNode,
  result: ReactNode,
} // 부가옵션 경우의 수 설정

export const CAREER_LIST = [
  "bisat2",
  "iso",
  "deepread2",
  "lexcloud",
  "metafield",
  "bavl",
  "platform",
  "l10n",
] as const

export type CareerListKeys = typeof CAREER_LIST[number]