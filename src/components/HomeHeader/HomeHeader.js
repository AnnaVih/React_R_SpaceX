import React from 'react'
import styled from 'styled-components'

import SpaceXBgImage from '../../assets/images/spaceX_homeBg.jpg'

const HomeHeaderWrapper = styled.header`
  height: 80vh;
  background-image: url(${SpaceXBgImage});
`

const HomeHeader = () => (
  <HomeHeaderWrapper>
    <h1>Hello</h1>
  </HomeHeaderWrapper>
)

export default HomeHeader
