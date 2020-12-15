import React, { useEffect } from "react";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation.js";
import Footer from '../components/Footer.js';

function CartScreen(props) {
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };

  return (
    <section>
      <Navigation />
      <div className="cart">
        <div className="cart-list">
          <ul className="cart-list-container">
            <li>
              <h3>Shopping Cart</h3>
              <div>Price</div>
            </li>
            {cartItems.length === 0 ? (
              <div><h4>
                Cart is Empty
              </h4>
              <div className="see-products-button">
              <Link to="/"><h4 className="see-products"><u>Go to Products</u></h4></Link>
              </div>
              </div>
            ) : (
              cartItems.map((item) => (
                <li>
                  <div className="cart-image">
                    <img src={item.image} alt="product" />
                  </div>
                  <div className="cart-name">
                    <div>
                      <Link to={"/product/" + item.product} className="black-text" >{item.name}</Link>
                    </div>
                      Qty:
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(addToCart(item.product, e.target.value))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                      <p
                        type="button"
                        className=""
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <u>Delete</u>
                      </p>
                  </div>
                  <div className="cart-price">€{item.price}</div>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="cart-action">
          <h3>
            Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items) : €{" "}
            {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
          </h3>
          <button
            onClick={checkoutHandler}
            id="greenButton"
            className="button primary full-width"
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default CartScreen;
