import { ReactNode } from "react";
import { HeroKpi } from "./kpi";

export const CAREER_LIST = ["iso", "platform", "deepread2", "bisat2", "metafield", "lexcloud", "bavl", "l10n"] as const;

export type CareerListKeys = (typeof CAREER_LIST)[number];

export type CareerDetail = {
  challenge: ReactNode;
  action: ReactNode;
  result: ReactNode;
};

export type CareerCards = {
  title: ReactNode;
  tech?: string[];
  highlight?: HeroKpi;
  desc: ReactNode;
  term: string;
  tabName?: string;
  detail: CareerDetail;
  imgs?: {
    src: string;
    label: string;
  }[];
};
