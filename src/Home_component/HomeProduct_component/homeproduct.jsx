import React from "react";
import "./homegoods.css";
import { FaRegHeart } from "react-icons/fa";

const Product = (props) => {
  return (
    <div className="product-feature">
      <p className= 'like_heart'><FaRegHeart /></p>
      <img src={props.url} alt='Apple 11'/>                                                                                                                                                                                                      
      <div className="product-details">
        <h2>{props.name} </h2>
        <p className="price">{props.price}</p>
        <p><button>Add to Cart</button></p>
      </div>
    </div>
  )
}

const ProductTwo = (props) => {
  return (
    <div className="product-feature">
      <p className= 'like_heart'><FaRegHeart /></p>
      <img src={props.url} alt='Apple 11'/>
      <div className="product-details">
        <h2>{props.name} </h2>
        <p className="price">{props.price}</p>
        <p><button>Add to Cart</button></p>
      </div>
    </div>
  )
}

const ProductThree = (props) => {
  return (
    <div className="product-feature">
      <p className= 'like_heart'><FaRegHeart /></p>
      <img src={props.url} alt='Apple 11'/>
      <div className="product-details">
        <h2>{props.name} </h2>
        <p className="price">{props.price}</p>
        <p><button>Add to Cart</button></p>
      </div>
    </div>
  )
}

export default (Product, ProductTwo, ProductThree)