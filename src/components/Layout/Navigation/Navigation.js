import React from 'react'
import { createComponent } from 'react-fela'

import BrandLogo from './BrandLogo'
import NavigationLinks from './NavigationLinks'

const NavigationStyle = createComponent(
  () => ({
    backgroundColor: '#181c1f'
  }),
  'nav'
)

const Navigation = () => (
  <NavigationStyle>
    <BrandLogo />
    <NavigationLinks />
  </NavigationStyle>
)

export default Navigation
