import React from 'react'
import './User-Review.css'

export default function UserReview({ review }) {

  const {
      firstName,
      lastName,
      profileImg,
      rating,
      reviewText, 
      reviewDate,
  } = review

  return (
    <figure className="review">
      <blockquote className="review__text">
        {reviewText}
      </blockquote>
      <figcaption className="review__user">
        <img src={profileImg} alt={firstName} className="review__photo" />
        <div className="review__user-box">
          <p className="review__user-name">{firstName} {lastName}</p>
          <p className="review__date">{reviewDate}</p>
        </div>
        <div className="review__rating">{rating}</div>
      </figcaption>
    </figure>
  )
}