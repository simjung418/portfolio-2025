import shopsData from "./shopsData.json";
import { JsonShop, Position, Region, Shop, ShopWithD } from "./trashbag";

const getDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
  const R = 6371e3; // 지구 반지름 (미터)

  const radLat1 = (lat1 * Math.PI) / 180;
  const radLat2 = (lat2 * Math.PI) / 180;
  const deltaLat = ((lat2 - lat1) * Math.PI) / 180;
  const deltaLot = ((lng2 - lng1) * Math.PI) / 180;

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(deltaLot / 2) * Math.sin(deltaLot / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // 거리 (미터)

  return d;
};

export const formatComma = (price: number): string => {
  return price.toLocaleString("ko-KR");
};

const typedShopsData = shopsData as { records: JsonShop[] };
export const normalizeShops: Shop[] = typedShopsData.records
  .map((shop: JsonShop) => {
    const rowlat = shop["위도"];
    const rowlot = shop["경도"];
    const lat = rowlat === "" || rowlat == null ? NaN : Number(rowlat);
    const lot = rowlot === "" || rowlot == null ? NaN : Number(rowlot);
    return {
      stoNm: shop["판매소명"],
      ctpvNm: shop["시도명"],
      sggNm: shop["시군구명"],
      lctnRoadNmAddr: shop["소재지도로명주소"],
      lctnLotnoAddr: shop["소재지지번주소"],
      lat: lat,
      lot: lot,
      bzmnRegNo: shop["사업자등록번호"],
      busiCodNm: shop["영업상태명"],
      telno: shop["전화번호"],
      degYmd: shop["지정일자"],
      crtrYmd: shop["데이터기준일자"],
      distance: 0
    };
  })
  .filter((shop: Shop) => Number.isFinite(shop.lat) && Number.isFinite(shop.lot) && shop.busiCodNm !== "폐업");

export const filterShopByDistance = (shops: Shop[], location: Position, maxDistance: number = 1000) => {
  return shops
    .filter((shop: Shop) => Math.abs(shop.lat - location.lat) < 0.5 && Math.abs(shop.lot - location.lot) < 0.5)
    .map((shop: Shop): ShopWithD => {
      const distance = getDistance(location.lat, location.lot, shop.lat, shop.lot);
      return { ...shop, distance: distance };
    })
    .filter((shop: ShopWithD) => shop.distance <= maxDistance && shop.lctnLotnoAddr)
    .sort((a: ShopWithD, b: ShopWithD) => a.distance! - b.distance!);
};

export const getUniqueRegions = (list: ShopWithD[]): Region[] => {
  const regionsString = [...new Set(list.map((item) => `${item.ctpvNm}-${item.sggNm}`))];
  const regionsArray: Region[] = [];
  regionsString.forEach((item) => {
    const [ctpvNm, sggNm] = item.split("-");
    regionsArray.push({ ctpvNm: ctpvNm, sggNm: sggNm });
  });
  return regionsArray;
};

export const getRegionKey = (ctpvNm: string, sggNm: string) => `${ctpvNm}-${sggNm}`;
