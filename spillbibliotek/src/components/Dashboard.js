import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GameCard from './GameCard';

const Dashboard = () => {
  const [latestGames, setLatestGames] = useState([]);
  const [sameGenreGames, setSameGenreGames] = useState([]);

  useEffect(() => {
    const fetchLatestGames = async () => {
      const response = await fetch('https://api.rawg.io/api/games?key=69e290fe06984f048d66d4f7e338611a&ordering=added&page_size=3');
      const data = await response.json();
      setLatestGames(data.results);
    };

    const fetchSameGenreGames = async () => {
      const response = await fetch('https://api.rawg.io/api/games?key=69e290fe06984f048d66d4f7e338611a&genres=action&page_size=4');
      const data = await response.json();
      setSameGenreGames(data.results);
    };

    fetchLatestGames();
    fetchSameGenreGames();
  }, []);

  return (
    <div className="content">
      <div className="section" id="game-shop">
        <h2>GameShop</h2>
        {latestGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
        <Link to="/game-shop"><button>Visit Shop</button></Link>
      </div>
      <div className="bottom-row">
        <div className="section" id="my-favourites">
          <h2>MyFavourites</h2>
          {/* MyFavourites content goes here */}
          <Link to="/my-favourites"><button>Go to Favourites</button></Link>
        </div>
        <div className="section" id="my-games">
          <h2>MyGames</h2>
          {sameGenreGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
          <Link to="/my-games"><button>Go to Library</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
