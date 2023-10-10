import React from 'react'
import './homegoods.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from "./homeproduct.jsx";
import ProductTwo from "./homeproduct.jsx";
import { productData, responsive, productDataTwo} from './data';
import banner from "../HomeProduct_component/images/1stkvdesk.webp";



const product = productData.map((item) => 
  <Product 
    name={item.name} 
    url={item.imageurl} 
    price={item.price}
  />
)

const productSamsung = productDataTwo.map((item) => 
  <ProductTwo 
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
      </Carousel>
      <div className="banner">
        <img src={banner} alt="Banner" />
      </div>
      <Carousel responsive={responsive}>
        {productSamsung}
      </Carousel>
    </>
  )
}

export default Homeproduct;