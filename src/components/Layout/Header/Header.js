import React from 'react'
import styled from 'styled-components'

import SpaceXBgImage from '../../../assets/images/missions-header.jpg'

const HeaderWrapper = styled.header`
  height: 30vh;
  background-image: url(${SpaceXBgImage});
  background-size: cover;
  background-position: 100%;
  @media (min-width: 767px) {
    height: 73vh;
  }
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  max-width: 990px;
  min-width: 360px;
  height: 500px;
`

const HeaderHeading = styled.h1`
  color: white;
  line-height: 1.5;
`

const HomeHeader = () => (
  <HeaderWrapper>
    <HeaderContent>
      <HeaderHeading>
        Our launch manifest is populated by a diverse customer base, including space station resupply missions,
        commercial satellite launch missions, and US government science and national security missions.
      </HeaderHeading>
    </HeaderContent>
  </HeaderWrapper>
)

export default HomeHeader
