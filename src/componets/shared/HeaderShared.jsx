import React from 'react'
import { Link } from 'react-router-dom'
import '../shared/HeaderShared.css'

export const HeaderShared = () => {
  return (
    <div  className='header'>
        <h1 className='header_title'><Link to='/'><span className='TextColorDifference'>Booking</span>App</Link></h1>
        <nav className='header_menu'>
            <li className='header_login'><Link to='/login'>Login</Link></li>
            <li className='header_register'><Link to='/register'>Register</Link></li>
            <li className='header_reservatios'><Link to='/resevations'>Resevations</Link></li>
        </nav>
    </div>
  )
}
