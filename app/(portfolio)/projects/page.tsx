"use client";

import { PROJECT_LIST } from "@/lib/types";
import { ProjectCardDetail, ProjectCardList } from "@/components/projects/";
import { PROJECT_CARDS } from "./projects.content";
import { useProjects } from "./useProjects";

export default function ProjectsPage() {
  const { selected, onSelect, trigger } = useProjects();

  return (
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
          <ProjectCardDetail
            card={PROJECT_CARDS[name]}
            name={name}
          ></ProjectCardDetail>
          <div className="my-4 h-px w-full bg-neutral-300 md:my-8"></div>
          {/* 구분선 */}
        </div>
      ))}
    </section>
  );
}
