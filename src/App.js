import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import Cart from './pages/Cart';
import Splash from './pages/Splash';

function App() {
  const [splash, setSplash] = useState(true);
  const [cart, setCart] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  });
  return (
    <>
      <Router>
        {splash ? (
          <Splash />
        ) : (
          <>
            <Navbar counter={cart} />
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
