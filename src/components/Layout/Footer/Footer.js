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

const FooterContent = styled.div`
  margin: 0 auto;
  max-width: 990px;
  min-width: 360px;
`

const Footer = () => (
  <FooterWrapper>
    <FooterTop>
      <FooterContent>Footer Top</FooterContent>
    </FooterTop>
    <FooterBottom>
      <FooterContent>Footer Bottom</FooterContent>
    </FooterBottom>
  </FooterWrapper>
)

export default Footer
