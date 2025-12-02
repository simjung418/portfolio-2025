import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export default function SectionTitle(param: string) {
  return <h2 className={orbitron.variable}>{param}</h2>;
}
