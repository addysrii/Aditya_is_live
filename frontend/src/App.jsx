import React from 'react';
import { HelmetProvider, Helmet } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componenets/Navbar';
import Hero from './componenets/Hero';
import PoetryPage from './componenets/Poetry';

const HomePage = () => (
  <div>
    <Hero />
    <h1>Welcome to the Homepage!</h1>
  </div>
);

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>Aditya</title>
        </Helmet>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/poetry" element={<PoetryPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
