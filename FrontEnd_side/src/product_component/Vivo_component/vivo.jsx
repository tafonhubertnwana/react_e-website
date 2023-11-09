import React , {useReducer, useEffect} from 'react';
import './vivo.css'
import Footer from '../../Home_component/Footer_component/footer';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import reducer from "../../Reducers/ProductFetch"
import axios from "axios"
import { FaRegHeart } from "react-icons/fa";
import Rater from "react-rater";

import imageVivo from './Vivo-banner-image/vivo-image.webp';
import imageVivo1 from './Vivo-banner-image/vivo-v27.jpg'
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

const Vivo = () => {
  //Add to Cart
  const navigate = useNavigate()
  const dispatchCart = useDispatch();
  const handleAddToCart = (product) => {
      dispatchCart(addToCart(product));
      navigate("/cart")
  }


  //Fetching Products
  const [{loading, products, error}, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: ''
  });

  useEffect(() => {
    const fetchData= async () => {
      dispatch({type: "FETCH_REQUEST"});

      try{
        const result = await axios.get("vivoproduct/vivophone");
        dispatch({type: "FETCH_SUCCESS", payload: result.data});
      } catch(error){
        dispatch({type: "FETCH_FAIL", payload: error.message});
      }
    };
    fetchData()
  }, [])

  return (
    <>
      <div className='carousel-element'>
        <Carousel {...settings}>
          <div className="vivo">
            <div className="detail">
              <h1>Vivo V27 Pro </h1>
              <p>Delight Every Moment <br></br>Get benefit up to 5% on sales</p>
              <button>check it Out</button>
            </div>
            <div className="image">
              <img src= {imageVivo} alt='photo1' />
            </div> 
          </div>
          <div className="vivo-1">
            <div className="detail">
              <h1>Vivo V27 Pro </h1>
              <p>Love the Game,<br></br>smooth and seamless</p>
            </div>
            <div className="image">
              <img src= {imageVivo1} alt='photo1' />
            </div> 
          </div>
        </Carousel>
      </div>
      <div>
      <div className="product-header">
        <h2>Vivo Smartphones</h2>
        <p>Explore the latest vivo mobile phone series with the best imaging texchnology and entertainment features, high-tech design, and advanced specifications. Leap into the feature with vivo innovative brands of smartphones with V27Pro and More.
        </p>
      </div>
      <div className="product-path ">
          {products.map((product) => {
            return(
              <div className="product-feature">
              <p className= 'like_heart'><FaRegHeart /></p>
              <img src={product.imageurl} alt='Samsung Galazy Series'/>
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
      <div className="vivo-banner">
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

export default Vivo