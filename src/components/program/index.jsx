import React from "react";
import { Card } from "./card";
import Boxe from "../../assets/Boxe.png";
import heart from "../../assets/heart.png";
import correr from "../../assets/correr.png";
import peso from "../../assets/peso.png";
import ArrowL from "../../assets/ArrowL.png";
import ArrowR from "../../assets/ArrowR.png";
import Image from "next/image";
export const Program = () => {
  const data = [
    {
      icon: Boxe,
      title: "Strenth",
      description: "Embrace the essence of strength as we delve into its various dimensions: physical, mental, and emotional."

    },
    {
      icon: heart,
      title: "Physical Fitness",
      description: "Includes a range of activities that improve health, strength, flexibility, and overall well-being.",
    },
    {
      icon: correr,
      title: "Fat Loss",
      description: "Through a combination of workout routines and expert guidance, we'll empower you to reach your goals.",
    },
    {
      icon: peso,
      title: "Weight Gain",
      description: "Designed for individuals, our program offers an effective approach to gaining weight in a sustainable way.",
    },
  ];
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between m-10">
        <h1 className="text-lg font-bold  ">EXPLORE OUR PROGRAM</h1>
        <div>
          <button>{<Image
            src={ArrowL}
            alt="item"
            className=" border-2 border-white bg-black rounded-full  w-7 m-1 hover:bg-[#f9ac54] "
            quality={100}m
            priority
          />}</button>
          <button>{
          <Image  
            src = { ArrowR }
            alt="item"
            className="border-2 border-white bg-black rounded-full  w-7 m-1 hover:bg-[#f9ac54] "
            quality={100}
            priority
          />}</button>
        </div>
      </div>
      <div>
        <Card data={data} />
      </div>
    </div>
  );
};
