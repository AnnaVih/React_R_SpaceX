import React from 'react'
import { Link } from 'react-router-dom'

import Aux from '../../../hoc/Aux/Aux'

const NavigationLinks = () => (
  <Aux>
    <Link to="/info">ABOUT SPACEX</Link>
    <Link to="/rockets">ROCKETS</Link>
    <Link to="/launches">LAUNCHES</Link>
    <Link to="/login">LOGIN</Link>
  </Aux>
)

export default NavigationLinks
