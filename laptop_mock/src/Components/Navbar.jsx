import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import Favourites from '../Features/Favourites'

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart)
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleNavbar = () => setIsCollapsed(!isCollapsed);
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-secondary px-4'>

        <button 
        className='navbar-toggler'
        type='button'
        onClick={toggleNavbar}
        aria-controls='navbarNav'
        aria-expanded={!isCollapsed}
        aria-label='Toggle navigation'
        >
            <span className='navbar-toggler-icon'></span>
        </button>

        <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id='navbarNav'>
        <ul className='navbar-nav ms-auto'>
        <li className='nav-item'>
        <Link to="/" className='nav-link'>Home</Link>
        </li>
        <li className='nav-item'>
        <Link to="/about" className='nav-link'>About
        </Link>
        </li>
        <li>
        <Link to="/cart" className='nav-link'>Cart ({cartItems.length})</Link>
        </li>
        <li className='nav-item'>
          <Link to="/favourites" className='nav-link'>Favourites</Link>
        </li>
        <li>
          <Link to="/wishlist" className='nav-link'>Wishlist </Link>
        </li>
        </ul>
     
        </div>
    </nav>
  )
}

export default Navbar