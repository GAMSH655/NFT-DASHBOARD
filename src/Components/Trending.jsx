import React from 'react'
import {useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box'
import All from '../Tabs/All';
import Artwork from '../Tabs/Artwork';
import Book from '../Tabs/Book';
const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };
  
  // CustomTabPanel component
  const CustomTabPanel = ({ children, value, index, ...other }) => {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  };
const Trending = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <div>
       <div className="">
       <h3 className="font-bold text-white text-[3rem] m-3 ">Trending bids</h3>
       <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="Artwork" {...a11yProps(1)} />
              <Tab label="Book" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
           <All />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
           <Artwork />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
           <Book />
          </CustomTabPanel>
        </Box>
       </div>
    </div>
  )
}

export default Trending