import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../App.css';
import { useSelector } from 'react-redux';



function Navigation(props) {

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
  
    const openMenu = () => {
      document.querySelector('.sidebar').classList.add('open');
    };
    const closeMenu = () => {
      document.querySelector('.sidebar').classList.remove('open');
    };

  return (
    <div>
      <header className="header">
          <button onClick={openMenu}>&#9776;</button>
          <Link to="/">timberandbarkmulch.ie</Link>
          {userInfo ? (
            <Link to="/profile">Welcome {userInfo.name}</Link>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
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
            <a href="/cart/:id?">Cart {cart.cartItems.length} </a>
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