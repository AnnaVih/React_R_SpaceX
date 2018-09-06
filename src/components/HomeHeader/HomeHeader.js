import React from 'react'
import { createComponent } from 'react-fela'

import SpaceXBgImage from '../../assets/images/spaceX_homeBg.jpg'

const HomeHeaderWrapper = createComponent(
  () => ({
    height: '80vh',
    backgroundImage: `url(${SpaceXBgImage})`
  }),
  'header'
)

const HomeHeader = () => (
  <HomeHeaderWrapper>
    <h1>Hello</h1>
  </HomeHeaderWrapper>
)

export default HomeHeader
