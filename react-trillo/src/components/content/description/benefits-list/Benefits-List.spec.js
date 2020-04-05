import React from 'react'
import { shallow } from 'enzyme'
import BenefitsList from './Benefits-List'

describe('Benefits List Component', () => {

	it('should render correctly with no props', () => {
		const wrapper = shallow(<BenefitsList />)
		expect(wrapper).toMatchSnapshot()
	})

	it('should render the benefits list of 2 items', () => {
		const list = ['one', 'two']
		const wrapper = shallow(<BenefitsList benefits={list} />)

		expect(wrapper.find('.list__item')).toHaveLength(2)
		expect(wrapper.find('.list__item').at(0).props().children).toEqual('one')
		expect(wrapper).toMatchSnapshot()
	})
	
	it('should render 0 benefits if none are passed', () => {
		const list = []
		const wrapper = shallow(<BenefitsList benefits={list} />)

		expect(wrapper.find('.list__item')).toHaveLength(0)
		expect(wrapper).toMatchSnapshot()
	})
})
