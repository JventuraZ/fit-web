import Image from "next/image";
import React from "react";

export const Card = ({ data }) => {
  return (
    <div className="flex flex-1 flex-col gap-10 lg:flex-row rounded-lg">
      {data.map((item, index) => (
        <div
          key={index}
          
          className="bg-black border border-transparent rounded-md flex flex-1 flex-col p-5 hover:border-orange-500 hover:scale-105
           hover:shadow-lg hover:bg-[#35373b] transition-all duration-300"
        >
          <div>
            <Image
              src={item.icon}
              alt="item"
              className="p-2 bg-[#f9ac54] rounded-lg"
              quality={100}
              width={50}
              height={50}
              priority
            />
          </div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <button className="text-left bottom-0x left-0x" >Join Now</button>
        </div>
      ))}
    </div>
  );
};
