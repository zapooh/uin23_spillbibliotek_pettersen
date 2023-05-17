import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '/Users/hjem/Documents/GitHub/uin23_spillbibliotek_pettersen/spillbibliotek/src/styling/GamePage.scss';

const GamePage = ({ handleAddToFavourites }) => {
  let { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=297f829f8ad44043a53e537a8af68f82`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setGame(data);
      } catch (error) {
        console.error('Failed to fetch game:', error);
      }
    };
  
    fetchGame();
  }, [id]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className="game-page">
      <div className="game-details">
        <h2>{game.name}</h2>
        <p>{game.description_raw}</p>
        <button onClick={() => handleAddToFavourites(game)}>Add to Favourites</button>
      </div>
      <div className="game-image">
        <img src={game.background_image} alt={game.name} />
      </div>
    </div>
  );
};

export default GamePage;
