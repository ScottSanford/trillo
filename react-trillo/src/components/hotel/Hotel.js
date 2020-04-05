import React from 'react'
import './Hotel.css'
import Gallery from '../gallery/Gallery'
import Description from '../content/description/Description'
import CallToAction from '../call-to-action/Call-to-action'
import Overview from '../overview/Overview'
import UserReviews from '../content/user-reviews/User-Reviews'

export default function Hotel({ details = {} }) {

  const { benefits, hotelImages, recommended, reviews} = details

  return (
    <main className="hotel-view">
      <Gallery images={hotelImages} />
      <Overview hotel={details} />
      <div className="detail">
        <Description benefits={benefits} recommended={recommended} />
        <UserReviews reviews={reviews} />
      </div>
      <CallToAction />
    </main>
  )
}