import React from 'react'
import './Benefits-List.css'

export default function BenefitsList({ benefits }) {

  const benefitItems = benefits.map(benefit => {
    return <li className="list__item">{benefit}</li>
  })

  return (
    <ul className="list">
      {benefitItems}
    </ul>
  )
}