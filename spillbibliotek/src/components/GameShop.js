import React, { useEffect, useState } from 'react';
import '/Users/hjem/Documents/GitHub/uin23_spillbibliotek_pettersen/spillbibliotek/src/styling/GameShop.scss';

const GameShop = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch('https://api.rawg.io/api/games?key=69e290fe06984f048d66d4f7e338611a');
      const data = await response.json();
      setGames(data.results);
    };

    fetchGames();
  }, []);

  return (
    <div className="game-shop">
      <h2>GameShop</h2>
      {games.map((game) => (
        <div key={game.id} className="game">
          <h3>{game.name}</h3>
          <img src={game.background_image} alt={game.name} />
        </div>
      ))}
    </div>
  );
};

export default GameShop;
