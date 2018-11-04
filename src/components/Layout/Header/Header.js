import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import SpaceXBgImage from '../../../assets/images/missions-header.jpg'

import HeadLine from '../../../common/HeadLine/HeadLine'
import Button from '../../../common/Button/Button'

const HeaderWrapper = styled.header`
  background-image: url(${SpaceXBgImage});
  background-size: cover;
  background-position: 100%;
  text-align: center;
  padding-bottom: 20%;
  height: 70vh;
  @media (min-width: 767px) {
    height: 77vh;
  }
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  max-width: 990px;
  min-width: 360px;
  height: 300px;
`

const HomeHeader = () => (
  <HeaderWrapper>
    <HeaderContent>
      <HeadLine>
        Our launch manifest is populated by a diverse customer base, including space station resupply missions,
        commercial satellite launch missions, and US government science and national security missions.
      </HeadLine>
    </HeaderContent>
    <Link to="/info">
      <Button color="white" bgColor="#181c1f">
        READ MORE
      </Button>
    </Link>
  </HeaderWrapper>
)

export default HomeHeader
