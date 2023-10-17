import React from 'react';
import Footer from '../../Home_component/Footer_component/footer';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image3 from './Google-Pixel-Fold.webp';

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

const Google = () => {
  return (
    <>
      <div className='carousel-element'>
        <Carousel {...settings}>
          <div className="pixel-container">
            <div className="detail">
              <h1>Google Pixel Pro 8</h1>
              <p>Larger than Life</p>
              <button>Order Now</button>
            </div>
            <div className="image">
              <img src= {image3} alt='photo1' />
            </div> 
          </div>
          <div className="pixel-container">
            <div className="detail">
              <h1>Google Pixel Pro 8</h1>
              <p>Larger than Life</p>
              <button>Order Now</button>
            </div>
            <div className="image">
              <img src= {image3} alt='photo1' />
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