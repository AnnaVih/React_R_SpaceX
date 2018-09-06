import React from 'react'
import { Link } from 'react-router-dom'
import Aux from '../../../hoc/Aux/Aux'

import SpaceXLogo from '../../../assets/images/spaceX_logo.png'
// Components

const BrandLogo = () => (
  <Aux>
    <Link to="/">
      <img src={SpaceXLogo} alt="spaceX logo" />
    </Link>
  </Aux>
)

export default BrandLogo
