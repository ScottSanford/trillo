import React from 'react'
import './Benefits-List.css'

export default function BenefitsList({ benefits }) {

  if (!benefits) {
    return null
  }

  const benefitItems = benefits.map((benefit, index) => {
    return <li key={index} className="list__item">{benefit}</li>
  })

  return (
    <ul className="list">
      {benefitItems}
    </ul>
  )
}