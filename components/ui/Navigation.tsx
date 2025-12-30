import Link from "next/link";

export const Navigation = () => {
  return (
    <div>
      <ul className="flex gap-7">
        <li className="px-2 py-1 rounded-md border cursor-pointer">
          <Link href="/">
            Home
          </Link>
        </li>
        <li className="px-2 py-1 rounded-md border cursor-pointer">
          <Link href="/about">
            About
          </Link>
        </li>
        <li className="px-2 py-1 rounded-md border cursor-pointer">
          <Link href="/skill">
            Skills
          </Link>
        </li>
        <li className="px-2 py-1 rounded-md border cursor-pointer">
          <Link href="/projects">
            Projects
          </Link>
        </li>
        <li className="px-2 py-1 rounded-md border cursor-pointer">
          <Link href="/career">
            Career
          </Link>
        </li>
        <li className="px-2 py-1 rounded-md border cursor-pointer">
          <Link href="/todos">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
