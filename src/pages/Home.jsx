import HomeBottomText from "../components/home/HomeBottomText";
import HomeHeroText from "../components/home/HomeHeroText";
import Video from "../components/home/Video";

const Home = () => {
  return (
    <>
      <div className="w-screen h-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between overflow-hidden pb-5">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </>
  );
};

export default Home;
