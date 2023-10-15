import React from 'react';
import './blog.css'
import Footer from '../Home_component/Footer_component/footer';

import blogImage from './blog_image/blog-apple.jpg';
import blogImage2 from './blog_image/blog-samsung.webp'

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
              <h2>Latest Iphone Apple Model</h2>
              <p> iPhone 15 Pro and iPhone 15 Pro Max, designed with aerospace-grade titanium that’s strong yet lightweight to deliver Apple’s lightest Pro models ever. The new design also features contoured edges and a customizable Action button, allowing users to personalize their iPhone experience. Powerful camera upgrades enable the equivalent of seven pro lenses with incredible image quality, including a more advanced 48MP Main camera system that now supports the new super-high-resolution 24MP default, the next generation of portraits with Focus and Depth Control, improvements to Night mode and Smart HDR, and an all-new 5x Telephoto camera exclusively on iPhone 15 Pro Max. A17 Pro unlocks next-level gaming experiences and pro performance. The new USB‑C connector is supercharged with USB 3 speeds — up to 20x faster than USB 2 — and together with new video formats, enables powerful pro workflows that were not possible before.1 And with the addition of Roadside Assistance via satellite, the iPhone 15 Pro lineup builds on Apple’s innovative satellite infrastructure to connect users to help if they have car trouble while off the grid.</p>
              <button><a href="www.apple.com">Learn More</a></button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog