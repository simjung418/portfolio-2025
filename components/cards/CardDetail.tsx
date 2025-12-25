import { Cards } from "@/lib/types";

type Props = {
  selected: Cards;
};

export const CardDetail = ({ selected }: Props) => {
  return (
    <div className="sm:[&_p]:text-2xl/10 [&_p]:text-md [&_p]:font-medium ">
      <h2>{selected.title}</h2>
      {selected.detail}
    </div>
  );
}
