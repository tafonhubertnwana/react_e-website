import React, {useReducer, useEffect } from 'react';
import Footer from '../../Home_component/Footer_component/footer';
import { Carousel } from 'react-responsive-carousel';
import './samsung.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import reducer from "../../Reducers/ProductFetch"
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";

import imageSamsung from './Samsung-banner-image/Samsung-S21.png';
import imageSamsung1 from './Samsung-banner-image/Samsung-Galaxy-A54.webp';




const settings = {
  showArrows: true,
  interval: 5000,
  dynamicHeight: true,
  stopOnHover: true,
  infiniteLoop: true,
  showStatus: false,
  transitionTime: 50,
  showThumbs: true,
  swipeable: true,
  emulateTouch: true,
  autoPlay: true,
  banner: true,
};

const Samsung = () => {
  //fetching Products
  const [{loading, products, error}, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: ''
  });

  useEffect(() => {
    const fetchData= async () => {
      dispatch({type: "FECTH_REQUEST"});

      try{
        const result = await axios.get('products/applephone');
        dispatch({type: "FETCH_SUCCESS", payload: result.data});
      } catch(error){
        dispatch({type: "FETCH_FAIL", payload: error.message});
      }
    };
    fetchData()
  }, []);



  return (
    <>
      <div className='carousel-element'>
        <Carousel {...settings}>
          <div className="samsung-1">
            <div className="detail">
              <h1>Galaxy S23 Ultra</h1>
              <p>Available Now</p>
            </div>
            <div className="image">
              <img src= {imageSamsung} alt='photo1' />
            </div> 
          </div>
          <div className="samsung">
            <div className="detail">
              <h1>New Galaxy S23 FE</h1>
              <p>Epic Start here</p>
              <button>SHOP NOW</button>
            </div>
            <div className="image">
              <img src= {imageSamsung1} alt='photo1' />
            </div> 
          </div>
        </Carousel>
      </div>
      <div>
        <div className="product-path ">
          {products.map((product) => {
            return(
              <div className="product-feature">
              <img src={product.imageurl} alt='Apple 11'/>
              <div className="product-details">
                <h2>{product.name}</h2>
                <p className="price"><button>{product.price}</button></p>
                <p><button>Add to Cart</button></p>
              </div>
            </div>
            )
          })}
          
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
    
  )
}

export default Samsung