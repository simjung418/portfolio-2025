import { SkillKey } from "@/lib/types";
import { SkillList } from "./index";
import { SKILL_SECTIONS_KEY, SKILL_SECTIONS } from "@/lib/constants";

type Props = {
  activeSkill: SkillKey;
  onSelect: (skill: SkillKey) => void;
};

export const SkillSection = ({ activeSkill, onSelect }: Props) => {
  return (
    <div>
      {SKILL_SECTIONS_KEY.map((sectionKey) => {
        console.log(sectionKey);
        const section = SKILL_SECTIONS[sectionKey];
        console.log(section);
        return (
          <div key={sectionKey}>
            <h2>{section.name}</h2>
            <SkillList section={sectionKey} activeSkill={activeSkill} onSelect={onSelect}></SkillList>
          </div>
        );
      })}
    </div>
  );
}
