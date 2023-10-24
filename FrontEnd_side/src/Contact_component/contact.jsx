import React from 'react';
import './contact.css';
import Footer from '../Home_component/Footer_component/footer';
import { FaWhatsapp, FaRocketchat } from 'react-icons/fa'

//import image
import contactImage from './contact.png'

const Contact = () => {
  return (
    <>
      <div>
        <div className="contact-containter">
          <div className="contact-section">
            <div className="section-detail">
              <h2>We do Love to</h2>
              <h3>hear from you</h3>
            </div>
            <div className="contact-image">
              <img src= {contactImage} alt="contact" />
            </div>
          </div>
          <div className="contact-detail">
            <h1>Need Help?</h1>
            <p>To get instance response on your query</p>
            <div className="contact-button">
              <button> <FaWhatsapp /> Whatsapp</button>
              <button> <FaRocketchat /> Live Chat</button>
            </div>
          </div>
          <div className="reachus">
            <h1>Reach Us</h1>
          </div>
          <div className="contact-info">
            <div className="info">
              <h5>Connect with us:</h5>
              <p>For support or any questions: call us on HTMobile customer support number - (+237) 670745697 or Email us at <a href="#">support@htmobile.in</a> for Sell Queries.</p>
              <br/>
              <h5>Corporate Office:</h5>
              <p>Bepanda Ambiance-BOCOM</p>
              <br/>
              <h5>Working Days and Hours:</h5>
              <p>Monday - Friday</p>
              <p>7:00am - 5:00pm</p>
            </div>
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.793778572671!2d9.7296668!3d4.0624152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d8f44614511%3A0xe9218c486c34a7d2!2sBocom%20Bepanda%20Ambiance!5e0!3m2!1sen!2scm!4v1697220090626!5m2!1sen!2scm" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">Office Location</iframe>
            </div>
          </div>
        </div>
        <div className="contact-team">
          <h1>Our Team</h1>
          <div className="team">
            <div className="team-detail">
              <h4>Customer Inquiry</h4>
              <p>For any customer inquiry or assistance regading model, price or service issues.
              </p>
              <br/>
              <p><a href="gmail.com">support@htmobile.in</a></p>
            </div>
            <div className="team-detail">
              <h4>Address to CEO</h4>
              <p>For any feedback, complaints, escalations or suggestions, frop an email directly to the CEO at
              </p>
              <br/>
              <p><a href="gmail.com">CEO@htmobile.in</a></p>
            </div>
            <div className="team-detail">
              <h4>Bulk Buying</h4>
              <p>In case you want to buy anything in bulk (more than 4 items) and want a customized quote.
              </p>
              <br/>
              <p className="team-mail"><a href="gmail.com">bulkbuying@htmobile.in</a></p>
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  )
}

export default Contact