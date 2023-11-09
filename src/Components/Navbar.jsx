import React, { useState } from 'react'

const Navbar = ({ onSearchChange }) => {
  const handleChange = (event) => {
    const searchText = event.target.value;
    onSearchChange(searchText);
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
          
    </div>
    
    </>
  )
}
export default Navbar