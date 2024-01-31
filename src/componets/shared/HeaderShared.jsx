import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../shared/HeaderShared.css'

export const HeaderShared = () => {

  const [activeMenuItem, setActiveMenuItem] = useState('');

  const handleMenuItemClick = (itemName) => {
    setActiveMenuItem(itemName);
  };
  return (
    <div className='header'>
    <h1 className='header_title'><Link to='/'><span className='TextColorDifference'>Booking</span>App</Link></h1>
    <nav className='header_menu'>
      <li className={`header_Home ${activeMenuItem === 'home' ? 'active' : ''}`}>
        <Link to='/' onClick={() => handleMenuItemClick('home')}>Home</Link>
      </li>
      <li className={`header_login ${activeMenuItem === 'login' ? 'active' : ''}`}>
        <Link to='/login' onClick={() => handleMenuItemClick('login')}>Login</Link>
      </li>
      <li className={`header_register ${activeMenuItem === 'register' ? 'active' : ''}`}>
        <Link to='/register' onClick={() => handleMenuItemClick('register')}>Register</Link>
      </li>
      <li className={`header_reservations ${activeMenuItem === 'reservations' ? 'active' : ''}`}>
        <Link to='/reservations' onClick={() => handleMenuItemClick('reservations')}>Reservations</Link>
      </li>
    </nav>
  </div>
  )
}
