import React from 'react'
import { shallow } from 'enzyme'
import NavigationLinks from '../NavigationLinks'

describe('<NavigationLinks />', () => {
  it('should render six <NavigationLinks/> elements if not authenificated', () => {
    const wrapper = shallow(<NavigationLinks />)
    // expect(wrapper)
  })
})
