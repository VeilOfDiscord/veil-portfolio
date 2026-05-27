import bio2 from "../assets/screentones/bio3.jpg";
export const About = () => {
  return (
    <>
      <div className="grid grid-cols-2 border-b border-black h-auto bg-[#F5F5F5] px-2">
        <p className="font-Rodin text-start text-black pt-5">
          SECTION 01: <span className="font-SkipStd">About</span>
        </p>
        <div className="border-l border-black pt-5"></div>
        {/* Left */}
        <div
          id="about"
          className="flex flex-col items-center text-black 
                   mt-5 scroll-mt-5"
        >
          <div className="w-60 aspect-square overflow-hidden">
            <img
              // src={bio1}
              src={bio2}
              // src={db}
              alt="apocalytic dream"
              className="w-full h-full object-top object-cover border border-black justify-center mx-auto m-7"
            />
          </div>

          <p className="sm:text-md md:text-xl max-w-100 w-auto m-3 font-Rodin p-2 ">
            “I am a programmer based in Indonesia with experience in web
            development and software engineering.”
          </p>
          <p className="sm:text-md md:text-lg lg:text-2xl font-SkipStd my-5 ">
            Nathaell Avril Leman
          </p>
        </div>

        {/* Right */}
        <div
          className="flex flex-col text-black text-start
                   pt-10 px-10 h-auto z-0
                   border-l border-black"
        >
          <div className="text-xl w-fit m-5 font-Rodin ">
            <p className="text-2xl font-SkipStd">
              Bachelor's of Computer Science
            </p>
            <p>University of Central Florida</p>
            <div className="flex flex-row gap-8">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 mt-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                <p>Jan 2020 - May 2025</p>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 mt-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <p>FL</p>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 mt-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>
                <p>GPA: 3.0/4.0</p>
              </div>
            </div>
          </div>
          <div className="text-xl w-100 m-5 font-Rodin">
            <p className="text-2xl">Available to Work</p>
            <p className="">Focus - Web & Software Development</p>
            <p className="">Location - Jakarta, Indonesia</p>
            <p className="">Status - Open to collaborate</p>
          </div>
          <a
            href="../assets/Resume.pdf"
            download={"Nathaell_Avril_Leman_Resume.pdf"}
            className="flex gap-4 text-xl w-fit m-5 font-Rodin my-5 p-4 bg-neutral-900 hover:bg-[#EBD8A9] text-white rounded-xl group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-8 text-white group-hover:text-[#1d1d1d] group-hover:animate-bounce "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            <p className="text-white group-hover:text-[#1d1d1d]">
              Download Resume/CV
            </p>
          </a>
        </div>
      </div>
    </>
  );
};
