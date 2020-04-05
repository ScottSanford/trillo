import React from 'react'
import { shallow } from 'enzyme'
import Description from './Description'
import BenefitsList from './benefits-list/Benefits-List'
import Recommend from './recommend/Recommend'

describe('Description Component', () => {

	it('should render correctly with no props', () => {

		const wrapper = shallow(<Description />)
		expect(wrapper).toMatchSnapshot()
	})

	it('shallow wrapper instance should be null', () => {
		const wrapper = shallow(<Description />)
		const instance = wrapper.instance()
	  
		expect(instance).toEqual(null)
	  })

	it('should contain 2 paragraph elements', () => {

		const wrapper = shallow(<Description />)
		expect(wrapper.find('.paragraph')).toHaveLength(2)
	})

	it('should render 1 BenefitsList and 1 Recommend list component', () => {

		const wrapper = shallow(<Description />)
		expect(wrapper.find(<BenefitsList />)).toBeTruthy()
		expect(wrapper.find(<Recommend />)).toBeTruthy()
	})
})