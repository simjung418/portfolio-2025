"use client";

import { SKILLS } from "./skill.content";
import { SkillDetail, SkillSections } from "@/components/skills/index";
import { useSkill } from "./useSkill";
import { SKILL_KEYS } from "@/lib/types";

export default function SkillsPage() {
  const { activeSkill, onSelect, trigger } = useSkill();
  return (
    <section className="relative">
      <SkillSections activeSkill={activeSkill} onSelect={onSelect} />
      {SKILL_KEYS.map((name) => (
        <div
          key={name}
          ref={(el) => {
            trigger.current[name] = el;
          }}
          className="scroll-mt-24"
        >
          <SkillDetail card={SKILLS[name]} name={name} />
          <div className="my-4 h-px w-full bg-neutral-300 md:my-8"></div>
        </div>
      ))}
    </section>
  );
}
