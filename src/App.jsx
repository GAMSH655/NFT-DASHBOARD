import React from 'react'
import Dashboard from "../src/Pages/Dashboard"
import  ActiveBid from "../src/Pages/ActiveBid"
import Saved from '../src/Pages/Saved';
import Collections from '../src/Pages/Collections';
import { BrowserRouter , NavLink, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
         <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard/>} />
                <Route path='/Activebid' element={<ActiveBid/>} />
                <Route path='/Saved' element={<Saved/>} />
                <Route path='/Collections' element={<Collections/>} />
            </Routes>
         </BrowserRouter>
    </div>
  )
}

export default App