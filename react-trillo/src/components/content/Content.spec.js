import React from 'react'
import { shallow } from 'enzyme'
import Content from './Content'

describe('Content Component', () => {

	it('should match snapshot', () => {
		const wrapper = shallow(<Content />)
		expect(wrapper).toMatchSnapshot()
	})
})