import { ReactNode } from "react";

// pathname starts
export type LinkDetails = {
  title: string;
  h1: string;
};

export type RoutePath = "/" | "/about" | "/skills" | "/projects" | "/career";

export const ROUTES = {
  "/": {
    title: "Home",
    h1: "Home",
  },
  "/about": {
    title: "About",
    h1: "About me",
  },
  "/skills": {
    title: "Skills",
    h1: "Skills",
  },
  "/projects": {
    title: "Projects",
    h1: "Projects",
  },
  "/career": {
    title: "Career",
    h1: "Career",
  },
} as const satisfies Record<RoutePath, LinkDetails>;
// pathname ends

// todo starts
export interface Todo {
  id: number;
  label: string;
  isDone: boolean;
  isRoutine: boolean;
  isEditing: boolean;
}

export type TodoActions =
  | { type: "LOAD"; todos: Todo[] }
  | { type: "ADD"; initialTodo: Todo }
  | { type: "TOGGLE_DONE"; id: number }
  | { type: "TOGGLE_EDIT"; id: number }
  | { type: "TOGGLE_ROUTINE"; id: number }
  | { type: "UPDATE_LABEL"; id: number; label: string };

export type TodoStatusSource = Pick<Todo, "isDone" | "isRoutine">;

export type TodoStatus = "green" | "yellow" | "stone";
// todo ends

// skills starts
export type SkillKey =
  | "nextjs"
  | "typescript"
  | "tailwind"
  | "prisma"
  | "vue"
  | "php"
  | "mysql"
  | "python"
  | "appdevelop";

export type SkillData = {
  name: string;
  icon: string | ReactNode;
  subtext?: string;
  features: string[];
  projects?: {
    name: string;
    summary: string;
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
// skills ends

// projects starts
export const PROJECT_LIST = ["todos", "portfolio"/* , "api", "wotd" */] as const;

export type ProjectListKeys = (typeof PROJECT_LIST)[number];

export const PROJECT_STATUSES = ["PROCESSING", "UPCOMING"] as const;

export type ProjectStatus = (typeof PROJECT_STATUSES)[number];
// projects ends

// projects + career starts
export type BaseCards = {
  title: string;
  desc: ReactNode;
  tech?: string[];
  status?: ProjectStatus;
  imgs?: string[];
}; // 기본 카드정보 설정

export type ProjectCards = BaseCards & { cta: ReactNode };
export type CareerCards = BaseCards & {
  tabName?: string;
  detail: CareerDetail;
};

//제네릭 사용예 남겨두기
// export type Cards<TDetail = ReactNode> = BaseCards & { detail?: TDetail };
// // 제네릭을 이용하여 옵션정보 설정
// // 기본값 TDetail = ReactNode이다.
// // 제네릭이 기본값이면 detail?: ReactNode로 설정된다.
// // 제네릭에 다른 설정값이 들어가면 detail?: 다른 설정값으로 설정된다.
// // 여기서는 CareerDetail이 들어갔으니까 detail?: CareerDetail로 설정된다.

export type CareerDetail = {
  challenge: ReactNode;
  action: ReactNode;
  result: ReactNode;
}; // 부가옵션 경우의 수 설정

// projects + career ends

// career starts
export const CAREER_LIST = [
  "bisat2",
  "iso",
  "deepread2",
  "lexcloud",
  "metafield",
  "bavl",
  "platform",
  "l10n",
] as const;

export type CareerListKeys = (typeof CAREER_LIST)[number];
// career ends
