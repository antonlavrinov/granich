import React from "react"
import styled from "styled-components"
import BackgroundClip from "../../../assets/svgs/background-clip-01.svg"
import UnderlineLinkIcon from "../../../assets/svgs/offer-underline-link.svg"
import Img from "gatsby-image"

export const Section = styled.div`
  position: relative;
  width: 100%;
  height: 43.5vw;
  background-color: var(--granich-black);
  @media only screen and (max-width: 575px) {
    height: 134vw;
  }
`

export const Title = styled.h1`
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 6.9vw;
  color: white;
  line-height: 0.88;
  letter-spacing: -0.4vw;
  width: 60vw;
  margin-bottom: 2.2vw;
  margin-left: -1.1vw;

  @media only screen and (max-width: 575px) {
    width: 100%;
    font-size: 18vw;
    letter-spacing: -1.3vw;
    width: 100px;
    margin-bottom: 17vw;
    width: 100%;
    line-height: 0.83;
    margin-left: -0.5vw;
  }
`
export const Descr = styled.div`
  margin-left: -0.3vw;
  color: white;
  letter-spacing: 0.01vw;
  font-size: 2.32vw;
  line-height: 1;
  font-family: EB Garamond;
  font-style: italic;
  position: relative;
  font-weight: 500;
  svg {
    transition: opacity 0.2s ease;
    opacity: 1;
  }
  span {
    font-weight: inherit;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    letter-spacing: inherit;
    position: relative;
    :hover {
      cursor: pointer;
      svg {
        opacity: 0;
      }
    }
    :focus {
      outline: none;
    }
    :active {
      outline: none;
    }
  }
  @media only screen and (max-width: 575px) {
    font-size: 7.2vw;
    margin-left: 1vw;
  }
`

export const UnderlineIcon = styled(props => <UnderlineLinkIcon {...props} />)`
  width: 20.8vw;
  position: absolute;
  bottom: -1.1vw;
  left: 0.2vw;
  @media only screen and (max-width: 575px) {
    width: 65vw;
    bottom: -3.2vw;
  }
`

export const SvgClip = styled(props => <BackgroundClip {...props} />)`
  // padding: 10vw;
  position: relative;
  left: 0;
  display: block;
  top: -4vw;
  width: 100%;
  z-index: 0;
  background-size: "cover";
  background-repeat: "no-repeat";
  @media only screen and (max-width: 575px) {
    width: 100%;
  }
`

export const FlagsImg = styled(props => <Img {...props} />)`
  margin-left: 0.1vw;
  top: 0.2vw;
  width: 2vw;
  display: inline-block;
  @media only screen and (max-width: 575px) {
    width: 6vw;
    margin-left: 1.5vw;
  }
`

export const MainImage = styled(props => <Img {...props} />)`
  position: absolute !important;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100% !important;
  user-select: none;
  @media only screen and (max-width: 575px) {
    display: none;
  }
`

export const MainImageMobile = styled(props => <Img {...props} />)`
  position: absolute !important;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100% !important;
  display: none;
  height: 100% !important;
  user-select: none;
  @media only screen and (max-width: 575px) {
    display: block;
  }
`

export const Wrapper = styled.div`
  padding: 12.2vw 0 5vw 0;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  @media only screen and (max-width: 575px) {
    padding: 28vw 6vw;
  }
`
