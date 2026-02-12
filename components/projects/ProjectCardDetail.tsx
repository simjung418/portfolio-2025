import { ProjectCards } from "@/lib/types";
import { ReactNode } from "react";
import BasicLayout from "../ui/BasicLayout";

type Props = {
  selected: ProjectCards;
  children: ReactNode;
};

export const ProjectCardDetail = ({ selected, children }: Props) => {
  return (
    <div className="[&_li]:text-base [&_li]:font-medium md:[&_li]:text-2xl/10 [&_p]:text-base [&_p]:font-medium md:[&_p]:text-2xl/10">
      <h2>{selected.title}</h2>
      <BasicLayout>{children}</BasicLayout>
    </div>
  );
};
