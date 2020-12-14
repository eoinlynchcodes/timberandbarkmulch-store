import React from 'react';
function CheckoutSteps(props) {
  return <div className="checkout-steps">
    <div className={props.step1 ? 'active' : ''} >Signin</div>
    <div className={props.step2 ? 'active' : ''} >Details</div>
    <div className={props.step4 ? 'active' : ''} >Order</div>
  </div>
}

export default CheckoutSteps;