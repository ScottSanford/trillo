import React from 'react'
import './Sidebar.css'

const menu = [
  { icon: 'home', title: 'Hotel' },
  { icon: 'aircraft-take-off', title: 'Flight' },
  { icon: 'key', title: 'Car Rental' },
  { icon: 'map', title: 'Tours' },
]

export default function Sidebar() {

  const navList = menu.map(anItem => {

    const { icon, title } = anItem
    const isFirst = anItem.icon === 'home'
      ? 'side-nav__item--active'
      : ''

    const navItemClasses = `side-nav__item ${isFirst}`

    return (
      <li key={icon} className={navItemClasses}>
        <a href="#" className="side-nav__link">
          <svg className="side-nav__icon">
            <use xlinkHref={`img/sprite.svg#icon-${icon}`} />
          </svg>
          <span>{title}</span>
        </a>
      </li>
    )
  })

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