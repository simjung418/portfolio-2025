"use server";

import { Price, Region, TrashUsage } from "@/lib/trashbag/trashbag";

export const getPrice = async (region: Region, usage: TrashUsage) => {
  const priceParams = new URLSearchParams({
    // serviceKey: "95b3109d1398182c2fd249c845a629695692852c44ed8ff78edf517058c03678",
    serviceKey: process.env.NEXT_PUBLIC_DATA_PUBLIC_KEY ?? "",
    type: "json",
    pageNo: "1",
    numOfRows: "100",
    WEIGHTED_ENVLP_PRPOS: "생활쓰레기",
    WEIGHTED_ENVLP_TYPE: "규격봉투",
    WEIGHTED_ENVLP_TRGET: usage,
  });

  if (region?.ctpvNm) {
    priceParams.set("CTPRVN_NM", region.ctpvNm);
  } else {
    return;
  }

  if (region?.sggNm) {
    priceParams.set("SIGNGU_NM", region.sggNm);
  } else {
    return;
  }

  // 공공데이터포털 API는 서버 환경에서 https 연결이 불안정한 경우가 있어 우선 http로 호출한다.
  const priceAPI = "http://api.data.go.kr/openapi/tn_pubr_public_weighted_envlp_api";
  const requestUrl = `${priceAPI}?${priceParams.toString()}`;

  try {
    const priceResponse = await fetch(requestUrl, {
      method: "GET",
      cache: "no-store"
    });

    const rawText = await priceResponse.text();

    if (!priceResponse.ok) {
      throw new Error(`가격 API 응답 실패: ${priceResponse.status}`);
    }

    const priceResult = JSON.parse(rawText);
    const items = priceResult?.response?.body?.items ?? [] as Price[];

    const reducedPrice = items.reduce((acc: Partial<Price>, cur: Price) => {
      Object.entries(cur).forEach(([key, value]) => {
        const typedKey = key as keyof Price;
        acc[typedKey] = acc[typedKey] ?? value;
      });
      return acc;
    }, {});

    return reducedPrice;
  } catch (error) {
    console.error("[getPrice] fetch failed:", error);
    throw error;
  }
};
