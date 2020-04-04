import React from 'react'
import './Gallery.css'

export default function Gallery({ images }) {

  const photos = images.map(image => <Photo photo={image} />)

  return (
    <div className="gallery">
      {photos}
    </div>
  )
}

function Photo({ photo }) {

  const { img, description, caption } = photo

  return (
    <figure className="gallery__item">
      <img src={img} alt={description} className="gallery__photo" />
      <figcaption className="gallery__caption">{caption}</figcaption>
    </figure>
  )
}