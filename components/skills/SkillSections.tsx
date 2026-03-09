import { SkillKey } from "@/lib/portfolio/skills";
import { SkillList } from "./SkillList";
import { SKILL_SECTION_KEYS, SKILL_SECTIONS } from "@/app/(portfolio)/skills/skill.content";
import clsx from "clsx";
import { ctaBtnClassMap } from "@/lib/portfolio/classNameMap";

type Props = {
  activeSkill: SkillKey;
  onSelect: (skill: SkillKey) => void;
};

export const SkillSections = ({ activeSkill, onSelect }: Props) => {
  return (
    <ul className="sticky top-26 z-10 mb-4 flex items-center gap-4 overflow-x-auto whitespace-nowrap md:mb-7 md:pb-2">
      {SKILL_SECTION_KEYS.map((sectionKey) => {
        const section = SKILL_SECTIONS[sectionKey];
        return (
          <li key={sectionKey} className="flex items-center gap-4">
            <h3
              className={clsx(
                `w-full min-w-20 justify-center rounded-full border-0 px-4 py-2 text-center font-bold! whitespace-nowrap`,
                ctaBtnClassMap.base,
                ctaBtnClassMap.inactive
              )}
            >
              {section.name}
            </h3>
            <SkillList section={sectionKey} activeSkill={activeSkill} onSelect={onSelect}></SkillList>
          </li>
        );
      })}
    </ul>
  );
};
