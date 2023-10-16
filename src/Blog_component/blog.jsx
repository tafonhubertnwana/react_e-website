import React from 'react';
import './blog.css'
import Footer from '../Home_component/Footer_component/footer';

import blogImage from './blog_image/blog-apple.jpg';
import blogImage2 from './blog_image/blog-samsung.webp';
import blogImage3  from './blog_image/blog-google.webp';
import blogImage4 from './blog_image/blog-vivo.jpg';

 const Blog = () => {
  return (
    <div>
      <div className="blog-containter">
        <div className="blog-section">
          <div className="blog-image">
            <img src={blogImage} alt="" />
            <div className="blog-detail">
              <h2>Latest Iphone Apple Model</h2>
              <p> iPhone 15 Pro and iPhone 15 Pro Max, designed with aerospace-grade titanium that’s strong yet lightweight to deliver Apple’s lightest Pro models ever. The new design also features contoured edges and a customizable Action button, allowing users to personalize their iPhone experience. Powerful camera upgrades enable the equivalent of seven pro lenses with incredible image quality, including a more advanced 48MP Main camera system that now supports the new super-high-resolution 24MP default, the next generation of portraits with Focus and Depth Control, improvements to Night mode and Smart HDR, and an all-new 5x Telephoto camera exclusively on iPhone 15 Pro Max. A17 Pro unlocks next-level gaming experiences and pro performance. The new USB‑C connector is supercharged with USB 3 speeds — up to 20x faster than USB 2 — and together with new video formats, enables powerful pro workflows that were not possible before.1 And with the addition of Roadside Assistance via satellite, the iPhone 15 Pro lineup builds on Apple’s innovative satellite infrastructure to connect users to help if they have car trouble while off the grid.</p>
              <button><a href="www.apple.com">Learn More</a></button>
            </div>
          </div>
          <div className="blog-image">
            <img src={blogImage2} alt="" />
            <div className="blog-detail">
              <h2>Latest Model for Samsung 2023</h2>
              <p> The Galaxy S23 Ultra enjoys the largest display in the Galaxy S23 family, measuring in at an impressive 6.8 inches. The immersive display has standout brightness thanks to the integrated Vision Booster technology that automatically adjusts to suit your environment, whether you're travelling on a train or taking a stroll in the morning sun, you'll enjoy high-quality viewing no matter where life takes you. And that's not all, with QHD+ Dynamic AMOLED 2X screen technology and a refresh rate up to 120Hz, losing yourself in eye-widening super sharp, colour-popping content has never been easier.
The Galaxy S23 Ultra is also optimised for gaming and streaming thanks to the improved CPU, GPU and Qualcomm Snapdragon® 8 Gen 2 processor6. Combined with a huge 5,000mAh (typical)7 battery, 45W Super-Fast Charging and advanced cooling system, it can withstand even the most demanding multiplayer gaming marathons with ease.</p>
              <button><a href="https://www.samsung.com/uk/mobile-phone-buying-guide/introducing-samsung-galaxy-s23/">Learn More</a></button>
            </div>
          </div>
          <div className="blog-image">
            <img src={blogImage3} alt="" />
            <div className="blog-detail">
              <h2>Latest model Google Pixel</h2>
              <p>The Google Pixel Fold is getting launched globally on May 10 and ahead of its release, it seems like we already know quite a lot about it. From its processor to the famed Pixel camera setup, leakers have made sure there is nothing left to the imagination. In fact, we even have a fair idea regarding its pricing and, spoiler alert, it may not please potential buyers. Yes, the Pixel Fold is going to be pricey, even edging ahead of the Samsung Galaxy Z Fold 4. On the subject of unpleased buyers, based on the renders that Google has shared ahead of the I/O 2023, some folks have also noticed the thick bezels around the main foldable display.  </p>
              <button><a href="www.googlepixel.com">Learn More</a></button>
            </div>
          </div>
          <div className="blog-image">
            <img src={blogImage4} alt="" />
            <div className="blog-detail">
              <h2>Latest Model for Vivo </h2>
              <p>vivo, the innovative global smartphone brand, today expanded its popular V-Series portfolio in India with the launch of the V27 series. The newly launched V27 series includes two premium smartphones, V27 Pro and V27, packed with flagship-level hardware, a 3D curved display along with the premium Fluorite AG Glass back panel that features the much-loved color-changing technology. The smartphones pack the flagship 50 MP Sony IMX766V primary rear custom sensor along with the new Aura light tech that will enable consumers to see through the darkness and capture night portraits and pictures like never before.</p>
              <button><a href="https://www.vivo.com/in/about-vivo/news/v27-series">Learn More</a></button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog