"use client";
import { useState } from "react";
import { Bell, Menu, Search, X, MoreHorizontal, User } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex sticky top-0 z-40 items-center justify-between px-2  py-3 shadow-md">
      {/* Left section */}
      <div className="flex items-center gap-9">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md"
        >
          {menuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
        </button>
        <span className="text-lg font-semibold">Constructor</span>
        <div className="hidden xl:flex space-x-5 text-gray-500">
          <a href="#" className="hover:text-black">Dashboard</a>
          <a href="#" className="hover:text-black">About Us</a>
          <a href="#" className="hover:text-black">News</a>
          <a href="#" className="hover:text-black">User Policy</a>
          <a href="#" className="hover:text-black">Contacts</a>
          <MoreHorizontal className="w-5 h-5 cursor-pointer" />
        </div>
      </div>

      {/* Search bar */}
      <div className="hidden lg:flex items-center bg-white px-6 py-3  rounded-full shadow-md">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Transactions and Documents"
          className="ml-2 outline-none text-gray-500 bg-transparent text-sm w-76 "
        />
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 ">
          <User className="w-8 h-8 text-gray-500 rounded-full bg-gray-200 p-1  shadow-md" />
          <span className="hidden lg:block text-gray-500">Clayton Santos</span>
        </div>
        <div className="relative">
          <Bell className="w-8  h-8 text-gray-500 cursor-pointer rounded-full bg-white p-2 shadow-md" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-pink-500 rounded-full"></span>
        </div>
        <button className="bg-white p-2 rounded-full shadow-md">
          <X className="w-5 h-5 bg-gray-200 rounded-full  text-white p-1" />
        </button>
      </div>
    </nav>
  );
}
