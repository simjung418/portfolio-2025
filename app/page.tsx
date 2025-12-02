import SectionTitle from "@/components/sectionTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const title: string = metadata.title;

console.log(title);

export default function Home() {
  return (
    <>
      <SectionTitle param={title} />
      <div>멀보냐</div>
    </>
  );
}
