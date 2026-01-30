import { ProjectCards } from "@/lib/types";
import { ReactNode } from "react";
import ArticleLayout from "../ui/ArticleLayout";

type Props = {
  selected: ProjectCards;
  children: ReactNode;
};

export const ProjectCardDetail = ({ selected, children }: Props) => {
  return (
    <div className="[&_p]:text-md [&_p]:font-medium md:[&_p]:text-2xl/10 [&_li]:text-md [&_li]:font-medium md:[&_li]:text-2xl/10">
      <h2>{selected.title}</h2>
      <ArticleLayout>{children}</ArticleLayout>
    </div>
  );
};
