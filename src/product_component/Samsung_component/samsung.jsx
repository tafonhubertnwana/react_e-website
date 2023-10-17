import React from 'react';
import Footer from '../../Home_component/Footer_component/footer';
import { Carousel } from 'react-responsive-carousel';
import './samsung.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
        <Footer />
      </div>
    </>
    
  )
}

export default Samsung