import st from "../assets/screentones/cmkosemen_screentones_003.png";

export const Hero = () => {
  return (
    <div className="h-[86vh] w-full mb-30">
      {/* Screentone */}
      <img
        src={st}
        alt="screentone by CMkosemen"
        className="absolute z-0 h-[96%] w-[90%] 
                     inset-0 object-cover m-auto
                     right-0 left-0 top-0 bottom-0
                     border-black border-2"
      />
      {/* Title */}
      <div className="absolute top-[10vh] left-[10vw]">
        <p className="font-SkipStd text-black text-6xl">Nathaell Avril Leman</p>
        <p className="font-Rodin text-black text-3xl ml-[50%]">
          Software Engineer.
        </p>
      </div>
    </div>
  );
};
