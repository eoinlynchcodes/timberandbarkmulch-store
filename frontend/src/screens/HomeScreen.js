import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import Rating from "../components/Rating";
import firewoodstack from "../imagesByEoin/firewoodstack.jpeg";
import Navigation from "./Navigation";
import VideoAndDesc from "../screensByEoin/VideoAndDesc";

function HomeScreen(props) {
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

  return (
    <>
      <Navigation />
      <div className="firewoodSection">
        <img src={firewoodstack} />
      </div>
      <VideoAndDesc />
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
        <hr/>
        <h2>Products</h2>
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
                  <div className="product-name">
                    <Link to={"/product/" + product._id}>{product.name}</Link>
                  </div>
                  <div className="product-brand">{product.brand}</div>
                  <div className="product-price">${product.price}</div>
                  <div className="product-rating">
                    <Rating
                      value={product.rating}
                      text={product.numReviews + " reviews"}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <hr />
        <div className="homepageSection">
          <h2>How It Works</h2>
          <p>
            1&#41; You order firewood.
            <br />
            2&#41; We deliver your bags of naturally seasoned, dry
            firewood(adjectives + benefits + consider feelings we want to evoke)
            that is ready to heat you and your home. Our firewood comes from
            dangerous trees that had to be cut down for safety reasons. <br/>
            3&#41; Something goes here.<br/>
          </p>
        </div>
        <hr />

        <div className="homepageSection">
          <h2>Our Firewood</h2>
          <ul>
            <li>
              Comes from dangerous trees that had to be cut down for safety
              reasons.
            </li>
            <li>
              Naturally dried and seasoned in our yard in the centre of Ireland
              for at least 2 years.
            </li>
          </ul>
        </div>
        <hr />

        <div className="homepageSection">
          <h2>About Us</h2>
          <p>
            Mick Lynch &amp; Son Tree Surgery have been felling dangerous trees
            and selling firewood since 19XX. In response to an increasing demand
            for timber based products in the midlands, John Lynch decided to
            setup timberandmulch.ie and the necessary infrastructure to process
            and sell firewood, bark mulch and slabs of hardwood for furniture,
            construction, design and more.
          </p>
        </div>
      </div>
    </>
  );
}
export default HomeScreen;
