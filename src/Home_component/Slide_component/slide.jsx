import React from 'react';
import './slide.css';
import { Carousel } from 'react-responsive-carousel';
import { FaApple } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";


//import Image

import image1 from '../Slide_component/image_slider/iphn.jpg'
import image2 from '../Slide_component/image_slider/GALAXY-S23-ULTRA.webp'
import image3 from '../Slide_component/image_slider/Google-Pixel.webp'
import image4 from '../Slide_component/image_slider/vivo-s17.webp'

//image for after side bar
import service1 from '../Slide_component/image_slider/sell_phone.webp'
import service2 from '../Slide_component/image_slider/buy_phone.webp'
import service3 from '../Slide_component/image_slider/repair_phone.webp'
import service4 from '../Slide_component/image_slider/find_phone.webp'
import service5 from '../Slide_component/image_slider/recycle.webp'

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

const Slide = () => {
  return (
    <>
      <div className='carousel-element'>
        <Carousel {...settings}>
          <div className="apple-container">
            <div className="detail">
              <h1> titanium </h1>
              <p> <FaApple /> Iphone 15Pro</p>
              <button>Shop now</button>
            </div>
            <div className="image">
              <img src= {image1} alt='photo1' />
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
        <p className = "service">Our Services</p>
        <div className="service-container">
          <div className="service-detail">
            <img src= {service1} alt=" safe and secure" />
            <p>Sell Phone</p>
          </div> 
          <div className="service-detail">
            <img src= {service2} alt=" transport" />
            <p>Buy Phone
            </p>
          </div>               
          <div className="service-detail">
            <img src= {service3} alt=" best price" />
            <p>Repair Phone</p>
          </div>
          <div className="service-detail">
            <img src= {service4} alt=" best price" />
            <p>Find new Phones</p>
          </div>
          <div className="service-detail">
            <img src= {service5} alt=" best price" />
            <p>Recycle</p>
          </div>
        </div>
      </div>
    </>
  
  )
}

export default Slide