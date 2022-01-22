import React from "react"
import styled from "styled-components"
import ArrowTop from "../../../assets/svgs/header-arrow-top.svg"
import ArrowTopMobile from "../../../assets/svgs/header-arrow-top_mobile.svg"

import "react-accessible-accordion/dist/fancy-example.css"

// export const AnswersLesson = styled.div`
//   font-size: 1.15vw;
//   border: 1px solid var(--granich-red);
//   color: var(--granich-red);
//   border-radius: 100vw;
//   padding: 0.4vw 0;
//   font-weight: 500;
//   display: inline-block;
//   min-width: 5.5vw;
//   text-align: center;
//   user-select: none;
//   ${props =>
//     !props.type &&
//     `
//         background: var(--granich-red);
//         color: white;
//     `}
//   @media only screen and (max-width: 575px) {
//     padding: 1vw 0;
//     min-width: 15vw;
//     font-size: 3.3vw;
//   }
// `

// export const AnswersLessonColumn = styled.div`
//   width: 6.8vw;
//   @media only screen and (max-width: 575px) {
//     width: 20vw;
//   }
// `

export const ArrowLinkTop = styled(props => <ArrowTop {...props} />)`
  position: absolute;
  top: -0.1vw;
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
export const ArrowLinkTopMobile = styled(props => (
  <ArrowTopMobile {...props} />
))`
  position: absolute;
  @media only screen and (max-width: 575px) {
    top: 0.5vw;
    right: -4.5vw;
    width: 3.1vw;
    height: 3.1vw;
  }
`

export const Section = styled.section`
  margin-top: 4vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 2vw;
    margin-top: 5vw;
  }
`

export const MainWrapper = styled.div`
  background: #e8e8e8;
  border-radius: 0.6vw;
  @media only screen and (max-width: 575px) {
    border-radius: 2.5vw;
  }
`

export const Wrapper = styled.div`
  padding: 5.4vw 3vw 2vw;
  border-bottom: 0.25vw dotted white;
  @media only screen and (max-width: 575px) {
    padding: 5.4vw 5vw 5.4vw;
    border-bottom: 0.8vw dotted white;
  }
`

export const Header = styled.div`
  display: flex;
  padding-bottom: 5.7vw;
  // border-bottom: 1.5px solid var(--granich-black);
  width: 100%;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
  }
`

export const SectionTitle = styled.h2`
  color: var(--granich-black);
  font-size: 4.55vw;
  letter-spacing: -0.1vw;
  font-weight: 700;
  line-height: 1;
  margin-right: 2vw;
  width: 40vw;
  min-width: 40vw;
  margin-top: -0.3vw;
  @media only screen and (max-width: 575px) {
    font-size: 11vw;
    letter-spacing: -0.7vw;
    line-height: 1;
    margin-right: 0;
    margin-bottom: 4vw;
    width: 100%;
    margin-top: 0;
  }
`

export const SectionText = styled.div`
  color: var(--granich-black);
  font-size: 1.5vw;
  margin-top: 0.2vw;
  line-height: 1.55;
  letter-spacing: 0.025vw;
  font-weight: 500;
  // width: 45vw;
  @media only screen and (max-width: 575px) {
    font-size: 3.9vw;
    letter-spacing: -0.08vw;
  }
`

export const FooterContainer = styled.div`
  padding: 3vw 4.8vw 5vw;
  @media only screen and (max-width: 575px) {
    padding: 6vw 6vw 8vw;
  }
`

export const FooterWrapper = styled.div`
  background: #dedede;
  border-radius: 0.5vw;
  font-family: EB Garamond;
  font-style: italic;
  font-size: 2.37vw;
  font-weight: 500;
  text-align: center;
  padding: 1.4vw;
  letter-spacing: -0.02vw;
  line-height: 1;
  display: block;
  @media only screen and (max-width: 575px) {
    display: none;
  }
`

export const FooterWrapperMobile = styled.div`
  background: #dedede;
  font-family: EB Garamond;
  font-style: italic;
  font-weight: 500;
  letter-spacing: -0.02vw;
  line-height: 1;
  display: none;
  @media only screen and (max-width: 575px) {
    font-size: 6.6vw;
    padding: 4vw 6vw 6vw;
    line-height: 1.1;
    border-radius: 1.5vw;
    text-align: center;
    display: block;
  }
`
export const FooterLink = styled.a`
  font-style: italic;
  font-family: EB Garamond;
  font-size: 2.37vw;
  font-weight: 500;
  display: inline-block;
  line-height: 1;
  position: relative;
  text-align: center;
  :before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.5vw;
    width: 100%;
    height: 1.5px;
    background: #c0c0c0;
  }
  :hover {
    cursor: pointer;
    :before {
      display: none;
    }
  }
  @media only screen and (max-width: 575px) {
    font-size: 6.6vw;
    :before {
      bottom: -2vw;
    }
  }
  ${props =>
    props.disabled &&
    `
        @media only screen and (max-width: 575px) {
            font-size: 5.6vw;
            :hover {
                font-size: 5.6vw;
            }
        }
    `}
`
