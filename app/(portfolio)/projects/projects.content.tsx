import { ProjectCards, ProjectListKeys } from "@/lib/types";

export const PROJECT_CARDS: Record<ProjectListKeys, ProjectCards> = {
  todos: {
    title: "Todos Project",
    tech: ["React", "Custom Hook", "Next.js", "TypeScript", "TailwindCSS"],
  },
  portfolio: {
    title: "Portfolio Project",
    tech: ["React", "Components", "Next.js", "TypeScript", "TailwindCSS"],
  } /* ,
  api: {
    title: "Todos Project",
    desc: (
      <>
        <p>클론 없이 직접 구현하며</p>
        <p>Next.js/React 스택을 체화</p>
      </>
    ),
    tech: ["React", "Custom Hook", "Next.js", "TypeScript", "TailwindCSS"],
    detail: (
      <>
        <p>React/Next.js를 이용하여 클론할 소스 없이</p>
        <p>모던 프론트엔드 스택이 실제로 어떻게 동작하는지 스스로 체화하기 위해 진행했습니다.</p>
        <p>상태 관리는 Custom Hook(useTodos)으로 분리하고, </p>
        <p>DB 없이도 상태가 유지되도록 하기 위해 쿠키 기반 저장 방식을 이용하여</p>
        <p>가볍고 안정적으로 작동하도록 만들었습니다.</p>
        <p>Vue.js 실무 경험을 바탕으로 Next.js 환경에 빠르게 적응하고,</p>
        <p>React/Next.js 컨벤션을 제것으로 만드는 과정을 통해</p>
        <p>새로운 개발환경에서도 편안하게 개발을 진행할 수 있는 발판을 만들었습니다.</p>
      </>
    ),
  },
  wotd: {
    title: "오운완하자",
    desc: (
      <>
        <p>앱친화적 UX를 기획, 설계하고</p>
        <p>SwiftUI를 이용하여 구현하기</p>
      </>
    ),
    tech: ["Figma", "SwiftUI"],
    status: "UPCOMING",
    detail: <>루틴/트래킹 UX 설계 • SwiftUI 컴포넌트 구조 학습 • 프로토타입 → 점진 기능 확장</>,
  }, */,
};
