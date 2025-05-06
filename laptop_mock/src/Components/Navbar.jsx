import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
        </ul>
        </div>
    </nav>
  )
}

export default Navbar