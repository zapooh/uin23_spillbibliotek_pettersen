import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/hjem/Documents/GitHub/uin23_spillbibliotek_pettersen/spillbibliotek/src/styling/GameCard.scss';

const GameCard = ({ game, showBuyButton, onBuy }) => {  
  return (
    <Link to={`/game/${game.id}`} style={{ textDecoration: 'none' }}>
      <div className="game-card">
        <h3>{game.name}</h3>
        <img src={game.background_image} alt={game.name} />
        {showBuyButton && <button onClick={() => onBuy(game.name)}>Buy</button>}  {/* Only render the button if showBuyButton is true */}
      </div>
    </Link>
  );
};

export default GameCard;


