import React from "react"
import { Container } from "../../style"
import styled from "styled-components"
import ElvisIcon from "../../../assets/svgs/elvis.svg"

const HardWorkSection = styled.section`
  /* margin-bottom: 4vw; */
  @media only screen and (max-width: 575px) {
    /* margin-bottom: 5vw; */
  }
`

const HardWorkWrapper = styled.section`
  padding: 2.3vw 2.5vw;
  border-radius: 0.6vw;
  background: var(--granich-red);
  display: flex;
  align-items: center;
  @media only screen and (max-width: 575px) {
    padding: 6vw;
    border-radius: 2.5vw;
    flex-direction: column;
  }
`

const HardWorkQuote = styled.div`
  font-family: EB Garamond;
  font-style: italic;
  font-size: 2.7vw;
  color: white;
  line-height: 1.05;
  min-width: 41%;
  max-width: 41%;
  letter-spacing: -0.01em;
  @media only screen and (max-width: 575px) {
    max-width: 100%;
    font-size: 7.5vw;
    margin-bottom: 5vw;
  }
`

const HardWorkTextWrapper = styled.div`
  background: rgba(0,30,160);
  padding: 1.5vw 1.8vw;
  border-radius: 0.5vw;
  display: flex;
  min-width: 59%;
  max-width: 59%;
  margin-left: auto;
  span {
    color: white;
    display: block;
    min-width: 75%;
    max-width: 75%;

    font-size: 1.15vw;
    line-height: 1.45;
  }
  svg {
    width: 7vw;
    min-width: 7vw;
    height: 7vw;
    min-height: 7vw;
    margin-left: auto;
    transform: scale(1.25);
    //  fill: #4C0101;
    /* margin-right: -0.5vw; */
    fill: var(--granich-red);
  }
  @media only screen and (max-width: 575px) {
    padding: 3vw 4vw;
    border-radius: 1.5vw;
    min-width: 100%;
    max-width: 100%;
    flex-direction: column;
    span {
      max-width: 100%;
      min-width: 100%;
      font-size: 3.7vw;
      line-height: 1.35;
      margin-bottom: 2vw;
    }
    svg {
      width: 20vw;
      margin: 0 auto;
      transform: translateX(5%);
      height: 27vw;
    }
  }
`

const HardWorkMetaphors = ({ title, text }) => {
  return (
    <HardWorkSection>
      <Container>
        <HardWorkWrapper>
          <HardWorkQuote>{title}</HardWorkQuote>
          <HardWorkTextWrapper>
            <span>{text}</span>
            <ElvisIcon />
          </HardWorkTextWrapper>
        </HardWorkWrapper>
      </Container>
    </HardWorkSection>
  )
}

export default HardWorkMetaphors
