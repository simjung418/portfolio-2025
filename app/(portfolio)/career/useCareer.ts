import { CAREER_LIST, CareerListKeys } from "@/lib/types";
import { useEffect, useRef, useState } from "react";

export function useCareer() {

  const [selected, setSelected] = useState<CareerListKeys>("bisat2");
  const onSelect = (name: CareerListKeys) => {
    setSelected(name);
    trigger.current[name]?.scrollIntoView({ behavior: "smooth", block: "start" })
  };

  const trigger = useRef<Record<CareerListKeys, HTMLHeadElement | null>>({
    bisat2: null,
    iso: null,
    deepread2: null,
    lexcloud: null,
    metafield: null,
    bavl: null,
    platform: null,
    l10n: null,
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
          const key = CAREER_LIST.find(
            (name) => trigger.current[name] === entry.target,
          );
          if (key) {
            setSelected(key);
          }
        }
      });
    }, options);

    CAREER_LIST.forEach((name) => {
      if (trigger.current[name]) {
        observer.observe(trigger.current[name]!);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  return { selected, onSelect, trigger}
}