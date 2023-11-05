import React from 'react';
import './cart.css'
import Footer from '../Home_component/Footer_component/footer'
import {useSelector, useDispatch} from "react-redux";
import { Link } from 'react-router-dom';
import { removeFromCart, decreaseCart, addToCart, clearCart } from '../Reducers/CartSlice';


function Cart() {
  const cart = useSelector((state ) => state.cart);
const dispatch = useDispatch()
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  }

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem))
  }

  const handleClearCart = (cartItem) => {
    dispatch(clearCart())
  }

  return (
    <>
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        { cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is currently empty</p>
            <div className="start-shopping">
              <Link to="/apple">
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) :(
          <div>
            <div className="titles">
              <h3 className='"product-title'>Product</h3>
              <h3 className='price'>Price</h3>
              <h3 className='Quantity'>Quantity</h3>
              <h3 className='total'>Total</h3>
            </div>
            <div className="cart-items">
              {cart.cartItems?.map(cartItem => (
                <div className="cart-item" key = {cartItem.id}
                >
                  <div className="cart-product">
                    <img src={cartItem.imageurl} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.name}</h3>
                      <p>{cartItem.desc}</p>
                      <button onClick = {() => handleRemoveFromCart(cartItem)}>Remove</button>
                    </div>
                  </div>
                  <div className="cart-ptoduct-price">{cartItem.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick = {() => handleDecreaseCart(cartItem)}>-</button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick = {() => handleIncreaseCart(cartItem)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    {cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <button className='clear-cart' onClick={() => handleClearCart()}>Clear Cart</button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="amount">{cart.cartTotalAmount}</span>
                </div>
                <p>Free Shipping</p>
                <button>Check Out</button>
              </div>
            </div>
          </div>
  
        )}
      </div>
      <div>
        <Footer />
      </div>
    </>

  )
}

export default Cart