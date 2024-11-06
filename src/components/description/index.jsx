import React from "react";
import header from "../../assets/header.png";
import Image from "next/image";
export const Description = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="flex flex-row max-lg:flex-col w-full">
        <div className="flex flex-1 flex-col gap-8 text-center lg:text-left justify-center">
          <div>
            <h3 className="font-bold text-[#f9ac54] lg:text-xl md:text-xs sm:text-xs max-lg:text-center text-balance">
              BEST FITNESS IN THE TOWN
            </h3>
            <span className="text-transparent relative text-5xl sm:text-7xl md:text-5xl lg:text-7xl max-lg:text-center">
              MAKE{" "}
              <style jsx>{`
                span {
                  -webkit-background-clip: text;
                  background-clip: text;
                  color: transparent;
                }
                span::before {
                  content: "MAKE";
                  position: absolute;
                  top: 1;
                  left: 0;
                  color: transparent;
                  -webkit-text-stroke: 1px white;
                  z-index: -1;
                }
              `}</style>
            </span>
            <span className="text-5xl sm:text-7xl md:text-5xl lg:text-7xl">
              YOUR
              <br />
              BODY SHAPE
            </span>
          </div>

          <span className="text-balance">
            Our fitness center is a one-stop shop for personalized fitness,
            wellness, and relaxation. We offer a variety of classes, workshops,
            and even a yoga studio to help you achieve your fitness goals.
            Contact our team at 1-800-Fitness-Center-Now to schedule a
            consultation.
          </span>

          <button className="hover:bg-[#d79447] lg:block hidden group relative w-48 overflow-hidden rounded-lg bg-[#f9ac54] text-lg shadow p-2">
            <span className="relative text-[#fff]">Get Started!</span>
          </button>
        </div>
        <div className="flex flex-1" >
          <Image
            src={header}
            alt="Logo"
            className="rounded-lg"
            quality={100}>

            </Image>
          </div>
      </div>
    </div>
  );
};
