import React from 'react'
import './homegoods.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from "./homeproduct.jsx"
import { productData, responsive } from './data';




const product = productData.map((item) => 
  <Product 
    name={item.name} 
    url={item.imageurl} 
    price={item.price}
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
      </Carousel>;
    </>
  )
}

export default Homeproduct;