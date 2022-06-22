import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

function Menu() {
  
  return (
    <div className='nav-section'>
      <nav>
        <ul>
          <li><NavLink to="/" activeClassName="active">Trending</NavLink></li>
          <li><NavLink to="/topRated" activeClassName="active">Top Rated</NavLink></li>
          <li><NavLink to="/action" activeClassName="active">Action Movies</NavLink></li>
          <li><NavLink to="/comedy" activeClassName="active">Comedy Movies</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu