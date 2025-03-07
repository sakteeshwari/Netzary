import React, { useState } from "react";
import { Paperclip, Send, MoreHorizontal, Heart, Flag } from "lucide-react";

const messages = [
  {
    id: 1,
    name: "Kyle Peters",
    role: "Web Designer",
    time: "12:45 PM",
    avatar: "/assets/msgpic3.png",
    text: "When you start a company, you think about cutting expenses. One such option is to cut startup costs with a company logo design. But is it a good idea to order a cheap logo or work without one at all?",
  },
  {
    id: 2,
    name: "Susan Lane",
    role: "Web Designer",
    time: "12:45 PM",
    avatar: "/assets/msgpic4.png",
    text: "When you start a company, you think about cutting expenses. One such option is to cut startup costs with a company logo design.",
  },
];

const Rightdown = () => {
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="text-center py-6">
        <span className="px-4 py-1 bg-gray-200 text-gray-600 text-sm rounded-full">Today</span>
      </div>

      <div className="space-y-6 my-10">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start space-x-4">
            {/* Avatar */}
            <img src={msg.avatar} className="w-10 h-10 rounded-full" alt={msg.name} />
            
            {/* Message Container */}
            <div className="flex flex-col w-full">
              {/* Name & Time */}
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-semibold">{msg.name}</span>
                  <span className="text-gray-500 text-sm ">{msg.role}</span>
                </div>
                <span className="text-gray-400 text-sm ml-16">{msg.time}</span>
                <div className="flex space-x-3 text-gray-400 mt-2">
                <Heart className="text-yellow-400 cursor-pointer" />
                <Flag className="cursor-pointer" />
                <MoreHorizontal className="cursor-pointer" />
              </div>
              </div>

              {/* Message Text */}
              <div className="bg-gray-100 p-3 rounded-lg mt-6 text-gray-700">
                <p>{msg.text}</p>
              </div>

              {/* Icons */}
            
            </div>
          </div>
        ))}
      </div>

      {/* Input Field */}
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
  );
};

export default Rightdown;
