import { SkillKey } from "@/lib/types";
import { SkillList } from "./SkillList";
import { SKILL_SECTION_KEYS, SKILL_SECTIONS } from "@/app/skill/skill.content";

type Props = {
  activeSkill: SkillKey;
  onSelect: (skill: SkillKey) => void;
};

export const SkillSection = ({ activeSkill, onSelect }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {SKILL_SECTION_KEYS.map((sectionKey) => {
        const section = SKILL_SECTIONS[sectionKey];
        return (
          <div key={sectionKey}>
            <h3 className="font-bold md:mb-2 md:text-2xl">{section.name}</h3>
            <SkillList
              section={sectionKey}
              activeSkill={activeSkill}
              onSelect={onSelect}
            ></SkillList>
          </div>
        );
      })}
    </div>
  );
};
