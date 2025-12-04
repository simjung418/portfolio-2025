import SectionTitle from "@/components/sectionTitle";
import { getSafePageTitle } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = { 
  title: "Todos",
}

const title = getSafePageTitle(metadata);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-neutral-50 h-screen py-10 px-5">
      <SectionTitle title={title} />
      {children}
    </div>
  );
}
