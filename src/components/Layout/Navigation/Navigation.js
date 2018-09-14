import React from 'react'
import styled from 'styled-components'

import BrandLogo from './BrandLogo'
import NavigationLinks from './NavigationLinks'

const NavigationWrapper = styled.div`
  background-color: #181c1f;
`

const Navigation = () => (
  <NavigationWrapper>
    <BrandLogo />
    <NavigationLinks />
  </NavigationWrapper>
)

export default Navigation
