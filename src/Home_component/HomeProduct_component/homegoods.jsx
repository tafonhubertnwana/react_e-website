import React from 'react'
import './homegoods.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AppleproductData, responsive, SamsungproductData, OfferproductData} from '../../data';
import { FaRegHeart } from "react-icons/fa";


const AppleProduct = (props) => {
  return (
    <div className="product-feature">
      <p className= 'like_heart'><FaRegHeart /></p>
      <img src={props.url} alt='Apple 11' />                                     
      <div className="product-details">
        <h2>{props.name} </h2>
        <p className="price">{props.price}</p>
        <p><button>Add to Cart</button></p>
      </div>
    </div>
  )
}

const SamsungProduct = (props) => {
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

const OfferProduct = (props) => {
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

const product = AppleproductData.map((item) => 
  <AppleProduct 
    name={item.name} 
    url={item.imageurl} 
    price={item.price}
    like={item.heart}
  />
)

const productSamsung = SamsungproductData.map((item) => 
  <SamsungProduct 
    name={item.name} 
    url={item.imageurl} 
    price={item.price}
    like={item.heart}
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
        <h1>Product Categories</h1>
        <p>Apple Iphone Series</p>
      </div>
      <Carousel responsive={responsive}>
        {product}
      </Carousel>
      <div className="banner">
        
      </div>
      <div className="feature-categories">  
        <p>Samsung Series</p>
      </div>
      <Carousel responsive={responsive}>
        {productSamsung}
      </Carousel>
      <div className="feature-categories">  
        <p>Promotion Offers</p>
      </div>
      <Carousel responsive={responsive}>
        {productPromotion}
      </Carousel>
    </>
  )
}

export default Homeproduct;