import React from 'react'
import { createComponent } from 'react-fela'

import Aux from '../Aux/Aux'
import Navigation from '../../components/Layout/Navigation/Navigation'
import Footer from '../../components/Layout/Footer/Footer'

const MainContent = createComponent(() => ({
  margin: '0 auto',
  maxWidth: '1200px',
  minWidth: '360px'
}))

const Layout = props => (
  <Aux>
    <Navigation />
    <MainContent>
      <main>{props.children}</main>
    </MainContent>
    <Footer />
  </Aux>
)

export default Layout
