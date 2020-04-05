import React from 'react'
import { shallow } from 'enzyme'
import Hotel from './Hotel'

describe('Hotel Component', () => {

	const minProps = {
		details: {}
	} 

	it('renders without exploding', () => {
		const wrapper = shallow(<Hotel {...minProps} />)
		expect(wrapper.length).toEqual(1)
	})

	it('should match snapshot', () => {
		const wrapper = shallow(<Hotel {...minProps} />)
		expect(wrapper).toMatchSnapshot()
	})

	
})