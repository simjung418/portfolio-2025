import { Cards, ProjectListKeys, SkillData, SkillKey, SkillSectionData, SkillSectionKey } from "./types";

export const SKILLS: Record<SkillKey, SkillData> = {
  nextjs: {
    name: "React / Next.js",
    subtext: "만인의 검증된 선택",
    features: [
      "npm 기반 생태계로 도구 도입·유지 비용 감소",
      "App Router 기반 페이지/레이아웃 설계",
      "기존 프레임워크의 구조적 이점을 더 일관된 규칙과 체계 안에서 유지",
      "공식 컨벤션, 라이브러리가 다양하여 팀 합류/인수인계 비용 감소",
      "컴포넌트/데이터 흐름을 구조적으로 정리하는 데 집중 가능"
    ],
    projects: [
      { name: "Todos Project", summary: "쿠키 저장 + useTodos 훅으로 상태/로직 분리" },
      { name: "Portfolio", summary: "섹션별 데이터 구조 설계" }
    ]
  },

  typescript: {
    name: "TypeScript",
    subtext: "코드로 남기는 설명서",
    features: [
      "초기 개발의 코드 규칙을 코드 레벨에서 고정",
      "구조 변경시 컴파일 단계에서 오류를 잡아 유지보수 리스크 감소",
      "as const + satisfies로 데이터/키 계약을 유지",
      "유지보수 시 타입이 코드 흐름을 이해하는데 유용"
    ],
    projects: [
      { name: "Portfolio", summary: "cards/detail 제네릭 설계 + section key 계약 유지" },
      { name: "Todos Project", summary: "상태/액션 타입을 명확히 두고 안정성 확보" }
    ]
  },

  tailwind: {
    name: "TailwindCSS",
    subtext: "디자인 반영이 또 하나의 구조가 되지 않도록",
    features: [
      // "타이포 중심 레이아웃(큰 타이틀/서브텍스트 리듬) 구성",
      "반응형 기준(sm/md/lg)으로 구조 먼저 잡고 디테일 조정",
      "컴포넌트 단위 클래스 패턴을 일정하게 유지",
      "hover/active 등 인터랙션을 ‘필요한 곳만’ 최소 적용",
      "커스텀 css 사용 최소화로 구조 단순화"
    ],
    projects: [
      { name: "Portfolio", summary: "섹션 공통 UI 패턴 통일 + 반응형 정리" },
      { name: "Todos Project", summary: "상태 색상/variant를 컴포넌트 단위로 캡슐화" }
    ]
  },

  prisma: {
    name: "Prisma",
    subtext: "모던한 백엔드 구현을 위한 도구",
    features: [
      "DB 연동/모델링 흐름을 이해하기 위한 학습/실험",
      "작은 프로젝트에서 데이터 계층을 깔끔히 두는 연습",
      "‘필요할 때만’ 도입하는 기준을 갖고 접근"
    ]
  },

  vue: {
    name: "Vue.js",
    subtext: "레거시를 정리하며 배운 구조 감각",
    features: [
      "레거시(jQuery 혼재) 환경에서 Vue 기반으로 점진 전환 경험",
      "데이터 책임/컴포넌트 책임 분리가 UX 변경에 미치는 영향 체감",
      "Vue Router/Vuex 기반 구조 운영 경험"
    ],
    projects: [
      { name: "렉스클라우드 운영", summary: "레거시 혼재 환경에서 유지보수/개선 주도" },
      { name: "BIS@T 2.0", summary: "리팩토링 프로젝트에서 구조 기반 설계 주도" }
    ]
  },

  php: {
    name: "PHP",
    subtext: "문제를 끝까지 닫기 위한 백엔드 이해",
    features: [
      "핵심 플랫폼 유지보수 과정에서 백엔드 코드 직접 수정 경험",
      "외주 의존도를 줄이기 위해 내부에서 해결 가능한 범위 확장",
      "API/데이터 흐름 이해를 바탕으로 FE-BE 협업 효율화"
    ],
    projects: [
      { name: "렉스클라우드 운영", summary: "필요한 구간은 직접 백엔드 수정하며 문제 해결" }
    ]
  },

  mysql: {
    name: "MySQL",
    subtext: "원인을 데이터까지 추적",
    features: [
      "요구사항을 빠르게 해결하기 위해 DB 구조 학습/파악",
      "문제 원인을 데이터 관점까지 내려가서 찾는 습관",
      "운영 환경에서 변경 영향도를 고려하며 대응"
    ],
    projects: [
      { name: "렉스클라우드 운영", summary: "DB 구조 이해를 기반으로 유지보수 속도/정확도 개선" }
    ]
  },

  python: {
    name: "Python",
    subtext: "자동화, 스크래핑을 위한 도구",
    features: [
      "자동화/데이터 처리 관점에서 활용 가능성 탐색",
      "필요한 순간에 빠르게 실험하고 검증하는 용도",
      "현재는 학습 단계"
    ],
    projects: [
      { name: "학습/실험", summary: "작은 자동화 스크립트로 문제 해결 연습" }
    ]
  },

  swiftui: {
    name: "SwiftUI",
    subtext: "앱 개발을 위한 기반",
    features: [
      "앱 친화적 UX를 직접 설계/구현하기 위한 학습",
      "프로토타이핑 중심으로 화면/상태 흐름을 익히는 중",
      "현재는 학습 단계"
    ],
    projects: [
      { name: "WOTD", summary: "UX 기획/프로토타입 설계 + SwiftUI로 구현 시도" }
    ]
  },

  reactnative: {
    name: "React Native",
    subtext: "앱 개발 다양성을 위한 기반",
    features: [
      "React 경험을 모바일 UI로 확장하기 위한 관심 기술",
      "웹에서 쌓은 구조/상태 관리 감각을 앱으로 연결하는 목표",
      "현재는 관심 단계"
    ]
  }
};

export const SKILL_SECTIONS: Record<SkillSectionKey, SkillSectionData> = {
  "CURRENT_SKILLS": {
    name: "현재 집중",
    skills: [
      "nextjs",
      "tailwind",
      "typescript"
    ] as const
  },
  "EXPERIENCE_SKILLS": {
    name: "실무 경험",
    skills: [
      "vue",
      "php",
      "mysql",
    ] as const
  },
  "STUDYING_SKILLS": {
    name: "학습중",
    skills: [
      "prisma",
      "python",
      "swiftui"
    ] as const
  },
  "INTEREST_SKILLS": {
    name: "관심 기술",
    skills: [
      "reactnative"
    ] as const
  },
}

export const SKILL_SECTION_KEYS = [
  "CURRENT_SKILLS"
  , "EXPERIENCE_SKILLS"
  , "STUDYING_SKILLS"
  , "INTEREST_SKILLS"
] as const satisfies readonly SkillSectionKey[]