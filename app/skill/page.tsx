"use client";

import { useState } from "react";
import { SkillData, SkillKey } from "@/lib/types";
import { SKILLS } from "@/lib/constants";
import { SkillDetail, SkillSection } from "@/components/skills/index";

export default function SkillsPage() {
  const [activeSkill, setActiveSkill] = useState<SkillKey>("nextjs");
  const onSelect = (skill: SkillKey) => {
    setActiveSkill(skill);
  };
  const selectedSkill: SkillData = SKILLS[activeSkill];
  return (
    <div className="mt-6 flex items-stretch justify-between gap-5">
      <section className="md:flex-2">
        <SkillDetail skill={selectedSkill} />
      </section>
      <div className="relative mx-8 w-px bg-black/15">
        <div className="pointer-events-none absolute top-0 left-1/2 h-10 w-6 -translate-x-1/2 bg-linear-to-b from-neutral-50 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-10 w-6 -translate-x-1/2 bg-linear-to-t from-neutral-50 to-transparent" />
      </div>

      <aside className="md:flex-1">
        <div className="sticky top-24">
          <SkillSection activeSkill={activeSkill} onSelect={onSelect} />
        </div>
      </aside>
    </div>
  );
}
