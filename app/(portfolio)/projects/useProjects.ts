import { PROJECT_LIST, ProjectListKeys } from "@/lib/types";
import { useEffect, useRef, useState } from "react";

export function useProjects() {
  const [selected, setSelected] = useState<ProjectListKeys>("todos");
  const onSelect = (name: ProjectListKeys) => {
    setSelected(name);
  };

  const trigger = useRef<Record<ProjectListKeys, HTMLDivElement | null>>({
    todos: null,
    portfolio: null,
  });

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-30% 0px -30% 0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const key = PROJECT_LIST.find(
            (name) => trigger.current[name] === entry.target,
          );
          if (key) {
            setSelected(key);
          }
        }
      });
    }, options);

    PROJECT_LIST.forEach((name) => {
      if (trigger.current[name]) {
        observer.observe(trigger.current[name]!);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  return { selected, onSelect, trigger }
}