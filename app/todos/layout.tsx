import { Metadata } from "next";

export const metadata: Metadata = { 
  title: "Todos",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-neutral-50 h-screen py-10">
      {children}
    </div>
  );
}
