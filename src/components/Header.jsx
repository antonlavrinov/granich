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
import LoginButtonIcon from '../assets/svgs/login-button-icon.svg';

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
  width: 65px;
  // height: 50px;
  margin-left: 1px;
  fill: white;
  svg {
    // width: 100%;
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 42px 0;
`

const NavLinks = styled.nav`
  color: white;
  margin-left: 46px;
  margin-top: -12px;
  ul {
    display: flex;
  }
`

const NavLink = styled.a`
  position: relative;
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  margin-right: 42px;
  padding-bottom: 5px;
  :hover {
    font-size: 16px;
    font-weight: 700;
    color: white;
    cursor: pointer;
    border-bottom: solid 2px white;

  }

`
const ArrowLinkDown = styled(props => <ArrowDown {...props}/>)`
  position: absolute;
  top: -8px;
  right: -17px;
  // width: 14px;

`

const ArrowLinkOut = styled(props => <ArrowOut {...props}/>)`
  position: absolute;
  top: -8px;
  right: -17px;
  // width: 14px;

`

const LoginButton = styled.a`
  display: flex;
  align-items: center;
  color: white;
  background: var(--granich-red);
  margin-top: -10px;
  margin-left: auto;
  padding: 8px 16px;
  letter-spacing: 0.02em;
  border-radius: 100px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.2s ease;
  user-select: none;
  svg {
    width: 14px;
    margin-right: 5px;
  }
  :hover {
    transform: scale(1.1);
    cursor: pointer;
    color: white;
    font-size: 15px;
    font-weight: 600;
  }
`



const Header = ({ siteTitle }) => (
  <HeaderSection>
      <Container>
        <HeaderWrapper>

          <LogoWrapper to="/">
            <WhiteLogo/>
          </LogoWrapper>
          <NavLinks>
            <ul>
              <li>
                <NavLink>
                  Курсы
                  <ArrowLinkDown/>
                </NavLink>
              </li>  
              <li>
                <NavLink>
                  Подготовка
                  <ArrowLinkDown/>
                </NavLink>
              </li>  
              <li>
                <NavLink>
                  Блог
                  <ArrowLinkOut/>
                </NavLink>
              </li>  

            </ul>
          </NavLinks>
          <LoginButton>
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
