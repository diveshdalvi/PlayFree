import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const GameList = ({games}) => {
  
  return (
    <div className='flex flex-wrap'>
        {games.map((game) => (
            <div className=' bg-[#191717]  flex flex-col  border-white rounded-lg m-5 border-2 sm:w-1/6 p-4 w-full sm:hover:scale-105 transition-transform'>
            <img src={game.thumbnail} alt="img" className='object-cover w-96 h-48'/>
            <div className='mt-3 '>
              <div className=' text-center text-2xl  cursor-pointer mb-2 '><a href= {game.game_url}>{game.title }</a></div>

            <p className='text-sm text-gray-400 mb-2'>{game.short_description}</p>
            <div className='mb-2 text-md'>
            <div className=' text-lg'><a href= {game.freetogame_profile_url}>{game.publisher}</a></div>
            </div>
            <div  className='text-xs flex justify-between'>
              <span >Genere: {game.genre}</span>
              <span>Release Date:  {game.release_date}</span>
            </div>
            </div>
        </div>
        ))}
    </div>
  )
}
export default GameList