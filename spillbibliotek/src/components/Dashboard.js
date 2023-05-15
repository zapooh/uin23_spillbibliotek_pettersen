import React from 'react';

const Dashboard = () => {
  return (
    <div className="content">
      <div className="section" id="game-shop">
        <h2>GameShop</h2>
        {/* GameShop content goes here */}
      </div>
      <div className="bottom-row">
        <div className="section" id="my-favourites">
          <h2>MyFavourites</h2>
          {/* MyFavourites content goes here */}
        </div>
        <div className="section" id="my-games">
          <h2>MyGames</h2>
          {/* MyGames content goes here */}
        </div>
      </div>
    </div>
  );
};


export default Dashboard;