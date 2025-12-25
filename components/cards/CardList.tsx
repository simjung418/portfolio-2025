import { PROJECT_LIST, Cards, ProjectListKeys, CareerListKeys } from "@/lib/types";
import {TechTag} from "@/components/cards";

type Props = {
  cards: Record<ProjectListKeys, Cards> | Record<CareerListKeys, Cards>;
  onSelect: (name: ProjectListKeys) => void;
};

export const CardList = ({ cards, onSelect }: Props) => {
  return (
    <ul className="sm:flex sm:justify-center sm:items-stretch *:flex-1  gap-4 max-w-7xl">
      {PROJECT_LIST.map((name: ProjectListKeys) => {
        const p = cards[name]; //TODO 
        const status = p.status ? p.status : "";
        return (
          <li key={name}>
            <button onClick={() => onSelect(name)} className={`${status} flex flex-col justify-between gap-4 border sm:rounded-2xl rounded-md p-4 **:[p]:text-lg **:[p]:font-medium`}>
              <div>
                <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                {p.desc}
              </div>
              {p.tech ? <TechTag tags={p.tech} parent={name} /> : null}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
