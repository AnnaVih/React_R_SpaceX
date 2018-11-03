import React from 'react'
import PropTypes from 'prop-types'
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
const HeadLine = ({ children }) => <HeaderHeading>{children}</HeaderHeading>

HeadLine.propTypes = {
  children: PropTypes.string.isRequired
}

export default HeadLine
