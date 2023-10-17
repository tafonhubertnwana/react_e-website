import React from 'react';
import Footer from '../../Home_component/Footer_component/footer';
import './google.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
  return (
    <>
      <div className='carousel-element'>
        <Carousel {...settings}>
          <div className="pixel">
            <div className="detail">
              <h1>Google Pixel 8 & 8 Pro</h1>
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
        <Footer />
      </div>
    </>
    
  )
}

export default Google