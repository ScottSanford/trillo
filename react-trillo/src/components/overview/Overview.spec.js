import React from 'react'
import { shallow } from 'enzyme'
import Overview from './Overview'

describe('Overview Component', () => {

	const minProps = {
		hotel: {}
	}

	it('should match snapshot', () => {
		const wrapper = shallow(<Overview {...minProps} />)
		expect(wrapper).toMatchSnapshot()
	})
})