import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({title}: SectionTitleProps) {
  return <h2 className={`${orbitron.className} text-7xl font-stretch-ultra-expanded`}>{title}</h2>;
}
