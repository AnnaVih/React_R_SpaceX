import React from 'react'
import styled from 'styled-components'

import Aux from '../Aux/Aux'
import Navigation from '../../containers/Navigation'
import Header from '../../components/Layout/Header/Header'
import Footer from '../../components/Layout/Footer/Footer'

const MainContent = styled.div`
  margin: 0 auto;
  max-width: 990px;
`
const Layout = props => (
  <Aux>
    <Navigation />
    <Header />
    <MainContent>
      <main>{props.children}</main>
    </MainContent>
    <Footer />
  </Aux>
)

export default Layout
