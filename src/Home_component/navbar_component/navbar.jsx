import React from 'react'
import { Link } from 'react-router-dom'
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
            <li><FaShoppingCart /></li>
          </ul>
          <button className='fauser'><FaUser />  Login</button>
        </section>
        <nav>
          <ul>
            <li><Link to= '/'>Home</Link></li>
            <li><Link to= '/brand'>Brand</Link>
              <ul className="dropdown">
                  <li>Iphone</li>
                  <li>Samsung</li>
                  <li>G. Pixel</li>
                  <li>Vivo</li>
              </ul>
            </li>
            <li><Link to='/product'>Products</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav> 
      </div>
    </>
  )
};