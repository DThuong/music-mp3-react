import React from "react";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";
import icons from "../utils/icons";

const { IoSearchOutline } = icons;

const Header = () => {
  return (
    <div className="w-full h-[70px] px-[59px] flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex gap-4 items-center">
          <span>
            <HiOutlineArrowNarrowLeft size={24} opacity={0.5} />
          </span>
          <span>
            <HiOutlineArrowNarrowRight size={24} opacity={0.5} />
          </span>
        </div>

        <div className="flex items-center relative">
          <span className="absolute top-1/2 left-3 -translate-y-1/2">
            <IoSearchOutline size={20} opacity={0.4} />
          </span>
          <input
            type="text"
            className="outline-none w-[440px] h-10 rounded-[20px] text-[14px] px-[20px] pl-10 py-[5px] text-gray-500"
          />
        </div>
      </div>

      <div>Login không</div>
    </div>
  );
};

export default Header;
