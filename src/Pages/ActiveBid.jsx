// Dashboard.jsx
import React from "react";
import { useState , useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import { FaBars, FaCube } from "react-icons/fa";
import { FaMagnifyingGlass , FaSun , FaBell , FaSquare } from "react-icons/fa6";
import Avatar from "../assets/Avatar.png"
import Auctions from "../assets/Auction.png";
import Creator from "../assets/Creator.png";
import Artwork from "../assets/Artwork.png";
import Chart from "../assets/Chart.png";
import Wave from "../assets/Wave.png"
import John from "../assets/John.png"
import { FaTimes } from "react-icons/fa";
import Cute from "../assets/Cute.png"
import Red from "../assets/Red.png"
 const ActiveBid = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const trendingBids = [
      { image: Artwork, value: "24k", label: "Artwork", change: "+168.001%", color: "text-[#50BB25]" },
      { image: Auctions, value: "89k", label: "Auction", change: "+168.001%", color: "text-[#DC3546]" },
      { image: Creator, value: "82k", label: "Creator", change: "+168.001%", color: "text-[#50BB25]" }
    ];
    
     const TableData = [ 
      {listOwnerName:"john Abraham" , listImg:Wave, listName:'cute cool cube' ,openPrice:"0.0025 ETH",youOffer:"0.0025 ETH", offerImg:John,time:"2 Hours 1 min 30s" ,timesicons:<FaTimes/> ,offerPrice:"0.0025 ETH"},
      {listOwnerName:"john Abraham" , listImg:Cute,listName:'cute cool cube', openPrice:"0.0025 ETH",youOffer:"0.0045 ETH", offerImg:John,time:"2 Hours 1 min 30s" ,timesicons:<FaTimes/> , offerPrice:"0.0025 ETH"},
      {listOwnerName:"john Abraham" , listImg:Red,listName:'cute cool cube', openPrice:"0.0025 ETH",youOffer:"0.0045 ETH", offerImg:John,time:"2 Hours 1 min 30s" ,timesicons:<FaTimes/> , offerPrice:"0.0025 ETH"},
      {listOwnerName:"john Abraham" , listImg:Cute,listName:'cute cool cube', openPrice:"0.0025 ETH",youOffer:"0.0045 ETH", offerImg:John,time:"2 Hours 1 min 30s" ,timesicons:<FaTimes/> , offerPrice:"0.0025 ETH"},
      {listOwnerName:"john Abraham" , listImg:Wave,listName:'cute cool cube', openPrice:"0.0025 ETH",youOffer:"0.0045 ETH", offerImg:John,time:"2 Hours 1 min 30s" ,timesicons:<FaTimes/> , offerPrice:"0.0025 ETH"},
      {listOwnerName:"john Abraham" , listImg:Wave,listName:'cute cool cube', openPrice:"0.0025 ETH",youOffer:"0.0045 ETH", offerImg:John,time:"2 Hours 1 min 30s" ,timesicons:<FaTimes/> , offerPrice:"0.0025 ETH"},
      {listOwnerName:"john Abraham" , listImg:Wave,listName:'cute cool cube', openPrice:"0.0025 ETH",youOffer:"0.0045 ETH", offerImg:John,time:"2 Hours 1 min 30s" ,timesicons:<FaTimes/> , offerPrice:"0.0025 ETH"},
      {listOwnerName:"john Abraham" , listImg:Wave,listName:'cute cool cube', openPrice:"0.0025 ETH",youOffer:"0.0045 ETH", offerImg:John,time:"2 Hours 1 min 30s" ,timesicons:<FaTimes/> , offerPrice:"0.0025 ETH"},
      {listOwnerName:"john Abraham" , listImg:Wave,listName:'cute cool cube', openPrice:"0.0025 ETH",youOffer:"0.0045 ETH", offerImg:John,time:"2 Hours 1 min 30s" ,timesicons:<FaTimes/> , offerPrice:"0.0025 ETH"},
      {listOwnerName:"john Abraham" , listImg:Wave,listName:'cute cool cube', openPrice:"0.0025 ETH",youOffer:"0.0045 ETH", offerImg:John,time:"2 Hours 1 min 30s" ,timesicons:<FaTimes/> , offerPrice:"0.0025 ETH"},
     ]
    
     const Countdown = ({targetDate}) =>{
       const [remainingTime , setremainingTime ] = useState(null)
       useEffect(()=>{
      const InterValid = setInterval(()=>{
        const currentTime = new Date().getTime();
        const timeDiff = targetDate - currentTime
        if (timeDiff <= 0 ){
          setremainingTime({hours:0 , minutes:0 , seconds: 0})
        }else {
          const days = Math.floor(timeDiff/(1000*60*60*24));
          const hours = Math.floor(timeDiff%(1000*60*60*24)) / (1000*60*60);
          const minutes = Math.floor((timeDiff%(1000*60))/1000)
        }
        setremainingTime ({days , hours , minutes , seconds})
      } , 1000)
       return () =>{
        clearInterval(InterValid)
       }
       }, [targetDate])
     }






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
          <h3 className="capitalize font-normal text-white p-2 text-[1.5rem]  md:text-[2rem]">bids page
          <span className="block text-white font-normal text-sm">Welcome to bids page</span>
          </h3>
          <div className="">
          <div className="md:w-full block md:flex">
            {trendingBids.map((bid, index) => (
              <div key={index} className="flex justify-evenly m-3 md:mr-7 bg-[#1D1932] w-full rounded-lg p-4">
                <img src={bid.image} alt={bid.label} className="size-[50px]" />
                <p className="font-bold text-lg text-white">
                  {bid.value}
                  <span className="block text-sm text-[#68676E]">{bid.label}</span>
                </p>
                <p className={bid.color}>{bid.change}</p>
              </div>
            ))}
          </div>
        </div> 
          <div className="flex justify-between p-2">
          <h3 className="capitalize font-normal text-white pb-2 text-[1.5rem]   md:text-[2rem]">active bids</h3> 
          <button className="bg-[#6F4FF2] border-none rounded-md text-white font-sm  p-[4px] m-2">Place a bid </button>
          </div>
          <table className=" text-whiten border-hidden text-white min-w-full">
                 <thead className="">
                      <tr className="">
                          <th className='py-3 px-6 text-left text-center text-sm font-normal text-white'><FaSquare/> </th>
                          <th className=' py-3 px-6  text-lg font-normal  font-bold capitalize '>item list</th>
                          <th className=' py-3 px-6  text-lg font-normal  font-bold capitalize '>open price</th>
                          <th className=' py-3 px-6  text-lg font-normal  font-bold capitalize '>your offer</th>
                          <th className=' py-3 px-6  text-lg font-normal  font-bold capitalize '> time left</th>
                          <th className=' py-3 px-6  text-lg font-normal  font-bold capitalize '> recent offer   </th>
                          <th className=' py-3 px-6  text-lg font-normal  font-bold capitalize text-white '>action</th>
                      </tr>
                 </thead>
                 <tbody className="">
                      {
                        TableData.map(({listImg , listOwnerName ,time,listName , youOffer , offerImg,offerPrice , timesicons , openPrice}, index)=>{
                           return <tr className="m-7 w-full">
                          <td className=' text-center text-sm font-normal text-white py-3 px-6'><FaSquare/> </td>
                          <td className="py-3 px-6 text-[#6F4FF2] flex items-center py-3 px-6"> 
                            <img src={listImg} alt="" className="size-[50px] rounded-full m-2" />
                            <h3 className="text-lg text-sm capitalize">
                              {listName}
                              <span className="text-sm text-white block">{listOwnerName}</span>
                            </h3>
                          </td>
                           <td className="py-3 px-6">{openPrice}</td>
                           <td className="py-3 px-6">{openPrice}</td>
                           <td className="py-3 px-6 text-sm">{time}</td>
                           <td className=" block md:flex md:justify-center md:items-center py-3 px-6">
                            <img src= {offerImg} alt="" />
                             <p className="m-2">{offerPrice}</p>
                           </td>
                           <td className="py-3 px-6">{timesicons}</td>
                      </tr>
                        })
                      }
                 </tbody>
             </table>
        </div>
      </div>
    );
  }
  export default  ActiveBid

  // 09112966714 timothy

  const currentTime = new Date();
  const hours = currentTime.getHours() % 12;
  const minutes = currentTime.getMinutes() ;
  const ampm = currentTime.getHours() < 12 ? "AM" : "Am"

  console.log(`${hours}:${minutes.toString().padStart(2,0)}${ampm}`)