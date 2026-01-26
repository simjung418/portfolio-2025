type TechTag = string[];

type Props = {
  tags: TechTag;
  parent: string;
}

const TechTag = ({ tags, parent }: Props) => {
  return (
    <ul className="flex flex-wrap items-center gap-2">
      {tags.map((tech, index) => (
        <li key={`tech_${parent}_${index}`} className="py-1 px-3 border border-neutral-300 text-neutral-600 bg-neutral-50 rounded-full text-sm font-medium">{tech}</li>
      ))}
    </ul>
  );
}

export default TechTag