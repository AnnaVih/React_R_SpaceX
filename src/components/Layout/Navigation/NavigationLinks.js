import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Aux from '../../../hoc/Aux/Aux'

const NavigationLinksWrapper = styled.div`
  display: none;
  width: 100%;
  background: lightgray;
  z-index: 1;
  @media (min-width: 767px) {
    width: ${props => props.navWidth}%;
    background: none;
    display: flex;
    flex-wrap: wrap;
  }
`

const SubNavigationLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 100%;
  @media (min-width: 767px) {
    width: ${props => props.navWidth}%;
  }
`

const NavigationItem = styled.div`
  width: 100%;
  color: ${props => props.navColor};
  background-color: light-grey;
  padding: 3% 5%;
  border-top: 1px solid darkgrey;
  @media (min-width: 767px) {
    padding: 0 5px;
    width: auto;
    border: none;
  }
`
const NavigationLinks = ({ authenticated, onLogoutClick }) => {
  const authLinks = (
    <Aux>
      <NavigationItem>
        <NavLink to="/logout" onClick={onLogoutClick}>
          Log out
        </NavLink>
      </NavigationItem>
    </Aux>
  )

  const guestLinks = (
    <Aux>
      <NavigationItem>
        <NavLink to="/login">Login</NavLink>
      </NavigationItem>
      <NavigationItem>
        <NavLink to="/register">Sign Up</NavLink>
      </NavigationItem>
    </Aux>
  )

  return (
    <Aux>
      <NavigationLinksWrapper navWidth={70}>
        <SubNavigationLinks navWidth={75}>
          <NavigationItem>
            <NavLink to="/info">ABOUT SPACEX</NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink to="/rockets">ROCKETS</NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink to="/launches">LAUNCHES</NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink to="/blog">BLOG</NavLink>
          </NavigationItem>
        </SubNavigationLinks>
        <SubNavigationLinks navWidth={25}>{authenticated ? authLinks : guestLinks}</SubNavigationLinks>
      </NavigationLinksWrapper>
    </Aux>
  )
}

NavigationLinks.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  onLogoutClick: PropTypes.func.isRequired
}

export default NavigationLinks
