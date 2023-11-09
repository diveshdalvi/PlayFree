import Navbar from './Components/Navbar.jsx'
import GameList from './Components/GameContainer.jsx'
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [searchGame , setSearchGame] = useState('');
  const handleSearchGame = (text) => {
    setSearchGame(text)
  }
  const [game,setGame] = useState([]);
  useEffect(() => {
    const getData = async(searchQuery) => {
      const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
        params: {
          tag: '3d.mmorpg.fantasy.pvp',
          category: searchQuery
        },
        headers: {
          'X-RapidAPI-Key': '658f5b8a7dmsh8ef18cf53673e22p14bf79jsn91d91ab012df',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options);
        setGame(response.data);
        
      } catch (error) {
        console.error(error);
      }
    }
    getData(searchGame);
  }, [searchGame]);
  return (
    <div className=' bg-[#0F0F0F]  text-white '>
    <Navbar onSearchChange={handleSearchGame} />
    <GameList games ={game}/>
    </div>
  )
}
export default App
