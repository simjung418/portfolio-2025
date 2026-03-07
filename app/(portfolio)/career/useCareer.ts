import { CAREER_LIST, CareerListKeys } from "@/lib/portfolio/career";
import { useEffect, useRef, useState } from "react";

export function useCareer() {
  const [selected, setSelected] = useState<CareerListKeys>("iso");
  const onSelect = (name: CareerListKeys) => {
    setSelected(name);
    trigger.current[name]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const trigger = useRef<Record<CareerListKeys, HTMLHeadElement | null>>({
    iso: null,
    deepread2: null,
    platform: null,
    bisat2: null,
    lexcloud: null,
    metafield: null,
    bavl: null,
    l10n: null
  });

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-200px 0px -40% 0px"
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const key = CAREER_LIST.find((name) => trigger.current[name] === entry.target);
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

  return { selected, onSelect, trigger };
}
