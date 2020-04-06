import React from 'react'
import { shallow } from 'enzyme'
import Sidebar from './Sidebar'

describe('Sidebar Component', () => {

	it('should match snapshot', () => {
		const wrapper = shallow(<Sidebar />)
		expect(wrapper).toMatchSnapshot()
	})

	it('should have 4 nav items', () => {
		const wrapper = shallow(<Sidebar />)
		expect(wrapper.find('.side-nav').children()).toHaveLength(4)
	})
})