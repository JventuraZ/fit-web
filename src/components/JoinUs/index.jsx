import Image from "next/image";
import React from "react";
import join from "../../assets/join.jpg";
import { useEffect } from "react";
const JoinUs = () => {
    
    
        useEffect(() => {
            const handleScrollAnimation = () => {
                const elements = document.querySelectorAll('.falling-element');
                elements.forEach(el => {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                        el.classList.add('fade-in');
                        console.log(el)
                        
                    }
                
                });
            };
    
            window.addEventListener('scroll', handleScrollAnimation);
            handleScrollAnimation(); 
    
            return () => window.removeEventListener('scroll', handleScrollAnimation);
        }, []);

  return (
    <div className="join-us falling-element text-white py-16 px-8">
      <div className="falling-element text-center mb-8">
        <h2 className="falling-element text-3xl font-bold uppercase">Why Join Us?</h2>
        <p className="text-white">
          Our diverse membership base creates a friendly and supportive<br></br>
          atmosphere, where you can make friends and stay motivated.
        </p>
      </div>

     
      <div className="falling-element relative mb-16">
        <Image
          src={join} 
          alt="Gym Members on Bicycles"
          quality={100} 
          className="w-auto h-auto rounded-3xl"
        />
        
        <div className="font-thin absolute inset-x-10 bottom-0 transform translate-y-1/2 flex justify-center">
          <div className="  flex justify-center   bg-black p-4 rounded-lg text-center h-auto w-auto shadow-md" >
            <span className="text-3xl">🏋️</span>
            <h3 className="flex flex-col text-lg text-left">Personal Trainer<p className="text-white">Unlock your potential with our expert Personal trainers.</p></h3>
            

         
            <span className="text-3xl">🤸</span>
            <h3 className=" flex flex-col   text-lg text-left">Practice Sessions<p className="text- ">Elevate your fitness with practice sessions.</p></h3>
         
         
         
            <span className="text-3xl">🏆</span>
            <h3 className="flex flex-col  text-lg text-left">Good Management<p className="text-white">Supportive management, for your fitness success.</p></h3>

          </div>
       </div>
      </div>
    </div>
  );
};

export default JoinUs;
