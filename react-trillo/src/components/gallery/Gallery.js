import React from 'react'
import './Gallery.css'

export default function Gallery() {
  return (
    <div className="gallery">
      <figure className="gallery__item">
        <img src="img/hotel-1.jpg" alt="Photo of Hotel 1" className="gallery__photo" />
        <figcaption className="gallery__caption">Vibrant Nightlife</figcaption>
      </figure>
      <figure className="gallery__item">
        <img src="img/hotel-2.jpg" alt="Photo of Hotel 2" className="gallery__photo" />
        <figcaption className="gallery__caption">Luxury Pools</figcaption>
      </figure>
      <figure className="gallery__item">
        <img src="img/hotel-3.jpg" alt="Photo of Hotel 3" className="gallery__photo" />
        <figcaption className="gallery__caption">Stunning Views</figcaption>
      </figure>
    </div>
  )
}