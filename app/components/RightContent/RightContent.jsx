"use client"
import { Search, ArrowRight } from 'lucide-react';


const Sidebar = () => {
  const users = [
    { img: "/assets/center1.png", name: "Ina Perry", status: "Online", time: "12:45" },
    { img: "/assets/center2.png", name: "Wesley Ray", status: "Online", time: "12:45" },
    { img: "/assets/center3.png", name: "Eula Burton", status: "Work", time: "12:45" },
    { img: "/assets/center4.png", name: "Viola Morales", status: "Offline", time: "12:45" },
    { img: "/assets/center5.png", name: "Vincent Terry", status: "Online", time: "12:45" },
    { img: "/assets/center6.png", name: "Nell Burns", status: "Offline", time: "12:45" },
    { img: "/assets/center7.png", name: "Lydia Sutton", status: "Online", time: "12:45" },
    { img: "/assets/center8.png", name: "Cynthia Evans", status: "Offline", time: "12:45" },
  ];
  return (
    <div className="w-[61%] bg-white hidden md:block  rounded-l-lg">
      <div className="flex items-center my-4 mx-2 px-4 justify-between w-full max-w-md p-2 ">
        <div className="flex items-center gap-6 text-gray-500 w-">
          <Search className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search in Messages"
            className="bg-transparent outline-none  text-gray-600 "
          />
        </div>
        <ArrowRight className="w-5 h-5 text-gray-500" />
      </div>
      <hr className="text-gray-200" />

      <div className="p-4">
        <h3 className="text-gray-500 font-semibold mb-2">Direct Messages</h3>
        <div className="space-y-">
          {users.map((user, index) => (
            <div key={index} className="flex items-center text-gray-600 py-2 ">
              <img src={user.img} className="w-12 h-12 rounded-full" alt={user.name} />
              <div className="flex-1 pl-4">
                <span className="block font-medium">{user.name}</span>

              </div>
              <div className='flex gap-20'>
                <span
                  className={`block text-sm ${user.status === "Online" ? "text-green-500" : user.status === "Work" ? "text-yellow-500" : "text-gray-500"
                    }`}
                >
                  {user.status}
                </span>

                <span className="text-gray-500 text-sm">{user.time}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="text-gray-600 bg-white p-2 py-3 rounded-md shadow-lg mt-2">Show More Channels</button>
      </div>

      <div className="p-4 text-gray-600">
        <div className='flex justify-between'>
          <h1 className="text-xl font-bold mb-4">Channels</h1>
          <button className="flex bg-white text-white items-center text-xl justify-center w-10 h-10 rounded-full border-2 border-gray-400  hover:bg-gray-200">
            <p className="px-2 bg-gray-400 rounded-full">+</p>
          </button>
        </div>
        <div className="space-y-2">
          {['How To Frontend', 'Payment Workers', 'Web Designer', 'President of Sales', 'Marketing Coordinator'].map((channel, index) => (
            <div key={index} className="flex justify-between items-center p-2  rounded">
              <span>{channel}</span>
              <div className='flex flex-row gap-24'>
                <span className='text-green-500'>+12</span>
                <span className="text-gray-500"> 564</span>
              </div>
            </div>
          ))}
        </div>
        <button className="text-gray-600 bg-white p-2 py-3 rounded-md shadow-lg mt-2">Show More Channels</button>

        <div className='flex mt-10 justify-between'>
          <h1 className="text-xl font-bold mb-4">Project Companies</h1>
          <button className="flex bg-white text-white items-center text-xl justify-center w-10 h-10 rounded-full border-2 border-gray-400  hover:bg-gray-200">
            <p className="px-2 bg-gray-400 rounded-full">+</p>
          </button>
        </div>
        <div className="space-y-2">
          {[
            { name: 'Walt Disney', value: ' 564' },
            { name: 'Johnson & Johnson', value: ' 456' },
            { name: 'General Electric', value: '387' },
            { name: 'Bank of America', value: '321' },
          ].map((company, index) => (
            <div key={index} className="flex justify-between items-center p-2  rounded">
              <span>{company.name}</span>
              <div className='flex flex-row gap-24'>
                <span className='text-green-500'>+54</span>
                <span className="text-gray-500">{company.value}</span>
              </div>

            </div>
          ))}
        </div>
        <button className="text-gray-600 bg-white p-2 py-3 rounded-md shadow-lg mt-2">Show More Channels</button>
      </div>
    </div>
  );
};

export default Sidebar;
