import React, { useReducer, useEffect} from 'react';
import './apple.css'
import Footer from '../../Home_component/Footer_component/footer';
import { Carousel } from 'react-responsive-carousel';
import { FaApple } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import reducer from '../../Reducers/ProductFetch'
import axios from 'axios'
import { FaRegHeart } from "react-icons/fa";

import imageApple1 from './apple-image/Apple-iPhone-Pro.jpg'
import imageApple2 from './apple-image/Apple-iPhone-15.jpg'
import bannerImage from "../app.jpg"
import bannerImage2 from "../play.jpg"


import { useDispatch} from "react-redux"
import { addToCart } from '../../Reducers/CartSlice';
import { useNavigate } from "react-router-dom"


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


const Apple = () => {

  //Add to Cart
  const navigate = useNavigate()
  const dispatchCart = useDispatch();
  const handleAddToCart = (product) => {
      dispatchCart(addToCart(product));
      navigate("/cart")
  }

  //Fetching Products
  const [{ loading, products, error}, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '' 
  });


  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: 'FETCH_REQUEST'});

      try{
          const result = await axios.get('products/applephone');
          dispatch({type: 'FETCH_SUCCESS', payload: result.data});
      } catch(error) {
          dispatch({type: 'FETCH_FAIL', payload: error.message});
      }
    };
    fetchData()
  }, []);
  return (

    <>
      <div className='carousel-element'>
        <Carousel {...settings}>
          <div className="apple-container">
            <div className="detail">
              <h1> titanium </h1>
              <p> <FaApple />Iphone 15Pro</p>
              <button>Shop now</button>
            </div>
            <div className="image">
              <img src= {imageApple1} alt='photo1' />
            </div> 
          </div>
          <div className="apple-container-1">
            <div className="detail">
              <p> <FaApple />Iphone 15Pro</p>
              <h1> Newphonia</h1>
              <p>Available Now</p>
            </div>
            <div className="image">
              <img src= {imageApple2} alt='photo1' />
            </div> 
          </div>
        </Carousel>
      </div>
      <div className="apple-header">
        <h2>Apple iPhone</h2>
        <p>The latest collection of Apple iPhone 15s has arrived, Discover the entire lineup on both online and HTMobile stores. Experience the remarkable capabilities of the iPhone 15, Plus, Pro and Pro Max, brought to you by one of the global landing brands
            </p>
      </div>
      <div className="product-path ">
        {products.map((product) => {
          return (
            <div className="product-feature">
              <p className= 'like_heart'><FaRegHeart /></p>
            <img src={product.imageurl} alt='Apple 11'/>
            <div className="product-details">
              <h2>{product.name}</h2>
              <p className="price"><button>{product.price}</button></p>
              <p className='button'><button onClick = {() => handleAddToCart(product)}>Add to Cart</button></p>
            </div>
          </div>
          )
        })} 
      </div>
      <div className="apple-header">
        <h2>what is the latest iphone?</h2>
        <p>the latest iphone series, the iPhone 15, has just been unveiled, and it's nothing short of amazing! Apple has introduced four models in this series, including</p>
        <ul>
          <li><a href="#">iPhone 15</a></li>
          <li><a href="#">iPhone 15 Plus</a></li>
          <li><a href="#">iPhone 15 Pro</a></li>
          <li><a href="#">iPhone Pro Max</a></li>
        </ul>

        <p>with a host of exciting features and design changes, these series redefine what a smartphone can be. Buy yours today!</p>

        <h2>Should I buy the iPohne 15</h2>
        <p>Upgrading to the iPhone 15 is not just a lifestyle choice, it's getting yourself ready for the future of smartphones. Here's why:</p>
        <ul>
          <li>It's packed with the latest Apple technology.</li>
          <li>The switch to a titanium frame makes it lighter and  more durable.</li>
          <li>The A17 Bionic chip guarantees lightning-past performance.</li>
          <li>It boasts impressive camera upgrades</li>
          <li>Apple finally adapted the USB-C port for universal charging.</li>
        </ul>

        <h2>Why choose the Apple iPhone 15?</h2>
        <p>If the reasons above aren't enough, you can also consider its cutting-edge upgrades like:</p>
        <ul>
          <li>A17 Bionic chip</li> 
          <li>Longer battery life</li>
          <li>Periscope zoom lens (for Pro Max)</li>
          <li>Improved image stabilisation</li>
          <li>Edge-to-edge OLED display</li>
          <li>Titanium frame</li>
          <li>Thin bezels</li>
          <li>Crystal-clear visuals</li>
          <li>Enhanced Face ID</li>
        </ul> 

        <h2>What are the new features of the iPhone 15 </h2>
      </div>
      <div className="product-banner">
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

export default Apple

