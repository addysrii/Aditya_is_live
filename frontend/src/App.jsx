import React from 'react';
import { HelmetProvider, Helmet } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componenets/Navbar';
import Hero from './componenets/Hero';
import PoetryPage from './componenets/Poetry';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>Aditya</title>
        </Helmet>
        <Navbar />
        <Hero/>
      <PoetryPage/>
        <Routes>
          {/* Define routes here */}
          {/* <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/poetry" element={<PoetryPage />} /> */}
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
