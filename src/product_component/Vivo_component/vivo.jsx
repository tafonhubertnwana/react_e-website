import React from 'react';
import './vivo.css'
import Footer from '../../Home_component/Footer_component/footer';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import imageVivo from './Vivo-banner-image/vivo-image.webp';
import imageVivo1 from './Vivo-banner-image/vivo-v27.jpg'

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
              <p>Love the Game,<br></br>smo0th and seamless</p>
            </div>
            <div className="image">
              <img src= {imageVivo1} alt='photo1' />
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

export default Vivo