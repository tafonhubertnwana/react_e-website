import React from 'react';
import "./about.css";
import Footer from '../Home_component/Footer_component/footer';

import aboutImage from './about_image/About-Us.jpg';
import person1 from './about_image/personel-1.jpg';
import person2 from './about_image/personel-2.jpg';
import person3 from './about_image/personel-3.jpg';

const About = () => {
  return (
    <div>
      <div className="about-container">
        <h1>About Us</h1>
        <div className="about-section">
          <div className="about-image">
            <img src={aboutImage} alt="About Us" />
          </div>
          <div className="about-detail">
            <p>Welcome to HTMobile</p>
            <p>We aim to offer our customers a varietu of the latest model of Phones. We've come a long way, so we know exactly which direction to take when supplying you with high quality yet budget-friendly products. We offer all of this while providing excellent customer service and friendly support.</p>
            <p>We always keep an eye on the latest trends in mobile phones and put our customers' wishes first. That is why we have satisfied customers all over the workd, and are thrilled to be a part of the HTmobile industry.</p>
            <p>The interest of our customers are always top priority for us, so we hope you will enjoy our products as much as we enjoy making them available to you</p>
          </div>
        </div>
        <div className="people-detail">
          <h2>OUR PEOPLE</h2>
          <p>We're in the business of efficiency and collaboration.</p>
          <br/>
          <p>Get to know the founders and team leaders making it all happen.</p>
        </div>
        <div className="about-people">
          <div className="about-poeple-image">
            <img src={person1} alt="" />
            <div className="about-poeple-detail">
              <h3>Hortensia Tabeh</h3>
              <p>Co-Founder</p>
            </div>
          </div>
          <div className="about-poeple-image">
            <img src={person2} alt="" />
            <div className="about-poeple-detail">
              <h3>Cynthia Tabeh</h3>
              <p>Co-Founder, Chief Marketing Officer</p>
            </div>
          </div>
          <div className="about-poeple-image">
            <img src={person3} alt="" />
            <div className="about-poeple-detail">
              <h3>Lebga Lesly</h3>
              <p>Co-Founder, Chief Business Officer</p>
            </div>
          </div>
        </div>
        


      </div>
      <Footer />
    </div>
  )
}

export default About