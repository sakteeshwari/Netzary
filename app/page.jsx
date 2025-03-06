"use client";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent"
import RightContent from "./components/RightContent/RightContent"

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex">
      <div className="flex">
      <Sidebar />
      <MainContent></MainContent>
      </div>
      <RightContent></RightContent>

      </div>
      {/* Main Content */}
    </div>
  );
}
