import React, { useEffect, useState } from 'react';
import GameCard from './GameCard';

const MyGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch('https://api.rawg.io/api/games?key=69e290fe06984f048d66d4f7e338611a&genres=action&page_size=20');
      const data = await response.json();
      setGames(data.results);
    };

    fetchGames();
  }, []);

  return (
    <div className="my-games">
      <h2>MyGames</h2>
      {games.map((game) => (
        <GameCard key={game.id} game={game} isBuyButtonVisible={false} />
      ))}
    </div>
  );
};

export default MyGames;
