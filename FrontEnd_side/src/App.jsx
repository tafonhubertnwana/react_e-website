import { Route, Routes, Navigate} from 'react-router-dom';
import {useAuthContext} from './authentication/useAuthContext'
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
import SignUp from "./Auth/SignUp"
import Login from "./Auth/login"






function App() {
  const {user} = useAuthContext()
  return (
    <div>  
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Navbar />} >
            <Route index element={<Home />} />
            <Route path='cart' element = {<Cart />} />
            <Route path='signup' element={!user ? <SignUp /> : <Navigate to='/'/>} /> 
            <Route path='login' element={ !user ? <Login /> : <Navigate to='/'/>} />
            <Route path='apple' element={user ? <Apple /> : <Navigate to ='/login'/>} />
            <Route path='samsung' element={user ? <Samsung /> : <Navigate to='/login'/>} />
            <Route path='google' element={user ? <Google /> : <Navigate to='/login'/>} />
            <Route path='vivo' element={user ? <Vivo /> : <Navigate to ="/login"/>} />
            <Route path='about' element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path='contact' element={<Contact />} />
            
          </Route> 
        </Routes>  
    </div>
  )
};

export default App;
