import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  height: 170px;
`

const FooterTop = styled.div`
  padding: 40px;
  background-color: #181c1f;
`

const FooterBottom = styled.div`
  background-color: #0e1112;
  padding: 22px;
  color: #666;
`

const Footer = () => (
  <FooterWrapper className="pt-hf">
    <FooterTop>Footer Top</FooterTop>
    <FooterBottom>Footer Bottom</FooterBottom>
  </FooterWrapper>
)

export default Footer
