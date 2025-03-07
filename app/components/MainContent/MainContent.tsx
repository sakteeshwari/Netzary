"use client";
import { useState } from "react";
import { FaBuilding,FaBriefcase, FaUsers, FaCogs, FaClipboardList } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"; // Importing icons
import { MdChevronRight } from "react-icons/md";

const Sidebar = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-80 z-10 hidden 2xl:block  min-h-screen border-l border-l-gray-300  bg-gray-100 px-6 py-9">
      {/* Main Menu */}
      <h2 className="text-gray-500 uppercase font-semibold text-xs mb-6">Main Menu</h2>
      
      <div className="space-y-2 pt-6 py-6">
        {/* Dashboard */}
        <button
          className="flex items-center justify-between  rounded-md   text-blue-600 font-bold  w-full"
          onClick={() => toggleSection("dashboard")}
        >
          <div className="flex items-center gap-2">
            <FaClipboardList />
            Dashboard
          </div>
          {openSection === "dashboard" ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
       

        {/* Applications */}
        <button
          className="flex mt-4 items-center pt-6 justify-between text-gray-600 py-2 w-full"
          onClick={() => toggleSection("applications")}
        >
          <div className="flex items-center gap-2">
            <FaBuilding />
            Applications
          </div>
          {openSection === "applications" ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
        

        {/* Clients */}
        <button
          className="flex items-center mt-6 justify-between text-gray-600 py-2 w-full"
          onClick={() => toggleSection("clients")}
        >
          <div className="flex items-center gap-2">
            <FaUsers />
            Clients
          </div>
          <span className="rounded-full ml-20 px-2 py-0.5  bg-blue-500 text-white text-sm ">2</span>
          {openSection === "clients" ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
        {openSection === "clients" && (
          <div></div>
        )}
      </div>


      {/* Projects Section */}

      <div className="w-[270px] p-4 pt-5 border-gray-200 rounded-xl shadow-xl">
      <button
          className="flex items-center justify-between w-full text-gray-700 font-semibold text-lg"
        >
          <div className="flex items-center gap-2 mt-6">
            <FaBriefcase className="text-blue-600" />
            Projects
          </div>
          {openSection === "projects" ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
      {/* Projects Section */}
      
      <div className="bg-white px-2 rounded-lg shadow-sm">
       

        {/* Submenu for Projects */}
       
          <div className="   py-6 mt-6 rounded-lg flex">
            {/* Coca Cola Project */}
            <button
              className={`flex  items-center w-full  rounded-md text-blue-600 font-bold`}
              onClick={() => setSelectedItem("coca-cola")}
            ><span className="mr-2">•</span>
               Cola Project
              
            </button>
            <MdKeyboardArrowDown className=""/>
            

            {/* Subitems */}
           
          </div>
          
          
        
        <hr className=" text-gray-300"/>
         <div className=" space-y-2 mt-2 py-8 text-gray-600 text-sm">
              <button className="flex items-center justify-between  w-full">
              <span className="flex items-center">
                <span className="mr-2">•</span> Link Colors
                </span>
                <MdChevronRight />
              </button>

              <button className="flex items-center py-8 justify-between w-full text-blue-600 font-semibold">
                <span className="flex items-center">
                  <span className="mr-2">•</span> Additional Content
                </span>
                <MdChevronRight />
              </button>

              <button className="flex items-center justify-between pb-8 w-full">
              <span className="flex items-center">
                <span className="mr-2">•</span> Dismissing
                </span>
                <MdChevronRight />
              </button>

              <button className="flex items-center justify-between w-full">
              <span className="flex items-center">
                <span className="mr-2">•</span> JavaScript Behavior
                </span>
                <MdChevronRight />
              </button>
            </div>
      </div>

      {/* Other Sections */}
      <div className="mt-12 space-y-8 text-gray-600">
        <button className="w-full text-left px-3 py-2 rounded-md"> <span className="mr-2">•</span>Zoom Projects</button>
        <button className="w-full text-left px-3 py-2 rounded-md"> <span className="mr-2">•</span>Task Board</button>
        <button className="w-full text-left px-3 py-2 rounded-md"> <span className="mr-2">•</span>Project Diagramma</button>
      </div>
    </div>


 {/* Applications */}
 <button
          className="flex items-center pt-6 mt-12 justify-between text-gray-600 py-2 w-full"
          onClick={() => toggleSection("applications")}
        >
          <div className="flex items-center  gap-2">
            <FaBuilding />
            Applications
          </div>
          {openSection === "applications" ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>




         {/* Second Menu */}
      <h2 className="text-gray-500 uppercase font-semibold text-xs mt-20 mb-3">Second Menu</h2>
      <div className="space-y-8 mt-10">
        <button
          className="flex items-center justify-between text-gray-600 py-2 w-full"
          onClick={() => toggleSection("integrations")}
        >
          <div className="flex items-center gap-2">
            <FaCogs />
            Integrations
          </div>
          {openSection === "integrations" ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
        {openSection === "integrations" && <div className="pl-6 text-sm text-gray-700">Integration Options</div>}

        <button
          className="flex items-center justify-between text-gray-600 py-2 w-full"
          onClick={() => toggleSection("users")}
        >
          <div className="flex items-center gap-2">
            <FaUsers />
            Users
          </div>
          {openSection === "users" ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
        {openSection === "users" && <div className="pl-6 text-sm text-gray-700">User Management</div>}

        <button
          className="flex items-center justify-between text-gray-600 py-2 w-full"
          onClick={() => toggleSection("settings")}
        >
          <div className="flex items-center gap-2">
            <FaCogs />
            Settings
          </div>
          {openSection === "settings" ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
        {openSection === "settings" && <div className="pl-6 text-sm text-gray-700">Settings Options</div>}
      </div>
    </div>
   
  );
};

export default Sidebar;
