import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Footer from './components/Footer';

function App() {
  const pages = {
    "Home": <Home />,
    "Products": <Products />,
    "Services": <Services />,
    "SignUp": <SignUp />
  };

  const [contentPage, setContentPage] = useState("Home");

  return (
    <div className="App">
      <Navbar setPage={setContentPage} />
      <div id="main-content">
        {pages[contentPage]}
      </div>
      <Footer />
    </div>
  );
}

export default App;
