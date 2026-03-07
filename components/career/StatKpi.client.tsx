"use client";

import { HeroKpi } from "@/lib/portfolio/kpi";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function StatKpiClient(item: HeroKpi) {
  const { label, labelCareer, start, end, duration, prefix, suffix, separator, className } = item;
  const labelMerged = labelCareer ? labelCareer : label;
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const unmountedLabel = `${prefix ?? ""}${end.toLocaleString()}${suffix ?? ""}`;
  return (
    <>
      {mounted ? (
        <div className="flex gap-2">
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
          {labelMerged.suffix && <p className={labelMerged.className}>{labelMerged?.suffix}</p>}
        </div>
      ) : (
        <div className="flex gap-2">
          <div className={className}>{unmountedLabel}</div>
          <span className={labelMerged.className}>{labelMerged.suffix}</span>
        </div>
      )}
    </>
  );

}
