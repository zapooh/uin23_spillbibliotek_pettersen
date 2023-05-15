import React from 'react';

import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="content">
      <div className="section" id="game-shop">
        <h2>GameShop</h2>
        {/* GameShop content goes here */}
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
          {/* MyGames content goes here */}
          <Link to="/my-games"><button>Go to Library</button></Link>
        </div>
      </div>
    </div>
  );
};



export default Dashboard;