import { CareerCards, CareerListKeys } from "@/lib/portfolio/career";
import TechTag from "@/components/cards/TechTag";
import StatKpiClient from "./StatKpi.client";

type Props = {
  triggerRef?: (el: HTMLDivElement | null) => void;
  card: CareerCards;
  name: CareerListKeys; // "bisat2" | "iso" | "deepread2" | "lexcloud" | "metafield" | "bavl" | "platform" | "l10n"
};

export const CareerCardDetail = ({ triggerRef, card, name }: Props) => {
  const detail = card.detail;
  const CAR = ["challenge", "action", "result"] as const;
  return (
    <div>
      {card.term && <p className="font-medium text-neutral-600 md:text-lg">{card.term}</p>}
      <div className="flex flex-wrap items-baseline gap-4">
        <h2 ref={triggerRef} className="mt-0! text-neutral-700">
          {card.title}
        </h2>
        {card.highlight && <StatKpiClient {...card.highlight} />}
      </div>
      <div className="mt-2 md:mt-0">{card.tech && <TechTag tags={card.tech!} parent={name} parentClicked={false} />}</div>
      <div className="mt-6 flex flex-1 justify-between gap-4 md:mt-10">
        <div className="flex flex-col gap-12">
          <dl className="flex flex-col gap-2 md:gap-4">
            <dt className="text-lg font-bold text-neutral-400 capitalize md:text-3xl">Detail</dt>
            <dd className="text-base font-medium md:text-2xl/10">{card.desc}</dd>
          </dl>
          {CAR.map((val) => {
            return (
              <dl key={`${name}_${val}`} className="flex flex-col gap-2 md:gap-4">
                <dt className="text-lg font-bold text-neutral-400 capitalize md:text-3xl">{val}</dt>
                <dd className="text-base font-medium md:text-2xl/10">{detail?.[val]}</dd>
              </dl>
            );
          })}
        </div>
        <div>
          {card.imgs != undefined
            ? card.imgs.map((img, index) => (
                // <div
                //   key={`${card.title}_img_${index}`}
                //   className="relative size-200"
                // >
                //   <Image
                //     src={img}
                //     alt={card.title}
                //     fill
                //     className="flex-1 object-cover"
                //   />
                // </div>

                <img key={`${card.title}_img_${index}`} src={img} alt={card.title} className="" />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};
