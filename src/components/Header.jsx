import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import {Container} from './style';
import logo from '../assets/images/logo-white.png';
import arrow from '../assets/images/arrow.png';
import WhiteLogo from '../assets/svgs/granich-logo.svg';
import ArrowDown from '../assets/svgs/header-arrow-icon-down.svg';
import ArrowOut from '../assets/svgs/header-arrow-icon-out.svg';
import ArrowBack from '../assets/svgs/header-arrow-back.svg';
import LoginButtonIcon from '../assets/svgs/login-button-icon.svg';
import scrollTo from 'gatsby-plugin-smoothscroll';



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
  ${(props) => props.propstyle && `
    fill: var(--granich-black);
    
    `}
  `

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 3.2vw 0;
`

const NavLinks = styled.nav`
  color: white;
  margin-left: 3.15vw;
  margin-top: -1vw;
  ul {
    display: flex;
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
    font-size: 1.2vw;
    font-weight: 700;
    color: var(--granich-black);
    cursor: pointer;
    border-bottom: solid 0.15vw var(--granich-black);
  }
`}

`
const NavLinkExternal = styled.a`
  position: relative;
  color: white;
  font-size: 1.2vw;
  text-transform: uppercase;
  font-weight: 700;
  margin-right: 3.2vw;
  padding-bottom: 0.4vw;
  :hover {
    font-size: 1.2vw;
    font-weight: 700;
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
`

const ArrowLinkDown = styled(props => <ArrowDown {...props}/>)`
  position: absolute;
  top: -0.5vw;
  right: -1.4vw;


`

const ArrowLinkOut = styled(props => <ArrowOut {...props}/>)`
  position: absolute;
  top: -0.5vw;
  right: -1.4vw;


`
const ArrowLinkBack = styled(props => <ArrowBack {...props}/>)`
  position: absolute;
  top: -0.5vw;
  right: -1.4vw;


`

const LoginButton = styled.a`
  display: flex;
  align-items: center;
  color: white;
  background: var(--granich-red-gradient);
  margin-top: -1.6vw;
  margin-left: auto;
  padding: 0.6vw 1.1vw;
  letter-spacing: 0.05vw;
  border-radius: 0.5vw;
  font-size: 1.15vw;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.2s ease;
  user-select: none;
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
`



const Header = ({ siteTitle, style }) => (
  <HeaderSection id="header">
      <Container>
        <HeaderWrapper>

          <LogoWrapper to="/" propstyle={style}>
            <WhiteLogo  />
          </LogoWrapper>
          <NavLinks >
            <ul >
              <li>
                {style === 'dark' ? (
                    <NavLink to="/#courses" propstyle={style}>
                      Курсы
                      {style === 'dark' ? <ArrowLinkBack/> : <ArrowLinkDown/>}
                    </NavLink>
                  ) : (
                    <NavLinkExternal onClick={() => scrollTo('#courses')} propstyle={style}>
                      Курсы
                      {style === 'dark' ? <ArrowLinkBack/> : <ArrowLinkDown/>}
                    </NavLinkExternal>
                )}
              </li>  
              <li>
                {style === 'dark' ? (
                  <NavLink to="/#preparation" propstyle={style}>
                    Подготовка
                    {style === 'dark' ? <ArrowLinkBack/> : <ArrowLinkDown/>}
                  </NavLink>
                ) : (
                  <NavLinkExternal onClick={() => scrollTo('#preparation')} propstyle={style}>
                    Подготовка
                    {style === 'dark' ? <ArrowLinkBack/> : <ArrowLinkDown/>}
                  </NavLinkExternal>
                )}

              </li>  
              <li>
                <NavLinkExternal href="https://granich.ru/cms/system/login" target="_blank" propstyle={style}>
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
