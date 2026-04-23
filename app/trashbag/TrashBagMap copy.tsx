"use client";

import { ShopWithD, Position } from "@/lib/trashbag/trashbag";
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

type Props = {
  selectedShop: ShopWithD | null;
  userLocation: Position;
};

type KakaoPosition = {
  lat: number;
  lng: number;
};

export default function TrashBagMap({ selectedShop, userLocation }: Props) {
  const [coordinate, setCoordinate] = useState<KakaoPosition | null>(null);
  const [location, setLocation] = useState({ lat: userLocation.lat, lng: userLocation.lot });
  const [center, setCenter] = useState(location);
  useEffect(() => {
    if (selectedShop) setCoordinate({ lat: selectedShop.lat, lng: selectedShop.lot });
  }, [selectedShop]);
  useEffect(() => {
    if (userLocation) setLocation({ lat: userLocation.lat, lng: userLocation.lot });
  }, [userLocation]);
  useEffect(() => {
    if (!coordinate) {
      setCenter(location);
      return;
    }
    const lat = (coordinate.lat - location.lat) / 2;
    const lng = (coordinate.lng - location.lng) / 2;
    setCenter({ lat:coordinate.lat, lng:coordinate.lng });
  }, [coordinate, location]);
  return (
    <div className="relative h-full w-full">
      <div className="sticky top-0 right-0 w-full border">
        <Map center={center} style={{ width: "100%" }} className="aspect-square" isPanto={true}>
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
