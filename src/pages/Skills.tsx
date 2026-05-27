import { List } from "../components/List";

export const Skills = () => {
  const stack = [
    { i: "TypeScript" },
    { i: "Python" },
    { i: "React" },
    { i: "TailwindCSS" },
    { i: "NodeJS" },
    { i: "MySQL" },
    { i: "Git" },
    { i: "PHP" },
  ];
  const tools = [
    { i: "Figma" },
    { i: "Jira" },
    { i: "REST APIs" },
    { i: "Agile/Scrum" },
  ];

  const languages = [{ i: "English" }, { i: "Indonesian" }, { i: "Japanese" }];

  const softSkills = [
    { i: "Project Coordination" },
    { i: "Technical Documentation" },
    { i: "Client-facing communication" },
  ];

  const others = [
    { i: "Unity" },
    { i: "Virtual Reality" },
    { i: "Oculus SDK" },
    { i: "GPX/Data Parsing" },
  ];

  return (
    <>
      <div
        id="skill"
        className="font-Rodin text-black text-start
                   py-5 min-h-[50vh] scroll-mt-7 
                   border-b border-black bg-[#F5F5F5] px-2
                   "
      >
        SECTION 02: <span className="font-SkipStd">Skill</span>
        <div className="flex flex-row justify-center mt-10 mx-20 gap-30">

          <div className="w-[30vw]">
            <div className="flex flex-col gap-2 p-5 border-2 mb-2">
              <List title={"Languages"} list={languages} css={"flex flex-wrap gap-3 m-1 border p-1"} line={true}/>
              <List title={"Soft skills"} list={softSkills} css={"flex flex-wrap gap-3 m-1 border p-1"} line={true}/>
            </div>

            <div className="p-5 border-2 border-dashed my-3 border-[#6E717D] text-[#6E717D]">
                <List title={"Also Worked With"} list={others} css={"border border-dashed p-1 text-[#6E717D]"} line={false} />
            </div>
          </div>
          
          <div className="w-[30vw]">
            <div className="flex flex-col gap-15">
              <List title={"Tech Stack"} list={stack} css={"px-2 my-1 border text-white text-xl bg-neutral-700 rounded-md"} line={false} />
              <List title={"Tools & Workflow"} list={tools} css={"px-2 my-1 border text-xl rounded-md"} line={false}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
