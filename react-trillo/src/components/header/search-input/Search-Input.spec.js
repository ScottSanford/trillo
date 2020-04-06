import React from 'react'
import { shallow } from 'enzyme'
import SearchInput from './Search-Input'

describe('SearchInput Component', () => {

	it('should match snapshot', () => {
		const wrapper = shallow(<SearchInput />)
		expect(wrapper).toMatchSnapshot()
	})
})