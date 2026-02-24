import { CareerCards, CareerListKeys } from "@/lib/types";
import Image from "next/image";
import TechTag from "@/components/cards/TechTag";

type Props = {
  card: CareerCards;
  name: CareerListKeys; // "bisat2" | "iso" | "deepread2" | "lexcloud" | "metafield" | "bavl" | "platform" | "l10n"
};

export const CareerCardDetail = ({ card, name }: Props) => {
  const detail = card.detail;
  const CAR = ["challenge", "action", "result"] as const;
  return (
    <div>
      <h2 className="text-neutral-700">{card.title}</h2>
      <div className="mt-6 flex flex-1 justify-between gap-4 md:mt-12">
        <div className="flex flex-col gap-5">
          <dl className="flex flex-col gap-2 md:gap-4">
            <dt className="text-lg font-bold text-neutral-400 capitalize md:text-3xl">
              Detail
            </dt>
            <dd className="text-base font-medium md:text-2xl/10">
              {card.desc}
            </dd>
          </dl>
          {CAR.map((val, index) => {
            return (
              <dl
                key={`${name}_${val}`}
                className="flex flex-col gap-2 md:gap-4"
              >
                <dt className="text-lg font-bold text-neutral-400 capitalize md:text-3xl">
                  {val}
                </dt>
                <dd className="text-base font-medium md:text-2xl/10">
                  {detail?.[val]}
                </dd>
              </dl>
            );
          })}
          {card.tech ? (
            <TechTag tags={card.tech!} parent={name} parentClicked={false} />
          ) : null}
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

                <img
                  key={`${card.title}_img_${index}`}
                  src={img}
                  alt={card.title}
                  className=""
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};
