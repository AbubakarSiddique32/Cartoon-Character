import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="bg-[#b1903d] text-white px-10 py-10 flex justify-between items-center font-semibold text-xs">
      {/* Left Menu */}
      <div className="flex gap-[40px]">
        <a
          href="#"
          className="hover:underline font-Roboto font-[500] text-[18px]"
        >
          NEW RELEASES
        </a>
        <a
          href="#"
          className="hover:underline font-Roboto font-[500] text-[18px]"
        >
          3D ILLUS
        </a>
        <a
          href="#"
          className="hover:underline font-Roboto font-[500] text-[18px]"
        >
          DIGITAL
        </a>
        <a
          href="#"
          className="hover:underline font-Roboto font-[500] text-[18px]"
        >
          ART
        </a>
        <a
          href="#"
          className="hover:underline font-Roboto font-[500] text-[18px]"
        >
          CUSTOMIZE
        </a>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-5 relative">
        <FaRegCircleUser size={30} />

        <div className="relative">
          <BiShoppingBag size={30} />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
            2
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
