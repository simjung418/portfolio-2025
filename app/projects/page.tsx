"use client";

import { PROJECT_LIST } from "@/lib/types";
import { ProjectCardDetail, ProjectCardList } from "@/components/projects/";
import { PROJECT_CARDS } from "./projects.content"
import { useProjects } from "./useProjects";

export default function ProjectsPage() {
  const { selected, onSelect } = useProjects();
  return (
    <section className="relative *:flex-1 flex justify-between gap-8">
      <ProjectCardDetail selected={PROJECT_CARDS[selected]} />
      <ProjectCardList list={PROJECT_LIST} cards={PROJECT_CARDS} onSelect={onSelect} selected={selected}/>
    </section>
  );
}
