import ClientTitleSetter from "@/providers/ClientTitleSetter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ClientTitleSetter pageTitle="Projects" />
      {children}
    </div>
  );
}
