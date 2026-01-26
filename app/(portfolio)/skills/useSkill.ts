import { SKILLS } from "@/app/(portfolio)/skills/skill.content";
import { SkillData, SkillKey } from "@/lib/types";
import { useState } from "react";


export function useSkill() {
  const [activeSkill, setActiveSkill] = useState<SkillKey>("nextjs");
  const onSelect = (skill: SkillKey) => {
    setActiveSkill(skill);
  };
  const selectedSkill: SkillData = SKILLS[activeSkill];
  return {selectedSkill, onSelect, activeSkill}
}