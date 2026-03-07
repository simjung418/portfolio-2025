import { BaseCard } from "@/lib/portfolio/card";
import { ReactNode } from "react";

export const CAREER_LIST = [
  "bisat2",
  "iso",
  "deepread2",
  "lexcloud",
  "metafield",
  "bavl",
  "platform",
  "l10n",
] as const;

export type CareerListKeys = (typeof CAREER_LIST)[number];

export type CareerDetail = {
  challenge: ReactNode;
  action: ReactNode;
  result: ReactNode;
};

export type CareerCards = BaseCard & {
  desc: ReactNode;
  term: string;
  tabName?: string;
  detail: CareerDetail;
};