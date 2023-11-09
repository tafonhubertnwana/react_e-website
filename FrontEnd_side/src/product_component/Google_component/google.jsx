import React, { useReducer, useEffect}  from 'react';
import reducer from '../../Reducers/ProductFetch'
import axios from 'axios'
import Footer from '../../Home_component/Footer_component/footer';
import './google.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaRegHeart } from "react-icons/fa";
import imagePixel from './google-banner-image/GP-7a.jpg';
import imagePixel1 from './google-banner-image/Google-Pixel-Fold.webp';
import bannerImage from "../app.jpg"
import bannerImage2 from "../play.jpg";
import Rater from "react-rater";

import { addToCart } from '../../Reducers/CartSlice';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';


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

const Google = () => {

  //Add to Cart
  const navigate = useNavigate()
  const dispatchCart = useDispatch();
  const handleAddToCart = (product) => {
      dispatchCart(addToCart(product));
      navigate("/cart")
  }

  //fetching Products
  const [{loading, products, error}, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: ''
  });

  useEffect(() => {
    const fetchData= async () => {
      dispatch({type: "FETCH_REQUEST" });

      try{
        const result = await axios.get("googleproduct/googlephone" )
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
          <div className="pixel">
            <div className="detail">
              <h1>Google Pixel & 8 Pro</h1>
              <p>Larger than Life</p>
              <button>Order Now</button>
            </div>
            <div className="image">
              <img src= {imagePixel} alt='photo1' />
            </div> 
          </div>
          <div className="pixel-1">
            <div className="detail">
              <h1>Google Pixel Fold</h1>
              <p>Larger than Life</p>
            </div>
            <div className="image">
              <img src= {imagePixel1} alt='photo1' />
            </div> 
          </div>
        </Carousel>
      </div>
      <div className="product-header">
        <h2>Google Pixel</h2>
        <p>When Googgle does things. it sets the bar high, and the Google Pixel seires is a testament to that. The latest Google phones, the Google Pixel 8, and Google Pixel 8 Pro feature powerful Tensor G3 chipsets, briliant colour options, and cutting-edge photo and video features.
        </p>
      </div>
      <div>
        <div className="product-path ">
          {products.map((product) => {
            return(
              <div className="product-feature">
              <p className= 'like_heart'><FaRegHeart /></p>
              <img src={product.imageurl} alt='Google Pixel'/>
              <div className="product-details">
                <h2>{product.name}</h2>
                <p className="react-rater"><Rater total={5} rating={4.5} reviews={150} /></p>
                <p className="price"><button>${product.price}</button></p>
                <p className='button'><button onClick = {() => handleAddToCart(product)}>Add to Cart</button></p>
              </div>
            </div>
            )
          })}
      
        </div>
      </div>
      <div className="google-banner">
        <h1>Download Our App</h1>
        <p>Get your best qaulity phones from the most famous brand</p>
        <div className="bannerimage">
          <img className="image" src={bannerImage} alt="" />
          <img src={bannerImage2} alt="" />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
    
  )
}

export default Google