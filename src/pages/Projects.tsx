import { ProjectBox } from "../components/ProjectBox";

export const Projects = () => {
  const projects = [
    {title: "AUDIBELLE - ENDLESS LEARNER", type:"VR Game", year:2025,
      desc: "This was my capstone project, it is a VR game made to integrate with the pre-existing ecosystem of ELLE games. Sponsored by the language learning department in the university of central florida."},
    {title: "LEBAEK.ID", type:"Web", year:2026, 
      desc:"A Full-stack web application built using React and Node.js and styled with tailwind. The site features a blog, events calendar and gallery. All packaged in a responsive design."},
    {title: "IMAGE SCRAPER FOR CARD PROXY", type:"Tool / Utility", year:2026, 
      desc:"A tool to automate getting images for Yu-Gi-Oh Card Proxies. Built with Python using the Beautiful Soup library."},
    {title: "DULCE BY ELISE", type: "Web", year:2026,
      desc:"Full-stack development for a bakery and cafe establishment. Initial designs made with figma and brought to life using React and styled with Tailwind. Featuring in-app contact to the business to streamline orders and bookings."
    },
  ]  
  return (
    <div
      id="project"
      className="text-start text-black
                 py-5 h-auto scroll-mt-7
                 bg-[#F5F5F5] px-2">
      <p className="font-Rodin ">SECTION 03: <span className="font-SkipStd">Project</span></p>
      <div className="flex flex-col my-5">
      <ProjectBox p={projects.slice().reverse()} />
      </div>
    </div>
  );
};
