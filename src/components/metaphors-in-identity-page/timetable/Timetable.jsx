import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import WarningSign from "../../../assets/svgs/freelance/warning-icon.svg"

export const Section = styled.section`
  margin-bottom: 4vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 3.3vw 3.3vw;
  border-radius: 0.6vw;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    padding: 6vw 6vw 7vw;
    border-radius: 2.5vw;
  }
`

export const Title = styled.h2`
  color: var(--granich-black);
  font-size: 4vw;
  letter-spacing: -0.2vw;
  font-weight: 700;
  line-height: 1;
  margin-top: -0.6vw;
  margin-bottom: 1vw;
  line-height: 1.1;
  white-space: nowrap;
  span {
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    font-size: 5.4vw;
    line-height: 1;
    position: relative;
    margin-left: -0.2vw;
    white-space: normal;
    display: block;
    letter-spacing: -0.115vw;
  }

  @media only screen and (max-width: 575px) {
    font-size: 11vw;
    white-space: normal;
    margin-bottom: 2vw;
    span {
      white-space: normal;
      font-size: 10.4vw;
      margin-left: 0;
      letter-spacing: -0.4vw;
      margin-bottom: 6.8vw;
      line-height: 0.9;
    }
  }
`

export const Info = styled.div`
  display: flex;
  align-items: flex-start;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
  }
`

export const Image = styled(props => <Img {...props} />)`
  width: 100%;
  @media only screen and (max-width: 575px) {
    border: 1.5px solid rgba(0, 0, 0, 0.15);
  }
`

export const Text = styled.div`
  font-size: 1.35vw;
  line-height: 1.45;
  margin-bottom: 2vw;
  font-weight: 500;
  margin-right: 2vw;
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
    margin-right: 0;
  }
`

export const Warning = styled.div`
  background: var(--granich-red-gradient);
  border-radius: 0.6vw;
  padding: 1.2vw 1.4vw;
  min-width: 37%;
  display: flex;
  @media only screen and (max-width: 575px) {
    padding: 2.5vw 3vw;
    border-radius: 1.5vw;
    margin: 1vw 0 5vw;
  }
`

export const WarningText = styled.div`
  color: white;
  font-size: 1.15vw;
  line-height: 1.3;
  // font-weight: 500;

  @media only screen and (max-width: 575px) {
    font-size: 3.2vw;
  }
`

export const WarningIcon = styled(props => <WarningSign {...props} />)`
  width: 3vw;
  height: 3vw;
  min-width: 3vw;
  min-height: 3vw;
  margin-right: 1vw;
  fill: #830404;
  @media only screen and (max-width: 575px) {
    width: 7vw;
    height: 7vw;
    min-width: 7vw;
    min-height: 7vw;
    margin-right: 2vw;
  }
`
