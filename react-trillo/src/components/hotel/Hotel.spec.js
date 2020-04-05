import React from 'react'
import { shallow } from 'enzyme'
import Hotel from './Hotel'

describe('Hotel Component', () => {

	it('should render correctly', () => {
		const wrapper = shallow(<Hotel />)
		expect(wrapper).toMatchSnapshot()
	})
})