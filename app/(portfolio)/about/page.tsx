import { Metadata } from "next";
import AboutContent from "./content.mdx";
import ArticleLayout from "@/components/ui/ArticleLayout";

export const metadata: Metadata = {
  title: "Aboutme",
};

export default function AboutPage() {
  return (
    <ArticleLayout>
      <div className="[&_p]:max-w-[70ch] [&_p]:indent-2">
        <AboutContent />
      </div>
    </ArticleLayout>
  );
}
