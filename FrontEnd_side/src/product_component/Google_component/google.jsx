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
      <div>
        <div className="product-path ">
          {products.map((product) => {
            return(
              <div className="product-feature">
              <p className= 'like_heart'><FaRegHeart /></p>
              <img src={product.imageurl} alt='Samsung Galazy Series'/>
              <div className="product-details">
                <h2>{product.name}</h2>
                <p className="price"><button>{product.price}</button></p>
                <p className='button'><button>Add to Cart</button></p>
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

export default Google