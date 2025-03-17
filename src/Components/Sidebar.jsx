import React, { useContext } from "react";
import { useState } from "react";
import { FaHome, FaChartBar, FaDashcube, FaStar , FaHeart , FaUser} from "react-icons/fa";
import { BrowserRouter , NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png"
import { ThemeContext } from "../Context/ThemeContext";
const Sidebar = ({ isOpen }) => {
  
  const {darkMode} = useContext(ThemeContext)
  return (
    <div className={`bg-[#1D1932] text-white ${darkMode ? "bg-white text-black shadow-lg" : ""} `}>
    <div className={`h-screen p-4 transition-all ${isOpen ? "w-64" : "w-20"}`}>
      <img src={Logo} alt="" />
      <div className="space-y-6  mt-8">
        <NavLink to="/" className={({ isActive})=>isActive ? "text-textPrimary flex items-center space-x-2 mt-3" : "flex items-center space-x-2 mt-3"}><FaHome /> {isOpen && <span>Dashboard</span>}</NavLink>
        <NavLink  to="/Activebid" className={({ isActive})=>isActive ? "text-textPrimary flex items-center space-x-2 mt-3" : "flex items-center space-x-2 mt-3"}>< FaDashcube /> {isOpen && <span>Active Bids</span>}</NavLink>
        <NavLink to="/Saved"className={({ isActive})=>isActive ? "text-textPrimary flex items-center space-x-2 mt-3" : "flex items-center space-x-2 mt-3"}><FaHeart/> {isOpen && <span>Saved</span>}</NavLink>
        <NavLink to="/Collections"className={({ isActive})=>isActive ? "text-textPrimary flex items-center space-x-2 mt-3" : "flex items-center space-x-2 mt-3"}><FaStar/> {isOpen && <span>Favorite</span>}</NavLink>
        <NavLink to="/Profile"className={({ isActive})=>isActive ? "text-textPrimary flex items-center space-x-2 mt-3" : "flex items-center space-x-2 mt-3"}><FaUser/> {isOpen && <span> Profile</span>}</NavLink>
      </div>
    </div>
    </div>
  ); 
};

export default Sidebar