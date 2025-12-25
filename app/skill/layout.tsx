import ClientTitleSetter from "@/providers/ClientTitleSetter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "기술 스텍 목록",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ClientTitleSetter pageTitle="Skills" />
      {children}
    </div>
  );
}
