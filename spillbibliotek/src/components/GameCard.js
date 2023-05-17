// GameCard.js
import React from 'react';
import '/Users/hjem/Documents/GitHub/uin23_spillbibliotek_pettersen/spillbibliotek/src/styling/GameCard.scss';



const GameCard = ({ game, isBuyButtonVisible = true }) => {
  return (
    <div className='game-card'>
      <h3>{game.name}</h3>
      <img src={game.background_image} alt={game.name} />
      {isBuyButtonVisible && <button>Buy</button>}
    </div>
  );
};

export default GameCard;

