import React from 'react'
import { shallow } from 'enzyme'
import UserReviews from './User-Reviews'

describe('UserReviews Component', () => {

	const minProps = {
		reviews: []
	}

	it('should match snapshot', () => {
		const wrapper = shallow(<UserReviews {...minProps} />)
		expect(wrapper).toMatchSnapshot()
	})
})