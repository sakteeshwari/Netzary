"use client";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent"
import RightContent from "./components/RightContent/RightContent"
import Rightmsg from "./components/Rightmsg/Rightmsg"

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex">
      <div className="flex">
      <Sidebar />
      <MainContent></MainContent>
      </div>
      <div className="flex w-full m-4 xl:m-8 lg:m-6  shadow-md">
      <RightContent></RightContent>
      <Rightmsg></Rightmsg>
      </div>

      </div>
      {/* Main Content */}
    </div>
  );
}
