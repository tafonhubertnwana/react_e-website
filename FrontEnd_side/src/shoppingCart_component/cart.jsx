import React from 'react';
import Footer from '../Home_component/Footer_component/footer'
import {useSelector} from "react-redux";


function Cart() {
  return (
    <div>
      <div className="cart-container">
        <h2>Shopping Cart<h2>
        
      </div>
      <div>
        <Footer />
      </div>
    </div>

  )
}

export default Cart