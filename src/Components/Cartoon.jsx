import Navbar from "./Navbar";
import React, { useState } from "react";
import Sit from "../Images/SIT.png";
import Green from "../Images/GREEN.png";
import Smile from "../Images/SMILE.png";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

// import cartoonImage from "../assets/cartoon.png"; // replace with actual path to your image
const characterData = [
  { id: 1, img: Sit, bgText: "LAUGH", bgColor: "#b1903d" },
  { id: 2, img: Green, bgText: "SPORTS", bgColor: "#69AC1D" },
  { id: 3, img: Smile, bgText: "STYLISH", bgColor: "#673F96" },
];

const Cartoon = () => {
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

  const textVariants = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.3 } },
  };

  const imageVariants = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: 100, transition: { duration: 0.3 } },
  };
  return (
    <div
      className="min-h-screen text-white font-sans transition-colors duration-500"
      style={{ backgroundColor: currentCharacter.bgColor }}
    >
      <Navbar />
      <div className="transition-colors duration-500 min-h-screen">
        <div className="flex flex-col md:flex-row px-12">
          {/* Left Section */}
          <div className="flex flex-col gap-2 w-[25%] mb-10 mt-20 md:mb-0 font-Mina">
            <h2 className="text-[40px] font-bold uppercase ">
              Cartoon Character
            </h2>
            <p className="text-sm ">
              PUBLISHED
              <br />
              2016-10-6
            </p>
            <p className="text-sm">
              MORE DIGITAL ART:
              <br />
              <a href="#" className="hover:underline">
                BEHANCE MORE
              </a>
            </p>
          </div>

          {/* Center Section */}
          {characterData.map((item, index) =>
            index === currentIndex ? (
              <div
                className="relative w-[50%] flex items-center justify-center h-[90vh]"
                key={item.id}
              >
                <AnimatePresence mode="wait">
                  {/* Text Animation */}
                  <motion.h1
                    key={`text-${item.id}`}
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute w-full text-[150px] text-center font-extrabold tracking-tight text-white top-[50%] left-0 -translate-x-1/2 -translate-y-1/2 z-0"
                  >
                    {item.bgText}
                  </motion.h1>

                  {/* Image Animation */}
                  <motion.img
                    key={`img-${item.id}`}
                    src={item.img}
                    alt="Cartoon Character"
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="relative z-20 w-[300px] md:w-[400px] h-[90vh]"
                  />
                </AnimatePresence>
              </div>
            ) : null
          )}

          {/* Right Section */}
          <div className="w-[25%] text-sm text-white/80 leading-6 mt-20 font-Mina">
            <p>
              is a modern and stylish typeface designed for bold headlines and
              clean branding. With sharp lines and a futuristic feel, it’s
              perfect for logos, posters, and digital design projects. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
              suscipit! Corrupti debitis delectus quam, molestiae nostrum eius.
              Temporibus animi minus officia, quibusdam odit natus autem ex
              saepe, ducimus aliquid nisi.
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
    </div>
  );
};

export default Cartoon;
