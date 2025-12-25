import { Cards, ProjectListKeys, SkillData, SkillKey, SkillSectionData, SkillSectionKey } from "./types";

export const SKILLS: Record<SkillKey, SkillData> = {
  "nextjs": {
    name: 'Next.js',
    features: [
      'App Router',
      'Server Components',
      'API Routes',
      'SSR / Data Fetching'
    ],
    projects: [
      {
        name: 'Todos Tracker',
        summary: '쿠키 기반 상태 관리 및 Prisma 연동'
      },
      {
        name: 'Portfolio Landing',
        summary: 'App Router 기반 구조 설계'
      }
    ]
  },
  "react": {
    name: 'React',
    features: [
      'App Router',
      'Server Components',
      'API Routes',
      'SSR / Data Fetching'
    ],
    projects: [
      {
        name: 'Todos Tracker',
        summary: '쿠키 기반 상태 관리 및 Prisma 연동'
      },
      {
        name: 'Portfolio Landing',
        summary: 'App Router 기반 구조 설계'
      }
    ]
  },
  "tailwind": {
    name: 'TailwindCSS',
    features: [
      'App Router',
      'Server Components',
      'API Routes',
      'SSR / Data Fetching'
    ],
    projects: [
      {
        name: 'Todos Tracker',
        summary: '쿠키 기반 상태 관리 및 Prisma 연동'
      },
      {
        name: 'Portfolio Landing',
        summary: 'App Router 기반 구조 설계'
      }
    ]
  },
  "typescript": {
    name: 'Typescript',
    features: [
      'App Router',
      'Server Components',
      'API Routes',
      'SSR / Data Fetching'
    ],
    projects: [
      {
        name: 'Todos Tracker',
        summary: '쿠키 기반 상태 관리 및 Prisma 연동'
      },
      {
        name: 'Portfolio Landing',
        summary: 'App Router 기반 구조 설계'
      }
    ]
  },
  "prisma": {
    name: 'Prisma',
    features: [
      'App Router',
      'Server Components',
      'API Routes',
      'SSR / Data Fetching'
    ],
    projects: [
      {
        name: 'Todos Tracker',
        summary: '쿠키 기반 상태 관리 및 Prisma 연동'
      },
      {
        name: 'Portfolio Landing',
        summary: 'App Router 기반 구조 설계'
      }
    ]
  },
  "vue": {
    name: 'Vue.js',
    features: [
      'App Router',
      'Server Components',
      'API Routes',
      'SSR / Data Fetching'
    ],
    projects: [
      {
        name: 'Todos Tracker',
        summary: '쿠키 기반 상태 관리 및 Prisma 연동'
      },
      {
        name: 'Portfolio Landing',
        summary: 'App Router 기반 구조 설계'
      }
    ]
  },
  "php": {
    name: 'PHP',
    features: [
      'App Router',
      'Server Components',
      'API Routes',
      'SSR / Data Fetching'
    ],
    projects: [
      {
        name: 'Todos Tracker',
        summary: '쿠키 기반 상태 관리 및 Prisma 연동'
      },
      {
        name: 'Portfolio Landing',
        summary: 'App Router 기반 구조 설계'
      }
    ]
  },
  "mysql": {
    name: 'MySQL',
    features: [
      'App Router',
      'Server Components',
      'API Routes',
      'SSR / Data Fetching'
    ],
    projects: [
      {
        name: 'Todos Tracker',
        summary: '쿠키 기반 상태 관리 및 Prisma 연동'
      },
      {
        name: 'Portfolio Landing',
        summary: 'App Router 기반 구조 설계'
      }
    ]
  },
  "python": {
    name: 'Python',
    features: [
      'App Router',
      'Server Components',
      'API Routes',
      'SSR / Data Fetching'
    ],
    projects: [
      {
        name: 'Todos Tracker',
        summary: '쿠키 기반 상태 관리 및 Prisma 연동'
      },
      {
        name: 'Portfolio Landing',
        summary: 'App Router 기반 구조 설계'
      }
    ]
  },
  "reactnative": {
    name: 'React Native',
    features: [
      'App Router',
      'Server Components',
      'API Routes',
      'SSR / Data Fetching'
    ],
    projects: [
      {
        name: 'Todos Tracker',
        summary: '쿠키 기반 상태 관리 및 Prisma 연동'
      },
      {
        name: 'Portfolio Landing',
        summary: 'App Router 기반 구조 설계'
      }
    ]
  },
  "swiftui": {
    name: 'Swift UI',
    features: [
      'App Router',
      'Server Components',
      'API Routes',
      'SSR / Data Fetching'
    ],
    projects: [
      {
        name: 'Todos Tracker',
        summary: '쿠키 기반 상태 관리 및 Prisma 연동'
      },
      {
        name: 'Portfolio Landing',
        summary: 'App Router 기반 구조 설계'
      }
    ]
  },

};

export const SKILL_SECTIONS: Record<SkillSectionKey, SkillSectionData> = {
  "CURRENT_SKILLS": {
    name: "현재 집중",
    skills: [
      "nextjs",
      "react",
      "tailwind",
      "prisma",
      "typescript"
    ] as const satisfies readonly SkillKey[]
  },
  "EXPERIENCE_SKILLS": {
    name: "실무경험",
    skills: [
      "vue",
      "php",
      "mysql",
    ] as const satisfies readonly SkillKey[]
  },
  "STUDYING_SKILLS": {
    name: "학습중",
    skills: [
      "python",
      "swiftui"
    ] as const satisfies readonly SkillKey[]
  },
  "INTEREST_SKILLS": {
    name: "관심 기술",
    skills: [
      "reactnative"
    ] as const satisfies readonly SkillKey[]
  },
}

export const SKILL_SECTIONS_KEY = [
  "CURRENT_SKILLS"
  , "EXPERIENCE_SKILLS"
  , "STUDYING_SKILLS"
  , "INTEREST_SKILLS"
] as const satisfies readonly SkillSectionKey[]