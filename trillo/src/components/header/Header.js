import React from 'react'
import Logo from '../../img/logo.png'

export default function Header() {
	return (
		<div className="header">
			<img src={Logo} alt="Trillo Logo" className="logo" />
		</div>
	)
}