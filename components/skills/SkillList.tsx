import { SKILLS, SKILL_SECTIONS } from "@/app/(portfolio)/skills/skill.content";
import { ctaBtnClassMap } from "@/components/button/ctaBtnClassMap";
import { SkillKey, SkillSectionKey } from "@/lib/types";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Image from "next/image";

type Props = {
  section: SkillSectionKey;
  activeSkill: SkillKey;
  onSelect: (skill: SkillKey) => void;
};

export const SkillList = ({ section, activeSkill, onSelect }: Props) => {
  return (
    <ul className="flex flex-col gap-2">
      {SKILL_SECTIONS[section].skills.map((skill) => {
        const detail = SKILLS[skill];
        return (
          <li key={skill} className="flex items-center gap-1">
            <ChevronRightIcon
              className={clsx(
                "size-8",
                activeSkill === skill ? "text-green-400" : "text-transparent",
              )}
            />
            <button
              type="button"
              className={clsx(
                "w-full rounded-md text-left font-medium",
                ctaBtnClassMap.base,
                activeSkill === skill
                  ? ctaBtnClassMap.active
                  : ctaBtnClassMap.inactive,
              )}
              onClick={() => onSelect(skill)}
            >
              <div className="relative size-7">
                <Image
                  src={`/skills/${detail.icon}`}
                  alt={detail.name}
                  className="absolute object-contain"
                  fill
                />
              </div>
              {detail.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
