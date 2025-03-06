const Sidebar = () => {
    return (
      <div className="w-[30%] bg-white p-4 rounded-lg shadow-md">
        <div className="relative flex items-center border-b pb-2 mb-3">
          <input
            type="text"
            placeholder="Search in Messages"
            className="w-full p-2 border rounded-lg focus:outline-none"
          />
        </div>
  
        <div>
          <h3 className="text-gray-500 font-semibold mb-2">Direct Messages</h3>
          {[ 
            {img:"/assets/center1.png", name: "Ina Perry", status: "Online", time: "12:45" },
            {img:"/assets/center2.png", name: "Wesley Ray", status: "Online", time: "12:45" },
            {img:"/assets/center3.png", name: "Eula Burton", status: "Work", time: "12:45" },
            {img:"/assets/center4.png", name: "Viola Morales", status: "Offline", time: "12:45" },
            {img:"/assets/center5.png", name: "Vincent Terry", status: "Online", time: "12:45" },
            {img:"/assets/center6.png", name: "Nell Burns", status: "Offline", time: "12:45" },
            {img:"/assets/center7.png", name: "Lydia Sutton", status: "Online", time: "12:45" },
            {img:"/assets/center8.png", name: "Cynthia Evans", status: "Offline", time: "12:45" },
          ].map((user, index) => (
            <div key={index} className="flex items-center justify-between py-1">
              <div className="flex items-center space-x-2">
                <img src={user.img} className="w-12 h-12 rounded-full" alt={user.name} />
                <span className="font-medium">{user.name}</span>
              </div>
              <span
                className={
                  user.status === "Online" ? "text-green-500" : user.status === "Work" ? "text-yellow-500" : "text-gray-500"
                }
              >
                {user.status}
              </span>
              <span className="text-gray-500">{user.time}</span>
            </div>
          ))}
          <button className="text-blue-500 mt-2">Show More Channels</button>
        </div>
  
        <div className="mt-4">
          <h3 className="text-gray-500 font-semibold mb-2">Project Companies</h3>
          {[ 
            { img: "/assets/company1.png", name: "Walt Disney", change: "+12", value: 564 },
            { img: "/assets/company2.png", name: "Johnson & Johnson", change: "+5", value: 456 },
            { img: "/assets/company3.png", name: "General Electric", change: "", value: 387 },
            { img: "/assets/company4.png", name: "Bank of America", change: "", value: 321 },
          ].map((company, index) => (
            <div key={index} className="flex items-center justify-between py-1">
              <div className="flex items-center space-x-2">
                <img src={company.img} className="w-8 h-8 rounded-full" alt={company.name} />
                <span>{company.name}</span>
              </div>
              <span className="text-green-500">{company.change}</span>
              <span className="text-gray-500">{company.value}</span>
            </div>
          ))}
          <button className="text-blue-500 mt-2">Show More Channels</button>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  