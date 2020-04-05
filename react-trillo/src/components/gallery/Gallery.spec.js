import React from 'react'
import { shallow } from 'enzyme'
import Gallery from './Gallery'

describe('Gallery Component', () => {

	const minProps = {
		images: []
	}

	it('should match the snapshot', () => {
		const wrapper = shallow(<Gallery {...minProps} />)
		expect(wrapper).toMatchSnapshot()
	})

	it('should have 3 images in the gallery', () => {
		const images = [
			{ img: '1.jpg', description: '1', caption: '1' },
			{ img: '2.jpg', description: '2', caption: '2' },
			{ img: '3.jpg', description: '3', caption: '3' },
		]
		const wrapper = shallow(<Gallery {...minProps} images={images} />)
		expect(wrapper.find('.gallery').children()).toHaveLength(3)
	})

	it('should return null if no images are passed', () => {
		const images = []
		const wrapper = shallow(<Gallery {...minProps} images={images} />)
		expect(wrapper.find('.gallery').children()).toHaveLength(0)
	})
})