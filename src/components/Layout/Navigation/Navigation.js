import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import BrandLogo from './BrandLogo'
import NavigationLinks from './NavigationLinks'

const NavigationContainer = styled.div`
  background-color: #181c1f;
  padding-top: 20px;
  @media (min-width: 767px) {
    padding: 20px 20px;
  }
`

const NavigationWrapper = styled.div`
  margin: 0 auto;
  max-width: 990px;
  min-width: 360px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`

const NavigationMobileIcon = styled.div`
  width: 10%;
  padding-bottom: 5%;
  @media (min-width: 767px) {
    display: none;
  }
`

const Navigation = ({ auth, onLogout }) => (
  <NavigationContainer>
    <NavigationWrapper>
      <BrandLogo />
      <NavigationMobileIcon>
        <FontAwesomeIcon icon="bars" size="lg" color="white" />
      </NavigationMobileIcon>
      <NavigationLinks authenticated={auth} onLogoutClick={onLogout} />
    </NavigationWrapper>
  </NavigationContainer>
)

Navigation.propTypes = {
  auth: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired
}

export default Navigation
