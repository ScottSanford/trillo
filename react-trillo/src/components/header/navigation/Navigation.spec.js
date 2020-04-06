import React from 'react'
import { shallow } from 'enzyme'
import Navigation from './Navigation'

describe('Navigation Component', () => {

	it('should match snapshot', () => {
		const wrapper = shallow(<Navigation />)
		expect(wrapper).toMatchSnapshot()
	})
})