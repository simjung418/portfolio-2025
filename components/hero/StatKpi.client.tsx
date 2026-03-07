"use client";

import { HeroKpi } from "@/lib/portfolio/kpi";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function StatKpiClient(item: HeroKpi) {
  const { label, start, end, duration, prefix, suffix, separator, className } = item;
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const unmountedLabel = `${prefix ?? ""}${end.toLocaleString()}${suffix ?? ""}`;
  return (
    <>
      {mounted ? (
        <>
          <CountUp
            start={start != 0 ? start : undefined}
            end={end}
            duration={duration}
            prefix={prefix}
            suffix={suffix}
            separator={separator}
            delay={0}
            className={className}
          />
          {label.suffix && <p className={label.className}>{label?.suffix}</p>}
        </>
      ) : (
        <>
          <div className={className}>{unmountedLabel}</div>
          <span className={label.className}>{label.suffix}</span>
        </>
      )}
    </>
  );
}
