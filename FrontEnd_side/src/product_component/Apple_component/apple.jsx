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
              <p className='button'><button>Add to Cart</button></p>
            </div>
          </div>
          )
        })} 
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Apple

