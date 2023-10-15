import { Route, Routes } from 'react-router-dom';
import './App.css';
import  Home  from './Home_component/home';
import  Product  from './product_component/product';
import  About  from './About_component/about';
import  Blog  from './Blog_component/blog';
import  Contact  from './Contact_component/contact';
import { Navbar } from './Home_component/navbar_component/navbar';
import Apple from './product_component/Apple_component/apple';
import Samsung from './product_component/Samsung_component/samsung';
import Vivo from './product_component/Vivo_component/vivo';
import Google from './product_component/Google_component/google';




function App() {
  return (
    <div>  
        <Routes>
          <Route path="/" element={<Navbar />} >
            <Route index element={<Home />} />
            <Route path='product' element= {<Product />} />
            <Route path='apple' element={<Apple />} />
            <Route path='samsung' element={<Samsung />} />
            <Route path='google' element={<Google />} />
            <Route path='vivo' element={<Vivo />} />
            <Route path='about' element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path='contact' element={<Contact />} />  
          </Route> 
        </Routes>  
    </div>
  )
};

export default App;
