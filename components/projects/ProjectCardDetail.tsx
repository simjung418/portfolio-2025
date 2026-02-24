import { ProjectCards, ProjectListKeys } from "@/lib/types";
import ProjectsLayout from "../mdx/ProjectsLayout";
import TechTag from "../cards/TechTag";
import TodosContent from "@/app/(portfolio)/projects/mdx/todos.content.mdx";
import PortfolioContent from "@/app/(portfolio)/projects/mdx/portfolio.content.mdx";

type Props = {
  card: ProjectCards;
  name: ProjectListKeys; // "todos" | "portfolio"
};

const PROJECT_CONTENT: Record<ProjectListKeys, React.ReactNode> = {
  todos: <TodosContent />,
  portfolio: <PortfolioContent />,
};

export const ProjectCardDetail = ({ card, name }: Props) => {
  return (
    <div>
      <h2>{card.title}</h2>
      <div className="[&_li]:text-base [&_li]:font-medium md:[&_li]:text-2xl/10 [&_p]:text-base [&_p]:font-medium md:[&_p]:text-2xl/10">
        <ProjectsLayout>{PROJECT_CONTENT[name]}</ProjectsLayout>
      </div>
      {card.tech ? (
        <TechTag tags={card.tech!} parent={name} parentClicked={false} />
      ) : null}
    </div>
  );
};
