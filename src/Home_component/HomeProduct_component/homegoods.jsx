import React from 'react'
import './homegoods.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
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
    items: 1
  }
};

const Homeproduct = () => {
  return (
    <>
      <div className="feature-categories">
      <h1>Product Categories</h1>
      <p>Apple Iphone Series</p>
      </div>
      <Carousel responsive={responsive}>
        <div className="product-feature">
            <img src="https://res.cloudinary.com/dbcydazok/image/upload/v1696901510/Apple_11_pro_clrvcl.png " alt='Apple 11'/>
            <div className="product-details">
              <h2>Apple Iphone 11 Pro </h2>
              <p className="price">200000CFA</p>
              <p><button>Add to Cart</button></p>
            </div>
        </div>
        <div className="product-feature">
            <img src="https://res.cloudinary.com/dbcydazok/image/upload/v1696901510/Apple_11_pro_clrvcl.png " alt='Apple 11'/>
            <div className="product-details">
              <h2>Apple Iphone 11 Pro </h2>
              <p className="price">200000CFA</p>
              <p><button>Add to Cart</button></p>
            </div>
        </div>
        <div className="product-feature">
            <img src="https://res.cloudinary.com/dbcydazok/image/upload/v1696901510/Apple_11_pro_clrvcl.png " alt='Apple 11'/>
            <div className="product-details">
              <h2>Apple Iphone 11 Pro </h2>
              <p className="price">200000CFA</p>
              <p><button>Add to Cart</button></p>
            </div>
        </div>
        <div className="product-feature">
            <img src="https://res.cloudinary.com/dbcydazok/image/upload/v1696901510/Apple_11_pro_clrvcl.png " alt='Apple 11'/>
            <div className="product-details">
              <h2>Apple Iphone 11 Pro </h2>
              <p className="price">200000CFA</p>
              <p><button>Add to Cart</button></p>
            </div>
        </div>
        <div className="product-feature">
            <img src="https://res.cloudinary.com/dbcydazok/image/upload/v1696901510/Apple_11_pro_clrvcl.png " alt='Apple 11'/>
            <div className="product-details">
              <h2>Apple Iphone 11 Pro </h2>
              <p className="price">200000CFA</p>
              <p><button>Add to Cart</button></p>
            </div>
        </div>
        <div className="product-feature">
            <img src="https://res.cloudinary.com/dbcydazok/image/upload/v1696901510/Apple_11_pro_clrvcl.png " alt='Apple 11'/>
            <div className="product-details">
              <h2>Apple Iphone 11 Pro </h2>
              <p className="price">200000CFA</p>
              <p><button>Add to Cart</button></p>
            </div>
        </div>
       
      </Carousel>;
    </>
  )
}

export default Homeproduct;