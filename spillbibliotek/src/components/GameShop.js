
import React, { useEffect, useState } from 'react';
import GameCard from './GameCard';
import '/Users/hjem/Documents/GitHub/uin23_spillbibliotek_pettersen/spillbibliotek/src/styling/GameShop.scss';

const GameShop = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch('https://api.rawg.io/api/games?key=69e290fe06984f048d66d4f7e338611a&ordering=added&page_size=10');
      const data = await response.json();
      setGames(data.results);
    };

    fetchGames();
  }, []);

  const buyGame = (gameName) => {
    alert(`You have clicked Buy on ${gameName}`);
    
  };

  return (
    <div className="game-shop">
      <h2>GameShop</h2>
      {games.map((game) => (
        <GameCard key={game.id} game={game} onBuy={buyGame} />
      ))}
    </div>
  );
};

export default GameShop;
