import { MergedPrice, Region, TrashUsage } from "@/lib/trashbag/trashbag";
import { getPrice } from "../../trashbag/actions";
import { NextRequest, NextResponse } from "next/server";
import { getRegionKey } from "@/lib/trashbag/utils";

type Props = {
  regions: Region[];
  usage: TrashUsage;
};

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const regions = body.regions ?? ([] as Region[]);
    const usage = body.usage ?? ("가정용" as TrashUsage);

    if (!Array.isArray(regions)) {
      return NextResponse.json({ status: "400" });
    }
    const prices = await getRegionPrice({ regions, usage });

    return NextResponse.json(prices);
  } catch (error) {
    console.error(error);
  }
};

export const getRegionPrice = async ({ regions, usage }: Props) => {
  const result = await Promise.all(
    regions.map(async (region) => {
      const response = await getPrice(region, usage);
      return {
        region,
        price: {
          price1: response.price1,
          price1Half: response.price1Half,
          price2: response.price2,
          price2Half: response.price2Half,
          price3: response.price3,
          price5: response.price5,
          price10: response.price10,
          price20: response.price20,
          price30: response.price30,
          price50: response.price50,
          price60: response.price60,
          price75: response.price75,
          price100: response.price100,
          price120: response.price120,
          price125: response.price125
        }
      };
    })
  );
  const priceMap = result.reduce(
    (acc: Record<string, MergedPrice>, cur) => {
      const regionKey = getRegionKey(cur.region.ctpvNm, cur.region.sggNm);
      acc[regionKey] = cur.price;
      return acc;
    },
    {} as Record<string, MergedPrice>
  );

  return priceMap;
};
