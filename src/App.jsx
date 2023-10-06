
import { Route, Routes } from 'react-router-dom';
import './App.css';
import  Home  from './Home_component/home';
import  Brand  from './Brand_component/brand';
import  Product  from './product_component/product';
import  About  from './About_component/about';
import  Blog  from './Blog_component/blog';
import  Contact  from './Contact_component/contact';
import { Navbar } from './Home_component/navbar_component/navbar';



function App() {
  return (
    <div>  
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brand" element={<Brand />} />
          <Route path='/product' element= {<Product />} />
          <Route path='/about' element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path='/contact' element={<Contact />} />  
        </Routes>   
    </div>
  )
};

export default App;
