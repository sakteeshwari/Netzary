'use client';

import { Phone, Video, Expand, Grid, Search, Heart, Flag, MoreHorizontal, Users2Icon } from 'lucide-react';


import Rightdown from "../Rightdown/Rightdown"


export default function ChatUI() {

  return (
    <div className=" bg-white  border-l border-l-gray-200 w-full rounded-lg md:rounded-r-lg md:rounded-l-none ">
      {/* Header */}
      <div className="flex items-center justify-between p-4 px-6 py-6 ">
        <div className="flex items-center gap-2 text-gray-500">
          <Users2Icon className='w-5 h-5 lg:hidden'></Users2Icon>
          <Phone className="w-5 h-5" />
          <Video className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="text-gray-500 font-medium">Dennis Smith</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <Expand className="w-5 h-5" />
          <Grid className="w-5 h-5" />
        </div>
      </div>
      <hr className="text-gray-200" />


      {/* Messages */}
      <div className="p-4 space-y-14 mt-6">
        {/* Message 1 */}
        <div className="p-4  ">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-3">
              <img src="/assets/msgpic1.png" className="w-10 h-10 rounded-full" alt="Edward Goodwin" />
              <div>
                <p className="font-semibold">Stella Evans</p>
                <p className="text-sm text-gray-500">Web Designer • 12:45 PM</p>
              </div>
            </div>
            <div className="flex space-x-3 text-gray-400">
              <Heart className="text-yellow-400" />
              <Flag className="cursor-pointer" />
              <MoreHorizontal className="cursor-pointer" />
            </div>
          </div>
          {/* File Download */}
          <div className="shadow-[0px_0px_10px_rgba(0,0,0,0.1)] w-[70%]  p-4 mt-10 rounded-lg">
            <div className="flex justify-between font-medium">
              <p>Human Design Guidelines.pdf</p>
              <p className="text-blue-500 cursor-pointer">760.90 KB</p>
            </div>
            <p className="text-blue-500">Downloading ...<span className='ml-15'>60%</span></p>
            <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "65%" }}></div>
            </div>
          </div>
        </div>




        {/* Message 2 */}
        <div className="p-4  ">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-3">
              <img src="/assets/msgpic2.png" className="w-10 h-10 rounded-full" alt="Edward Goodwin" />
              <div>
                <p className="font-semibold">Edward Goodwin</p>
                <p className="text-sm text-gray-500">Web Designer • 12:45 PM</p>
              </div>
            </div>
            <div className="flex space-x-3 text-gray-400">
              <Heart className="text-yellow-400" />
              <Flag className="cursor-pointer" />
              <MoreHorizontal className="cursor-pointer" />
            </div>
          </div>

        </div>
        <div className=" mt-10 flex gap-2">
          <div className="relative ">
            <img src="/assets/bigpic1.png" className="w-72 h-60 rounded-lg" alt="Design" />
            <div className="absolute bottom-4 right-4 flex items-center justify-center  bg-opacity-30 rounded-lg">
              <Search className="text-white rounded-full bg-gray-500 p-1 w-6 h-6" />
            </div>
          </div>
          <div className="relative">
            <img src="/assets/bigpic2.png" className="w-72 h-60 rounded-lg" alt="Design" />
            <div className="absolute bottom-4 right-4 flex items-center justify-center  bg-opacity-30 rounded-lg">
              <Search className="text-white rounded-full bg-gray-500 p-1 w-6 h-6" />
            </div>
          </div>
        </div>
      </div>






      <div className="max-w-2xl mx-auto p-4 bg-white ">
        <Rightdown></Rightdown>
      </div>
    </div>
  );
}
