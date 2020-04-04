import React from 'react'
import './Recommend.css'

const friendRecommendList = [
  { img: 'img/user-3.jpg', name: 'Friend 1'},
  { img: 'img/user-4.jpg', name: 'Friend 2'},
  { img: 'img/user-5.jpg', name: 'Friend 3'},
  { img: 'img/user-6.jpg', name: 'Friend 4'},
]

export default function Recommend() {

  const recommendFriendImages = friendRecommendList.map(friend => {
    return (
      <img key={friend.name} src={friend.img} alt={friend.name} className="recommend__photo" />
    )
  })

  return (
    <div className="recommend">
      <p className="recommend__count">Lucy and 3 other friends recommend this hotel.</p>
      <div className="recommend__friends">
        {recommendFriendImages}
      </div>
    </div>
  )
}