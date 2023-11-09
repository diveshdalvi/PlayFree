import React, { useState } from 'react'
import Select from "react-dropdown-select";
const Navbar = ({ onSearchChange , onSortChange}) => {
  const sortOption = [
    {value: "alphabetical",
    label: "Alphabetically"
    },
    {
      value: "release-date",
      label: "Release Date"
    }
  ]
 
  const handleChange = (event) => {
    const searchText = event.target.value;
    onSearchChange(searchText);
  };

  const handleSortChange = (selectedOptions) => {

    const selectedSortOption = selectedOptions[0].value;
    onSortChange(selectedSortOption);
  };

  return (
    <>
    <div className=' bg-[#000000] text-white flex w-full p-4 justify-between flex-wrap  border-white '>
      <span className=' text-2xl'>FreeGame.in</span>
      <div>  
          <input
            type="search"
            name=""
            onChange={handleChange}
            id="search-bar"
            placeholder='Search Games'
            className='bg-[#03001C] border-2 border-[#0B2447] rounded-lg p-1'/>
            </div>
          <Select options={sortOption} className='text-gray-500 bg-[#03001C]' onChange={handleSortChange} placeholder='Sort Games' searchable = {false} color='#0B2447'></Select>
          
    </div>
    
    </>
  )
}
export default Navbar