import { Cards, ProjectListKeys } from "@/lib/types";
import TechTag from "@/components/cards/TechTag";
import clsx from "clsx";

// 카드 리스트는 "프로젝트"든 "커리어"든 상관없이,
// 1) key 목록(list)
// 2) key -> 카드 데이터 매핑(cards)
// 3) 선택 콜백(onSelect)
// 이 3개가 같은 key 타입(K)으로 묶여 있으면 안전하게 동작한다.
// 그래서 union(A | B) 대신 generic(K)로 계약을 건다.

type Props = {
  list: readonly ProjectListKeys[];
  cards: Record<ProjectListKeys, Cards>;
  onSelect: (name: ProjectListKeys) => void;
  selected: ProjectListKeys;
};

export const ProjectCardList = ({ list, cards, onSelect, selected }: Props) => {
  return (
    <ul className="flex max-w-lg snap-x snap-mandatory flex-col items-stretch gap-4">
      {list.map((name) => {
        const p = cards[name];
        const status = p.status ? p.status : "";

        return (
          <li
            key={name}
            className="w-[95%] max-w-lg shrink-0 snap-start md:w-full"
          >
            <button
              onClick={() => onSelect(name)}
              className={clsx(
                `flex h-full w-full flex-col justify-between gap-4 rounded-md border p-4 text-left md:rounded-2xl **:[p]:text-lg **:[p]:font-medium`,
                status,
                selected === name ? "bg-green-300" : "bg-white",
              )}
            >
              <div>
                <h3 className="mb-2 text-2xl font-semibold">{p.title}</h3>
                {p.desc}
              </div>
              {p.tech ? <TechTag tags={p.tech} parent={name} /> : null}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
