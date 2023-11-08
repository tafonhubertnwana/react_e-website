import { Route, Routes } from 'react-router-dom';
import './App.css';
import "react-toastify/dist/ReactToastify.css"
import  Home  from './Home_component/home';
import  About  from './About_component/about';
import  Blog  from './Blog_component/blog';
import  Contact  from './Contact_component/contact';
import { Navbar } from './Home_component/navbar_component/navbar';
import Apple from './product_component/Apple_component/apple';
import Samsung from './product_component/Samsung_component/samsung';
import Vivo from './product_component/Vivo_component/vivo';
import Google from './product_component/Google_component/google';
import Cart from './shoppingCart_component/cart'
import {ToastContainer } from "react-toastify";
import SignUp from "./Auth/register"
import Login from "./Auth/login"






function App() {
  return (
    <div>  
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Navbar />} >
            <Route index element={<Home />} />
            <Route path='cart' element = {<Cart />} />
            <Route path='signUp' element={<SignUp />} /> 
            <Route path='login' element={<Login />} />
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
