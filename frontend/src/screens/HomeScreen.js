import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import Rating from "../components/Rating";
import firewoodstack from "../imagesByEoin/firewoodstack.jpeg";
import Navigation from "../screensByEoin/Navigation";
import VideoAndDesc from "../screensByEoin/VideoAndDesc";
import Footer from "../screensByEoin/Footer";
import timberstack from "../imagesByEoin/timberstack.jpg";
import yard from "../imagesByEoin/yard.jpg";


function HomeScreen(props) {
  const [qty, setQty] = useState(1);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const category = props.match.params.id ? props.match.params.id : "";
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + 1);
  };

  return (
    <>
      <Navigation />
      <VideoAndDesc />
      <div className="firewoodSection">
        <img src={firewoodstack} />
      </div>
      {/* {category && <h2>{category}</h2>} */}

      {/* <ul className="filter">
        <li>
          <form onSubmit={submitHandler}>
            <input
              name="searchKeyword"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </li>
        <li>
          Sort By{' '}
          <select name="sortOrder" onChange={sortHandler}>
            <option value="">Newest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </li>
      </ul> */}
      <div className="containerByEoin">
        <div className="homepageSectionOne">
          <hr className="smallHR" />
          <h2 className="supplytext">
            <i>
              40 years of supplying firewood, timber products and tree services.
            </i>
          </h2>
          <hr className="smallHR" />
        </div>

        <section className="products-section">
          <div className="forPaddingSections">
            <h1 id="products">Products</h1>
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              <ul className="products">
                {products.map((product) => (
                  <li key={product._id}>
                    <div className="product">
                      <Link to={"/product/" + product._id}>
                        <img
                          className="product-image"
                          src={product.image}
                          alt="product"
                        />
                      </Link>
                      <div className="product-name pad">
                        <Link className="product-actual-name" to={"/product/" + product._id}>
                          {product.name}
                        </Link>
                      </div>
                      <div className="product-brand pad">
                        {product.weightOrDimensions}
                      </div>
                      <div className="product-price pad"> {product.price ? '€' : null}</div>
                      <div className="product-rating pad">
                        <Rating
                          value={product.rating}
                          text={product.numReviews + " reviews"}
                        />
                      </div>
                      {product.countInStock > 0 ? (
                        <button
                          onClick={handleAddToCart}
                          className="button primary"
                        >
                          Add to Cart
                        </button>
                      ) : <button className="button primary">Email Us For Orders</button>}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="">
          <div className="forPaddingSections">
            <h2>How It Works</h2>
            <div className="inforgraphic">
              <div className="inside-infographic">
                <h1>1</h1>
                <h3>Order Firewood</h3>
              </div>
              <p className="inforgraphic-text">
                Order, pay and read reviews online
              </p>
            </div>

            <div className="inforgraphic">
              <div className="inside-infographic">
                <h1>2</h1>
                <h3>Choose Delivery or Collection</h3>
              </div>
              <p className="inforgraphic-text">
                Receive firewood delivery or schedule a time for collection from
                our yard in Mullingar.
              </p>
            </div>

            <div className="inforgraphic">
              <div className="inside-infographic">
                <h1>3</h1>
                <h3>Heat from your fire.</h3>
              </div>
              <p className="inforgraphic-text">
                All of our firewood is seasoned for at least 2 years.
              </p>
            </div>

            <div></div>
          </div>
        </section>

        <section className="homepageSectionFirewood">
          <div className="forPaddingSections">
            <h2>Our Firewood</h2>
            <section className="">
              <div>
                <ul>
                  <li>
                    Comes from dangerous trees that had to be cut down for
                    safety reasons.
                  </li>
                  <li>
                    Naturally dried and seasoned in our yard in the centre of
                    Ireland for at least 2 years.
                  </li>
                </ul>
              </div>
              <div className="imagecontainer">
                <img className="imagetocontain" src={yard} />
              </div>
            </section>
          </div>
        </section>

        <section className="about-section">
          <div className="forPaddingSections">
            <h1 id="about">About Us</h1>
            <section>
              <div>
                <img src={timberstack} />
              </div>
              <div>
                <p>
                  Mick Lynch &amp; Son Tree Surgery have been felling dangerous
                  trees and selling firewood since 19XX. In response to an
                  increasing demand for timber based products in the midlands,
                  John Lynch decided to setup timberandmulch.ie and the
                  necessary infrastructure to process and sell firewood, bark
                  mulch and slabs of hardwood for use with furniture,
                  construction, art, design and more.
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
export default HomeScreen;
