import React from 'react'
import './Sidebar.css'
import NavItem from './NavItem'

const menu = [
  { icon: 'home', title: 'Hotel' },
  { icon: 'aircraft-take-off', title: 'Flight' },
  { icon: 'key', title: 'Car Rental' },
  { icon: 'map', title: 'Tours' },
]

export default function Sidebar() {

  const navList = menu.map(anItem => <NavItem item={anItem} /> )

  return (  
    <nav className="sidebar">
      <ul className="side-nav">
        {navList}
      </ul>

      <div className="legal">
        &copy; 2018 by Trillo. All rights reserved.
        </div>
    </nav>
  )
}
