import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";
import shoppingcart from "../imagesByEoin/shopping-cart.png";
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import SvgIcon from "@material-ui/icons/ShoppingCartSharp";

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
        <li className="cart-icon">
          <SvgIcon>
          <ShoppingCartSharpIcon></ShoppingCartSharpIcon>
          </SvgIcon>
            </li>
          <div className="navLeftSide">

            <li>
              <Link to="/">
                <h2 className="mobilefonth2">timberandbarkmulch.ie</h2>
              </Link>
            </li>
          </div>

          <div>
            <li>
              <button className="burger-menu" onClick={openMenu}>
                &#9776;
              </button>
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
            <li>
              <h4>
                <a className="cart-text" href="/cart/:id?">
                Cart {cart.cartItems.length ? `(${cart.cartItems.length})` : null}
                </a></h4>
            </li>
          </div>
        </ul>
        <div className="straightenThis"></div>
      </header>

      <aside className="sidebar">
        <h3>Navigation</h3>
        <h5 className="sidebar-close-button" onClick={closeMenu}>
          X
        </h5>
        <ul className="categories">
          <li>
            <h5><a className="whitetext" href="/">Home</a></h5>
          </li>
          <li>
            <h5><a className="whitetext" href="/#products">Products</a></h5>
          </li>
          <li>
            <h5><a className="whitetext" href="/#contact">Contact</a></h5>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Navigation;
