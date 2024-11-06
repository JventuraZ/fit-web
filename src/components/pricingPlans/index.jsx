import React from "react";

const PricingPlan = () => {
  return (
    <div className="container mx-auto text-center my-24">
      <h1 className="text-4xl font-bold mb-4">OUR PRICING PLAN</h1>
      <p className="text-lg text-gray-600 mb-12">
        Our pricing plan comes with various membership tiers, each tailored to
        cater to different preferences and fitness aspirations.
      </p>
      <div className=" flex justify-center gap-8 flex-wrap">
        <div className=" flex flex-1 flex-col gap-10 text-left w-full sm:w-1/3 max-w-xs h-[30rem] p-6 bg-[#1f2125] shadow-lg rounded-lg  hover:border  hover:border-[#f9ac54] hover:scale-105 transition-all duration-300">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Basic Plan</h2>
            <p className="text-xl text-white">$16</p>
          </div>
          <hr className="my-4 border-gray-300" />
          <ul className="list-disc pl-5 space-y-2">
            <li>Smart workout plan</li>
            <li>At home workouts</li>
          </ul>
          <button className="w-full mt-6 py-2   bg-[#1f2125]  text-[#f9ac54] hover:text-[#ffffff] font-semibold rounded-lg border 
bg-[#f9ac54] hover:bg-[#f9ac54] hover:-[#1f2125]   transition-colors duration-300">
            Join Now
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-10  text-left w-full sm:w-1/3 max-w-xs p-6 bg-[#1f2125] shadow-lg rounded-lg  hover:border  hover:border-[#f9ac54] hover:scale-105 transition-all duration-300">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Basic Plan</h2>
            <p className="text-xl text-white">$16</p>
          </div>
          <hr className="my-4 border-gray-300" />
          <ul className="list-disc pl-5 space-y-2">
            <li>Smart workout plan</li>
            <li>At home workouts</li>
          </ul>
          <button className="w-full mt-6 py-2  border bg-[#1f2125] bg[#f9ac54]  text-[#f9ac54] hover:text-[#ffffff] font-semibold rounded-lg hover:border 
                    bg-[#f9ac54] hover:border-[#f9ac54] hover:bg-[#f9ac54] hover:-[#1f2125]   transition-colors duration-300">
            Join Now
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-10 text-left w-full sm:w-1/3 max-w-xs p-6 bg-[#1f2125] shadow-lg rounded-lg  hover:border  hover:border-[#f9ac54] hover:scale-105 transition-all duration-300">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Basic Plan</h2>
            <p className="text-xl text-white">$16</p>
          </div>
          <hr className="my-4 border-gray-300" />
          <ul className="list-disc pl-5 space-y-2">
            <li>Smart workout plan</li>
            <li>At home workouts</li>
          </ul>
          <button className="w-full mt-6 py-2  border bg-[#1f2125] bg[#f9ac54]  text-[#f9ac54] hover:text-[#ffffff] font-semibold rounded-lg hover:border 
                    bg-[#f9ac54] hover:border-[#f9ac54] hover:bg-[#f9ac54] hover:-[#1f2125]   transition-colors duration-300">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
