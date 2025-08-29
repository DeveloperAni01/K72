import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Transition = ({ children }) => {
  const stairParent = useRef(null);
  const pageRef = useRef(null);
  const currentPath = useLocation().pathname;

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(stairParent.current, {
      display: "block",
    })
      .from(".stair", {
        height: 0,
        stagger: {
          amount: -0.25,
        },
      })
      .to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.25,
        },
      })
      .to(stairParent.current, {
        display: "none",
      })
      .to(".stair", {
        y: 0,
      })

      .from(pageRef.current, {
        opacity: 0,
        duration: 1.5,
          scale: 1.5,
        ease: "power2.out",
      },"-=2");
  }, [currentPath]);

  return (
    <div>
      <div
        ref={stairParent}
        className=" transition-parent w-full h-screen fixed top-0 left-0 z-50 overflow-hidden"
      >
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>{children}</div>
    </div>
  );
};

export default Transition;
