import { Metadata } from "next";

export const getSafePageTitle = (metadata: Metadata) => {
  if (metadata.title) {
    return String(metadata.title);
  }
  return "";
}