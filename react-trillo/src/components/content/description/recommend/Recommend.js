import React from 'react'
import './Recommend.css'

export default function Recommend({ list }) {

  const recommendFriendImages = list.map(friend => {
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