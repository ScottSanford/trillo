import React from 'react'
import './Overview.css'

export default function Overview({ hotel }) {

  const { name, location, overallRatingAvg, overallRatingCount } = hotel

	return (
		<div className="overview">
          <h1 className="overview__heading">{name}</h1>
          <div className="overview__stars">
            <svg className="overview__icon-star">
              <use xlinkHref="img/sprite.svg#icon-star" />
            </svg>
            <svg className="overview__icon-star">
              <use xlinkHref="img/sprite.svg#icon-star" />
            </svg>
            <svg className="overview__icon-star">
              <use xlinkHref="img/sprite.svg#icon-star" />
            </svg>
            <svg className="overview__icon-star">
              <use xlinkHref="img/sprite.svg#icon-star" />
            </svg>
            <svg className="overview__icon-star">
              <use xlinkHref="img/sprite.svg#icon-star" />
            </svg>
          </div>
          <div className="overview__location">
            <svg className="overview__icon-location">
              <use xlinkHref="img/sprite.svg#icon-location-pin" />
            </svg>
            <button className="btn-inline">{location}</button>
          </div>

          <div className="overview__rating">
            <div className="overview__rating-average">{overallRatingAvg}</div>
            <div className="overview__rating-count">{overallRatingCount} votes</div>
          </div>
        </div>
	)
}