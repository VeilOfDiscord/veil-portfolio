export const Footer = () => {
  return (
    <>
      <div className="relative max-h-screen w-screen left-1/2 -translate-x-1/2 bg-[#1D1D1D]">
        {/* <div className="flex font-semibold h-20 justify-start items-center px-30">
          <span className="text-white text-xl font-SkipStd">Portfolio</span>
        </div> */}
        <ul className="flex font-semibold h-20 justify-end items-center px-30">
          <li className="p-4 rounded-4xl group">
            <a href="https://github.com/VeilOfDiscord">
              <span className="text-white text-xl underline underline-offset-3 decoration-[#2e2e2e] font-light">
                GITHUB
              </span>
            </a>
          </li>
          <li className="p-4 rounded-4xl group">
            <a href="https://www.linkedin.com/in/nathaell-avril-leman-7b89b9209">
              <span className="text-white text-xl underline underline-offset-3 decoration-[#2e2e2e] font-light">
                LINKEDIN
              </span>
            </a>
          </li>
          <li className="p-4 rounded-4xl group">
            <a href="mailto:avrilnathaell@gmail.com">
              <span className="text-[#f9ad1c] text-xl font-light">EMAIL</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
