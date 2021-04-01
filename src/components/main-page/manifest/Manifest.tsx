import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

export const Section = styled.section`
  margin-bottom: 4vw;
  padding-top: 3vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
    padding-top: 5vw;
  }
`
export const Wrapper = styled.div`
  background: white;
  padding: 4.9vw 5.6vw 5vw;
  border-radius: 0.6vw;
  @media only screen and (max-width: 575px) {
    padding: 11vw 5vw 11vw 8vw;
    border-radius: 2.5vw;
  }
`
export const SecondaryWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 575px) {
    flex-direction: column-reverse;
  }
`
export const Author = styled.div`
  margin-top: -1.6vw;
  margin-right: 6vw;
  margin-left: 1vw;
  @media only screen and (max-width: 575px) {
    display: flex;
  }
`

export const Info = styled.div``

export const AuthorImage = styled(props => (
  <BackgroundImage {...props}></BackgroundImage>
))`
  width: 14.3vw;
  height: 14.3vw;
  border-radius: 100vw;
  overflow: hidden;
  margin-left: -1.4vw;
  margin-bottom: 1.8vw;
  margin-top: 2vw;
  @media only screen and (max-width: 575px) {
    width: 20vw;
    height: 20vw;
    margin-right: 3vw;
  }
`

export const AuthorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 575px) {
    margin-top: 5.2vw;
  }
`

export const AuthorName = styled.div`
  font-size: 1.16vw;
  font-weight: 500;
  line-height: 1.4;
  margin-left: 1.1vw;
  @media only screen and (max-width: 575px) {
    font-size: 3.6vw;
  }
`

export const AuthorText = styled.div`
  margin-left: 1.1vw;
  font-size: 1.16vw;
  line-height: 1.4;
  color: var(--granich-grey);
  @media only screen and (max-width: 575px) {
    font-size: 3.6vw;
  }
`

export const InfoTitle = styled.h2`
  font-family: EB Garamond;
  font-style: italic;
  font-weight: 500;
  font-size: 5.4vw;
  line-height: 0.75;
  position: relative;
  margin-bottom: 2.9vw;
  margin-left: 0.5vw;
  white-space: nowrap;
  letter-spacing: -0.115vw;
  :after {
    content: "»";
    position: absolute;
    font-size: 5.5vw;
  }
  :before {
    content: "«";
    position: absolute;
    font-size: 5.5vw;
    top: 0;
    left: -3.2vw;
  }
  @media only screen and (max-width: 575px) {
    white-space: normal;
    font-size: 10.4vw;
    margin-left: 0;
    letter-spacing: -0.4vw;
    margin-bottom: 6.8vw;
    line-height: 0.9;
    :after {
      content: "»";
      position: absolute;
      font-size: 11vw;
    }
    :before {
      content: "«";
      position: relative;
      font-size: 11vw;
      top: -1vw;
      left: 0vw;
      margin-right: 1vw;
    }
  }
`

export const InfoText = styled.p`
  font-weight: 500;
  font-size: 1.55vw;
  line-height: 1.5;
  width: 45vw;
  margin-bottom: 2.8vw;
  @media only screen and (max-width: 575px) {
    font-size: 4.3vw;
    width: 100%;
    margin-bottom: 4.8vw;
  }
`

export const InfoRules = styled.div`
  display: flex;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    margin-bottom: 6.8vw;
  }
`

export const Rule = styled.div`
  position: relative;
  font-size: 1.15vw;
  color: var(--granich-grey);
  width: 13.1vw;
  line-height: 1.4;
  margin-right: 1.7vw;
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
    width: auto;
    margin-right: 0;
    margin-left: 5.5vw;
    margin-bottom: 2vw;
  }
`

export const RuleTitle = styled.span`
  display: block;
  font-weight: 500;
  font-size: 1.15vw;
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
  }
`

export const RuleNumber = styled.div`
  position: absolute;
  top: 0;
  left: -2vw;
  font-size: 2.3vw;
  font-family: EB Garamond;
  font-style: italic;
  font-weight: 500;
  line-height: 0.5;
  @media only screen and (max-width: 575px) {
    font-size: 7.2vw;
    left: -5.7vw;
    top: 1.5vw;
  }
`
