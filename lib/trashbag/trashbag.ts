export const DEFAULT_LOCATION: Position = {
  lat: 37.5665,
  lot: 126.978
};

export type Position = {
  lat: number;
  lot: number;
};

export type JsonShop = {
  판매소명: string;
  시도명: string;
  시군구명: string;
  소재지도로명주소: string;
  소재지지번주소: string;
  위도: string;
  경도: string;
  사업자등록번호: string;
  대형폐기물스티커판매여부: string;
  영업상태명: string;
  전화번호: string;
  지정일자: string;
  폐업일자: string;
  관리기관명: string;
  데이터기준일자: string;
  제공기관코드: string;
  제공기관명: string;
};

export type Shop = {
  stoNm: string; // 판매소명
  ctpvNm: string; // 시도명
  sggNm: string; // 시군구명
  lctnRoadNmAddr: string; // 소재지도로명주소
  lctnLotnoAddr: string; // 소재지지번주소
  lat: number; // 위도
  lot: number; // 경도
  bzmnRegNo: string; // 사업자등록번호
  // larWasStiYn: string; // 대형폐기물스티커판매여부
  busiCodNm: string; // 영업상태명
  telno: string; // 전화번호
  degYmd: string; // 지정일자
  // eobYmd: string; // 폐업일자
  // mngInstNm: string; // 관리기관명
  crtrYmd: string; // 데이터기준일자
  // insttCode: string; // 제공기관코드
  // insttNm: string; // 제공기관명
};

export type ShopWithD = Shop & { distance: number }; // 거리

export type Region = { ctpvNm: string; sggNm: string };

export type Price = {
  ctprvnNm: string;
  signguNm: string;
  weightedEnvlpType: string;
  weightedEnvlpMthd: string;
  weightedEnvlpPrpos: string;
  weightedEnvlpTrget: string;
  price1: string;
  price1Half: string;
  price2: string;
  price2Half: string;
  price3: string;
  price5: string;
  price10: string;
  price20: string;
  price30: string;
  price50: string;
  price60: string;
  price75: string;
  price100: string;
  price120: string;
  price125: string;
  chrgDeptNm: string;
  phoneNumber: string;
  referenceDate: string;
  insttCode: string;
  insttNm: string;
};

export type MergedPrice = {
  price1: string;
  price1Half: string;
  price2: string;
  price2Half: string;
  price3: string;
  price5: string;
  price10: string;
  price20: string;
  price30: string;
  price50: string;
  price60: string;
  price75: string;
  price100: string;
  price120: string;
  price125: string;
};

export type TrashUsage = "가정용" | "사업장용";
