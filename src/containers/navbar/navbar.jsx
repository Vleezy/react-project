import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/img/logo.png";
import "./styles.css";
import scrollThrottled from "./useDocumentScrollThrottled";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const MINIMUM_SCROLL = 80;

  const handleScrolling = (callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setIsSticky(isScrolledDown && isMinimumScrolled);
  };

  scrollThrottled(handleScrolling);

  return (
    <div className={`header ${isSticky ? "header--sticky" : ""}`}>
      <nav className="navbar">
        <div className="navbar-item logo__container">
          <Link className="logo__anchor" to="/">
            <img className="logo__img" src={Logo} alt="Hm-logo" />
            <span className="logo__text">Hyper Machine</span>
          </Link>
        </div>
        <div className="navbar-item">
          <Link to="/product">Machines</Link>
          {/* <Link to="/products?branch=intel">Intel</Link> */}
          {/* <Link to="/products?branch=amd">AMD</Link> */}
        </div>
        <div className="navbar-item">
          <Link to="/contact">Contact Us</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
