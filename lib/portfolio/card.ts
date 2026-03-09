export const PROJECT_STATUSES = ["PROCESSING", "UPCOMING"] as const;

export type ProjectStatus = (typeof PROJECT_STATUSES)[number];

export type BaseCard = {
  title: string;
  tech?: string[];
  status?: ProjectStatus;
};