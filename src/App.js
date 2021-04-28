import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import Cart from './pages/Cart';
import Splash from './pages/Splash';
import Offline from './components/Offline';

function App() {
  const [splash, setSplash] = useState(true);
  const [cart, setCart] = useState(0);
  const [offline, setOffline] = useState(!navigator.onLine);

  const handleOffline = () => {
    setOffline(!navigator.onLine);
  };

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);

    window.addEventListener('online', handleOffline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOffline);
      window.removeEventListener('offline', handleOffline);
    };
  });
  return (
    <>
      <Router>
        {splash ? (
          <Splash />
        ) : (
          <>
            <Navbar counter={cart} />
            {offline && <Offline />}
            <Switch>
              <Route exact path="/">
                <Home setCart={setCart} cart={cart} />
              </Route>
              <Route exact path="/cart">
                <Cart setCart={setCart} cart={cart} />
              </Route>
            </Switch>
          </>
        )}
      </Router>
    </>
  );
}

export default App;
