import { Metadata } from "next";
import AboutContent from "./content.mdx";
import BasicLayout from "@/components/ui/BasicLayout";

export const metadata: Metadata = {
  title: "Aboutme",
};

export default function AboutPage() {
  return (
    <BasicLayout>
      <div className="[&_p]:max-w-[70ch]">
        <AboutContent />
      </div>
    </BasicLayout>
  );
}
