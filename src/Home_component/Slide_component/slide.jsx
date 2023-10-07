import React from 'react';
import './slide.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


//import Image

import image1 from '../Slide_component/image_slider/iphone_slider1.jpeg'
import image2 from '../Slide_component/image_slider/samsung_slider.jpeg'
import image3 from '../Slide_component/image_slider/huawei_slider.jpeg'
import image4 from '../Slide_component/image_slider/redmi_slider3.jpeg'
import image5 from '../Slide_component/image_slider/vivo_slider.jpeg'

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
              <img src= {image1} alt='photo1' />
              <p>Iphone</p>
            </div>
          </div>
          <div className="img-container">
            <div className="detail">
              <img src= {image2} alt='photo1' />
              <p>Iphone</p>
            </div>
          </div>
          <div className="img-container">
            <div className="detail">
              <img src= {image3} alt='photo1' />
              <p>Iphone</p>
            </div>
          </div>
          <div className="img-container">
            <div className="detail">
              <img src= {image4} alt='photo1' />
              <p>Iphone</p>
            </div>
          </div>
          <div className="img-container">
            <div className="detail">
              <img src= {image5} alt='photo1' />
              <p>Iphone</p>
            </div>
          </div>
          
        </Carousel>
      </div>
    </>
  
  )
}

export default Slide