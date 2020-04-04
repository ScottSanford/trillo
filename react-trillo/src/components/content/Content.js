import React from 'react'
import './Content.css'
import Sidebar from '../sidebar/Sidebar'
import Hotel from '../hotel/Hotel'

const hotelData = {
  name: 'Hotel Las Palmas',
  location: 'Albufeira, Portugal',
  overallRatingAvg: 8.6,
  overallRatingCount: 429,
}

export default function Content() {
  return (
    <div className="content">
      <Sidebar />
      <Hotel details={hotelData} />
    </div>
	)
}