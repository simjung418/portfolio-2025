import { SKILLS, SKILL_SECTIONS } from "@/lib/constants";
import { SkillKey, SkillSectionKey } from "@/lib/types";

type Props = {
  section: SkillSectionKey;
  activeSkill: SkillKey;
  onSelect: (skill: SkillKey) => void;
};

export const SkillList = ({ section, activeSkill, onSelect }: Props) => {
  return (
    <ul>
      {SKILL_SECTIONS[section].skills.map((skill) => {
        const detail = SKILLS[skill];
        return (
          <li key={skill}>
            <button
              type="button"
              className={`${activeSkill === skill ? "bg-neutral-100 border border-neutral-200" : ""} w-full rounded-md px-4 py-2 text-left text-lg font-medium box-border`}
              onClick={() => onSelect(skill)}
            >
              {detail.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
