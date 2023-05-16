import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import GameShop from './components/GameShop';
import MyGames from './components/MyGames';
import MyFavourites from './components/MyFavourites';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import '/Users/hjem/Documents/GitHub/uin23_spillbibliotek_pettersen/spillbibliotek/src/styling/App.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/game-shop" element={<GameShop />} />
        <Route path="/my-games" element={<MyGames />} />
        <Route path="/my-favourites" element={<MyFavourites />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
