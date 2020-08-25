import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  console.log(basket, "basket");
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        ></img>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput"></input>
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>

      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_option1">Hello abc</span>
            <span className="header_option2">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_option1">Returns</span>
            <span className="header_option2">&Orders</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_option1">Your</span>
            <span className="header_option2">Prime</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header_basket">
            <ShoppingBasketIcon />
          </div>

          <span className="header_option2 basket_count">{basket?.length}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
