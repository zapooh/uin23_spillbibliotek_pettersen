import React from 'react';
import GameCard from './GameCard';

const MyFavourites = ({ favourites }) => {
  return (
    <div className="my-favourites">
      <h2>MyFavourites</h2>
      {favourites.map((game) => (
        <GameCard key={game.id} game={game} isBuyButtonVisible={false} />
      ))}
    </div>
  );
};

export default MyFavourites;
