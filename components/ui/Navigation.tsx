import Link from "next/link";

export const Navigation = () => {
  return (
    <div>
      <ul className="flex gap-7">
        <li>
          <Link href="/" className="px-2 py-1 rounded-md border cursor-pointer">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="px-2 py-1 rounded-md border cursor-pointer">
            About
          </Link>
        </li>
        <li>
          <Link href="/skill" className="px-2 py-1 rounded-md border cursor-pointer">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/projects" className="px-2 py-1 rounded-md border cursor-pointer">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/career" className="px-2 py-1 rounded-md border cursor-pointer">
            Career
          </Link>
        </li>
        <li>
          <Link href="/todos" className="px-2 py-1 rounded-md border cursor-pointer">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
