import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="header">My Gaming App</div>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/game-shop">GameShop</Link></li>
        <li><Link to="/my-favourites">MyFavourites</Link></li>
        <li><Link to="/my-games">MyGames</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

