import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import {Container} from './style';
import logo from '../assets/images/logo-white.png';
import arrow from '../assets/images/arrow.png';


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
  height: 50px;
  margin-left: 1px;
  img {
    display: block;
    max-width: 100%;
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
  margin-top: -16px;
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
  :hover {
    font-size: 16px;
    font-weight: 700;
    color: white;
    cursor: pointer;
    border-bottom: solid 2px white;

  }

`
const ArrowLink = styled.img`
  position: absolute;
  top: -8px;
  right: -17px;
  width: 14px;

`

const LoginButton = styled.button`
  color: white;
  background: var(--granich-red);
  margin-left: auto;
  padding: 1px 2px;
  border-radius: 100px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.2s ease;
  margin-right: 0px;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`



const Header = ({ siteTitle }) => (
  <HeaderSection>
      <Container>
        <HeaderWrapper>
          <LogoWrapper to="/">
            <img src={logo} alt="logo"/>
          </LogoWrapper>
          <NavLinks>
            <ul>
              <li>
                <NavLink>
                  Курсы
                  <ArrowLink src={arrow} alt="arrow-link"/>
                </NavLink>
              </li>  
              <li>
                <NavLink>
                  Подготовка
                  <ArrowLink src={arrow} alt="arrow-link"/>
                </NavLink>
              </li>  
              <li>
                <NavLink>
                  Блог
                  <ArrowLink src={arrow} alt="arrow-link"/>
                </NavLink>
              </li>  

            </ul>
          </NavLinks>
          <LoginButton>Войти</LoginButton>

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
