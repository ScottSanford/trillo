import React from 'react'
import './Header.css'
import SearchInput from './search-input/search-input'
import Navigation from './navigation/navigation'

export default function Header() {
  return (
    <div className="header">
      <img src="../../img/logo.png" alt="Trillo Logo" className="logo" />
      <SearchInput />
      <Navigation />
    </div>
  )
}