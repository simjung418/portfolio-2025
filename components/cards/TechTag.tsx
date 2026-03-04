import clsx from "clsx";

type TechTag = string[];

type Props = {
  tags: TechTag;
  parent: string;
  parentClicked: boolean;
};

const TechTag = ({ tags, parent, parentClicked }: Props) => {
  return (
    <ul className="not-prose flex flex-wrap items-center gap-2">
      {tags.map((tech, index) => (
        <li
          key={`tech_${parent}_${index}`}
          className={clsx(
            "not-prose list-none rounded-full border bg-neutral-50 px-3 py-1 text-sm font-medium md:text-lg",
            parentClicked
              ? "border-green-200 text-green-400"
              : "border-neutral-300 text-neutral-600",
          )}
        >
          {tech}
        </li>
      ))}
    </ul>
  );
};

export default TechTag;
