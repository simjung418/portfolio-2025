import { SKILLS, SKILL_SECTIONS } from "@/lib/constants";
import { SkillKey, SkillSectionKey } from "@/lib/types";

type Props = {
  section: SkillSectionKey;
  activeSkill: SkillKey;
  onSelect: (skill: SkillKey) => void;
};

export const SkillList = ({ section, activeSkill, onSelect }: Props) => {
  return (
    <div>
      <ul>
        {SKILL_SECTIONS[section].skills.map((skill) => {
          const detail = SKILLS[skill];
          return (
            <li key={skill} className={activeSkill === skill ? "active" : ""} onClick={() => onSelect(skill)}>
              {detail.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
