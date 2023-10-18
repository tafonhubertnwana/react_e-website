import React from 'react'
import './home.css'
import Slide from './Slide_component/slide';
import Homeproduct from './HomeProduct_component/homegoods'
import Footer from './Footer_component/footer';
import testimoniaImage from './personel-3.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const Home = () => {
  return (
    <> 
      <Slide  />
      <Homeproduct />
      <div>
        <div className="testimonial-container">
          <Carousel responsive={responsive}>
            <div className="testimonia-section">
              <div className="testimonia-image">
                <img src={testimoniaImage} alt="" />
              </div>
              <div className="testimonia-detail">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quidem repellendus eum perspiciatis perferendis, odio, porro ut eos ipsam quia possimus nam hic soluta suscipit, similique minus sequi voluptate rerum.</p>
              </div>
            </div>
            <div className="testimonia-section">
              <div className="testimonia-image">
                <img src={testimoniaImage} alt="" />
              </div>
              <div className="testimonia-detail">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quidem repellendus eum perspiciatis perferendis, odio, porro ut eos ipsam quia possimus nam hic soluta suscipit, similique minus sequi voluptate rerum.</p>
              </div>
            </div>
            <div className="testimonia-section">
              <div className="testimonia-image">
                <img src={testimoniaImage} alt="" />
              </div>
              <div className="testimonia-detail">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quidem repellendus eum perspiciatis perferendis, odio, porro ut eos ipsam quia possimus nam hic soluta suscipit, similique minus sequi voluptate rerum.</p>
              </div>
            </div>
            <div className="testimonia-section">
              <div className="testimonia-image">
                <img src={testimoniaImage} alt="" />
              </div>
              <div className="testimonia-detail">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quidem repellendus eum perspiciatis perferendis, odio, porro ut eos ipsam quia possimus nam hic soluta suscipit, similique minus sequi voluptate rerum.</p>
              </div>
            </div>
            <div className="testimonia-section">
              <div className="testimonia-image">
                <img src={testimoniaImage} alt="" />
              </div>
              <div className="testimonia-detail">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quidem repellendus eum perspiciatis perferendis, odio, porro ut eos ipsam quia possimus nam hic soluta suscipit, similique minus sequi voluptate rerum.</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <Footer />
    </>   
  )      
}           

export default Home
