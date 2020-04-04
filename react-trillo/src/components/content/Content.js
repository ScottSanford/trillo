import React from 'react'
import './Content.css'
import Sidebar from '../sidebar/Sidebar'
import Gallery from '../gallery/Gallery'
import Overview from '../overview/Overview'
import Details from '../details/Details'
import CallToAction from '../call-to-action/Call-to-action'

const hotelData = {
  name: 'Hotel Las Palmas',
  location: 'Albufeira, Portugal',
  overallRatingAvg: 8.6,
  overallRatingCount: 429
}

export default function Content() {
  return (
    <div className="content">
      <Sidebar />
      <main className="hotel-view">
        <Gallery />
        <Overview hotel={hotelData} />
        <Details />
        <CallToAction />
      </main>
    </div>
	)
}