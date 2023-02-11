import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://i.postimg.cc/6p8T03Vc/amazon223.png"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          
        </div>
      </div>
      <div className="checkout__right">
        <h2>The subtotal:</h2>
      </div>
    </div>
  );
}

export default Checkout;
