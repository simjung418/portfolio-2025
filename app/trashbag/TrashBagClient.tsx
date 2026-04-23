"use client";

import { MergedPrice, ShopWithD, TrashUsage } from "@/lib/trashbag/trashbag";
import { useShopInfo } from "./useShopInfo";
import { formatComma, getRegionKey, getUniqueRegions, getliKey } from "@/lib/trashbag/utils";
import { badgeClass } from "@/lib/portfolio/classNameMap";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowsRightLeftIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import TrashBagMap from "./TrashBagMap";

export default function TrashBagClient() {
  // states for UI
  const [maxDistance, setMaxDistance] = useState(1000);
  const [page, setPage] = useState(1);
  const [usage, setUsage] = useState<TrashUsage>("가정용");
  const { filteredList, userLocation } = useShopInfo(maxDistance);
  const pagedList = useMemo(() => {
    const endNum = page * 10;
    return filteredList.slice(0, endNum);
  }, [filteredList, page]);
  const listedRegions = useMemo(() => getUniqueRegions(pagedList), [pagedList]);
  const hasMore = pagedList.length < filteredList.length;
  const [priceMap, setPriceMap] = useState<Record<string, MergedPrice>>({});
  const [addressTypeMap, setAddressTypeMap] = useState<Record<string, "road" | "lotno">>({});
  const [selectedShopKey, setSelectedShopKey] = useState<string | null>(null);
  const selectedShop = useMemo(() => {
    return (
      pagedList.find((item) => {
        const liKey = getliKey(item.bzmnRegNo, item.stoNm, item.sggNm, item.degYmd);
        return liKey === selectedShopKey;
      }) ?? null
    );
  }, [pagedList, selectedShopKey]);

  // useEffects
  useEffect(() => {
    setPage(1);
  }, [filteredList]);
  useEffect(() => {
    if (listedRegions.length === 0) {
      setPriceMap({});
      return;
    }
    const fetchPrice = async () => {
      try {
        const response = await fetch("../api/trashbag", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ regions: listedRegions, usage })
        });
        const data = await response.json();
        setPriceMap(data);
      } catch (error) {
        console.error(error);
      }
    };
    void fetchPrice();
  }, [listedRegions, usage]);

  // useRef / Obervation
  const observerTargetRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const target = observerTargetRef.current;

    if (!target || !hasMore) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0.1
      }
    );
    observer.observe(target);
    return () => {
      observer.disconnect();
    };
  }, [hasMore]);

  return (
    <div className="flex items-stretch gap-5">
      {/* list area started */}
      <div className="max-w-sm flex-1">
        <div className="sticky top-0 flex h-20 items-center justify-between bg-neutral-50 pt-6">
          <div>주변에 {filteredList.length}개의 판매소</div>
          <select
            name="maxDistance"
            id="maxDistance"
            onChange={(e) => {
              setMaxDistance(Number(e.target.value));
            }}
            value={maxDistance}
          >
            <option value={0}>거리</option>
            <option value={1000}>1km</option>
            <option value={10000}>10km</option>
            <option value={20000}>20km</option>
            <option value={30000}>30km</option>
            <option value={50000}>50km</option>
          </select>
        </div>
        {pagedList.length > 0 ? (
          <div>
            <ul>
              {pagedList.map((item: ShopWithD) => {
                const regionKey = getRegionKey(item.ctpvNm, item.sggNm);
                const matchedPrice = priceMap[regionKey];
                const liKey = getliKey(item.bzmnRegNo, item.stoNm, item.sggNm, item.degYmd);
                const addressType = addressTypeMap[liKey] ?? "road";
                const address = addressType === "road" ? item.lctnRoadNmAddr : item.lctnLotnoAddr;
                const selected = selectedShopKey === liKey;
                return (
                  <li
                    key={liKey}
                    className={clsx(
                      "flex flex-col gap-3 border-b border-b-zinc-200 p-3 cursor-pointer",
                      selected ? "bg-white" : "bg-neutral-50"
                    )}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedShopKey(liKey);
                    }}
                  >
                    <div className="flex items-baseline gap-2">
                      <h3 className={clsx("text-xl font-bold", selected ? "text-green-500" : "text-zinc-700")}>
                        {item.stoNm}
                      </h3>
                      <p className="text-zinc-400">{formatComma(Math.floor(item.distance))}m</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {addressType === "road" ? (
                        <p className="flex items-center gap-1">
                          <span className={badgeClass}>도로명주소</span>
                          {item.lctnRoadNmAddr}
                        </p>
                      ) : (
                        <p className="flex items-center gap-1">
                          <span className={badgeClass}>지번주소</span>
                          {item.lctnLotnoAddr}
                        </p>
                      )}
                      <div className="flex items-center gap-1">
                        <DocumentDuplicateIcon
                          className="size-5 text-zinc-400"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigator.clipboard.writeText(address);
                          }}
                        />
                        <ArrowsRightLeftIcon
                          className="size-5 text-zinc-400"
                          onClick={(e) => {
                            e.stopPropagation();
                            setAddressTypeMap((prev) => ({
                              ...prev,
                              [liKey]: addressType === "road" ? "lotno" : "road"
                            }));
                          }}
                        />
                      </div>
                    </div>
                    {item.telno !== "" && (
                      <p className="flex items-center gap-1">
                        <span className={badgeClass}>전화번호</span>
                        {item.telno}
                      </p>
                    )}
                    {matchedPrice !== undefined && (
                      <div>
                        <ul className="flex w-fit overflow-hidden rounded-md border border-zinc-100">
                          {Object.entries(matchedPrice).map(([key, value]) => {
                            if (value === "0") return;
                            const label = `${key.split("e")[1]}ℓ`;
                            return (
                              <li key={`${liKey}-${key}`} className="">
                                <div
                                  className={clsx(
                                    "px-3 py-1 text-center text-sm",
                                    selected ? "bg-green-100 text-green-500" : "bg-zinc-100 text-zinc-400"
                                  )}
                                >
                                  {label}
                                </div>
                                <div className="px-3 py-1 text-center font-medium text-zinc-800">{value}원</div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            {hasMore ? (
              <div ref={observerTargetRef} className="py-4 text-center text-sm text-zinc-400">
                더 불러오는중
              </div>
            ) : (
              pagedList.length > 0 && <div className="py-4 text-center text-sm text-zinc-400">마지막까지 모두 불러왔어요.</div>
            )}
          </div>
        ) : (
          <div>
            {maxDistance !== 0 ? (
              <div className="my-4 flex items-center justify-center rounded-md bg-zinc-100 p-4 text-center text-zinc-600">
                지원하지 않는 지역이에요.
                <br />
                범위를 넓혀보세요.
              </div>
            ) : (
              <div className="item-center my-4 flex justify-center rounded-md bg-zinc-100 p-4 text-center text-zinc-600">
                주변 거리를 설정해보세요.
              </div>
            )}
          </div>
        )}
      </div>
      {/* listed area ended */}

      {/* map area started */}
      <div className="flex-3">
        <TrashBagMap selectedShop={selectedShop} userLocation={userLocation} />
      </div>
      {/* map area ended */}
    </div>
  );
}
