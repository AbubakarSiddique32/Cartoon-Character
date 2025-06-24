import React from "react";
import { FaRegSmile, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#b1903d] text-white px-6 py-4 flex justify-between items-center font-semibold text-xs">
      {/* Left Menu */}
      <div className="flex gap-6">
        <a href="#" className="hover:underline">
          NEW RELEASES
        </a>
        <a href="#" className="hover:underline">
          3D ILLUS
        </a>
        <a href="#" className="hover:underline">
          DIGITAL
        </a>
        <a href="#" className="hover:underline">
          ART
        </a>
        <a href="#" className="hover:underline">
          CUSTOMIZE
        </a>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-5 relative">
        <FaRegSmile className="text-xl" />

        <div className="relative">
          <FaShoppingCart className="text-xl" />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
            2
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
