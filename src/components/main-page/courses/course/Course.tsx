import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-image"
import CogwheelIcon from "../../../../assets/svgs/cogwheels.svg"
// import CalendarIcon from '../../assets/svgs/empty_calendar.svg';
import Img from "gatsby-image"

export const LinkWrapper = styled.a`
  transition: all 0.2s ease;
  border-radius: 0.6vw;
  // box-shadow: 0 0 0.9vw rgba(0,0,0,0.25);
  :hover {
    cursor: pointer;
    transform: scale(1.03);
  }
  @media only screen and (max-width: 575px) {
    border-radius: 1.5vw;
    // box-shadow: 0 0 1.5vw rgba(0,0,0,0.25);
    :hover {
      transform: none;
    }
  }
`

export const LinkModal = styled.div`
  // text-align: left;
  // background: none;
  // border-radius: 0.6vw;
  // box-shadow: 0 0 0.9vw rgba(0,0,0,0.25);
  :hover {
    cursor: pointer;
  }

  ${props => props.clickable && `
    :hover {
      cursor: default;
    }
    

  `}
  // @media only screen and (max-width: 575px) {
  //     // border-radius: 1.5vw;
  //     // box-shadow: 0 0 1.5vw rgba(0,0,0,0.25);
  // }
`

export const Cogwheel = styled(props => <CogwheelIcon {...props} />)`
  width: 5vw;
  height: 5vw;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`

export const ArrowIcon = styled(props => <Img {...props} />)`
  width: 3.1vw;
  @media only screen and (max-width: 575px) {
    width: 7.5vw;
    margin-right: -0.5vw;
  }
`
// export const BlackArrow = styled(props => <BlackArrowNewPage {...props}/>)`
//     width: 3.1vw;
//     @media only screen and (max-width: 575px) {
//         width: 7.5vw;
//         margin-right: -0.5vw;
//     }
// `

// export const Calendar = styled(props => <CalendarIcon {...props}/>)`
//     width: 3.1vw;
//     @media only screen and (max-width: 575px) {
//         width: 7.5vw;
//         margin-right: -0.5vw;
//     }
// `

export const Wrapper = styled.div`
  background: white;
  border-radius: 0.6vw;
  box-shadow: 0 0 0.9vw rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  height: 100%;

  ${props =>
    props.development &&
    `
        background: #E8E8E8;
        box-shadow: none;
        :hover {
            cursor: default;
            transform: none;
        }
        @media only screen and (max-width: 575px) {
            display: none;
        }
    `}
  @media only screen and (max-width: 575px) {
    border-radius: 1.5vw;
    // box-shadow: 0 0 1.5vw rgba(0,0,0,0.25);
  }
`

export const DevelopingWrapper = styled.div`
  background: #e8e8e8;
  border-radius: 0.6vw;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 575px) {
    display: none;
  }
`

export const Container = styled.div`
  padding: 0.9vw 1vw;
  @media only screen and (max-width: 575px) {
    padding: 2.5vw 2.5vw 3.5vw;
  }
`
export const ButtonContainer = styled.div`
  padding: 0.9vw;
  display: flex;
  flex-direction: column;
  height: 100%;
  ${props =>
    props.development &&
    `
        padding: 2vw 0.9vw;
    `}

  @media only screen and (max-width: 575px) {
    // padding: 3vw 5vw 3vw;
    padding: 2.5vw;
  }
`

export const TagList = styled.div`
  margin-bottom: 0.7vw;
  display: flex;
  align-items: flex-start;
  width: 15.4vw;

  @media only screen and (max-width: 575px) {
    width: 38vw;
    margin-bottom: 1.5vw;
    margin-top: 0;
    margin-left: -0.2vw;
  }
  ${props =>
    props.empty &&
    `
        div {
            color: var(--granich-grey);
            border-color: var(--granich-grey);
        }
    `}
`

export const MainTag = styled.div`
  border: 1px solid var(--granich-red);
  color: white;
  border-radius: 100vw;
  background: var(--granich-red);
  font-weight: 600;
  line-height: 1;
  font-size: 0.9vw;
  padding: 0.2vw 0.5vw 0.2vw;
  display: inline-block;
  letter-spacing: -0.05vw;
  position: absolute;
  bottom: 0.7vw;
  left: 0.7vw;
  z-index: 101;
  ${props =>
    !props.active &&
    `
        background: var(--granich-black);
        border-color: var(--granich-black);

    `}
  @media only screen and (max-width: 575px) {
    font-size: 2.5vw;
    padding: 0.2vw 1vw 0.2vw;
    border-width: 0.3vw;
    bottom: 1vw;
    left: 1vw;
  }
  ${props =>
    props.empty &&
    `
        background: var(--granich-black);
        border-color: var(--granich-black);
    `}
`

export const Tag = styled.div`
  border: 1px solid var(--granich-red);
  color: var(--granich-red);
  border-radius: 100vw;
  font-weight: 500;
  line-height: 1;
  font-size: 1vw;
  padding: 0.2vw 0.5vw 0.2vw;
  display: block;
  letter-spacing: -0.03vw;
  margin-right: 0.4vw;
  white-space: nowrap;
  :last-child {
    margin-right: 0;
  }
  ${props =>
    !props.active &&
    `
        // filter: opacity(40%);
        border-color: var(--granich-grey);
        color: var(--granich-grey);

    `}
  ${props =>
    props.development &&
    `
        border: 2px solid #d4d4d4;
        filter: none;
        width: 100%;
        height: 1.45vw;

    `}
    @media only screen and (max-width: 575px) {
    border-width: 1px;
    font-size: 2.6vw;
    padding: 0.7vw 0.8vw;
    font-weight: 400;
    margin-right: 0.6vw;
    letter-spacing: -0.02em;
  }
`

export const Title = styled.h3`
  font-size: 1.75vw;
  margin-top: 0.4vw;
  margin-left: 0.3vw;
  line-height: 1.05;
  font-weight: 600;
  letter-spacing: 0;
  width: 15vw;
  @media only screen and (max-width: 575px) {
    font-size: 3.8vw;
    margin-top: 3vw;
    margin-left: 0.25vw;
    line-height: 1;
    width: 37vw;
  }
`

export const Image = styled(props => (
  <BackgroundImage {...props}></BackgroundImage>
))`
  min-height: 15.5vw;
  width: 100%;
  position: relative;
  @media only screen and (max-width: 575px) {
    min-height: 38vw;
    max-height: 38vw;
    height: 38vw;
  }
  ${props =>
    (props.empty || !props.active) &&
    `
        filter: grayscale(100%);
    `}
`

export const ImageWrapper = styled.div`
  position: relative;
`

export const Button = styled.div`
    background: var(--granich-red);
    border-radius: 0 0 0.6vw 0.6vw;
    color: white;
    margin-top: auto;
    @media only screen and (max-width: 575px) {
        border-radius: 0 0 1.5vw 1.5vw;
    }
    ${props =>
      !props.active &&
      `
        background: black;
    
    `}
    ${props =>
      props.development &&
      `
        background: #dedede;
    `}
    ${props =>
      props.empty &&
      `
        background: black;
    `}

    
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ButtonText = styled.div`
  color: white;
  font-size: 1.4vw;
  font-weight: 500;
  line-height: 0.95;
  margin-left: 0.3vw;
  margin-top: -0.2vw;
  ${props =>
    props.development &&
    `
        color: #C0C0C0;
    `}
  ${props =>
    props.empty &&
    `
        line-height: 1;
    `}
    @media only screen and (max-width: 575px) {
    font-size: 3.5vw;
    font-size: 4vw;
    margin-top: -1vw;
  }
`

export const Info = styled.div`
  display: flex;
  margin-left: 0.3vw;
  font-size: 1vw;
  line-height: 1.1;
  margin-bottom: 0.45vw;
  margin-top: 0.9vw;
  ${props =>
    !props.active &&
    `
        color: var(--granich-black);
    `}
  @media only screen and (max-width: 575px) {
    font-size: 2.7vw;
    font-size: 3vw;
    margin-top: 2.5vw;
    margin-bottom: 0vw;
    margin-left: 0vw;
  }
`
export const Descr = styled.div`
  font-size: 1vw;
  margin-left: 0.3vw;
  color: var(--granich-grey);
  letter-spacing: -0.01vw;
  font-weight: 500;
  line-height: 1;
  margin-top: 0.5vw;
  width: 15vw;
  ${props =>
    !props.active &&
    `
        color: var(--granich-light-grey);
    `}
  @media only screen and (max-width: 575px) {
    margin-left: 0.1vw;
    font-size: 2.7vw;
    font-size: 3vw;
    margin-top: 1vw;
    width: 37vw;
  }
`

export const Start = styled.div`
  font-size: inherit;
  margin-right: 1.1vw;
  font-weight: 500;
  color: var(--granich-light-grey);
  span {
    font-weight: inherit;
    font-size: inherit;
    color: black;
  }
  @media only screen and (max-width: 575px) {
    margin-right: 3vw;
  }
`

export const Duration = styled.div`
  font-size: inherit;
  font-weight: 500;
  color: var(--granich-light-grey);
  max-width: 9.2vw;
  span {
    font-weight: inherit;
    font-size: inherit;
    color: black;
    max-width: 20.2vw;
  }
`

export const Teachers = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.9vw 0.6vw 0.6vw;
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(45, 45, 45, 0) 80%
  );
  z-index: 100;
  @media only screen and (max-width: 575px) {
    padding: 1vw;
  }
`
export const Teacher = styled(props => (
  <BackgroundImage {...props}></BackgroundImage>
))`
  border-radius: 100vw;
  margin-top: -0.2vw;
  margin-right: 0;
  height: 2.35vw;
  width: 2.35vw;
  border: 1px solid var(--granich-black);
  box-shadow: 0.15vw 0.12vw 0.2vw rgba(0, 0, 0, 0.25);
  background: var(--granich-grey);
  @media only screen and (max-width: 575px) {
    height: 5.8vw;
    width: 5.8vw;
  }
  ${props =>
    props.several &&
    `
        margin-right: -0.2vw;
        :last-child {
            margin-right: 0;
            z-index: 1;
        }
        @media only screen and (max-width: 575px) {
            margin-right: -1vw;
            :last-child {
                margin-right: 0;
            }
        }
    `}
`

export const DevelopingImage = styled.div`
  min-height: 15.5vw;
  border: 2px solid #d4d4d4;
  margin-bottom: 0.7vw;
  position: relative;
`
export const DevelopingTitle = styled.div`
  div {
    height: 1.3vw;
    width: 70%;
    background: #dedede;
    margin-bottom: 0.4vw;
    :last-child {
      margin-bottom: 0;
      width: 45%;
    }
  }
  margin-bottom: 0.4vw;
`
export const DevelopingDescr = styled.div`
  div {
    height: 0.7vw;
    width: 90%;
    background: #dedede;
    margin-bottom: 0.3vw;
    :nth-child(2) {
      width: 55%;
    }
    :last-child {
      margin-bottom: 0;
      width: 70%;
    }
  }
`
