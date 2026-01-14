type TechTag = string[];

type Props = {
  tags: TechTag;
  parent: string;
}

const TechTag = ({ tags, parent }: Props) => {
  return (
    <ul className="flex flex-wrap items-center gap-2">
      {tags.map((tech, index) => (
        <li key={`tech_${parent}_${index}`} className="py-1 px-3 border rounded-full text-sm font-medium">{tech}</li>
      ))}
    </ul>
  );
}

export default TechTag