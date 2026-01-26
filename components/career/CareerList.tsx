import { Cards, CareerDetail, CareerListKeys } from "@/lib/types";
import clsx from "clsx";

// 카드 리스트는 "프로젝트"든 "커리어"든 상관없이,
// 1) key 목록(list)
// 2) key -> 카드 데이터 매핑(cards)
// 3) 선택 콜백(onSelect)
// 이 3개가 같은 key 타입(K)으로 묶여 있으면 안전하게 동작한다.
// 그래서 union(A | B) 대신 generic(K)로 계약을 건다.

type Props = {
  list: readonly CareerListKeys[];
  cards: Record<CareerListKeys, Cards<CareerDetail>>;
  selected: CareerListKeys;
  onSelect: (name: CareerListKeys) => void;
};

export const CareerList = ({ list, cards, onSelect, selected }: Props) => {
  return (
    <ul className="sticky top-3 flex items-center gap-4">
      {list.map((name) => {
        const p = cards[name];

        return (
          <li key={name}>
            <button
              onClick={() => onSelect(name)}
              className={clsx(
                `min-w-20 rounded-full border px-4 py-2`,
                selected == name ? "bg-green-300" : "bg-white",
              )}
            >
              {p.tabName}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
