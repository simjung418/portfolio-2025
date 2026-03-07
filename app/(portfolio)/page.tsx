import Hero from "@/components/hero/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home"
};

export default function HomePage() {
  return <Hero />;
}
