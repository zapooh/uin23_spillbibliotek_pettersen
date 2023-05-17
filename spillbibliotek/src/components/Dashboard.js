import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GameCard from './GameCard';
import '/Users/hjem/Documents/GitHub/uin23_spillbibliotek_pettersen/spillbibliotek/src/styling/Dashboard.scss';

const Dashboard = ({ favourites }) => {
  const [latestGames, setLatestGames] = useState([]);
  const [sameGenreGames, setSameGenreGames] = useState([]);

  useEffect(() => {
    const fetchLatestGames = async () => {
      try {
        const response = await fetch('https://api.rawg.io/api/games?key=297f829f8ad44043a53e537a8af68f82&ordering=added&page_size=3');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setLatestGames(data.results);
      } catch (error) {
        console.error('Failed to fetch latest games:', error);
      }
    };

    const fetchSameGenreGames = async () => {
      try {
        const response = await fetch('https://api.rawg.io/api/games?key=297f829f8ad44043a53e537a8af68f82&genres=action&page_size=4');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSameGenreGames(data.results);
      } catch (error) {
        console.error('Failed to fetch same genre games:', error);
      }
    };

    fetchLatestGames();
    fetchSameGenreGames();
  }, []);

  const buyGame = (gameName) => {
    alert(`You have clicked Buy on ${gameName}`);
  };

  return (
    <div className="content">
      {/* ... other sections ... */}
      <div className="section" id="game-shop">
        <h2>GameShop</h2>
        {latestGames.map((game) => (
          <GameCard key={game.id} game={game} showBuyButton={true} onBuy={buyGame} />
        ))}
        <Link to="/game-shop">
          <button>Visit Shop</button>
        </Link>
      </div>
      <div className="bottom-row">
        <div className="section" id="my-favourites">
          <h2>MyFavourites</h2>
          {favourites.slice(0, 3).map((game) => (
            <GameCard key={game.id} game={game} showBuyButton={false} />
          ))}
          <Link to="/my-favourites">
            <button>Go to Favourites</button>
          </Link>
        </div>
        <div className="section" id="my-games">
          <h2>MyGames</h2>
          {sameGenreGames.map((game) => (
            <GameCard key={game.id} game={game} showBuyButton={false} />
          ))}
          <Link to="/my-games">
            <button>Go to Library</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
