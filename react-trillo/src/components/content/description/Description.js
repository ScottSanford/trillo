import React from 'react'
import './Description.css'
import Recommend from './recommend/Recommend'
import BenefitsList from './benefits-list/Benefits-List'

export default function Description() {
	return (
		<div className="description">
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium
          cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
            </p>
        <p className="paragraph">
          Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
            </p>
        <BenefitsList />
        <Recommend />
      </div>
	)
}
