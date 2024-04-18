import React from "react";
import "./Header.css";
import "./Login.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import logo from "../assets/Logo/2.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img className="header__logo" src={logo} />
        </div>

        <div className="header__search">
          <input
            className="header__searchInput"
            type="text"
            placeholder="Find What You Need"
          />
          <SearchIcon className="header__searchIcon" />
        </div>

        <button class="form-group form-button">Share</button>
      </div>
    </>
  );
};

export default Header;
