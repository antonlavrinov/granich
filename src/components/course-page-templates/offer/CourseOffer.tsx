import React from "react"
import styled from "styled-components"
import PotokIcon from "../../../assets/svgs/graph-design/graph-design-potok-icon.svg"
import DateIcon from "../../../assets/svgs/graph-design/graph-design-date-icon.svg"
import Img from "gatsby-image"
import { Link } from "gatsby"

type CourseInfoType = {
  type?: string
  courseTitle?: string
}

export const Potok = styled(props => <PotokIcon {...props} />)`
  width: 1.3vw;
  height: 1.3vw;
  margin-right: 0.3vw;
  fill: white;
  @media only screen and (max-width: 575px) {
    width: 4.3vw;
    height: 4vw;
    margin-right: 1vw;
    margin-top: -0.3vw;
  }
`

export const Date = styled(props => <DateIcon {...props} />)`
  width: 1.3vw;
  height: 1.3vw;
  fill: var(--granich-red);
  margin-right: 0.3vw;
  @media only screen and (max-width: 575px) {
    width: 4.3vw;
    height: 4vw;
    margin-right: 1vw;
    margin-top: -0.8vw;
  }
`

export const Section = styled.section`
  margin-bottom: 2vw;
  position: relative;
  @media only screen and (max-width: 575px) {
    margin-bottom: 3vw;
    margin-top: -1vw;
    padding-bottom: 2vw;
    padding-top: 1vw;
    overflow: hidden;
  }
`

export const Wrapper = styled.div`
  background: white;
  border-radius: 0.6vw;
  padding: 2.5vw 2.7vw 3vw;
  position: relative;
  box-shadow: 0.25vw 0.15vw 0.4vw rgba(0, 0, 0, 0.1);
  background-size: auto auto;
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: right;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media only screen and (max-width: 575px) {
    overflow: visible;
    background: white;
    border-radius: 2.5vw;
    padding: 7vw 1vw 6vw;
    box-shadow: 0 0 1.8vw rgba(0, 0, 0, 0.15);
  }
`

export const MainImage = styled(props => <Img {...props} />)`
  position: absolute !important;
  width: 100% !important;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  user-select: none;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
    position: relative !important;
    width: 100% !important;
  }
`

export const Tags = styled.div`
  display: flex;
  margin-bottom: 2.1vw;
  align-items: flex-start;
  flex-wrap: wrap;
  position: relative;
  max-width: 65%;
  z-index: 1;
  @media only screen and (max-width: 575px) {
    padding: 0 3.5vw;
    max-width: 100%;
  }
`
export const Tag = styled.div`
  font-size: 1.2vw;
  display: flex;
  color: var(--granich-red);
  border: 1.5px solid var(--granich-red);
  padding: 0.3vw 0.8vw;
  border-radius: 100vw;
  margin-right: 0.5vw;
  margin-bottom: 1vw;
  font-weight: 500;
  align-items: center;
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
    padding: 1.8vw 2.5vw 1.6vw;
    margin-right: 3vw;
    white-space: nowrap;
    margin-bottom: 3vw;
    line-height: 1;
  }
`
export const MainTag = styled.div`
  font-size: 1.2vw;
  display: flex;
  color: white;
  background: var(--granich-red);
  border: 1.5px solid var(--granich-red);
  padding: 0.3vw 0.8vw;
  border-radius: 100vw;
  margin-right: 0.5vw;
  font-weight: 500;
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
    padding: 1.6vw 2.5vw;
    margin-right: 3vw;
    white-space: nowrap;
    margin-bottom: 3vw;
  }
`

export const Title = styled.h1<CourseInfoType>`
    line-height: 0.8;
    margin-left: -0.3vw;
    margin: 0;
    margin-bottom: 4vw;
    position: relative;
    z-index: 1;
    p {
        font-size: 7.5vw;
        letter-spacing: 0.28vw;
        font-family: EB Garamond;
        style: normal;
        font-weight: 500;
        i {
            display: block;
            letter-spacing: -0.05vw;
            line-height: inherit;
            font-style: italic;
            font-size: 7.2vw;
            font-weight: inherit;
            font-family: EB Garamond;
        }
    }
    

    @media only screen and (max-width: 575px) {
        margin-bottom: 7vw;
        margin-left: 0vw;
        margin-top: -1vw;
        line-height: 0.8;
        padding: 0 5vw;
        p {
            font-size: 14vw;
            letter-spacing: 0.5vw;
            i { 
                letter-spacing: -0.2vw;
                font-size: 15vw;
                margin-top: 2vw;
            }
        }
    }
    ${props =>
      props.type === "Мастер-класс" &&
      `
        margin-bottom: 1.5vw;
        margin-left: 0vw;
        margin-top: -1vw;
        line-height: 1.15;
        p {
            font-size: 6vw;
            font-weight: 500;
            letter-spacing: 0.8vw;
            i { 
                margin-top: 2vw;
                font-weight: 500;
                display: block;
            }
        }
        @media only screen and (max-width: 575px) {
            line-height: 1.15;
            padding: 0 5vw;
            p {
                font-size: 11vw;
                letter-spacing: 0.8vw;
                i { 
                    letter-spacing: -0.2vw;
                    font-size: 14vw;
                    margin-top: 2vw;
                }
            }
        }
    `}
    ${props =>
      props.courseTitle === "Графсистема Swiss" &&
      `
        p {
            letter-spacing: 0 !important;
            font-size: 7vw;
            line-height: 1.05;

        }
        @media only screen and (max-width: 575px) {
            p {
                font-size: 15vw;
            }
        }
    `}
    
    ${props =>
      props.courseTitle === "Графсистемы Брутализм и Антидизайн" &&
      `
        p {
            letter-spacing: 0 !important;
            font-size: 7vw;
            line-height: 0.95;
            i {
                font-size: 6.8vw;
                line-height: 1.2;
            }

        }
        @media only screen and (max-width: 575px) {
            p {
                font-size: 14vw;
                i {
                    font-size: 13.5vw;
                }
            }
        }
    `}
`
export const Descr = styled.div<CourseInfoType>`
    width: 35vw;
    font-size: 1.55vw;
    margin-bottom: 1.5vw;
    margin-left: 0.8vw;
    line-height: 1.47;
    font-weight: 500;
    letter-spacing: -0.01vw;
    position: relative;
    z-index: 1;
    @media only screen and (max-width: 575px) {
        width: 95%;
        font-size: 4.6vw;
        padding: 0 5vw;
        margin-bottom: 5vw;
        margin-left: 0;
    }
    ${props =>
      props.type === "Мастер-класс" &&
      `
        width: 25vw;
        margin-bottom: 2vw;
        @media only screen and (max-width: 575px) {
            margin-bottom: 4vw;
            width: 100%;
            
        }
    `}

    ${props =>
      props.courseTitle === "Графсистема Swiss" &&
      `
        width: 30vw;
        margin-bottom: 2vw;
        @media only screen and (max-width: 575px) {
            margin-bottom: 4vw;
            
        }
    `}
    ${props =>
      props.courseTitle === "Графсистемы Брутализм и Антидизайн" &&
      `
        width: 30vw;
        margin-bottom: 2vw;
        @media only screen and (max-width: 575px) {
            margin-bottom: 4vw;
            font-size: 4.3vw;
            
        }
    `}
    ${props =>
      props.courseTitle === "Осознанный Фриланс" &&
      `
        width: 38vw;
        p {
            letter-spacing: 0 !important;
            font-size: 7vw;
            line-height: 1.05;

        }
        @media only screen and (max-width: 575px) {
            p {
                font-size: 15vw;
            }
        }
    `}


`

export const Button = styled(props => <Link {...props} />)`
  display: inline-flex;
  align-items: center;
  color: white;
  background: var(--granich-red-gradient-horizontal);
  margin-left: 0.7vw;
  padding: 1vw 1.6vw 1.2vw 1.3vw;
  letter-spacing: 0.06vw;
  border-radius: 0.3vw;
  font-size: 1.61vw;
  font-weight: 400;
  transition: all 0.2s ease;
  user-select: none;
  box-shadow: 0.25vw 0.25vw 0.4vw rgba(0, 0, 0, 0.25);
  letter-spacing: 0.05vw;
  position: relative;
  z-index: 1;
  margin-bottom: 1vw;
  svg {
    width: 1.4vw;
    height: 1.4vw;
    margin-right: 0.5vw;
  }
  :hover {
    transform: scale(1.05);
    cursor: pointer;
    color: white;
    font-size: 1.61vw;
    font-weight: 400;
    letter-spacing: 0.06vw;
  }
  ${props =>
    props.type === "Мастер-класс" &&
    `
    padding: 1vw 3vw 1.2vw 4.2vw;
    
    svg {
        margin-left: 0.4vw;
        
    }
    @media only screen and (max-width: 575px) {
        padding: 3vw 11vw 4vw 14vw;
        :hover {
            font-size: 5.5vw;
          }
        svg {
            margin-left: 1vw;
            margin-right: 0;
        }

    }
  `}
  @media only screen and (max-width: 575px) {
    font-size: 5.5vw;
    margin: 0 5vw;
    padding: 3vw 5vw 4vw 5vw;
    border-radius: 1.5vw;
    margin-bottom: 2vw;
    box-shadow: 0.7vw 0.7vw 1.5vw rgba(0, 0, 0, 0.3);
    :hover {
      font-size: 5.5vw;
    }
    svg {
      width: 5vw;
      height: 5vw;
      margin-left: 0;
      margin-right: 1vw;
    }
  }
`

export const Info = styled.div``
