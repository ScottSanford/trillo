import React from 'react'
import './Recommend.css'

export default function Recommend({ list }) {

  if (!list) {
    return null
  }

  const recommendFriendImages = list.map(friend => {

    const { img, name } = friend
    // If data returns no image, exclude image element from UI
    if (!img) {
      return
    }

    return (
      <img key={name} src={img} alt={name} className="recommend__photo" />
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