import { ProjectListKeys } from "@/lib/types";
import { useState } from "react";

export function useProjects() {
  const [selected, setSelected] = useState<ProjectListKeys>("todos");
  const onSelect = (name: ProjectListKeys) => {
    setSelected(name);
  };

  return {selected, onSelect}
}