import React from 'react'
import './home.css'
import Slide from './Slide_component/slide';
import Homeproduct from './HomeProduct_component/homegoods'
import Footer from './Footer_component/footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Testimonial, responsive} from './../data';
import Rater from "react-rater";

import bannerImage from "../product_component/app.jpg"
import bannerImage2 from "../product_component/play.jpg"

const Testimonia = (props) => {
  return(
  <div className="testimonia-section">
    <div className="testimonia-image">
      <img src={props.image} alt="" />
      
    </div>
    <div className="testimonia-detail">
      <p className='name'>{props.name}</p>
      <p className='position'>{props.position}</p>
      <p className="react-rater"><Rater total={5} rating={4.5} reviews={150} /></p>
      <p className='description'>{props.description}</p>
    </div>
  </div>
  )
};

const Testimony = Testimonial.map((item) =>
  <Testimonia 
    image={item.image}
    description={item.description}
    name={item.name}
    position={item.position}
  />
)

const Home = () => {
  return (
    <> 
      <Slide />
      <Homeproduct />
      <div>
        <div className="testimonial-container">
          <p id='header'>Customer Testimonial</p>
          <Carousel responsive={responsive}>
            {Testimony}
          </Carousel>
        </div>
      </div>
      <div className="product-banner">
        <h1>Download Our App</h1>
        <p>Get your best qaulity phones from the most famous brand</p>
        <div className="bannerimage">
          <img className="image" src={bannerImage} alt="" />
          <img src={bannerImage2} alt="" />
        </div>
      </div>
      <Footer />
    </>   
  )      
}           

export default Home