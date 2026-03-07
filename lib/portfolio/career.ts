import { BaseCard } from "@/lib/portfolio/card";
import { ReactNode } from "react";
import { HeroKpi } from "./kpi";

export const CAREER_LIST = [
  "iso",
  "deepread2",
  "platform",
  "bisat2",
  "lexcloud",
  "metafield",
  "bavl",
  "l10n",
] as const;

export type CareerListKeys = (typeof CAREER_LIST)[number];

export type CareerDetail = {
  challenge: ReactNode;
  action: ReactNode;
  result: ReactNode;
};

export type CareerCards = BaseCard & {
  highlight?: HeroKpi;
  desc: ReactNode;
  term: string;
  tabName?: string;
  detail: CareerDetail;
};