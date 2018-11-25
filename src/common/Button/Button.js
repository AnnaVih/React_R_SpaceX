import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SimpleButton = styled.button`
  color: ${props => props.color};
  border: 1px solid white;
  padding: 15px 25px;
  background-color: ${props => props.bgColor};
  border-radius: 10px;
  transition: all 0.3s ease 0s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(255, 255, 255, 0.2);
  }
`

const Button = ({ color, bgColor, children }) => (
  <SimpleButton color={color} bgColor={bgColor}>
    {children}
  </SimpleButton>
)

Button.propTypes = {
  color: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired
}

export default Button
