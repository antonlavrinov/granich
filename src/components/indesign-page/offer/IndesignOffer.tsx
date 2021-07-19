import React from "react"
import styled from "styled-components"
import PotokIcon from "../../../assets/svgs/graph-design/graph-design-potok-icon.svg"
import DateIcon from "../../../assets/svgs/graph-design/graph-design-date-icon.svg"

export const Section = styled.section`
  margin-bottom: 2vw;
`

export const Wrapper = styled.div`
  background: white;
  // background: #2A2A2A;
  border-radius: 0.6vw;
  padding: 4vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 575px) {
    padding: 10vw 6vw;
    border-radius: 2.5vw;
  }
`

export const Title = styled.h1`
  font-size: 6.9vw;
  font-weight: 500;
  font-family: EB Garamond;
  letter-spacing: -0.1rem;
  line-height: 0.85;
  margin: 0;
  margin-bottom: 2vw;
  text-align: center;
  span {
    /* font-family: EB Garamond; */
    font-family: Inter;
    /* font-style: italic; */
    font-weight: 800;
    font-size: 6.5vw;
    letter-spacing: -0.25rem;
    display: block;
    /* margin-bottom: 1vw; */
  }
  i {
    /* font-family: EB Garamond; */
    font-family: Inter;
    /* font-style: italic; */
    font-size: 2.5vw;
    font-style: normal;
    color: var(--granich-red);
    border: 0.2vw solid var(--granich-red);
    border-radius: 0.5vw;
    padding: 0.5vw 0.6vw;
    /* letter-spacing: -0.1rem; */
    display: inline-block;
  }
  @media only screen and (max-width: 575px) {
    // text-align: left;
    font-size: 14vw;
    letter-spacing: -0.1rem;
    margin-bottom: 6vw;
    span {
      font-size: 14vw;
      letter-spacing: -0.05rem;
      margin-bottom: 2vw;
      // white-space: nowrap;
    }
    i {
      font-size: 5vw;
      border: 0.4vw solid var(--granich-red);
      border-radius: 1.5vw;
      padding: 1vw 1.5vw;
    }
  }
`

export const Descr = styled.div`
  text-align: center;
  line-height: 1.4;
  span {
    /* font-family: EB Garamond; */
    font-family: Inter;
    /* font-style: italic; */
    font-size: 2.5vw;

    /* letter-spacing: -0.1rem; */
  }
  @media only screen and (max-width: 575px) {
    line-height: 5vw;
    span {
      font-size: 4vw;
    }
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  margin-bottom: 2vw;
  svg {
    width: 7vw;
    height: 7vw;
  }
  svg {
    :first-child {
      width: 10vw;
      margin-right: 2vw;
    }
  }
  @media only screen and (max-width: 575px) {
    margin-bottom: 6vw;
    svg {
      width: 12vw;
      height: 12vw;
    }
    svg {
      :first-child {
        width: 17.5vw;

        margin-right: 2vw;
      }
    }
  }
`
