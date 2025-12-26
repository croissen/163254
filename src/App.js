// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sell from './pages/Sell';
import Home from './pages/home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sell />} />
        <Route path="/home" element={<Home />} />        
      </Routes>
    </Router>
  );
}

export default App;