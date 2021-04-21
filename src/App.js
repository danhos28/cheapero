import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Home } from './pages/Home';
import Splash from './pages/Splash';
import Categories from './pages/Categories';

function App() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  });
  return (
    <>
      {splash ? (
        <Splash />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Categories />
          <Home />
        </>
      )}
    </>
  );
}

export default App;
