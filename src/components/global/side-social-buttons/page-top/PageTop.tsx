import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PageTopIcon from "../../../../assets/svgs/page-up_noshadow.svg"
import PageTopIconMobile from "../../../../assets/svgs/page-up-mobile_noshadow.svg"

export const Wrapper = styled(props => <PageTopIcon {...props} />)`
  width: 3.6vw;
  height: 3.6vw;
  transition: all 0.3s ease;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media only screen and (max-width: 575px) {
    width: 11vw;
    height: 11vw;
  }
`

export const WrapperMobileIcon = styled(props => (
  <PageTopIconMobile {...props} />
))`
  width: 3.6vw;
  height: 3.6vw;
  transition: all 0.3s ease;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media only screen and (max-width: 575px) {
    width: 11vw;
    height: 11vw;
  }
`

export const WrapperMobile = styled(props => <Link {...props} />)`
  display: none;
  @media only screen and (max-width: 575px) {
    display: block;
  }
`

export const WrapperDesktop = styled.div`
  display: block;
  @media only screen and (max-width: 575px) {
    display: none;
  }
`
