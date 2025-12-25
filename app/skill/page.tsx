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
    <div className="flex justify-between items-center">
      <SkillDetail skill={selectedSkill} />
      <SkillSection activeSkill={activeSkill} onSelect={onSelect} />
    </div>
  );
}
