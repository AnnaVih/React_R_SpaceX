import React from 'react'
import styled from 'styled-components'

import Aux from '../Aux/Aux'
import Navigation from '../../components/Layout/Navigation/Navigation'
import Footer from '../../components/Layout/Footer/Footer'

const MainContent = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 360px;
`
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
