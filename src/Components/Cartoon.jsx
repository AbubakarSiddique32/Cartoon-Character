import React from "react";
import Main from "./Main";
import Navbar from "./Navbar";

// import cartoonImage from "../assets/cartoon.png"; // replace with actual path to your image

const Cartoon = () => {
  return (
    <div className="min-h-screen bg-[#b1903d] text-white font-sans">
      <Navbar />
      <Main />
    </div>
  );
};

export default Cartoon;
