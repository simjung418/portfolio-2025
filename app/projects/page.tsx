"use client";

import { useState } from "react";
import { Cards, PROJECT_LIST, ProjectListKeys } from "@/lib/types";
import { CardList } from "@/components/cards";
import { ProjectCardDetail } from "@/components/projects/CardDetail";

const PROJECT_CARDS: Record<ProjectListKeys, Cards> = {
  todos: {
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
  portfolio: {
    title: "Portfolio Project",
    desc: (
      <>
        <p>포트폴리오를 만들며 고민했던 것들</p>
      </>
    ),
    tech: ["React", "Components", "Next.js", "TypeScript", "TailwindCSS"],
    status: "PROCESSING",
    detail: <p>• 섹션 단위 정보 구조 설계 (Hero/About/Skills/Projects/Career) • Skills: 리스트→디테일 UX + 타입 안정성 • 디자인 시스템/타이포/레이아웃 실험</p>,
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
  },
};

export default function ProjectsPage() {
  const [selected, setSelected] = useState(PROJECT_CARDS["todos"]); //
  const onSelect = (name: ProjectListKeys) => {
    setSelected(PROJECT_CARDS[name]);
  };
  return (
    <>
      <CardList list={PROJECT_LIST} cards={PROJECT_CARDS} onSelect={onSelect} selected={selected}/>
      <ProjectCardDetail selected={selected} />
    </>
  );
}
