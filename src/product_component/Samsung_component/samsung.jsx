import React from 'react';
import Footer from '../../Home_component/Footer_component/footer';
import { Carousel } from 'react-responsive-carousel';
import './samsung.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import imageSamsung from './Samsung-banner-image/Samsung-S21.png';
import imageSamsung1 from './Samsung-banner-image/Samsung-Galaxy-A54.webp';

import aa from './samsung_image/Galaxy_Z_fold5.jpg'
import ab from './/samsung_image/Galaxy_f04.jpg'
import ac from './/samsung_image/Galaxy_f54_5g.jpg'
import ad from './/samsung_image/Galaxy_m14_5g.jpg'
import ae from './/samsung_image/Galaxy_m34_5g.jpg'
import af from './/samsung_image/Galaxy_s23_5G.jpg'
import ag from './/samsung_image/galazy Note 8.jpg'
import ah from './/samsung_image/Galaxy_s23_5G.jpg'


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
          <div className="product-section">
            <img src={ae} alt='Apple 11'/>
            <div className="product-detail">
              <h2>iphone 11 Pro </h2>
              <p className="price">100000frs</p>
              <p><button>Add to Cart</button></p>
            </div>
          </div>
          <div className="product-section">
            <img src={ah} alt='Apple 11'/>
            <div className="product-detail">
              <h2>iphone 11 Pro </h2>
              <p className="price">100000frs</p>
              <p><button>Add to Cart</button></p>
            </div>
          </div>
          <div className="product-section">
            <img src={ag} alt='Apple 11'/>
            <div className="product-detail">
              <h2>iphone 11 Pro </h2>
              <p className="price">100000frs</p>
              <p><button>Add to Cart</button></p>
            </div>
          </div>
          <div className="product-section">
            <img src={af} alt='Apple 11'/>
            <div className="product-detail">
              <h2>iphone 11 Pro </h2>
              <p className="price">100000frs</p>
              <p><button>Add to Cart</button></p>
            </div>
          </div>
          <div className="product-section">
            <img src={ad} alt='Apple 11'/>
            <div className="product-detail">
              <h2>iphone 11 Pro </h2>
              <p className="price">100000frs</p>
              <p><button>Add to Cart</button></p>
            </div>
          </div>
          <div className="product-section">
            <img src={ac} alt='Apple 11'/>
            <div className="product-detail">
              <h2>iphone 11 Pro </h2>
              <p className="price">100000frs</p>
              <p><button>Add to Cart</button></p>
            </div>
          </div>
          <div className="product-section">
            <img src={ab} alt='Apple 11'/>
            <div className="product-detail">
              <h2>iphone 11 Pro </h2>
              <p className="price">100000frs</p>
              <p><button>Add to Cart</button></p>
            </div>
          </div>
          <div className="product-section">
            <img src={aa} alt='Apple 11'/>
            <div className="product-detail">
              <h2>iphone 11 Pro </h2>
              <p className="price">100000frs</p>
              <p><button>Add to Cart</button></p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
    
  )
}

export default Samsung