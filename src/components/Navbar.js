import React from 'react'
import './Navbar.css'
import logo from '../img/disney-icon.png'
import searchIcon from '../img/search-icon.svg'

function Navbar() {
  return (
    <div className='navbar'>
        <input type='checkbox' id='check'/>
        <div className='logo'><a href='#'><img src={logo} /></a></div>
        
        <div className='menu'>
            <ul>
                <li className='nav-items'><a href='#'>DISNEY+</a></li>
                <li className='nav-items'><a href='#'>PARKS & TRAVELS</a></li>
                <li className='nav-items'><a href='#'>MOVIES</a></li>
                <li className='nav-items'><a href='#'>SHOP</a></li>
                <li className='nav-items'><a href='#'>MORE</a></li>
            </ul>
        </div>
        
        <label for='check' id='res-menu'>
            <i class="fa fa-bars" id='i1'></i>
            <i class="fa fa-times" id='i2'></i>
        </label>
        <div className='nav-input'>
        <input type='text' placeholder='search'/><a href='#'><img src={searchIcon} /></a>
        </div>
        
    </div>
  )
}

export default Navbar