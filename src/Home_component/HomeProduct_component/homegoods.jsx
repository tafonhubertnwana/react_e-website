import React from 'react'
import './homegoods.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from "./homeproduct.jsx";
import ProductTwo from "./homeproduct.jsx";
import ProductThree from "./homeproduct.jsx";
import { productData, responsive, productDataTwo, productDataThree} from './data';






const product = productData.map((item) => 
  <Product 
    name={item.name} 
    url={item.imageurl} 
    price={item.price}
    like={item.heart}
  />
)


const productSamsung = productDataTwo.map((item) => 
  <ProductTwo 
    name={item.name} 
    url={item.imageurl} 
    price={item.price}
    like={item.heart}
  />
)

const productPromotion = productDataThree.map((item) => 
  <ProductThree 
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