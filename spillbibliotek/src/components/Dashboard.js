import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div id="game-shop">
        <h2>GameShop</h2>
        {/* GameShop content goes here */}
      </div>
      <div id="my-favourites">
        <h2>MyFavourites</h2>
        {/* MyFavourites content goes here */}
      </div>
      <div id="my-games">
        <h2>MyGames</h2>
        {/* MyGames content goes here */}
      </div>
    </div>
  );
};

export default Dashboard;
