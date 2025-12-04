import Link from "next/link";

export default function Navigation () {
  return (
    <div>
      <ul>
        <li><Link href="/"> Home</Link></li>
        <li><Link href="/todos">Career</Link></li>
        <li><Link href="/todos">Todos</Link></li>
        <li><Link href="/todos">Contact</Link></li>
      </ul>
    </div>
  )
}