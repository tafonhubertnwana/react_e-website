import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedin  } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <div>
        <div className='newsletter-container'>
          <div className="newsletter-detail">
            <h1>SIGN UP FOR OUR NEWSLETTER </h1>
            <form>
              <div className="form-action">
                <input type="text" name="EmailAddress" placeholder='Your Email Address' />
                <button>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div className="footer-container">
          <div className="footer-detail">
            <div className="footer-col">
              <h1><Link to='/' className='logo'>HTMobile</Link></h1>
              <h2>Follow Us on</h2>
              <ul className='icons'>
                <li className='facebook'><FaFacebookF /></li>
                <li className='twitter'><FaTwitter /></li>
                <li className='whatsapp'><FaWhatsapp /></li>
                <li className="linkedin"><FaLinkedin /></li>
              </ul>
            </div>
            <div className="footer-col">
              <h2>Services</h2>
              <ul>
                <li><Link to='/product' className="link">Sell Phones</Link></li>
                <li>Buy Phones</li>
                <li>Repair Phone</li>
                <li>Find New phones</li>
                <li>Recycle</li>
                <li>Partner with Us</li>
              </ul>
            </div>
            <div className="footer-col">
              <h2>Company</h2>
              <ul>
                <li><Link to='/about' className="link">About us</Link></li>
                <li><Link to='/blog' className="link">Articles</Link></li>
                <li>Careers</li>
                <li>Join us as Affiliate Partner</li>
              </ul>
            </div>
            <div className="footer-col">
              <h2>Help & Support</h2>
              <ul>
                <li>FAQ</li>
                <li><Link to='/contact' className="link">Contact Us</Link></li>
                <li>Warrant Policy</li>
              </ul>
            </div>
            <div className="footer-col">
              <h2>More Info</h2>
              <ul>
                <li>Terms & Condition</li>
                <li>Private Policy</li>
                <li>Terms of Use</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <p className="copyright">Copyright &#169; 2023 HTMobile All rights reserve</p>
        </div>

      </div>
    
    </>
  )
}

export default Footer;