import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
  return (
    <>
      <div>
        <section className='navbar'>
          <p><Link to='/' className = 'logo'>HTMobile</Link></p>
          <form>
            <input type="text" placeholder="Search...." />
            <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
          </form>
          <ul>
            <li><i class="fa-solid fa-heart"></i></li>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
          </ul>
          <button><i class="fa-solid fa-user"></i>Login</button>
        </section>
      </div>
      <div>
        <nav>
          <ul>
            <li><Link to= '/Home'>Home</Link></li>
            <li><Link to= '/brand'>Brand</Link></li>
            <li><Link to='/product'>Products</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </>
    
  )
}