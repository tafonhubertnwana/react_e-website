import React from 'react';
import './slide.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


//import Image

import image1 from '../Slide_component/image_slider/iphone.jpg'
import image2 from '../Slide_component/image_slider/samsung.jpg'
import image3 from '../Slide_component/image_slider/oneplus.jpg'
import image4 from '../Slide_component/image_slider/vivo.jpg'

//image for after side bar
import service1 from '../Slide_component/image_slider/safe and secure.png'
import service2 from '../Slide_component/image_slider/transport.png'
import service3 from '../Slide_component/image_slider/best price.png'

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
      <div>
        <div className="service-container">
          <div className="service-detail">
            <img src= {service1} alt=" safe and secure" />
            <h1>Safe and Secure</h1>
            <p>Trust us with the best quality and original product for you</p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-detail">
            <img src= {service2} alt=" transport" />
            <h1>Instant Transportation</h1>
            <p>We are giving free transportation on both withing and out of the country</p>

          </div>
        </div>
        <div className="service-container">
          <div className="service-detail">
            <img src= {service3} alt=" best price" />
            <h1>Best Price</h1>
            <p>Get quality and original phones at a very affortable price and rate</p>
          </div>
        </div>
      </div>
    </>
  
  )
}

export default Slide