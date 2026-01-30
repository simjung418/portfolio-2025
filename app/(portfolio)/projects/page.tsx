"use client";

import { PROJECT_LIST, ProjectListKeys } from "@/lib/types";
import { ProjectCardDetail, ProjectCardList } from "@/components/projects/";
import { PROJECT_CARDS } from "./projects.content";
import { useProjects } from "./useProjects";
import TodosContent from "./todos.content.mdx";
import PortfolioContent from "./portfolio.content.mdx";

const PROJECT_CONTENT: Record<ProjectListKeys, React.ReactNode> = {
  todos: <TodosContent />,
  portfolio: <PortfolioContent />,
};

export default function ProjectsPage() {
  const { selected, onSelect } = useProjects();
  return (
    <section className="relative flex justify-between gap-8 *:flex-1">
      <ProjectCardDetail selected={PROJECT_CARDS[selected]}>
        {PROJECT_CONTENT[selected]}
      </ProjectCardDetail>
      <ProjectCardList
        list={PROJECT_LIST}
        cards={PROJECT_CARDS}
        onSelect={onSelect}
        selected={selected}
      />
    </section>
  );
}
