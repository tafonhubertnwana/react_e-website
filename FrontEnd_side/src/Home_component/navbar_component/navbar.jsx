import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navbar.css'
import { FaSearch, FaShoppingCart} from 'react-icons/fa'
import { useLogout } from '../../authentication/useLogout'
import { useAuthContext } from '../../authentication/useAuthContext'

export const Navbar = () =>{

  const {logout} = useLogout()
  const {user} = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return(
    <>
      <div>
        <section className='navbar'>
          <p><Link to='/' className = 'logo'>HTMobile</Link></p>
          <form>
            <input type="text" placeholder="Search...." />
            <Link className='fasearch'><FaSearch /></Link> 
          </form>
          <p className='cart'><a href="cart"><FaShoppingCart /></a></p>
          <div id="nav">
            {user && ( 
            <div id='logout'>
              <span>{user.email}</span>
              <button onClick={handleClick}>Logout</button>
            </div>
            )}
            { !user && (
            <div id='login'>
              <ul>
                <li><a href="login">Login</a></li>
                <li><a href="signup">Signup</a></li>
              </ul>
            </div>
            )}
          </div>
          
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
