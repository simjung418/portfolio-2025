import { Cards, CareerDetail } from "@/lib/types";

type Props = {
  selected: Cards<CareerDetail>;
};

export const CareerCardDetail = ({ selected }: Props) => {
  const detail = selected.detail;
  return (
    <div className="sm:[&_p]:text-2xl/10 [&_p]:text-md [&_p]:font-medium ">
      <h2>{selected.title}</h2>
      {detail?.challenge}
      {detail?.action}
      {detail?.result}
    </div>
  );
}
