import Image from 'next/image';
import React, { useState } from 'react';
import Rating from 'react-rating-stars-component';


const commentsData = [
    {
        id: 1,
        name: "Alice Johnson",
        rating: 4,
        photo: "https://via.placeholder.com/80",
        comment: "Ótima experiência! O sistema é muito fácil de usar e extremamente útil para o nosso fluxo de trabalho.",
    },
    {
        id: 2,
        name: "Carlos Silva",
        rating: 5,
        photo: "https://via.placeholder.com/80",
        comment: "Sistema muito intuitivo! Melhorou muito nossa produtividade e integração entre equipes.",
    },
    {
        id: 3,
        name: "Laura García",
        rating: 3,
        photo: "https://via.placeholder.com/80",
        comment: "Funcionalidade boa, mas poderia ter mais opções de personalização.",
    },
];

const DeveloperComments = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % commentsData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? commentsData.length - 1 : prevIndex - 1
        );
    };

    const { name, rating, photo, comment } = commentsData[currentIndex];

    return (
        <div className="text-white py-10 flex justify-center items-center w-full  bg-[#1f2125] ">
            <div className=" text-white justify-end w-1/2 text-center p-6 ">
            <Image
              src={""}
              alt="item"
              className="w-2/5 h-2/5 rounded-lg absolute bottom-0 left-0"
              quality={100}
              priority
            />
                <h3 className="text-2xl font-bold tex">{name}</h3>
                <Rating count={5} value={rating} size={30} activeColor="#ffd700" edit={false} />
                <p className="text-lg text-white my-4 px-3">{comment}</p>
                <div className="flex justify-end mt-6">
                    <button onClick={handlePrev} className="px-2 py-2 mg-1 text-white bg-[#1f2125] shadow-lg rounded-lg  border border-[#f9ac54] hover:border-[#f9ac54] hover:scale-105 transition-all duration-300 rounded-lg  transition-colors duration-300">
                        Prev
                    </button>
                    <button onClick={handleNext} className="px-2 py-2 text-white bg-[#1f2125] shadow-lg rounded-lg   border border-[#f9ac54] hover:border-[#f9ac54] hover:scale-105 transition-all duration-300 rounded-lg  transition-colors duration-300">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeveloperComments;
