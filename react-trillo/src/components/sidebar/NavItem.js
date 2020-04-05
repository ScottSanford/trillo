import React from 'react'

export default function NavItem({ item }) {
	const { icon, title } = item
	const isFirst = icon === 'home'
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
  }