import { Cards } from "@/lib/types";
import { TechTag } from "@/components/cards";

// 카드 리스트는 "프로젝트"든 "커리어"든 상관없이,
// 1) key 목록(list)
// 2) key -> 카드 데이터 매핑(cards)
// 3) 선택 콜백(onSelect)
// 이 3개가 같은 key 타입(K)으로 묶여 있으면 안전하게 동작한다.
// 그래서 union(A | B) 대신 generic(K)로 계약을 건다.

type Props<K extends string, TDetail> = {
  list: readonly K[];
  cards: Record<K, Cards<TDetail>>;
  onSelect: (name: K) => void;
};

export const CardList = <K extends string, TDetail>({ list, cards, onSelect }: Props<K, TDetail>) => {
  return (
    <ul className="sm:flex sm:justify-center sm:items-stretch *:flex-1 gap-4 max-w-7xl">
      {list.map((name) => {
        const p = cards[name];
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
};
