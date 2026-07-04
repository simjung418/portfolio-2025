import { SkillData, SkillKey, SkillSectionData, SkillSectionKey } from "@/lib/portfolio/skills";

export const SKILLS: Record<SkillKey, SkillData> = {
  react: {
    name: "React",
    icon: "react.svg",
    percent: 100
  },
  nextjs: {
    name: "Next.js",
    icon: "nextjs.png",
    percent: 100
  },
  typescript: {
    name: "TypeScript",
    icon: "ts.png",
    percent: 100
  },

  tailwind: {
    name: "Tailwind CSS",
    icon: "tailwind.svg",
    percent: 100
  },
  vue: {
    name: "Vue.js",
    icon: "vue.png",
    percent: 100
  },
  php: {
    name: "PHP",
    icon: "php.png",
    percent: 100
  },
  mysql: {
    name: "MySQL",
    icon: "mysql.png",
    percent: 100
  },
  prisma: {
    name: "Prisma",
    icon: "prisma.png",
    percent: 50
  },
  python: {
    name: "Python",
    icon: "python.png",
    percent: 70
  },
  swiftui: {
    name: "SwiftUI",
    icon: "swift.svg",
    percent: 10
  },
  rn: {
    name: "React Native",
    icon: "rn.svg",
    percent: 0
  },
  figma: {
    name: "Figma",
    icon: "figma.png",
    percent: 100
  },
  chatgpt: {
    name: "Chat GPT",
    icon: "gpt.svg",
    percent: 100
  },
  notion: {
    name: "Notion",
    icon: "notion.svg",
    percent: 100
  },
  git: {
    name: "GitHub",
    icon: "github.svg",
    percent: 100
  },
  cursor: {
    name: "Cursor",
    icon: "cursor.png",
    percent: 100
  },
  apple: {
    name: "Apple Devices",
    icon: "apple.png",
    percent: 100
  },
  websocket: {
    name: "WebSocket",
    icon: "websocket.png",
    percent: 100
  },
  fastapi: {
    name: "Fast API",
    icon: "fastapi.png",
    percent: 80
  },
  axios: {
    name: "Axios",
    icon: "axios.svg",
    percent: 100
  }
};

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
