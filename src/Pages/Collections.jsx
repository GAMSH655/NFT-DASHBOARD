// Dashboard.jsx
import React, { useContext } from "react";
import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { FaBars, FaCube } from "react-icons/fa";
import { FaMagnifyingGlass , FaSun , FaBell , FaSquare } from "react-icons/fa6";
import Avatar from "../assets/Avatar.png"
import Wave from "../assets/Wave.png"
import { ThemeContext } from "../Context/ThemeContext";
import Header from "../Components/Header";
 const Collections = () => {
  const {darkMode , ToggleTheme } = useContext(ThemeContext)
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
         const NftData = [
           { nftImg : Wave , nftName:"Liquid Wave" , time :"auction time", bid:"Current bid" , price1:"005.ETH", timing:"3h 1m 50s",price2:"005.ETH" },
           { nftImg : Wave , nftName:"Liquid Wave" , time :"Auction time", bid:"Current bid" , price1:"005.ETH", timing:"3h 1m 50s",price2:"005.ETH" },
           { nftImg : Wave , nftName:"Liquid Wave" , time :"Auction time", bid:"Current bid" , price1:"005.ETH", timing:"3h 1m 50s",price2:"005.ETH" },
           { nftImg : Wave , nftName:"Liquid Wave" , time :"Auction time", bid:"Current bid" , price1:"005.ETH", timing:"3h 1m 50s",price2:"005.ETH" },
           { nftImg : Wave , nftName:"Liquid Wave" , time :"Auction time", bid:"Current bid" , price1:"005.ETH", timing:"3h 1m 50s",price2:"005.ETH" },
           { nftImg : Wave , nftName:"Liquid Wave" , time :"Auction time", bid:"Current bid" , price1:"005.ETH", timing:"3h 1m 50s",price2:"005.ETH" },
           { nftImg : Wave , nftName:"Liquid Wave" , time :"Auction time", bid:"Current bid" , price1:"005.ETH", timing:"3h 1m 50s",price2:"005.ETH" },
           { nftImg : Wave , nftName:"Liquid Wave" , time :"Auc tion time", bid:"Current bid" , price1:"005.ETH", timing:"3h 1m 50s",price2:"005.ETH" },
         ]
    return (
      <div className="flex h-screen">
        <Sidebar isOpen={isSidebarOpen} />
        <div className={`flex-1 overflow-auto bg-[#131129] ${darkMode ? "bg-white" : ""}`}>
          <Header/>
   <div className="">
   <h3 className="capitalize font-normal text-white p-2 text-[1.5rem]  md:text-[2rem]">Collections
          <span className="block text-white font-normal text-sm">Welcome to collection  page</span>
          </h3>
    <div className=' block md:grid md:grid-cols-4'>
      {
        NftData.map(({nftImg ,nftName ,time ,bid ,timing, price1 , price2} , index)=>{
        return <div className={`bg-[#1D1932] shadow-md m-3 p-2 text-white rounded-md ${darkMode ? "bg-white shadow-md text-black" : ""}`} key={index}>
             <img src={nftImg} alt="" className='w-full' />
             <h4 className="capitalize font-semibold text-sm mt-3 ">{nftName}</h4>
             <table className="">
                 <thead>
                      <tr>
                          <th className=' text-center text-sm font-normal'>{time}</th>
                          <th className=' py-3 px-6 text-left  text-sm font-normal'>{bid}</th>
                      </tr>
                 </thead>
                 <tbody>
                      <tr>
                          <td>{timing}</td>
                          <td className=' className="py-3 px-6 text-[#6F4FF2]'>{price2}</td>
                      </tr>
                  <tr>
                    <td className=' className="py-3 '>{price1}</td>
                    <td className=' className="py-3 px-6 text-left '>{price1}</td>
                  </tr>
                 </tbody>
             </table>
             <button className="w-full p-[3px] bg-[#6F4FF2] text-white  rounded-md hover:bg-"> Placea a bid </button>
          </div>
        })
      }
   
    </div>
    </div>
        </div>
      </div>
    );
  }
  export default Collections

  // 09112966714 timothy