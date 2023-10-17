import React from 'react';
import './vivo.css'
import Footer from '../../Home_component/Footer_component/footer';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import image4 from './vivo-image.webp';

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

const Vivo = () => {
  return (
    <>
      <div className='carousel-element'>
        <Carousel {...settings}>
          <div className="vivo-container">
            <div className="detail">
              <h1>Vivo V27 Pro </h1>
              <p>Delight Every Moment <br></br>Get benefit up to 5% on sales</p>
              <button>check it Out</button>
            </div>
            <div className="image">
              <img src= {image4} alt='photo1' />
            </div> 
          </div>
          <div className="vivo-container">
            <div className="detail">
              <h1>Vivo V27 Pro </h1>
              <p>Delight Every Moment <br></br>Get benefit up to 5% on sales</p>
              <button>check it Out</button>
            </div>
            <div className="image">
              <img src= {image4} alt='photo1' />
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