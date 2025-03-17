// Dashboard.jsx
import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaMagnifyingGlass , FaSun , FaBell } from "react-icons/fa6";
import Avatar from "../assets/Avatar.png"
import Sidebar from "../Components/Sidebar";

 const Profile = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
      <div className="flex h-screen">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="flex-1 overflow-auto bg-[#131129]">
          <header className="bg-[#131129] shadow-lg flex items-center justify-between">
            <div className=" flex justify-between ">
            <button className="m-3 text-white" onClick={() => setIsSidebarOpen(!isSidebarOpen)}><FaBars /></button>
              <div className="bg-gray-600 m-3 flex items-center  rounded-full">
              <FaMagnifyingGlass className="mx-2" />
              <input
                type="text"
                className="border-none focus:outline-none p-2 rounded-full bg-transparent"
                placeholder="Search here"
              />
            </div>
            </div>
             
             <div className="inline">
               < FaSun className="inline m-2 text-white"/>
               <FaBell className="inline m-2 text-white"/>
               <img src={Avatar} alt="" className="inline m-2 size-[30px]" />
             </div>
          </header>
          <h3 className="capitalize font-normal text-white p-2 text-[1.5rem]  md:text-[2rem]"> settings
          <span className="block text-white font-normal text-lg capitalize">Welcome settings page</span>
          </h3>
           {["profile" ," security" ," application","payment method"].map((value , index)=>{
            return <div className="flex"> <p className="text-textPrimary font-sm font-normal capitalize m-[5px]" key={index}>{value}</p></div>
           })
           }
          
        </div>
      </div>
    );
  }
  export default Profile
  // 09112966714 timothy