import React from "react";
import { FaUserCheck } from "react-icons/fa";
import { IoIosHeartHalf } from "react-icons/io";
import { IoCartOutline, IoMenu, IoSearchSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 h-[60px]">
      <div className="cursor-pointer">
        <span className="text-3xl font-semibold">Furniro</span>
      </div>

      <ul className="md:gap-x-6 hidden md:flex text-1xl">
        <li className="hover:text-blue-700 transition cursor-pointer">Home</li>
        <li className="hover:text-blue-700 transition cursor-pointer">Shop</li>
        <li className="hover:text-blue-700 transition cursor-pointer">About</li>
        <li className="hover:text-blue-700 transition cursor-pointer">Contact</li>
      </ul>

      <ul className="md:gap-x-6 hidden md:flex mr-4">
        <li>
          <FaUserCheck size='20' className="cursor-pointer hover:text-blue-700 transition" />
        </li>
        <li>
          <IoSearchSharp size='20' className="cursor-pointer hover:text-blue-700 transition" />
        </li>
        <li>
          <IoIosHeartHalf size='20' className="cursor-pointer hover:text-blue-700 transition" />
        </li>
        <li>
          <IoCartOutline size='20' className="cursor-pointer hover:text-blue-700 transition" />
        </li>
      </ul>

      <div className="md:hidden">
        <IoMenu size='30'  />
      </div>
    </div>
  );
};

export default Header;
