"use client";

import { DEFAULT_LOCATION, Position } from "@/lib/trashbag/trashbag";
import { filterShopByDistance, normalizeShops } from "@/lib/trashbag/utils";
import { useEffect, useMemo, useState } from "react";

const useUserLocation = () => {
  const [userLocation, setUserLocation] = useState<Position>(DEFAULT_LOCATION);
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lot: pos.coords.longitude
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
  return userLocation;
};

export const useShopInfo = (maxDistance: number) => {
  const userLocation = useUserLocation();
  const filteredList = useMemo(() => {
    return filterShopByDistance(normalizeShops, userLocation, maxDistance);
  }, [userLocation, maxDistance]);
  return { filteredList, userLocation };
};
