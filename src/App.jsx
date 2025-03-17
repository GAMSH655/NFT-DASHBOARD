import React from 'react'
import Dashboard from "../src/Pages/Dashboard"
import  ActiveBid from "../src/Pages/ActiveBid"
import Saved from '../src/Pages/Saved';
import Collections from '../src/Pages/Collections';
import Profile from '../src/Pages/Profile';
import { BrowserRouter , NavLink, Route, Routes } from "react-router-dom";
import { ThemeProvider } from './Context/ThemeContext';
const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ActiveBid" element={<ActiveBid />} />
          <Route path="/Saved" element={<Saved />} />
          <Route path="/Collections" element={<Collections />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App