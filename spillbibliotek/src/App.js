import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import GameShop from './components/GameShop';
import MyGames from './components/MyGames';
import MyFavourites from './components/MyFavourites';
import Navbar from './components/Navbar';

import './App.css';

import './App.scss';

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
    </Router>
  );
}

export default App;


