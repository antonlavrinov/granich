import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import ArrowOut from "../../../../assets/svgs/header-arrow-icon-out.svg"

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

export const Wrapper = styled.div`
  padding: 1vw 1.2vw;
  background: white;
  border-radius: 0.6vw;
  display: flex;
  position: relative;
  :after {
    content: "";
    position: absolute;
    background: #f2f2f2;
    top: 0.95;
    left: 0.95vw;
    width: 5.2vw;
    height: 5.2vw;
    border-radius: 100vw;
    z-index: 0;
  }
  @media only screen and (max-width: 575px) {
    padding: 4vw 5vw;
    border-radius: 2.5vw;
    :after {
      left: 4.3vw;
      top: 4.3vw;
      width: 21vw;
      height: 21vw;
    }
  }
`

export const Text = styled.div`
  font-size: 1.05vw;
  line-height: 1.3;
  color: var(--granich-grey);
  position: relative;
  z-index: 1;
  b {
    font-weight: 500;
    color: var(--granich-black);
    margin-bottom: 0.3vw;
    display: block;
  }
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
    b {
      margin-bottom: 1vw;
    }
  }
`

export const Link = styled.a`
  font-weight: 500;
  color: var(--granich-black);
  border-bottom: 1px solid var(--granich-light-grey);
  position: relative;
  :hover {
    font-weight: 500;
    color: var(--granich-black);
    border-bottom: none;
  }
`

export const Image = styled.img`
  width: 4.8vw;
  min-width: 4.8vw;
  height: 4.8vw;
  margin-right: 1vw;
  position: relative;
  z-index: 1;
  object-fit: cover;
  @media only screen and (max-width: 575px) {
    width: 20vw;
    min-width: 20vw;
    height: 20vw;
    margin-right: 5vw;
  }
`
