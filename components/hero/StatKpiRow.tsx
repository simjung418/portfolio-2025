import { HERO_KPI } from "@/lib/portfolio/kpi";
import StatKpiClient from "./StatKpi.client";

export default function StatKpiRow() {
  return (
    <>
      <ul className="mt-4 grid grid-cols-2 gap-3 md:justify-items-center">
        {HERO_KPI.map((item, index) => {
          return (
            <li
              key={`${item.end}_${index}`}
              className="flex min-h-48 w-full flex-col items-center justify-center gap-0 rounded-md bg-white/20 p-5 text-center backdrop-blur-xs md:gap-4 md:px-5"
            >
              <StatKpiClient {...item} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
