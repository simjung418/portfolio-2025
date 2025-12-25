import Link from "next/link";

export default function Navigation () {
  return (
    <div>
      <ul className="flex gap-7">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/skill">Skills</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/career">Career</Link></li>
        <li><Link href="/todos">Contact</Link></li>
      </ul>
    </div>
  )
}