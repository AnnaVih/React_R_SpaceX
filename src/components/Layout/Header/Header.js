import React from 'react'
import styled from 'styled-components'

import SpaceXBgImage from '../../../assets/images/spacex_about_company.jpg'

const HeaderWrapper = styled.header`
  height: 30vh;
  background-image: url(${SpaceXBgImage});
  background-size: cover;
  background-position: 100%;
  @media (min-width: 767px) {
    height: 60vh;
  }
`

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 990px;
  min-width: 360px;
`

const HomeHeader = () => (
  <HeaderWrapper>
    <HeaderContent>
      <h1>Hello</h1>
    </HeaderContent>
  </HeaderWrapper>
)

export default HomeHeader
