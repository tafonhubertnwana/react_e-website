import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navbar.css'
import { FaSearch, FaShoppingCart, FaUser, FaRegHeart  } from 'react-icons/fa'



export const Navbar = () =>{
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
          <button className='fauser'><FaUser />  Login</button>
        </section>
        <nav>
          <ul>
            <li><Link to= '/'>Home</Link></li>
            <li><Link to='product'>Products</Link>
              <ul className="dropdown">
                <li><Link to='apple'>Iphone</Link></li>
                <li><Link to='samsung'> Samsung</Link></li>
                <li><Link to="google">Google Pixel</Link></li>
                <li><Link to="vivo">Vivo</Link></li>
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