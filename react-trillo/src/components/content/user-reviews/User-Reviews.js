import React from 'react'
import './User-Reviews.css'
import UserReview from './user-review/User-Review'

export default function UserReviews({ reviews }) {

  const reviewsList = reviews.map(review => <UserReview key={review.id} review={review} />)

  return (
    <div className="user-reviews">
      {reviewsList}
      <button className="btn-inline">Show all <span>&rarr;</span></button>
    </div>
  )
}