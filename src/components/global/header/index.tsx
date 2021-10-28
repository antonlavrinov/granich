import React from "react"
import { Container } from "../../style"
import LoginButtonIcon from "../../../assets/svgs/login-button-icon.svg"
import GranichLogoBlack from "./granich_black.svg";
import GranichLogoWhite from "./granich_white.svg";
import * as SC from "./Header"

type HeaderProps = {
  type: "dark" | "light"
  scrollTo?: (
    selector: string,
    blockPosition?: "start" | "center" | "end" | "nearest"
  ) => boolean
}

const Header: React.FC<HeaderProps> = ({ type, scrollTo = () => {} }) => (
  <SC.StyledHeader id="header">
    <Container>
      <SC.Wrapper>
        <SC.LogoWrapper href="/" theme={type}>
          {type === "dark" ? (
            <img src="images/granich-logo_black.svg" alt="logo" />
          ) : (
            <img src="images/granich-logo_white.svg" alt="logo" />
          )}
          
        </SC.LogoWrapper>
        <SC.LogoAndLoginButtonWrapper>
          <SC.LogoMobileWrapper href="/" theme={type}>
            {type === "dark" ? (
              <img src="images/granich-logo_black.svg" alt="logo" />
            ) : (
              <img src="images/granich-logo_white.svg" alt="logo" />
            )}
          </SC.LogoMobileWrapper>
          <SC.LoginMobileButton
            rel="noopener noreferrer"
            href="https://school.granich.design/cms/system/login"
            target="_blank"
          >
            <LoginButtonIcon />
            Войти
          </SC.LoginMobileButton>
        </SC.LogoAndLoginButtonWrapper>
        <SC.NavLinks>
          <ul>
            <li>
              {type === "dark" ? (
                <SC.NavLink to="/#courses" theme={type}>
                  Курсы
                  <SC.ArrowLinkBack />
                </SC.NavLink>
              ) : (
                <SC.NavLinkExternal
                  tabIndex={0}
                  onClick={() => scrollTo("#courses")}
                  theme={type}
                >
                  Курсы
                  <SC.ArrowLinkDown />
                </SC.NavLinkExternal>
              )}
            </li>
            <li>
              {type === "dark" ? (
                <SC.NavLink to="/#content" theme={type}>
                  Контент
                  <SC.ArrowLinkBack />
                  {/* <SC.ArrowLinkBack /> */}
                </SC.NavLink>
              ) : (
                <SC.NavLinkExternal
                  tabIndex={0}
                  onClick={() => scrollTo("#content")}
                  theme={type}
                >
                  Контент
                  <SC.ArrowLinkDown />
                </SC.NavLinkExternal>
              )}
            </li>
            <li>
              <SC.NavLinkExternal
                rel="noopener noreferrer"
                href="/blog"
                target="_blank"
                theme={type}
              >
                Блог
                <SC.ArrowLinkOut />
              </SC.NavLinkExternal>
            </li>
          </ul>
        </SC.NavLinks>
        <SC.LoginButton
          rel="noopener noreferrer"
          href="https://school.granich.design/cms/system/login"
          target="_blank"
        >
          <LoginButtonIcon />
          Войти
        </SC.LoginButton>
      </SC.Wrapper>
    </Container>
  </SC.StyledHeader>
)

export default Header
