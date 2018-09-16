import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Aux from '../../../hoc/Aux/Aux'

const NavigationLinksWrapper = styled.div`
  width: 100%;
  background: lightgray;
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

class NavigationLinks extends Component {
  onLogoutClick = e => {
    e.preventDefault()
    this.props.logoutUser()
  }

  render() {
    // const { isAuthenticated } = this.props.auth
    const isAuthenticated = false

    const authLinks = (
      <Aux>
        <NavigationItem>
          <Link to="/blogs">Blog</Link>
        </NavigationItem>
        <NavigationItem>
          <a onClick={this.onLogoutClick} href="#">
            Log out
          </a>
        </NavigationItem>
      </Aux>
    )

    const guestLinks = (
      <Aux>
        <NavigationItem>
          <Link to="/login">Login</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/register">Sign Up</Link>
        </NavigationItem>
      </Aux>
    )

    return (
      <Aux>
        <NavigationLinksWrapper navWidth={70}>
          <SubNavigationLinks navWidth={75}>
            <NavigationItem>
              <Link to="/info">ABOUT SPACEX</Link>{' '}
            </NavigationItem>
            <NavigationItem>
              <Link to="/rockets">ROCKETS</Link>{' '}
            </NavigationItem>
            <NavigationItem>
              <Link to="/launches">LAUNCHES</Link>{' '}
            </NavigationItem>
          </SubNavigationLinks>
          <SubNavigationLinks navWidth={25}>{isAuthenticated ? authLinks : guestLinks}</SubNavigationLinks>
        </NavigationLinksWrapper>
      </Aux>
    )
  }
}

export default NavigationLinks
