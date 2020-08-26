import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import {Container} from './style';
import Logo from '../assets/svgs/granich-logo.svg';
import ArrowDown from '../assets/svgs/header-arrow-icon-down.svg';
import ArrowOut from '../assets/svgs/header-arrow-icon-out.svg';
import ArrowBack from '../assets/svgs/header-arrow-back.svg';
import LoginButtonIcon from '../assets/svgs/login-button-icon.svg';
import scrollTo from 'gatsby-plugin-smoothscroll';

const WhiteLogo = styled(props => <Logo {...props}/>)`
  width: 4.8vw;
  svg {
    fill: white;
  }
  @media only screen and (max-width: 575px) {
    width: 12.5vw;

  }
`

const HeaderSection = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;

`

const LogoWrapper = styled(props => <Link {...props} />)`
  display: flex;
  align-items: center;
  fill: white;
  height: auto;
  ${(props) => props.propstyle && `
    fill: var(--granich-black);
    
    `}
    
  @media only screen and (max-width: 575px) {
    display: none;
  }
  `

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 3.2vw 0;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 7.5vw 6.5vw;
  }
`

const NavLinks = styled.nav`
  color: white;
  margin-left: 3.15vw;
  // margin-top: -1vw;
  ul {
    display: flex;
  }
  @media only screen and (max-width: 575px) {
    margin-left: 0vw;
    margin-top: 0vw;
    ul {
      li {
        margin-right: 11vw;
        :last-child {
          margin-right: 0;
        }
      }
    }
  }
`

const NavLink = styled(props => <Link {...props} />)`
  position: relative;
  color: white;
  font-size: 1.15vw;
  text-transform: uppercase;
  font-weight: 700;
  margin-right: 3.2vw;
  padding-bottom: 0.4vw;
  :hover {
    font-size: 1.15vw;
    font-weight: 700;
    color: white;
    cursor: pointer;
    border-bottom: solid 0.15vw white;

  }
  ${(props) => props.propstyle && `
  color: var(--granich-black);
  :hover {
    font-size: 1.15vw;
    font-weight: 700;
    color: var(--granich-black);
    cursor: pointer;
    border-bottom: solid 0.15vw var(--granich-black);
  }
  `}
  @media only screen and (max-width: 575px) {
    font-size: 4vw;
    margin-right: 3.2vw;
    padding-bottom: 0.4vw;
    :hover {
      font-size: 1.15vw;
      border-bottom: solid 0.15vw white;
    }
    ${(props) => props.propstyle && `
    :hover {
      font-size: 1.2vw;
      border-bottom: solid 0.15vw var(--granich-black);
    }
    `}
  }

`
const NavLinkExternal = styled.a`
  position: relative;
  color: white;
  font-size: 1.2vw;
  text-transform: uppercase;
  font-weight: 700;
  // font-weight: 400;
  margin-right: 3.2vw;
  padding-bottom: 0.4vw;
  :hover {
    font-size: 1.2vw;
    font-weight: 700;
    // font-weight: 400;
    color: white;
    cursor: pointer;
    border-bottom: solid 0.15vw white;

  }
  ${(props) => props.propstyle && `
  color: var(--granich-black);
  :hover {
    font-size: 1.2vw;
    font-weight: 700;
    color: var(--granich-black);
    cursor: pointer;
    border-bottom: solid 0.15vw var(--granich-black);
  }
  `}
  @media only screen and (max-width: 575px) {
    font-size: 3.8vw;
    margin-right: 0vw;
    padding-bottom: 0vw;
    :hover {
      font-size: 3.8vw;
      border-bottom: solid 0.5vw white;
  
    }
    ${(props) => props.propstyle && `
    :hover {
      font-size: 3.8vw;
      border-bottom: solid 0.5vw var(--granich-black);
    }
    `}
  }
`

const ArrowLinkDown = styled(props => <ArrowDown {...props}/>)`
  position: absolute;
  top: -0.5vw;
  right: -1.4vw;
  width: 1vw;
  height: 1vw;
  @media only screen and (max-width: 575px) {
    top: -1.6vw;
    right: -3.7vw;
    width: 3.1vw;
    height: 3.1vw;
  }


`

const ArrowLinkOut = styled(props => <ArrowOut {...props}/>)`
  position: absolute;
  top: -0.5vw;
  right: -1.4vw;
  width: 1vw;
  height: 1vw;
  @media only screen and (max-width: 575px) {
    top: -1.6vw;
    right: -3.7vw;
    width: 3.1vw;
    height: 3.1vw;
  }


`
const ArrowLinkBack = styled(props => <ArrowBack {...props}/>)`
  position: absolute;
  top: -0.5vw;
  right: -1.4vw;
  width: 1vw;
  height: 1vw;
  @media only screen and (max-width: 575px) {
    top: -1.6vw;
    right: -3.7vw;
    width: 3.1vw;
    height: 3.1vw;
  }


`

const LoginButton = styled.a`
  display: flex;
  align-items: center;
  color: white;
  background: var(--granich-red-gradient);
  // margin-top: -1.6vw;
  margin-left: auto;
  padding: 0.6vw 1.1vw;
  letter-spacing: 0.05vw;
  border-radius: 0.5vw;
  font-size: 1.15vw;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.2s ease;
  user-select: none;
  box-shadow: .25vw .25vw .4vw rgba(0,0,0,0.25);
  svg {
    width: 1.1vw;
    margin-right: 0.35vw;
  }
  :hover {
    transform: scale(1.1);
    cursor: pointer;
    color: white;
    font-size: 1.15vw;
    font-weight: 600;
  }
  @media only screen and (max-width: 575px) {
    display: none;
  }
`
const LogoMobileWrapper = styled(props => <Link {...props} />)`
  display: none;
  @media only screen and (max-width: 575px) {
    display: flex;
    align-items: center;
    fill: white;
    height: auto;
    ${(props) => props.propstyle && `
      fill: var(--granich-black);
      
      `}
    }
  `
  

const LogoAndLoginButtonWrapper = styled.div`
  display: none;
  @media only screen and (max-width: 575px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10vw;
  }
`

const LoginMobileButton = styled.a`
  display: none;
    @media only screen and (max-width: 575px) {
      box-shadow: 0.7vw 0.7vw 1.5vw rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      color: white;
      background: var(--granich-red-gradient);
      padding: 0.5vw 4.8vw 0.5vw 3.8vw;
      letter-spacing: 0.05vw;
      border-radius: 1.5vw;
      font-size: 3.5vw;
      text-transform: uppercase;
      font-weight: 600;
      transition: all 0.2s ease;
      user-select: none;
      svg {
        width: 3.3vw;
        margin-right: 1vw;
      }
      :hover {
        transform: scale(1.1);
        cursor: pointer;
        color: white;
        font-size: 3.5vw;
        font-weight: 600;
      }
    }
`


const Header = ({ siteTitle, type }) => (
  <HeaderSection id="header">
      <Container>
        <HeaderWrapper>

          <LogoWrapper to="/" propstyle={type}>
            <WhiteLogo  />
          </LogoWrapper>
          <LogoAndLoginButtonWrapper>
            <LogoMobileWrapper to="/" propstyle={type}>
              <WhiteLogo  />
            </LogoMobileWrapper>
            <LoginMobileButton href="https://granich.ru/cms/system/login" target="_blank">
              <LoginButtonIcon/>Войти
            </LoginMobileButton>
          </LogoAndLoginButtonWrapper>
          <NavLinks >
            <ul >
              <li>
                {type === 'dark' ? (
                    <NavLink to="/#courses" propstyle={type}>
                      Курсы
                      {type === 'dark' ? <ArrowLinkBack/> : <ArrowLinkDown/>}
                    </NavLink>
                  ) : (
                    <NavLinkExternal onClick={() => scrollTo('#courses')} propstyle={type}>
                      Курсы
                      {type === 'dark' ? <ArrowLinkBack/> : <ArrowLinkDown/>}
                    </NavLinkExternal>
                )}
              </li>  
              <li>
                {type === 'dark' ? (
                  <NavLink to="/#preparation" propstyle={type}>
                    Подготовка
                    {type === 'dark' ? <ArrowLinkBack/> : <ArrowLinkDown/>}
                  </NavLink>
                ) : (
                  <NavLinkExternal onClick={() => scrollTo('#preparation')} propstyle={type}>
                    Подготовка
                    {type === 'dark' ? <ArrowLinkBack/> : <ArrowLinkDown/>}
                  </NavLinkExternal>
                )}

              </li>  
              <li>
                <NavLinkExternal href="https://granich.ru/cms/system/login" target="_blank" propstyle={type}>
                  Блог
                  <ArrowLinkOut/>
                </NavLinkExternal>
              </li>  

            </ul>
          </NavLinks>
          <LoginButton href="https://granich.ru/cms/system/login" target="_blank">
            <LoginButtonIcon/>Войти
          </LoginButton>

        </HeaderWrapper>
      </Container>
  </HeaderSection>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
