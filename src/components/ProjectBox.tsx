interface projectProp {
  title: string;
  type: string;
  year: number;
  desc: string;
} 

export const ProjectBox = ({ p }: { p: projectProp[] }) => {
  return (
    <>
    {p.map((project) => (
      <div className="grid items-start mx-auto m-2 p-3 border border-black w-full max-w-250">
        <p className="text-semibold text-lg">{project.title}</p>
        <p className="text-sm">
           <span className="text-amber-400 font-Rodin">{project.type}{" - "}{project.year}</span>
        </p>
        <p className="mt-2 font-light">{project.desc}</p>
      </div>
    ))}
    </>
  );
};
