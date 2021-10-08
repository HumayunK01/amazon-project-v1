import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
          <img className="checkout__adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png" alt="Adv" />
        <div>
          <h3 className="checkout__title">Your shopping details</h3>
        </div>
      </div>
      <div className="checkout__right">
          <h3>Sub Total (2 item):</h3>
      </div>
    </div>
  );
}

export default Checkout;
