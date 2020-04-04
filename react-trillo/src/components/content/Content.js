import React from 'react'
import './Content.css'
import Sidebar from '../sidebar/Sidebar'
import Gallery from '../gallery/Gallery'
import Overview from '../overview/Overview'
import Details from '../details/Details'
import CallToAction from '../call-to-action/Call-to-action'

export default function Content() {
  return (
    <div className="content">
      <Sidebar />
      <main className="hotel-view">
        <Gallery />
        <Overview />
        <Details />
        <CallToAction />
      </main>
    </div>
	)
}