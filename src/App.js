import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import Cart from './pages/Cart';
import Splash from './pages/Splash';
import Offline from './components/Offline';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';

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
            {offline && <Offline />}
            <Switch>
              <Route exact path="/">
                <Navbar counter={cart} />
                <Home setCart={setCart} cart={cart} />
                <Footer />
              </Route>
              <Route exact path="/cart">
                <Navbar counter={cart} />
                <Cart setCart={setCart} cart={cart} />
                <Footer />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
            </Switch>
          </>
        )}
      </Router>
    </>
  );
}

export default App;
