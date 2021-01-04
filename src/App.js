import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="main-content">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
