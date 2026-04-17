"use client";

import { ShopWithD, Position, DEFAULT_LOCATION } from "@/lib/trashbag/trashbag";
import { useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

type Props = {
  selectedShop: ShopWithD | null;
  userLocation: Position;
};

export default function TrashBagMap({ selectedShop, userLocation }: Props) {
  console.log("TrashBagMap render", { selectedShop, userLocation });

  useEffect(() => {
    console.log("map mount");
    return () => console.log("map unmount");
  }, []);
  const coordinate = selectedShop ? { lat: selectedShop.lat, lng: selectedShop.lot } : null;
  const location = userLocation
    ? { lat: userLocation.lat, lng: userLocation.lot }
    : { lat: DEFAULT_LOCATION.lat, lng: DEFAULT_LOCATION.lot };
  return (
    <div className="relative h-full w-full">
      {selectedShop === null && <div>판매소를 선택해주세요.</div>}
      <div className="sticky top-0 right-0 w-full border">
        <Map center={coordinate ?? location} style={{ width: "100%" }} className="aspect-square" isPanto={true}>
          <MapMarker position={location}>
            <div style={{ color: "#000" }}>현위치</div>
          </MapMarker>
          {selectedShop && (
            <MapMarker position={coordinate!}>
              <div style={{ color: "#000" }}>{selectedShop?.stoNm}</div>
            </MapMarker>
          )}
        </Map>
      </div>
    </div>
  );
}
