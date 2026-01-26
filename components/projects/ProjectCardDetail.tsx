import { Cards } from "@/lib/types";

type Props = {
  selected: Cards;
};

export const ProjectCardDetail = ({ selected }: Props) => {
  return (
    <div className="[&_p]:text-md [&_p]:font-medium md:[&_p]:text-2xl/10">
      <h2>{selected.title}</h2>
      {selected.detail}
    </div>
  );
};
