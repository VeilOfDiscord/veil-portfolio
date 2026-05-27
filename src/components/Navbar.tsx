export const Navbar = () => {
  const css =
    "text-white text-xl underline underline-offset-3 decoration-[#2e2e2e] font-light group-hover:text-[#f9ad1c] group-hover:underline-offset-5 group-hover:decoration-[#f9ad1c]";
  return (
    <>
      <nav className="relative w-screen left-1/2 -translate-x-1/2">
        <ul className="flex bg-[#1D1D1D] font-semibold h-20 justify-end items-center px-30">
          <li className="p-2 px-8 rounded-4xl group">
            <a href="#about">
              <span className={css}>ABOUT ME</span>
            </a>
          </li>
          <li className="p-2 px-8 rounded-4xl group">
            <a href="#skill">
              <span className={css}>SKILLS</span>
            </a>
          </li>
          <li className="p-2 px-8 rounded-4xl group">
            <a href="#project">
              <span className={css}>PROJECTS</span>
            </a>
          </li>
          {/* <li className="p-2 px-8 rounded-4xl group">
            <a href="#background">
              <span className="text-white text-xl underline underline-offset-3 decoration-[#2e2e2e] font-light
                              group-hover:text-[#f9ad1c] group-hover:underline-offset-5 group-hover:decoration-[#f9ad1c]">
                BACKGROUND
              </span>
            </a>
          </li> */}
        </ul>
      </nav>
    </>
  );
};
