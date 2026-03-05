"use client";

import CountUp from "react-countup";

type Props = {
  label: {
    prefix: string;
    suffix: string;
  };
  value: number;
  suffix: string;
  seperator: string;
};

export default function StatKpiClient({
  label,
  value,
  suffix = "",
  seperator = "",
}: Props) {
  return (
    <div className="flex gap-1 items-baseline">
      {label.prefix && <p className="">{label?.prefix}</p>}
      <div className="">
        <CountUp
          end={value}
          duration={2}
          suffix={suffix}
          separator={seperator}
        />
      </div>
      {label.suffix && <p className="">{label?.suffix}</p>}
    </div>
  );
}
