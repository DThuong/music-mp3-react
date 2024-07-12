import React from "react";
import logo from "../assets/logo.svg";
import { SidebarMenu } from "../utils/menu";
import { NavLink } from "react-router-dom";

const active = "flex w-full gap-3 text-[#ac3e82] font-bold py-[15px] px-[25px] justify-start items-center text-[14px]"
const not_active = "flex w-full gap-3 text-[#32323D] font-bold py-[15px] px-[25px] justify-start items-center text-[14px]";
const SidebarLeft = () => {
  return (
    <div className="flex flex-col bg-[#0000000d]">
      <div className="w-full py-[15px] px-[25px] justify-start items-center">
        <img src={logo} alt="logo" className="w-[120px] h-10" />
      </div>

      {SidebarMenu.map((item) => {
        return (
          <NavLink
            to={item.path}
            key={item.path}
            end={item.end}
            className={({ isActive }) =>
              isActive ? active : not_active
            }
          >
            <span>{item.icons}</span>
            <span>{item.text}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SidebarLeft;
