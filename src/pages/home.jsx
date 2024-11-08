import React from "react";
import NavBar from "@/components/navBar/index";
import { Description } from "@/components/description";
import { Program } from "@/components/program";
import { Bookclass } from "@/components/Bookclass";
import JoinUs from "@/components/JoinUs";
import PricingPlan from "@/components/pricingPlans";
import DeveloperComments from "@/components/DeveloperComments";
import Footer from "@/components/footer";


function home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className=" self-center centercard flex w-8/12 flex-col gap-10">
        <NavBar />
        <Description />
        <Program />
        <Bookclass />
        <JoinUs />
        <PricingPlan/>
              
       
      </div>
        <DeveloperComments/>  
        <Footer/>
    </div>
  );
}

export default home;
