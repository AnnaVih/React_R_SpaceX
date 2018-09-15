import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import SpaceXLogo from '../../../assets/images/spaceX_logo.png'

const BrandLogoWrapper = styled.div`
  width: 80%;
  padding: 0 0 5% 5%;
  @media (min-width: 767px) {
    width: 30%;
    padding: 0;
  }
`
// Components
const BrandLogo = () => (
  <BrandLogoWrapper>
    <Link to="/">
      <img src={SpaceXLogo} alt="spaceX logo" />
    </Link>
  </BrandLogoWrapper>
)

export default BrandLogo
