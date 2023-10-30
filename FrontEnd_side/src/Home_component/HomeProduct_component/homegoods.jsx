import React from 'react'
import './homegoods.css'
import 'react-multi-carousel/lib/styles.css';
import { AppleproductData,  OfferproductData} from '../../data';
import { FaRegHeart } from "react-icons/fa";



const AppleProduct = (props) => {
  return (
    <div className="product-feature">
      <p className= 'like_heart'><FaRegHeart /></p>
      <img src={props.url} alt='Apple 11' />                                     
      <div className="product-details">
        <h2>{props.name} </h2>
        <p className="price"><button>{props.price}</button> </p>
        <p className='button'><button>Add to Cart</button></p>
      </div>
    </div>
  )
}

const OfferProduct = (props) => {
  return (
    <div className="product-feature">
      <div id='like_heart'>
        <p className='offers'> {props.rate}</p>
        <p className= 'like_heart'><FaRegHeart /></p>
      </div>
      <img src={props.url} alt='Apple 11'/>
      <div className="product-details">
        <h2>{props.name} </h2>
        <p className="price"><button>{props.price}</button> </p>
        <p className='button'><button>Add to Cart</button></p>
      </div>
    </div>
  )
}

const product = AppleproductData.map((item) => 
  <AppleProduct 
    name={item.name} 
    url={item.imageurl} 
    price={item.price}
    like={item.heart}
    rate={item.rate}
  />
)

const productPromotion = OfferproductData.map((item) => 
  <OfferProduct
    name={item.name} 
    url={item.imageurl} 
    price={item.price}
    rate={item.rate}
    like={item.heart}
  />
)

const Homeproduct = () => {
  return (
    <>
      <div className="feature-categories">
        <h1>WHAT IS HOT</h1>
      </div>
      <div className="product-container">
        {product}
      </div>
      <div className="feature-categories">  
        <h1>RECOMMENDED FOR YOU</h1>
      </div>
      <div className="product-container">
        {productPromotion}
      </div>
      <div className="banner">

      </div>
    </>
  )
}

export default Homeproduct;