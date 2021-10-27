import React from "react"
import styled from "styled-components"
import Logo from "../../../assets/svgs/granich-logo.svg"
import ArrowDown from "../../../assets/svgs/header-arrow-icon-down.svg"
import ArrowOut from "../../../assets/svgs/header-arrow-icon-out.svg"
import ArrowBack from "../../../assets/svgs/header-arrow-back.svg"

import Link from "gatsby-link"

interface ITheme {
  theme: "dark" | "light"
}

export const WhiteLogo = styled(props => <Logo {...props} />)`
  width: 4.8vw;
  /* min-width: 4.8vw; */
  height: 3.1vw;
  /* min-height: 3.1vw; */
  svg {
    fill: white;
  }
  @media only screen and (max-width: 575px) {
    width: 12.5vw;
    height: 11vw;
    /* min-width: 12.5vw;
    min-height: 11vw; */
  }
`

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
`

export const LogoWrapper = styled.a<ITheme>`
  display: flex;
  align-items: center;
  /* fill: white; */
  height: auto;
  margin-right: 3.15vw;
  /* ${props =>
    props.theme === "dark" &&
    `
    fill: var(--granich-black);
    
    `} */
  img {
    width: 3.6vw;
    min-width: 3.6vw;
    height: 3.6vw;
    min-height: 3.6vw;
  }

  @media only screen and (max-width: 575px) {
    display: none;
    img {
      width: 12vw;
      min-width: 12vw;
      height: 12vw;
      min-height: 12vw;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 3.2vw 0;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 7.5vw 6.5vw;
  }
`

export const NavLinks = styled.nav`
  color: white;
  margin-top: 0.4vw;
  ul {
    display: flex;
    align-items: center;
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

export const NavLink = styled(props => <Link {...props} />)`
  display: block;
  position: relative;
  color: white;
  font-size: 1.15vw;
  text-transform: uppercase;
  font-weight: 700;
  margin-right: 3.2vw;
  padding-bottom: 0.4vw;
  border-bottom: solid 0.15vw rgba(0, 0, 0, 0);
  :hover {
    font-size: 1.15vw;
    font-weight: 700;
    color: white;
    cursor: pointer;
    border-bottom: solid 0.15vw white;
  }

  ${props =>
    props.theme === "dark" &&
    `
  color: var(--granich-black);
  :hover {
    color: var(--granich-black);
    cursor: pointer;
    border-bottom: solid 0.15vw var(--granich-black);
  }
  `}
  @media only screen and (max-width: 575px) {
    font-size: 3.8vw;
    margin-right: 0;
    padding-bottom: 1vw;
    border-bottom: solid 0.5vw rgba(0, 0, 0, 0);
    :hover {
      font-size: 3.8vw;
      border-bottom: solid 0.5vw white;
    }
    ${props =>
      props.theme === "dark" &&
      `
    :hover {
      border-bottom: solid 0.5vw var(--granich-black);
    }
    `}
  }
`
export const NavLinkExternal = styled.a<ITheme>`
  display: block;
  position: relative;
  color: white;
  font-size: 1.15vw;
  text-transform: uppercase;
  font-weight: 700;
  margin-right: 3.2vw;
  padding-bottom: 0.4vw;
  border-bottom: solid 0.15vw rgba(0, 0, 0, 0);
  :hover {
    font-size: 1.15vw;
    font-weight: 700;
    color: white;
    cursor: pointer;

    border-bottom: solid 0.15vw white;
  }
  :focus {
  }
  ${props =>
    props.theme === "dark" &&
    `
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
    font-size: 3.8vw;
    margin-right: 0vw;
    padding-bottom: 1vw;
    border-bottom: solid 0.5vw rgba(0, 0, 0, 0);
    :hover {
      font-size: 3.8vw;
      border-bottom: solid 0.5vw white;
    }
    ${props =>
      props.theme === "dark" &&
      `
    :hover {
      font-size: 3.8vw;
      border-bottom: solid 0.5vw var(--granich-black);
    }
    `}
  }
`

export const ArrowLinkDown = styled(props => <ArrowDown {...props} />)`
  position: absolute;
  top: -0.5vw;
  right: -1.4vw;
  width: 1vw;
  height: 1vw;
  min-width: 1vw;
  min-height: 1vw;
  @media only screen and (max-width: 575px) {
    top: -1.6vw;
    right: -3.7vw;
    width: 3.1vw;
    height: 3.1vw;
    min-width: 3.1vw;
    min-height: 3.1vw;
  }
`

export const ArrowLinkOut = styled(props => <ArrowOut {...props} />)`
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
export const ArrowLinkBack = styled(props => <ArrowBack {...props} />)`
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

export const LoginButton = styled.a`
  display: flex;
  align-items: center;
  color: white;
  background: linear-gradient(90deg, rgba(230,25,51,1) 0%, rgba(213,12,34,1) 50%, rgba(189,3,27,1) 100%);
  // margin-top: -1.6vw;
  margin-left: auto;
  padding: 0.6vw 1.1vw;
  letter-spacing: 0.05vw;
  border-radius: 0.5vw;
  font-size: 1.15vw;
  text-transform: uppercase;
  font-weight: 500;
  transition: all 0.2s ease;
  user-select: none;
  box-shadow: 0.25vw 0.25vw 0.4vw rgba(0, 0, 0, 0.25);
  svg {
    width: 1.1vw;
    margin-right: 0.35vw;
  }
  :hover {
    transform: scale(1.1);
    cursor: pointer;
    color: white;
    font-size: 1.15vw;
    font-weight: 500;
    letter-spacing: 0.05vw;
  }
  @media only screen and (max-width: 575px) {
    display: none;
  }
`
export const LogoMobileWrapper = styled.a<ITheme>`
  display: none;
  @media only screen and (max-width: 575px) {
    display: flex;
    align-items: center;
    fill: white;
    height: auto;
    img {
      width: 12vw;
      min-width: 12vw;
      height: 12vw;
      min-height: 12vw;
    }
    ${props =>
      props.theme === "dark" &&
      `
      fill: var(--granich-black);
      
      `}
  }
`

export const LogoImg = styled.img`

    width:3.6vw;
    min-width: 3.6vw;
    height: 3.6vw;
    min-height: 3.6vw;

`

export const LogoAndLoginButtonWrapper = styled.div`
  display: none;
  @media only screen and (max-width: 575px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 6vw;
  }
`

export const LoginMobileButton = styled.a`
  display: none;
  @media only screen and (max-width: 575px) {
    box-shadow: 0.7vw 0.7vw 1.5vw rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    color: white;
    background: linear-gradient(90deg, rgba(230,25,51,1) 0%, rgba(213,12,34,1) 50%, rgba(189,3,27,1) 100%);
    padding: 2vw 4.8vw 2vw 3.8vw;
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
      cursor: pointer;
      color: white;
      font-size: 3.5vw;
      letter-spacing: 0.05vw;
      font-weight: 600;
      transform: none;
    }
  }
`
