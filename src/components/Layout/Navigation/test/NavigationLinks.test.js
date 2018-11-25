import React from 'react'
import { shallow } from 'enzyme'
import { NavLink } from 'react-router-dom'
import NavigationLinks from '../NavigationLinks'

describe('<NavigationLinks />', () => {
  const clickHandler = jest.fn()
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<NavigationLinks authenticated={false} onLogoutClick={clickHandler} />)
  })
  it('should render six <NavigationLinks/> elements if not authenificated', () => {
    expect(wrapper.find(NavLink)).toHaveLength(6)
  })
  it('should render 5 <NavigationLinks/> elements if authenificated', () => {
    wrapper.setProps({ authenticated: true, onLogoutClick: clickHandler })
    expect(wrapper.find(NavLink)).toHaveLength(5)
  })
  it('should an exact logout link', () => {
    wrapper.setProps({ authenticated: true })
    expect(
      wrapper.contains(
        <NavLink to="logout" onLogoutClick={clickHandler}>
          Log out
        </NavLink>
      )
    )
  })
})
