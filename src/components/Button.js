import React from 'react'

import styled from 'styled-components'

const SimpleButton = styled.button`
  color: ${props => props.color};
  border: 1px solid white;
  padding: 15px 25px;
  background-color: ${props => props.bgColor};
  border-radius: 10px;
  transition: all 0.3s ease 0s;
  &:hover {
    border: 7px solid #dfa404;
  }
`

const Button = ({ color, bgColor, children }) => (
  <SimpleButton color={color} bgColor={bgColor}>
    {children}
  </SimpleButton>
)

export default Button
