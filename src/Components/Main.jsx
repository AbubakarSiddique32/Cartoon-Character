import React, { useState } from "react";
import Sit from "../Images/SIT.png";
import Green from "../Images/GREEN.png";
import Smile from "../Images/SMILE.png";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const characterData = [
  { id: 1, img: Sit, bgText: "LAUGH" },
  { id: 2, img: Green, bgText: "CREATE" },
  { id: 3, img: Smile, bgText: "STYLE" },
];

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? characterData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === characterData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentCharacter = characterData[currentIndex];

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between px-12">
        {/* Left Section */}
        <div className="flex flex-col gap-4 max-w-xs mb-10 md:mb-0">
          <h2 className="text-2xl font-bold uppercase">Cartoon Character</h2>
          <p className="text-sm">
            PUBLISHED
            <br />
            2016-10-6
          </p>
          <p className="text-sm">
            MORE DIGITAL ART:
            <br />
            <a href="#" className="underline text-blue-300">
              BEHANCE MORE
            </a>
          </p>
        </div>

        {/* Center Section: Dynamically updates using map */}
        {characterData.map((item, index) =>
          index === currentIndex ? (
            <div className="relative" key={item.id}>
              <h1 className="absolute text-[150px] font-extrabold tracking-tight text-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                {item.bgText}
              </h1>
              <img
                src={item.img}
                alt="Cartoon Character"
                className="relative z-10 w-[300px] md:w-[400px]"
              />
            </div>
          ) : null
        )}

        {/* Right Section */}
        <div className="max-w-sm text-sm text-white/80 leading-6 mt-6 md:mt-0">
          <p>
            is a modern and stylish typeface designed for bold headlines and
            clean branding. With sharp lines and a futuristic feel, it’s perfect
            for logos, posters, and digital design projects.
          </p>
          <div className="flex space-x-4 mt-4">
            <button
              className="w-8 h-8 border border-white/60 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
              onClick={handlePrev}
            >
              <FaArrowLeft />
            </button>
            <button
              className="w-8 h-8 border border-white/60 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
              onClick={handleNext}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
