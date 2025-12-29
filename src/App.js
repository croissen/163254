import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './layout/Header';
import Footer from './layout/Footer';

import Sell from './pages/Sell';
import Home from './pages/home/Home';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex-grow: 1;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Sell />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;