import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { animated } from "react-spring"

export const CardItemWrapper = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
  .spring-div-inside {
    max-height: none;
  }
`

export const CardItem = styled(animated.div)`
  background-color: white;
  background-size: auto 95%;
  background-repeat: no-repeat;
  background-position: center center;
  width: 22.4vw;
  max-width: 22.4vw;
  /* height: 31vw;
  max-height: 31vw; */
  padding: 0.6vw;
  height: auto;
  /* max-height: auto; */
  will-change: transform;
  border-radius: 0.2vw;
  box-shadow: 0 0vw 1vw rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;


  :hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 575px) {
    padding: 1.5vw;
    width: 55vw;
    max-width: 55vw;
    /* height: 76vw;
    max-height: 76vw; */
  }
`

export const Circle = styled.div`
  width: 25vw;
  height: 25vw;
  background: #f2f2f2;
  border-radius: 100vw;
  position: absolute;
  right: 4vw;
  top: 50%;
  transform: translateY(-50%);
  @media only screen and (max-width: 575px) {
    display: none;
  }
`

export const CircleMobile = styled.div`
  display: none;
  @media only screen and (max-width: 575px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: 70vw;
    display: block;
    background: #f2f2f2;
    border-radius: 100vw;
    z-index: 1;
  }
`

export const Poster = styled.img`
  user-select: none;
  /* width: 95%; */
  width: 100%;
  div {
    user-select: none;
  }
`

export const MobileSpinner = styled.div`
  display: none;
  @media only screen and (max-width: 575px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: 70vw;
    display: block;
    background: #f2f2f2;
    border-radius: 100vw;
    z-index: 1;
  }
`
export const Placeholder = styled.div`
  position: absolute !important;
  height: 100%;
  width: 30vw;
  top: 0;
  right: 0;
  z-index: 2;
  user-select: none;
  display: none;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
    position: relative !important;
    width: 100% !important;
    height: 85vw;
    display: block;
  }
`

export const RootWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 12vw;
  width: 30vw;
  height: 36vw;
  height: 100%;
  z-index: 998;

  @media only screen and (max-width: 575px) {
    width: 100%;
    right: 0;
  }
`
