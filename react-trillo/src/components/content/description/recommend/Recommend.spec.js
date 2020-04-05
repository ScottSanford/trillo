import React from 'react'
import { shallow } from 'enzyme'
import Recommend from './Recommend'

describe('Recommend Component', () => {

	it('should render correctly with no props', () => {

		const wrapper = shallow(<Recommend />)
		expect(wrapper).toMatchSnapshot()
	})

	it('should display a list of 2 images if 2 recommendations are passed in', () => {
		const data = [
			{ img: 'test1.png', name: 'test 1'},
			{ img: 'test2.png', name: 'test 2'},
		]

		const wrapper = shallow(<Recommend list={data} />)
		expect(wrapper.find('.recommend__friends').children()).toHaveLength(2)
	})

	it('should exclude an image from the recommended friends list if no image is available', () => {
		const data = [
			{ img: 'test1.png', name: 'test 1'},
			{ img: 'test2.png', name: 'test 2'},
			{ img: '', name: 'test 3'}
		]

		const wrapper = shallow(<Recommend list={data} />)
		expect(wrapper.find('.recommend__friends').children()).toHaveLength(2)
	})
})