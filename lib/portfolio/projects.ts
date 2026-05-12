export const PROJECT_LIST = ["letsooo", "portfolio", "trashbag", "todos"] as const;

export type ProjectListKeys = (typeof PROJECT_LIST)[number];
