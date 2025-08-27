import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[lausanne-300] uppercase  pt-5 text-center">
      <div className="text-[9.55vw] flex items-center justify-center leading-[8vw]">The spark for</div>
      <div  className="text-[9.55vw] flex items-center justify-center leading-[8vw] ">all <div className="h-[7vw] w-[16vw] overflow-hidden rounded-full -mt-7 "><Video/></div> things</div>
      <div className="text-[9.55vw] flex items-center justify-center leading-[8vw]">creative</div>
    </div>
  );
};

export default HomeHeroText;
