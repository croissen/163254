// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sell from './pages/Sell';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sell />} />
      </Routes>
    </Router>
  );
}

export default App;