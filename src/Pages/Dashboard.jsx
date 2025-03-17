// Dashboard.jsx
import React, { useContext } from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaMagnifyingGlass , FaSun , FaBell } from "react-icons/fa6";
import Avatar from "../assets/Avatar.png"
import Sidebar from "../Components/Sidebar";
import Nft from "../assets/Nft.png"
import Trending from "../Components/Trending";
import Recent from "../Components/Recent";
import Tbids from "../Components/Tbids";
import ToggleButton from "../Components/ToggleButton";
import { ThemeContext } from "../Context/ThemeContext";
import Header from "../Components/Header";
 const Dashboard = ({}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const { darkMode, ToggleTheme } = useContext(ThemeContext);
 
    const toggleSidebar = () => {
      setIsSidebarOpen((prev) => !prev);
    };
  
  
    return (
      <div className="flex h-screen">
        <Sidebar isOpen={isSidebarOpen} />
        <div className={ `flex-1 overflow-auto bg-[#131129] text-white  ${darkMode ? "bg-white text-black" : ""}`  }>
        <Header toggleSidebar={toggleSidebar} />
          <main className=" block md:flex md:flex-wrap bg">
            <div className="bg-[#6F4FF2] p-[5px] shadow rounded-lg purpeleBox m-3 ">
               <h3 className="capitalize font-normal p-2 text-[1.5rem] md:text-[2rem]">discover , collect , sell</h3>
               <h3 className="font-normal text-[1.5rem] p-2 Bmd:text-[2rem]">and Create your Nft</h3>
               <p className="font-normal text-sm p-2">Digital market place for crypto collectibles and non fungible tokens</p>

               <button className="bg-[#DC3546] border-none rounded-md font-sm  p-[4px] m-2">Place a bid </button>
               <button className="bg-[#6F4FF2] border-none rounded-md font-sm  p-[4px] m-2">Place a bid </button>
            </div>
         
            <div className="bg-[#1D1932] p-[7px] shadow rounded-lg block md:flex m-3 ">
              <img src={Nft} alt="" className=" w-full md:w-1/2" />
              <div className="ml-5 w-full p-2">
                 <div className="flex">
                 <img src={Avatar} alt="" className="size-[30px] m-2 " />
                  <h4 className="capitalize font-semibold text-sm mt-3 text-white ">john abraham</h4>
                 </div>
                 <h4 className="capitalize font-semibold text-sm pl-[6px] text-white">Birghten LQ</h4>
                <div className="flex jusity-center item-center">
                <div className=" mt-3">
                  <p className="text-sm text-white pl-[6px]"> Auction time</p>
                  <p className="text-sm text-[#6C7AA0] pl-[6px]">3h 1m 50s</p>
                  <button className="bg-[#DC3546] border-none rounded-md text-white text-sm  p-[7px] m-2">Place a bid </button>
                 </div>
                 
                 <div className=" mt-3">
                  <p className="text-[10px] text-white pl-[6px]"> Current Bid:0.05 ETH</p>
                  <p className="text-sm text-[#6C7AA0] pl-[6px]">0.15 ETH</p>
                  <button className="bg-[#DC3546] border-none rounded-md text-white text-sm  p-[8px] m-2">Place a bid </button>
                 </div>
                </div>
              
              </div>
            </div>
          </main>
          <Trending/>
          <Recent/>
          <Tbids/>
        </div>
      </div>
    );
  }
  export default Dashboard

  // 09112966714 timothy