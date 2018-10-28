import React from 'react'
import styled from 'styled-components'

const HeaderHeading = styled.h1`
  color: white;
  line-height: 1.5;
  width: 100%;
  padding: 2rem;
  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`
const HeadLine = props => <HeaderHeading>{props.children}</HeaderHeading>

export default HeadLine
