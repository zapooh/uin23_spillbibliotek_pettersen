import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import GameShop from './components/GameShop';
import MyGames from './components/MyGames';
import MyFavourites from './components/MyFavourites';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GamePage from './components/GamePage';

import '/Users/hjem/Documents/GitHub/uin23_spillbibliotek_pettersen/spillbibliotek/src/styling/App.scss';

function App() {
  const [favourites, setFavourites] = useState([]);

  const handleAddToFavourites = (game) => {
    setFavourites((prevFavourites) => [...prevFavourites, game]);
  };

  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={<Dashboard favourites={favourites} handleAddToFavourites={handleAddToFavourites} />}
          />
          <Route path="/game-shop" element={<GameShop />} />
          <Route
            path="/my-games"
            element={<MyGames favourites={favourites} handleAddToFavourites={handleAddToFavourites} />}
          />
          <Route
            path="/my-favourites"
            element={<MyFavourites favourites={favourites} />}
          />
          <Route
            path="/game/:id"
            element={<GamePage handleAddToFavourites={handleAddToFavourites} />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
