import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agence from "./pages/Agence";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const App = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  // useGSAP(() => {
  //   ScrollSmoother.create({
  //     smooth: 1,
  //     effects: true,
  //     smoothTouch: 0.1,
  //   });
  // });

  return (
    <main>
      {/* <div id="smooth-wrapper">
        <div id="smooth-content">
         
        </div>
      </div > */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </main>
  );
};

export default App;
