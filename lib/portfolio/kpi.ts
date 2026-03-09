export type HeroKpi = {
  label: {
    prefix?: string;
    suffix?: string;
    className?: string;
  };
  labelCareer?: {
    prefix?: string;
    suffix?: string;
    className?: string;
  };
  className?: string;
  start?: number;
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
};

const KPI_CAREER = {
  label: { suffix: "플랫폼 개발 경험" },
  duration: 2,
  end: 5,
  suffix: "+ years"
};

const KPI_USER = {
  label: { suffix: "서비스 사용자" },
  labelCareer: { suffix: "사용자 플랫폼 운영" },
  end: 20000,
  suffix: "+",
  separator: ","
};

const KPI_JOIN = {
  label: { suffix: "사용자 증가" },
  end: 200,
  suffix: "%"
};

const KPI_ISO = {
  label: { suffix: "보안 인증" },
  labelCareer: { suffix: "시리즈 보안 인증 취득" },
  end: 27000,
  prefix: "ISO ",
  separator: ""
};

const KPI_BISAT = {
  label: { suffix: "모던 프론트엔드 구조 전환, DX 개선" },
  end: 0,
  separator: ""
};

const KPI_UI = {
  label: {
    prefix: "외부 사용자",
    suffix: "증가"
  },
  end: 67,
  suffix: "%",
  separator: ""
};

const KPI_BAVL = {
  label: {
    suffix: "과업 달성"
  },
  end: 150000,
  suffix: "문장 데이터",
  separator: ","
};

const MergeKPIClass = (kpi: HeroKpi, classNameForLabel: string, classNameForCountUp: string): HeroKpi => {
  if (kpi.labelCareer) {
    return {
      ...kpi,
      label: {
        ...kpi.label,
        className: classNameForLabel
      },
      labelCareer: {
        ...kpi.labelCareer,
        className: classNameForLabel
      },
      className: classNameForCountUp
    };
  } else {
    return {
      ...kpi,
      label: {
        ...kpi.label,
        className: classNameForLabel
      },
      className: classNameForCountUp
    };
  }
};

const HeroLabelClassName = "text-lg md:text-2xl font-semibold text-neutral-700";
const HeroCountUpClassName = "text-2xl md:text-6xl font-bold text-green-500";
const CareerLabelClassName = "text-lg md:text-2xl font-bold text-green-500";
const CareerCountUpClassName = "text-lg md:text-2xl font-bold text-green-500";

export const HERO_KPI: HeroKpi[] = [
  MergeKPIClass(KPI_CAREER, HeroLabelClassName, HeroCountUpClassName),
  MergeKPIClass(KPI_USER, HeroLabelClassName, HeroCountUpClassName),
  MergeKPIClass(KPI_JOIN, HeroLabelClassName, HeroCountUpClassName),
  MergeKPIClass(KPI_ISO, HeroLabelClassName, HeroCountUpClassName)
];

export const C_KPI_CAREER = MergeKPIClass(KPI_CAREER, CareerLabelClassName, CareerCountUpClassName);
export const C_KPI_USER = MergeKPIClass(KPI_USER, CareerLabelClassName, CareerCountUpClassName);
export const C_KPI_JOIN = MergeKPIClass(KPI_JOIN, CareerLabelClassName, CareerCountUpClassName);
export const C_KPI_ISO = MergeKPIClass(KPI_ISO, CareerLabelClassName, CareerCountUpClassName);
export const C_KPI_BISAT = MergeKPIClass(KPI_BISAT, CareerLabelClassName, CareerCountUpClassName);
export const C_KPI_UI = MergeKPIClass(KPI_UI, CareerLabelClassName, CareerCountUpClassName);
export const C_KPI_BAVL = MergeKPIClass(KPI_BAVL, CareerLabelClassName, CareerCountUpClassName);
