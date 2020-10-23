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
      <header className="header">
        <button className="navForMobiles" onClick={openMenu}>
          &#9776;
        </button>
        <Link to="/">
          <h1>timberandbarkmulch.ie</h1>
        </Link>
        {userInfo ? <Link to="/profile">Welcome {userInfo.name}</Link> : null}
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
        <div className="straightenThis">
          <h1><a href="#about">About</a></h1>
          <h1><a href="#products">Products</a></h1>
          <a href="/cart/:id?">
            <h1>Cart {cart.cartItems.length}</h1>
          </a>
        </div>
      </header>

      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
          x
        </button>
        <ul className="categories">
          <li>
            <Link to="/category/Pants">Pants</Link>
          </li>

          <li>
            <Link to="/category/Shirts">Shirts</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Navigation;
