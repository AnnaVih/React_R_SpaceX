import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  height: 140px;
`

const SubFooter = styled.div`
  padding: ${props => props.footerPadding}px;
  background-color: ${props => props.footerBg};
`

const FooterContent = styled.div`
  margin: 0 auto;
  max-width: 990px;
  min-width: 360px;
  color: white;
`

const Footer = () => (
  <FooterWrapper>
    <SubFooter footerPadding={40} footerBg="#181c1f">
      <FooterContent>Footer Top</FooterContent>
    </SubFooter>
    <SubFooter footerPadding={22} footerBg="#0e1112">
      <FooterContent>Footer Bottom</FooterContent>
    </SubFooter>
  </FooterWrapper>
)

export default Footer
