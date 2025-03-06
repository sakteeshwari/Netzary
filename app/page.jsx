"use client";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent"

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex">
      <Sidebar />
      <MainContent></MainContent>
      </div>
      {/* Main Content */}
    </div>
  );
}
