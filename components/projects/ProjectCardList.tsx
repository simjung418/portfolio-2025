import { ProjectListKeys } from "@/lib/portfolio/projects";
import clsx from "clsx";
import { ctaBtnClassMap } from "@/lib/portfolio/classNameMap";

// 카드 리스트는 "프로젝트"든 "커리어"든 상관없이,
// 1) key 목록(list)
// 2) key -> 카드 데이터 매핑(cards)
// 3) 선택 콜백(onSelect)
// 이 3개가 같은 key 타입(K)으로 묶여 있으면 안전하게 동작한다.
// 그래서 union(A | B) 대신 generic(K)로 계약을 건다.

type Props = {
  list: readonly ProjectListKeys[];
  onSelect: (name: ProjectListKeys) => void;
  selected: ProjectListKeys;
};

const projectCardClassMap = {
  base: "flex h-full w-full flex-col justify-between gap-4 rounded-md backdrop-blur-md p-4 text-left md:rounded-2xl **:[p]:text-lg **:[p]:font-medium transition-all duration-200 shadowed-button",
  active:
    "clicked **:[h3]:text-green-500  **:[&_p]:text-neutral-600 bg-green-200/40!",
};

export const ProjectCardList = ({ list, onSelect, selected }: Props) => {
  return (
    <ul className="sticky top-3 mb-4 flex items-center gap-4 md:mb-7">
      {list.map((name) => {
        return (
          <li key={name}>
            <button
              onClick={() => onSelect(name)}
              className={clsx(
                `w-full min-w-20 justify-center rounded-full px-4 py-2 text-center font-medium whitespace-nowrap`,
                ctaBtnClassMap.base,
                selected == name
                  ? ctaBtnClassMap.active
                  : ctaBtnClassMap.inactive,
              )}
            >
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
