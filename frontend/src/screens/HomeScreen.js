import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import Rating from "../components/Rating";
import firewoodstack from "../imagesByEoin/firewoodstack.jpeg";
import Navigation from "../components/Navigation";
import timberstack from "../imagesByEoin/timberstack.jpg";
import yard from "../imagesByEoin/yard.jpg";
import stoveburning from "../imagesByEoin/stoveburning.png";
import firewoodgraphic from "../imagesByEoin/firewoodgraphic.png";

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
      <div className="videoAndDescription">
        <div className="left33">
          <div className="textToSquare">
            <div className="main-text-block">
              <h1>Firewood Delivered.</h1>
              <p className="">
                Order online and get firewood delivered in Westmeath.
                <br /> Seasoned and dried by air or kiln.
              </p>
            </div>

            <div className="firewoodInfographicDiv">
              <img src={firewoodgraphic} />
            </div>
            <div className="flexThisEvenly">
              <a className="" href="#products">
                <p className="orderNowButton">Order Now</p>
              </a>
              <a className="" href="#products">
                <p className="seeProductButton"><u>See Products</u></p>
              </a>
            </div>          
          </div>
        </div>

        <div className="right66">
          <img src={stoveburning} />
        </div>
      </div>

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

        <div className="homepageSectionOne">
          <div className="forPaddingSections">
            <hr className="smallHR" />
            <h2 className="supplytext">
              <i>
                40 years of supplying firewood, timber products and tree
                services.
              </i>
            </h2>
            <hr className="smallHR" />
          </div>
        </div>

      <div className="containerByEoin">
        <section className="products-section">
          <div className="product-padding-section">
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
                        <Link
                          className="product-actual-name"
                          to={"/product/" + product._id}
                        >
                          {product.name}
                        </Link>
                      </div>
                      <div className="product-brand pad">
                        {product.weightOrDimensions}
                      </div>
                      <div className="product-price pad">
                        {" "}
                        {product.price ? `€ ${product.price}` : null}
                      </div>
                      <div className="product-rating pad">
                        <Rating
                          value={product.rating}
                          text={product.numReviews + " reviews"}
                        />
                      </div>
                      <div className="buttonDivHomepageProduct">
                        <div className="button fifty">More Information</div>
                        {product.countInStock > 0 ? (
                          <div
                            onClick={handleAddToCart}
                            className="button primary fifty"
                          >
                            Add to Cart
                          </div>
                        ) : (
                          <div className="button primary"><a href="#contact" className="whitetext">Email Us For Orders</a></div>
                        )}
                      </div>
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
            <section className="grey-border">
              <div className="inforgraphic greenOne">
                <div className="inside-infographic">
                  <h1>1</h1>
                </div>
                <div className="inforgraphic-text">
                  <h3>
                    <u>Order Firewood</u>
                  </h3>
                  <h5>Order, pay and read reviews online</h5>
                </div>
              </div>

              <div className="inforgraphic greenTwo">
                <div className="inside-infographic">
                  <h1>2</h1>
                </div>
                <div className="inforgraphic-text">
                  <h3>
                    <u>Choose Delivery or Collection</u>
                  </h3>
                  <h4>
                    Receive firewood delivery or schedule a time for collection
                    from our yard in Mullingar.
                  </h4>
                </div>
              </div>

              <div className="inforgraphic greenThree">
                <div className="inside-infographic">
                  <h1>3</h1>
                </div>
                <div className="inforgraphic-text">
                  <h3>
                    <u>Make use of your new firewood</u>
                  </h3>
                  <h4>
                    All of our firewood is seasoned for at least 2 years. Get
                    exceptional heat from your fire.
                  </h4>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="homepageSectionFirewood">
          <div className="forPaddingSections">
            <h2>Our Firewood</h2>
            <section className="grey-border">
              <div className="imagecontainer">
                <img className="imagetocontain" src={yard} />
              </div>
              <div className="forPaddingSections">
                <ul className="our-firewood-section">
                  <li>Seasoned for at least two years.</li>
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
            </section>
          </div>
        </section>

        <section className="about-section">
          <div className="forPaddingSections">
            <h1 id="about">About Us</h1>
            <section className="grey-border">
              <div>
                <img src={timberstack} />
              </div>
              <div className="forPaddingSections">                
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

        <section className="contact-section">
          <div className="forPaddingSections">
            <h1 id="contact">Contact</h1>
            <form className="contactForm">
              <label>Name:</label>
              <input type="text" />
              <br />

              <label>Email:</label>
              <input type="text" />
              <br />

              <label>Phone Number:</label>
              <input type="text" />
              <br />

              <label>Message:</label>
              <textarea type="textarea" rows="8" />
              <br />
              <input
                type="submit"
                className="contact-submit-button"
                value="Send Message"
              />
            </form>
          </div>
        </section>
      </div>
      <footer className="footer">&copy; timberandbarkmulch.ie</footer>
    </>
  );
}
export default HomeScreen;
