"use client";

import { PROJECT_LIST, ProjectListKeys } from "@/lib/types";
import { ProjectCardList } from "@/components/projects/ProjectCardList";
import { PROJECT_CARDS } from "./projects.content";
import { useProjects } from "./useProjects";
import ProjectsLayout from "@/components/mdx/ProjectsLayout";
import TodosContent from "@/app/(portfolio)/projects/mdx/todos.content.mdx";
import PortfolioContent from "@/app/(portfolio)/projects/mdx/portfolio.content.mdx";

const PROJECT_CONTENT: Record<ProjectListKeys, React.ReactNode> = {
  todos: <TodosContent />,
  portfolio: <PortfolioContent />,
};

export default function ProjectsPage() {
  const { selected, onSelect, trigger } = useProjects();

  return (
    <div>
      <p className="mt-4 mb-10 text-base/6.5 font-medium break-keep text-neutral-600 md:mt-8 md:text-2xl md:leading-normal">
        개인 프로젝트를 통해<br />
        React / Next.js 기반 구조 설계 경험을 정리했습니다.
      </p>
      <section className="relative">
        <ProjectCardList
          list={PROJECT_LIST}
          cards={PROJECT_CARDS}
          onSelect={onSelect}
          selected={selected}
        />
        {PROJECT_LIST.map((name) => (
          <div
            key={name}
            ref={(el) => {
              trigger.current[name] = el;
            }}
          >
            <ProjectsLayout>{PROJECT_CONTENT[name]}</ProjectsLayout>
            <div className="my-4 h-px w-full bg-neutral-300 md:my-20"></div>
          </div>
        ))}
      </section>
    </div>
  );
}
