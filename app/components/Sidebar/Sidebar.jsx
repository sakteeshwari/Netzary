"use client";
import { FaStar, FaChartLine, FaGlobe, FaBuilding } from "react-icons/fa";
import { BsPenFill } from "react-icons/bs";

export default function Sidebar() {
  return (
    <div className="w-14 z-10  bg-gray-100 flex flex-col items-center py-4">
      {/* Top Icons */}
      <div className="flex flex-col space-y-9">
        <button className="p-3 cursor-pointer bg-white text-white rounded-full">
          <BsPenFill className="rounded-full bg-blue-600 " />
        </button>
        <button className="p-3 cursor-pointer bg-white rounded-full text-gray-400 hover:text-blue-600">
          <FaStar />
        </button>
        <button className="p-3 cursor-pointer bg-white rounded-full text-gray-400 hover:text-blue-600">
          <FaChartLine />
        </button>
        <button className="p-3 cursor-pointer bg-white rounded-full text-gray-400 hover:text-blue-600">
          <FaGlobe />
        </button>
        <button className="p-3 cursor-pointer bg-white rounded-full text-gray-400 hover:text-blue-600">
          <FaBuilding />
        </button>
      </div>

      {/* Spacer */}



      {/* User Avatars */}
      <div className="flex flex-col mt-36 space-y-9">
       <div className="relative">
       <img src="/assets/sidebarprofile.png" className=" cursor-pointer w-10 h-10 rounded-full " />
       <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
       </div>
        <img src="/assets/sidebarprofile1.png" className="cursor-pointer w-10 h-10 rounded-full " />
        <img src="/assets/sidebarprofile3.png" className="cursor-pointer w-10 h-10 rounded-full " />
        <img src="/assets/sidebarprofile4.png" className="cursor-pointer w-10 h-10 rounded-full " />

        {/* Plus Icon */}
  <button className="flex bg-white text-white items-center text-xl justify-center w-10 h-10 rounded-full border-2 border-gray-400 text-gray-600 hover:bg-gray-200">
    <p className="px-2 bg-gray-400 rounded-full">+</p>
  </button>

      </div>
    </div>
  );
}
