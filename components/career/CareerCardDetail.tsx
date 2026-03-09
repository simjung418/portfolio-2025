import { CareerCards, CareerListKeys } from "@/lib/portfolio/career";
import ShowImage from "@/components/ui/ShowImage";
import TechTag from "@/components/cards/TechTag";
import StatKpiClient from "./StatKpi.client";
import clsx from "clsx";
import { badgeClass } from "@/lib/portfolio/classNameMap";

type Props = {
  triggerRef?: (el: HTMLDivElement | null) => void;
  card: CareerCards;
  name: CareerListKeys; // "bisat2" | "iso" | "deepread2" | "lexcloud" | "metafield" | "bavl" | "platform" | "l10n"
};

const dlClassMap = {
  dt: "text-lg font-bold text-neutral-400 capitalize md:text-2xl",
  dd: "md:text-2xl/10 text-neutral-700 text-base **:[&_strong]:font-semibold!"
};

export const CareerCardDetail = ({ triggerRef, card, name }: Props) => {
  const detail = card.detail;
  const CAR = ["challenge", "action", "result"] as const;
  return (
    <div>
      {card.term && <p className="text-neutral-600 md:text-lg font-medium">{card.term}</p>}
      <div className="flex flex-wrap items-baseline gap-4">
        <h2 ref={triggerRef} className="mt-0! text-neutral-700">
          {card.title}
        </h2>
        {card.highlight && <StatKpiClient {...card.highlight} />}
      </div>
      <div className="md:mt-0 mt-2">
        {card.tech && <TechTag tags={card.tech!} parent={name} parentClicked={false} />}
      </div>
      <div className="md:mt-10 flex flex-col gap-12 mt-6">
        <dl className="md:gap-4 flex flex-col gap-2">
          <dt className={dlClassMap.dt}>About</dt>
          <dd className={dlClassMap.dd}>{card.desc}</dd>
        </dl>
        {CAR.map((val) => {
          return (
            <dl key={`${name}_${val}`} className="md:gap-4 flex flex-col gap-2">
              <dt className={dlClassMap.dt}>{val}</dt>
              <dd className={dlClassMap.dd}>{detail?.[val]}</dd>
            </dl>
          );
        })}
      </div>
      {card.imgs && card.imgs.length > 0 ? (
        <div
          className={`mt-6 grid gap-8 md:mt-10 md:gap-10 ${
            card.imgs.length === 1 ? "grid-cols-1 justify-items-center" : "grid-cols-1 md:grid-cols-2"
          }`}
        >
          {card.imgs.map((img, index) => (
            <div
              key={`${card.title}_img_${index}`}
              className={`w-full ${card.imgs!.length === 1 ? "max-w-4xl" : "max-w-2xl"}`}
            >
              <ShowImage src={img.src} alt={img.label} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
