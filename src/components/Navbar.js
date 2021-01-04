import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleLinkPage = (event) => {
    event.preventDefault();
    props.setPage(event.target.name);
    closeMobileMenu();
    window.scrollTo(0, 0);
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/#" className="navbar-logo" onClick={closeMobileMenu}>
          WORLD
          <i className="fas fa-globe" />
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a 
              href="/#" 
              name="Home" 
              className="nav-links" 
              onClick={handleLinkPage}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/#"
              name="Services"
              className="nav-links"
              onClick={handleLinkPage}
            >
              Services
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/#"
              name="Products"
              className="nav-links"
              onClick={handleLinkPage}
            >
              Products
            </a>
          </li>

          <li>
            <a
              href="/#"
              name="SignUp"
              className="nav-links-mobile"
              onClick={handleLinkPage}
            >
              Sign Up
            </a>
          </li>
        </ul>
        {button && <Button 
            name="SignUp" 
            buttonStyle="btn--outline" 
            onClick={handleLinkPage}
          >SIGN UP</Button>}
      </div>
    </nav>
  );
}

export default Navbar;