import React from 'react'
import { shallow } from 'enzyme'
import CallToAction from './Call-to-action'

describe('Call to Action Component', () => {

	it('should match the snapshopt', () => {

		const wrapper = shallow(<CallToAction />)
		expect(wrapper).toMatchSnapshot()
	})
})