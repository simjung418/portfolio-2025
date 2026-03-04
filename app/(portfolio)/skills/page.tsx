"use client";

import { SKILLS } from "./skill.content";
import { SkillDetail, SkillSections } from "@/components/skills/index";
import { useSkill } from "./useSkill";
import { SKILL_KEYS } from "@/lib/types";

export default function SkillsPage() {
  const { activeSkill, onSelect, trigger } = useSkill();
  return (
    <>
      <div className="mt-4 mb-10">
        <p className="text-base/6.5 font-medium break-keep text-neutral-600 md:mt-8 md:text-2xl md:leading-normal">
          사용 가능한 기술을 테마별로 정리하고,<br />
          각 스택을 활용해 어떤 문제를 해결했는지와<br />
          실 사용시 주로 다루는 기능을 함께 구성했습니다.
        </p>
      </div>
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
    </>
  );
}
