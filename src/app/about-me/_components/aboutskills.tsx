type SkillCardProps = {
  title: string;
  content: string;
};

export default function Aboutskills({ title, content }: SkillCardProps) {
  return (
    <div className="border border-gray-primary w-full sm:w-[48%] md:w-[30%] lg:w-[16%]">
      <div className="border-b border-gray-primary p-2">
        <p>{title}</p>
      </div>
      <div className="p-2">
        <p>{content}</p>
      </div>
    </div>
  );
}
