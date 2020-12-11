import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";
import shoppingcart from "../imagesByEoin/shopping-cart.png";

function Navigation(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <div>
      <header>
        <ul className="header">
          <div className="navLeftSide">
            <li>
              <button className="burger-menu" onClick={openMenu}>
                &#9776;
              </button>
            </li>
            <li>
              <Link to="/">
                <h2>timberandbarkmulch.ie</h2>
              </Link>
            </li>
          </div>

          <div className="navRightSide">
            <li>
              {userInfo ? (
                <Link to="/profile">
                  <h4>{userInfo.name}</h4>
                </Link>
              ) : null}
            </li>
            <li>
              {userInfo && userInfo.isAdmin && (
                <div className="dropdown">
                  <a href="#">Admin</a>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/orders">Orders</Link>
                      <Link to="/products">Products</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <h4>
                <a href="#about">About</a>
              </h4>
            </li>

            <li>
              <h4>
                <a href="#products">Products</a>
              </h4>
            </li>

            <li>
              <h4>
                <a href="#contact">Contact</a>
              </h4>
            </li>
            <li className="cart-color-background">
              <h4>
                <a href="/cart/:id?">
                  Cart{" "}
                  {cart.cartItems.length ? `(${cart.cartItems.length})` : null}
                </a>
              </h4>
            </li>
          </div>
        </ul>
        <div className="straightenThis"></div>
      </header>

      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
          x
        </button>
        <ul className="categories">
          <li>
            <Link to="/">Link One</Link>
          </li>

          <li>
            <Link to="/">Link Two</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Navigation;
