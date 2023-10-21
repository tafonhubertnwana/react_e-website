import React from 'react';
import './apple.css'
import Footer from '../../Home_component/Footer_component/footer';
import { Carousel } from 'react-responsive-carousel';
import { FaApple } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";


import imageApple1 from './apple-image/Apple-iPhone-Pro.jpg'
import imageApple2 from './apple-image/Apple-iPhone-15.jpg'
import a1 from './iphone_image/Apple_11_pro.jpg'
import a2 from './iphone_image/Apple_13_mini.jpg'
import a3 from './iphone_image/Apple_15_Pro_Max.jpg'
import a4 from './iphone_image/Apple_15_plus.jpg'
import a5 from './iphone_image/Apple_15_pro.jpg'
import a6 from './iphone_image/Apple_XR.jpg'


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
      <div className="product-path ">
        <div className="product-section">
          <img src={a1} alt='Apple 11'/>
          <div className="product-detail">
            <h2>iphone 11 Pro </h2>
            <p className="price">100000frs</p>
            <p><button>Add to Cart</button></p>
          </div>
        </div>
        <div className="product-section">
          <img src={a1} alt='Apple 11'/>
          <div className="product-detail">
            <h2>iphone 11 Pro </h2>
            <p className="price">100000frs</p>
            <p><button>Add to Cart</button></p>
          </div>
        </div>
        <div className="product-section">
          <img src={a1} alt='Apple 11'/>
          <div className="product-detail">
            <h2>iphone 11 Pro </h2>
            <p className="price">100000frs</p>
            <p><button>Add to Cart</button></p>
          </div>
        </div>
        <div className="product-section">
          <img src={a2} alt='Apple 11'/>
          <div className="product-detail">
            <h2>iphone 11 Pro </h2>
            <p className="price">100000frs</p>
            <p><button>Add to Cart</button></p>
          </div>
        </div>
        <div className="product-section">
          <img src={a3} alt='Apple 11'/>
          <div className="product-detail">
            <h2>iphone 11 Pro </h2>
            <p className="price">100000frs</p>
            <p><button>Add to Cart</button></p>
          </div>
        </div>
        <div className="product-section">
          <img src={a4} alt='Apple 11'/>
          <div className="product-detail">
            <h2>iphone 11 Pro </h2>
            <p className="price">100000frs</p>
            <p><button>Add to Cart</button></p>
          </div>
        </div>
        <div className="product-section">
          <img src={a5} alt='Apple 11'/>
          <div className="product-detail">
            <h2>iphone 11 Pro </h2>
            <p className="price">100000frs</p>
            <p><button>Add to Cart</button></p>
          </div>
        </div>
        <div className="product-section">
          <img src={a6} alt='Apple 11'/>
          <div className="product-detail">
            <h2>iphone 11 Pro </h2>
            <p className="price">100000frs</p>
            <p><button>Add to Cart</button></p>
          </div>
        </div>
      </div>
      <div>
        <div className="backgrou">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi placeat quas beatae dicta totam delectus quae quaerat provident, odit nobis! Cupiditate nostrum consequatur quae dolorem et dignissimos culpa deleniti.
            </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Apple

