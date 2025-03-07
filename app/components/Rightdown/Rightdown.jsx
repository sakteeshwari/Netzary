import React from 'react'
import { Paperclip, Send, MoreVertical, Heart, Flag,MoreHorizontal } from "lucide-react";
import { useState } from "react";

const messages = [
    {
      id: 1,
      name: "Kyle Peters",
      role: "Web Designer",
      time: "12:45 PM",
      avatar: "/assets/msgpic3.png",
      text: "When you starting a company you are thinking on how to cut expenses. One of such options to cut the startup costs is a company logo design. But is it good idea to order a cheap logo or work without company logo at all?",
    },
    {
      id: 2,
      name: "Susan Lane",
      role: "Web Designer",
      time: "12:45 PM",
      avatar: "/assets/msgpic4.png",
      text: "When you starting a company you are thinking on how to cut expenses. One of such options to cut the startup costs is a company logo design.",
    },
  ]
const Rightdown = () => {
    const [message, setMessage] = useState("");
  return (
    <>
       <div className="text-center py-6">
        <span className="px-4 py-1 bg-gray-200 text-gray-600 text-sm rounded-full">Today</span>
      </div>
      <div className="space-y-6 my-6">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start pt-6 space-x-4">
            <img src={msg.avatar} className="w-10 h-10 rounded-full" alt={msg.name} />
            <div className="w-full">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-semibold">{msg.name}</span>
                  <span className="text-gray-500 text-sm ml-2">{msg.role}</span>
                </div>
                <span className="text-gray-400 text-sm">{msg.time}</span>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg mt-10 text-gray-700">{msg.text}</div>
            
            </div>
            <div className="flex space-x-3 text-gray-400">
          <Heart className="text-yellow-400" />
          <Flag className="cursor-pointer" />
          <MoreHorizontal className="cursor-pointer" />
        </div>
          </div>
        ))}
      </div>


      
      <div className="mt-16 flex items-center bg-gray-100 rounded-full p-3">
        <Paperclip className="text-gray-400 w-5 h-5 cursor-pointer" />
        <input
          type="text"
          className="flex-1 bg-transparent outline-none px-3 text-gray-700"
          placeholder="Type Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Send className="text-blue-500 w-6 h-6 cursor-pointer" />
      </div>
      </>
  )
}

export default Rightdown
