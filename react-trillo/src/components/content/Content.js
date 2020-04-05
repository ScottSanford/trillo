import React from 'react'
import './Content.css'
import Sidebar from '../sidebar/Sidebar'
import Hotel from '../hotel/Hotel'
import { hotelData } from '../../api/data'

export default function Content() {
  return (
    <div className="content">
      <Sidebar />
      <Hotel details={hotelData} />
    </div>
	)
}