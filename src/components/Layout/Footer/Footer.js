import React from 'react'
import { NavLink } from 'react-router-dom'
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
  max-width: 1280px;
  min-width: 360px;
  color: white;
  display: flex;
  justify-content: space-between;
`

const ContentDivs = styled.div`
  display: flex;
  justify-content: space-between;
`

const Footer = () => (
  <FooterWrapper>
    <SubFooter footerPadding={40} footerBg="#181c1f">
      <FooterContent>In development...</FooterContent>
    </SubFooter>
    <SubFooter footerPadding={20} footerBg="#0e1112">
      <FooterContent>
        <ContentDivs width={25}>
          <p>Follow SpaceX |</p>
          <NavLink to="https://twitter.com/spacex">Twitter |</NavLink>
          <NavLink to="https://www.youtube.com/spacex">YouTube |</NavLink>
          <NavLink to="https://www.flickr.com/photos/spacex">Flickr |</NavLink>
          <NavLink to="https://www.instagram.com/spacex">Instagram</NavLink>
        </ContentDivs>
        <ContentDivs width={75}>
          <p>
            Copyright &copy; {new Date().getFullYear()} Developed by Anna Vihrogonova. It is a result of hard work,
            passion and learning from failure.
          </p>
        </ContentDivs>
      </FooterContent>
    </SubFooter>
  </FooterWrapper>
)

export default Footer
