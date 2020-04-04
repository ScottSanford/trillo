import React from 'react'
import './Gallery.css'

const hotelImages = [
  { img: 'img/hotel-1.jpg', description: 'Hotel Nightlife', caption: 'Vibrant Nightlife'},
  { img: 'img/hotel-2.jpg', description: 'Hotel Pools', caption: 'Luxury Pools'},
  { img: 'img/hotel-3.jpg', description: 'Amazing Views', caption: 'Stunning Views'},
]

export default function Gallery() {

  const photos = hotelImages.map(image => <Photo photo={image} />)

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