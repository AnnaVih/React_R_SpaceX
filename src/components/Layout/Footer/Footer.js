import React from 'react'
import { createComponent } from 'react-fela'

const FooterWrapper = createComponent(
  () => ({
    height: '170px'
  }),
  'div'
)

const FooterTop = createComponent(
  () => ({
    padding: '40px',
    backgroundColor: '#181c1f'
  }),
  'div'
)

const FooterBottom = createComponent(
  () => ({
    backgroundColor: '#0e1112',
    padding: '22px',
    color: '#666'
  }),
  'div'
)

const Footer = () => (
  <FooterWrapper className="pt-hf">
    <FooterTop>Footer Top</FooterTop>
    <FooterBottom>Footer Bottom</FooterBottom>
  </FooterWrapper>
)

export default Footer
