import React from 'react';
import './slide.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


//import Image

import image1 from '../Slide_component/image_slider/iphone_1.png'
import image2 from '../Slide_component/image_slider/samsung.jpg'
import image3 from '../Slide_component/image_slider/oneplus.jpg'
import image4 from '../Slide_component/image_slider/vivo.jpg'

const settings = {
  showArrows: false,
  interval: 4000,
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

const Slide = () => {
  return (
    <>
      <div className='carousel-element'>
        <Carousel {...settings}>
          <div className="img-container">
            <div className="detail">
              <h1> titanium </h1>
              <p>Iphone 15Pro</p>
              <button>Shop now</button>
            </div>
            <div className="image">
              <img src= {image1} alt='photo1' />
            </div> 
          </div>
          <div className="img-container">
            <div className="detail">
              <h1>Galaxy S23 Series</h1>
              <p>Get 50% off on our Own Epic</p>
              <button>Buy Now</button>
            </div>
            <div className="image">
              <img src= {image2} alt='photo1' />
            </div> 
          </div>
          <div className="img-container">
            <div className="detail">
              <h1>OnePlus Nord CE 3Lite 5G</h1>
              <p>Larger than Life</p>
              <button>Order Now</button>
            </div>
            <div className="image">
              <img src= {image4} alt='photo1' />
            </div> 
          </div>
          <div className="img-container">
            <div className="detail">
              <h1>Vivo V27 Pro </h1>
              <p>Delight Every Moment</p>
              <p>Get benefit up to 5% on sales</p>
              <button>check it Out</button>
            </div>
            <div className="image">
              <img src= {image3} alt='photo1' />
            </div> 
          </div>  
        </Carousel>
      </div>
    </>
  
  )
}

export default Slide