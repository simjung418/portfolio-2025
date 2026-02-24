import { Metadata } from "next";
import AboutContent from "./content.mdx";
import AboutLayout from "@/components/mdx/AboutLayout";

export const metadata: Metadata = {
  title: "Aboutme",
};

export default function AboutPage() {
  return (
    <AboutLayout>
      <div className="[&_p]:max-w-[70ch] mb-8">
        <AboutContent />
      </div>
    </AboutLayout>
  );
}
