import React from 'react'

const Navbar = () => {
  const games = [
    {label: "PUBG" , value: 1},
    {label: "Free Fire" , value: 2},
    {label: "Clash of Clans" , value: 3},
    {label: "Chess" , value: 4}
  ]
  return (
    <>
    <div className=' bg-[#000000] text-white flex w-full p-3.5 justify-between flex-wrap  border-white '>
      <span className=' text-2xl'>FreeGame.in</span>
      <div className=' justify-center '>  
      
          <input
            type="search"
            name=""
            id="search-bar"
            placeholder='Search Games'
            className='bg-[#03001C] border-2 border-[#0B2447] rounded-lg p-1'/>
            </div>

      {/* <div className=' border-2 border-white rounded-md'>
        <select name="" id="" className=' bg-[#03001C]  rounded-lg p-1' >
          {games.map(option => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div> */}
    </div>
    
    </>
  )
}
export default Navbar