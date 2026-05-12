import { CareerCards, CareerListKeys } from "@/lib/portfolio/career";
import ShowImage from "@/components/ui/ShowImage";
import TechTag from "@/components/cards/TechTag";
import StatKpiClient from "./StatKpi.client";

type Props = {
  triggerRef?: (el: HTMLDivElement | null) => void;
  card: CareerCards;
  name: CareerListKeys; // "bisat2" | "iso" | "deepread2" | "lexcloud" | "metafield" | "bavl" | "platform" | "l10n"
};

const dlClassMap = {
  dt: "text-lg font-bold text-neutral-400 capitalize md:text-2xl",
  dd: "md:text-2xl/10 text-neutral-900 text-base **:[&_strong]:font-semibold!"
};

export const CareerCardDetail = ({ triggerRef, card, name }: Props) => {
  const detail = card.detail;
  const CAR = ["challenge", "action", "result"] as const;
  return (
    <div>
      {card.term && <p className="mb-2 font-medium text-neutral-600 md:mb-0 md:text-lg">{card.term}</p>}
      <h2 ref={triggerRef} className="mt-0! mb-2! text-neutral-900 md:leading-15">
        {card.title}
      </h2>
      {card.highlight && <StatKpiClient {...card.highlight} />}
      <div className="mt-2 md:mt-0">
        {card.tech && <TechTag tags={card.tech!} parent={name} parentClicked={false} />}
      </div>
      <div className="mt-6 flex flex-col gap-12 md:mt-10">
        <dl className="flex flex-col gap-2 md:gap-4">
          <dt className={dlClassMap.dt}>About</dt>
          <dd className={dlClassMap.dd}>{card.desc}</dd>
        </dl>
        {CAR.map((val) => {
          return (
            <dl key={`${name}_${val}`} className="flex flex-col gap-2 md:gap-4">
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
