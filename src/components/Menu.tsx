export const Menu = () => {
  return (
    <div className="absolute text-5xl right-0 top-[50vh] justify-items-end">
      <p className="my-3 py-3">
        <a href="#skill">
          <span className="font-Rodin pl-10 mr-23 pr-6  hover:text-[#F5F5F5] hover:bg-[#1D1D1D] text-black font-normal">
            SKILLS
          </span>
        </a>
      </p>
      <p className="my-3 py-3">
        <a href="#project">
          <span className="font-Rodin pl-10 mr-23 pr-6 hover:text-[#F5F5F5] hover:bg-[#1D1D1D] text-black font-normal">
            PROJECTS
          </span>
        </a>
      </p>
      <p className="my-3 py-3">
        <a href="#about">
          <span className="font-Rodin pl-10 mr-23 pr-6 hover:text-[#F5F5F5] hover:bg-[#1D1D1D] text-black font-normal">
            ABOUT ME
          </span>
        </a>
      </p>
      {/* <p className="my-3 py-3">
          <a href="#background">
            <span className="font-Rodin pl-10 mr-23 pr-6 hover:text-[#F5F5F5] hover:bg-[#1D1D1D] text-black font-normal">
              BACKGROUND
            </span>
          </a>
        </p> */}
    </div>
  );
};
