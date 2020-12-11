import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { savePayment } from '../actions/cartActions';

function ShippingScreen(props) {

  const [paymentMethod, setPaymentMethod] = useState('');


  const [ deliveryOrCollection, setDeliveryOrCollection ] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [ instructions, setInstructions ] = useState('');


  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, postalCode, country, instructions }));
    dispatch(savePayment({ paymentMethod }));
    props.history.push('placeorder');
  }
  return <div>
    <Navigation/>
    <CheckoutSteps step1 step2 ></CheckoutSteps>
    <div className="form">
      <form onSubmit={submitHandler} >
      <ul className="form-container">
            <li>
              <h2>Payment</h2>
            </li>

            <li>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="paypal"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></input>
                <label for="paymentMethod">Paypal</label>
              </div>
            </li>
          </ul>

        <ul className="form-container">
          <li>
            <h2>Delivery Address</h2>
          </li>          

          <li>
            <label htmlFor="address">
              Address:
          </label>
            <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="city">
              Town:
          </label>
            <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="postalCode">
              Eircode: <a className="black-text" href="https://finder.eircode.ie/#/"><i className="red-text">*Click here to Find Your Eircode</i></a>
          </label>
            <input type="text" name="postalCode" id="postalCode" onChange={(e) => setPostalCode(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="country">
              County:
          </label>
            <input type="text" name="country" id="country" placeholder="Note: We only deliver in Westmeath." onChange={(e) => setCountry(e.target.value)}>
            </input>
          </li>

          <li>
            <label htmlFor="country">
              Instructions for Delivery Driver: 
          </label>
            <input type="text" name="instructions" id="" placeholder="Optional" onChange={(e) => setInstructions(e.target.value)}>
            </input>
          </li>


          <li>
            <button type="submit" className="button primary">Continue</button>
          </li>
        </ul>
      </form>
    </div>
    <br/>
    <Footer/>
  </div>

}
export default ShippingScreen;