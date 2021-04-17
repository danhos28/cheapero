import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Home />
    </>
  );
}

export default App;
