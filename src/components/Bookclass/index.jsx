import Image from "next/image";
import React from "react";
import class1 from "../../assets/class1.jpg";
import class2 from "../../assets/class2.jpg";
export const Bookclass = () => {
    return (
        <div className="flex justify-between items-start">

            <div className=" relative flex flex-1">

             
            <Image
              src={class1}
              alt="item"
              className=" rounded-lg align-right p-10 w-100 h-100"
              quality={100}
              priority 
              layout="responsive"
            />
            <Image
              src={class2}
              alt="item"
              className="w-2/5 h-2/5 rounded-lg absolute bottom-0 left-0"
              quality={100}
              priority
            />
          
            </div>


            <div className="h-full justify-center flex flex-col flex-1 items-start ml-8">
                <h2 className="text-2xl font-bold">THE CLASS YOU WILL
                GET HERE</h2>
                <p className="text-base mt-2">Led by our team of expert and motivational instructors, {"The Class You Will Get Here"}

                    is aclassName high-energy, result-driven session that combines a perfect blend of cardio, strength training, and functional exercises. Each class is carefully curated to keep you engaged and challenged, ensuring you never hit a plateau in your fitness endeavors.</p>

                <button className=" hover:bg-[#d79447] mt-4 px-6 py-2 bg-[#f9ac54] text-white rounded-lg transition-all">Book a Class</button>

            </div>
        </div>

    )
}

