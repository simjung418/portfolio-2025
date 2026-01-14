import { Cards, CareerDetail, CareerListKeys } from "@/lib/types";
import Image from "next/image";
import TechTag from "@/components/cards/TechTag";

type Props = {
  card: Cards<CareerDetail>;
  selected: CareerListKeys;
};

export const CareerCardDetail = ({ card, selected }: Props) => {
  const detail = card.detail;
  const CAR = ["challenge", "action", "result"] as const;
  return (
    <div>
      <h2 className="text-neutral-700">{card.title}</h2>
      <div className="flex flex-1 justify-between gap-4">
        <div className="flex flex-col gap-5">
          <dl>
            <dt className="text-lg font-bold text-neutral-400 capitalize sm:text-3xl">
              Detail
            </dt>
            <dd className="text-md font-medium sm:text-2xl/10">{card.desc}</dd>
          </dl>
          {CAR.map((val, index) => {
            return (
              <dl
                key={`${selected}_${val}`}
                className="flex flex-col gap-2 sm:gap-1"
              >
                <dt className="text-lg font-bold text-neutral-400 capitalize sm:text-3xl">
                  {val}
                </dt>
                <dd className="text-md font-medium sm:text-2xl/10">
                  {detail?.[val]}
                </dd>
              </dl>
            );
          })}
          {card.tech ? <TechTag tags={card.tech!} parent={selected} /> : null}
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
