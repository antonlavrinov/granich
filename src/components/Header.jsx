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
  width: 5vw;
  height: 3.6vw;
  margin-left: 0.8vw;
  img {
    display: block;
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2.8vw 0;
`

const NavLinks = styled.nav`
  color: white;
  margin-left: 3.5vw;
  margin-top: -1vw;
  ul {
    display: flex;
  }
`

const NavLink = styled.a`
  position: relative;
  color: white;
  font-size: 1.15vw;
  text-transform: uppercase;
  font-weight: 700;
  margin-right: 3vw;
  padding-bottom: 0.2vw;
  :hover {
    font-size: 1.15vw;
    font-weight: 700;
    color: white;
    cursor: pointer;
    border-bottom: solid 0.2vw white;

  }

`
const ArrowLink = styled.img`
  position: absolute;
  top: -0.7vw;
  right: -1.3vw;
  width: 1.2vw;

`

const LoginButton = styled.button`
  color: white;
  background: var(--granich-red);
  margin-left: auto;
  padding: 0.3vw 1vw;
  // width: 300px;
  border-radius: 100vw;
  font-size: 1.1vw;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.2s ease;
  margin-right: 0.8vw;
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
