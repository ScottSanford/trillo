import React from 'react'
import './User-Reviews.css'
import UserReview from './user-review/User-Review'

const reviews = [
  {
    firstName: 'Nick',
    id: '32fqp9jakf',
    lastName: 'Smith',
    profileImg: 'img/user-1.jpg',
    rating: '7.8',
    reviewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officiaex.',
    reviewDate: 'Feb 23rd, 2020',
  },
  {
    firstName: 'Mary',
    id: '2e09ijaadd',
    lastName: 'Thomas',
    profileImg: 'img/user-2.jpg',
    rating: '9.3',
    reviewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.',
    reviewDate: 'Feb 23rd, 2020',
  }
]

export default function UserReviews() {

  const reviewsList = reviews.map(review => <UserReview key={review.id} review={review} />)

  return (
    <div className="user-reviews">
      {reviewsList}
      <button className="btn-inline">Show all <span>&rarr;</span></button>
    </div>
  )
}