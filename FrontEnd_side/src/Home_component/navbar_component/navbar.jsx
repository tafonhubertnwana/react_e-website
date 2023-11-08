import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navbar.css'
import { FaSearch, FaShoppingCart, FaRegHeart  } from 'react-icons/fa'
import {useSelector, useDispatch } from "react-redux"
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { logoutUser } from "../../authentication/authSlice";



export const Navbar = () =>{

  const dispatch = useDispatch()

  const {auth} = useSelector((state) => state.auth)
  return(
    <>
      <div>
        <section className='navbar'>
          <p><Link to='/' className = 'logo'>HTMobile</Link></p>
          <form>
            <input type="text" placeholder="Search...." />
            <Link className='fasearch'><FaSearch /></Link> 
          </form>
          <ul>
            <li className='faregheart'><FaRegHeart /></li>
            <li><Link to = "cart"><FaShoppingCart /></Link></li>
          </ul>
          
          {
            auth._id ? (
              <Logout onClick={() => {
              dispatch(logoutUser(null))
              toast.warning("logged Out!" , {
              position: "bottom-right"})
            }}
            >
              Logout
            </Logout>
            ) : (
            <AuthLinks>
              <Link to ="login">Login</Link>
              <Link to= 'signUp'>Sign Up</Link>
            </AuthLinks>)
          }
        </section>
        <nav>
          <ul>
            <li><Link to= '/'>Home</Link></li>
            <li><Link>Products</Link>
              <ul className="dropdown">
                <li><Link to='apple'>Apple Series</Link></li>
                <li><Link to='samsung'> Samsung Galaxy Series</Link></li>
                <li><Link to="google">Google Pixel Series</Link></li>
                <li><Link to="vivo">Vivo Series</Link></li>
              </ul>
            </li>
            <li><Link to='blog'>Blog</Link></li>
            <li><Link to='about'>About</Link></li>
            <li><Link to='contact'>Contact</Link></li>
          </ul>
        </nav> 
      </div>

      <Outlet />
    </>
  )
};


const AuthLinks = styled.div`
  a{
    &:last-child{
      margin-left: 2rem; 
    }
  }

`;


const Logout = styled.div`
  color: white;
  cursor: pointer;
`;