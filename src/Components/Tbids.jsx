
import React, { useContext } from "react";
import Auctions from "../assets/Auction.png";
import Creator from "../assets/Creator.png";
import Artwork from "../assets/Artwork.png";
import Chart from "../assets/Chart.png";
import Stat from "../assets/Stat.png";
import Dounghnut from "../Charts/Dounghnut";
import { ThemeContext } from "../Context/ThemeContext";
const trendingBids = [
  { image: Artwork, value: "24k", label: "Artwork", change: "+168.001%", color: "text-[#50BB25]" },
  { image: Auctions, value: "89k", label: "Auction", change: "+168.001%", color: "text-[#DC3546]" },
  { image: Creator, value: "82k", label: "Creator", change: "+168.001%", color: "text-[#50BB25]" }
];

const Tbids = () => {
   const {darkMode , ToggleTheme} = useContext(ThemeContext)
  return (
    <div className=" block md:flex  md:justify-between">
          <div className="md:w-full m-2">
          <h3 className="font-bold text-lg capitalize text-white m-2">Trending Bids</h3>
            {trendingBids.map((bid, index) => (
              <div key={index} className="flex justify-evenly mt-7 bg-[#1D1932] w-full rounded-lg p-4">
                <img src={bid.image} alt={bid.label} className="size-[50px]" />
                <p className="font-bold text-lg text-white">
                  {bid.value}
                  <span className="block text-sm text-[#68676E]">{bid.label}</span>
                </p>
                <p className={bid.color}>{bid.change}</p>
              </div>
            ))}
          </div>
            <div className="md:w-full m-3 md:mt-4">
           <h3 className="font-bold text-lg capitalize text-white m-3">ETH Price</h3>
              <div className="bg-[#1D1932] rounded-md p-[10px] w-full">
                <img src={Chart} alt="ETH Price Chart"  className="md:w-full h-[290px]" />
              </div>
            </div>

            

            <div className="md:w-full m-3 md:mt-4">
              <h3 className="font-bold text-lg capitalize text-white m-2">Statistics</h3>
              <div className="bg-[#1D1932] rounded-md ">
                <Dounghnut/>
              </div>
          
          
          </div>
        </div>
  );
};

export default Tbids;