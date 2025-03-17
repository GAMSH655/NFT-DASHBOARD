import React, { useContext ,useState } from 'react'
import { FaBars ,FaMagnifyingGlass, FaSun , FaBell} from 'react-icons/fa6'
import Avatar from "../assets/Avatar.png"
import { ThemeContext } from "../Context/ThemeContext";
import ToggleButton from '../Components/ToggleButton';
const Header = ({toggleSidebar}) => {
   const {darkMode , ToggleTheme} = useContext(ThemeContext)
  return (
         <header className={`bg-[#131129] shadow-lg flex items-center justify-between ${darkMode ? "bg-white shadow-lg text-black": ""}`}>
                    <div className=" flex justify-between ">
                    <button className="m-3" onClick={toggleSidebar}>
                      <FaBars />
                    </button>
                      <div className="bg-gray-600 m-3 flex items-center  rounded-full">
                      <FaMagnifyingGlass className="mx-2" />
                      <input
                        type="text"
                        className="border-none focus:outline-none p-2 rounded-full bg-transparent"
                        placeholder="Search here"
                      />
                    </div>
                    </div>
                     
                     <div className="flex">
                     <ToggleButton onClick={ToggleTheme} />
                       <FaBell className="inline mt-3 text-white"/>
                       <img src={Avatar} alt="" className="inline m-3 size-[30px]" />
                     </div>
             </header> 
  )
}

export default Header