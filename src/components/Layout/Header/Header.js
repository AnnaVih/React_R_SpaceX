import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import SpaceXBgImage from '../../../assets/images/missions-header.jpg'

import HeadLine from '../../../common/HeadLine/HeadLine'
import Button from '../../../common/Button/Button'

const HeaderWrapper = styled.header`
  background: linear-gradient(to right bottom, rgba(33, 31, 33, 0.5), rgba(33, 31, 33, 0.3)), url(${SpaceXBgImage});
  background-size: cover;
  background-position: center;
  text-align: center;
  padding-bottom: 20%;
  height: 70vh;
  @media (min-width: 767px) {
    height: 77vh;
  }
`

const HeaderContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const HomeHeader = () => (
  <HeaderWrapper>
    <HeaderContent>
      <HeadLine>
        Our launch manifest is populated by a diverse customer base, including space station resupply missions,
        commercial satellite launch missions, and US government science and national security missions.
      </HeadLine>
      <Link to="/info">
        <Button color="white" bgColor="#181c1f">
          READ MORE
        </Button>
      </Link>
    </HeaderContent>
  </HeaderWrapper>
)

export default HomeHeader
