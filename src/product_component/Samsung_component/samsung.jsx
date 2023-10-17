import React from 'react';
import Footer from '../../Home_component/Footer_component/footer';
import { Carousel } from 'react-responsive-carousel';
import './samsung.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image2 from './Samsung-S21.png';

const settings = {
  showArrows: false,
  interval: 3000,
  dynamicHeight: true,
  stopOnHover: true,
  infinieLoop: true,
  showStatus: false,
  transitionTime: 50,
  showThumbs: false,
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
          <div className="samsung-container">
            <div className="detail">
              <h1>Galaxy S23 Series</h1>
              <p>Get 50% off on our Own Epic</p>
              <button>Buy Now</button>
            </div>
            <div className="image">
              <img src= {image2} alt='photo1' />
            </div> 
          </div>
          <div className="samsung-container">
            <div className="detail">
              <h1>Galaxy S23 Series</h1>
              <p>Get 50% off on our Own Epic</p>
              <button>Buy Now</button>
            </div>
            <div className="image">
              <img src= {image2} alt='photo1' />
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