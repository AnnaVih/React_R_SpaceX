import React from 'react'
import styled from 'styled-components'

import Aux from '../Aux/Aux'

const MainContent = styled.div`
  margin: 0 auto;
  max-width: 990px;
`
const Layout = props => (
  <Aux>
    <MainContent>
      <main>{props.children}</main>
    </MainContent>
  </Aux>
)

export default Layout
