import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import logo from "../assets/Logo/2.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="header__logo" src={logo} />
      </div>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <button className="uploadBtn">Share</button>
    </div>
  );
};

export default Header;
