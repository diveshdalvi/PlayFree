import Navbar from './Components/Navbar.jsx'
import GameList from './Components/GameContainer.jsx'
import React, {useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [searchGame , setSearchGame] = useState('');
  const handleSearchGame = (text) => {
    setSearchGame(text)
  }
  
  const [game,setGame] = useState([]);

  const [sortOption , setSortOption] = useState();
  const handleSortChange = (selectedSortOption) => {
    setSortOption(selectedSortOption);
   
  };
  useEffect(() => {
    const getData = async(searchQuery , sort_method) => {
      const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {
          'sort-by': sort_method
        },
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
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
    getData(searchGame , sortOption);
  }, [searchGame , sortOption]);
  return (
    <div className=' bg-[#0F0F0F]  text-white '>
    <Navbar onSearchChange={handleSearchGame} onSortChange={handleSortChange}  />
    <GameList games ={game}/>
    </div>
  )
}
export default App
