import React from 'react'
import './Hotel.css'
import Gallery from '../gallery/Gallery'
import Details from '../details/Details'
import CallToAction from '../call-to-action/Call-to-action'
import Overview from '../overview/Overview'

export default function Hotel({ details }) {

  return (
    <main className="hotel-view">
      <Gallery />
      <Overview hotel={details} />
      <Details />
      <CallToAction />
    </main>
  )
}