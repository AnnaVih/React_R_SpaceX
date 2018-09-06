import React from 'react'
import { createComponent } from 'react-fela'

import BrandLogo from './BrandLogo'
import NavigationLinks from './NavigationLinks'

const NavigationWrapper = createComponent(
  () => ({
    backgroundColor: '#181c1f'
  }),
  'div'
)

const Navigation = () => (
  <NavigationWrapper>
    <BrandLogo />
    <NavigationLinks />
  </NavigationWrapper>
)

export default Navigation
