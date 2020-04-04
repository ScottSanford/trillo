import React from 'react'
import './Details.css'
import Description from '../content/description/Description'
import UserReviews from '../content/user-reviews/User-Reviews'


export default function Details() {
  return (
    <div className="detail">
      <Description />
      <UserReviews />
    </div>
  )
}