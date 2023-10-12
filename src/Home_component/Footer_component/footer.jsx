import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedinIn  } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <div>
        <div className="footer-container">
          <div className="footer-detail">
            <div className="footer-col">
              <h1><Link to='/' className = 'logo'>HTMobile</Link></h1>
              <h2>Follow Us on</h2>
              <ul className='icons'>
                <li><FaFacebookF /></li>
                <li><FaTwitter /></li>
                <li><FaWhatsapp /></li>
                <li><FaLinkedinIn /></li>
              </ul>
            </div>
            <div className="footer-col">
              <h2>Services</h2>
              <ul>
                <li>Sell Phones</li>
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
                <li>About us</li>
                <li>Articles</li>
                <li>Careers</li>
                <li>Join us as Affiliate Partner</li>
              </ul>
            </div>
            <div className="footer-col">
              <h2>Help & Support</h2>
              <ul>
                <li>FAQ</li>
                <li>Contact Us</li>
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
          <p classnName="copyright
          ">Copyright &#169; 2023 HTMobile All rights reserved
</p>
        </div>

      </div>
    
    </>
  )
}

export default Footer;