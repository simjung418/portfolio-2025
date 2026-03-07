import { BaseCard } from "@/lib/portfolio/card";

export const PROJECT_LIST = ["todos", "portfolio"/* , "api", "wotd" */] as const;

export type ProjectListKeys = (typeof PROJECT_LIST)[number];

export type ProjectCards = BaseCard;