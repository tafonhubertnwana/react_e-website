import React from 'react'
import './home.css'
import Slide from './Slide_component/slide';
import Homeproduct from './HomeProduct_component/homegoods'
import Footer from './Footer_component/footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Testimonial, responsive} from './../data';

const Testimonia = (props) => {
  return(
  <div className="testimonia-section">
    <div className="testimonia-image">
      <img src={props.image} alt="" />
      <p className='name'>{props.name}</p>
      <p className='position'>{props.position}</p>
    </div>
    <div className="testimonia-detail">
      <div className='star'>

      </div>
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
      <Footer />
    </>   
  )      
}           

export default Home