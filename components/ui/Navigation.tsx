import Link from "next/link";

const links:Record<MenuNames,LinkDetails> = {
  home: {
    route: "/",
    title: "Home"
  },
  about: {
    route: "/about",
    title: "About"
  },
  skills: {
    route: "/skill",
    title: "Skills"
  },
  projects: {
    route: "/projects",
    title: "Projects"
  },
  career: {
    route: "/career",
    title: "Career"
  },
  contact: {
    route: "/todos",
    title: "Contact"
  },
}

const menus = [
  "home",
  "about",
  "skills",
  "projects",
  "career",
  "contact"
];

type MenuNames = typeof menus[number];

type LinkDetails = {
  route: string,
  title: string
}

export const Navigation = () => {
  return (
    <div>
      <ul className="flex gap-7">
        {menus.map((menu) => {
          const link = links[menu];
          return (
            <li className="cursor-pointer">
              <Link className="px-2 py-1 rounded-md border" href={link.route}>
                {link.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
};
