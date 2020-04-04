import React from 'react'
import './Content.css'
import Sidebar from '../sidebar/Sidebar'
import Hotel from '../hotel/Hotel'

const hotelData = {
  name: 'Hotel Las Palmas',
  location: 'Albufeira, Portugal',
  overallRatingAvg: 8.6,
  overallRatingCount: 429,
  hotelImages: [
    { img: 'img/hotel-1.jpg', description: 'Hotel Nightlife', caption: 'Vibrant Nightlife'},
    { img: 'img/hotel-2.jpg', description: 'Hotel Pools', caption: 'Luxury Pools'},
    { img: 'img/hotel-3.jpg', description: 'Amazing Views', caption: 'Stunning Views'},
  ],
}

export default function Content() {
  return (
    <div className="content">
      <Sidebar />
      <Hotel details={hotelData} />
    </div>
	)
}