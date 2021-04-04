import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

export const Section = styled.div`
  margin-bottom: 1.7vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
  }
`

export const Wrapper = styled.div`
  background: white;
  border-radius: 0.6vw;
  padding: 1.5vw 2.5vw 1.5vw 15.8vw;
  position: relative;
  display: flex;
  box-shadow: 0.25vw 0.25vw 0.5vw rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 575px) {
    padding: 6vw 6.6vw 6.6vw;
    border-radius: 2.5vw;
    box-shadow: 0.6vw 0.6vw 1.8vw rgba(0, 0, 0, 0.23);
    box-shadow: 0 0 1.8vw rgba(0, 0, 0, 0.15);
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Image = styled(props => <Img {...props} />)`
  width: 9vw;
  bottom: 0;
  left: 3.1vw;
  @media only screen and (max-width: 575px) {
    left: auto;
    right: 7vw;
    width: 20vw;
    display: none;
  }
`

export const Subtext = styled.div`
  font-size: 1.15vw;
  width: 11vw;
  font-weight: 500;
  line-height: 1.4;
  margin-right: 2vw;
  @media only screen and (max-width: 575px) {
    font-size: 3.35vw;
    letter-spacing: -0.05vw;
    width: 100%;
    margin-bottom: 1vw;
  }
`
export const MainInfo = styled.div`
  font-size: 1.15vw;
  margin-top: -0.5vw;
  margin-right: 1.5vw;
  @media only screen and (max-width: 575px) {
    display: flex;
    align-items: center;
  }
`
export const Title = styled.div`
  font-size: 2.3vw;
  font-family: EB Garamond;
  font-style: italic;
  font-weight: 500;
  margin-bottom: 0.8vw;
  @media only screen and (max-width: 575px) {
    font-size: 7vw;
    margin-left: -0.8vw;
    letter-spacing: -0.05vw;
    margin-bottom: 3.5vw;
  }
`
export const InfoItems = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 575px) {
    display: none;
  }
`

export const MainTag = styled.div`
  color: white;
  padding: 0.18vw 1vw 0.3vw;
  background: var(--granich-red);
  border-radius: 100vw;
  font-size: 0.8vw;
  margin-right: 0.6vw;
  font-weight: 500;
  border: 1px solid var(--granich-red);
  ${props =>
    props.disabled &&
    `
        background: var(--granich-black);
        border-color: var(--granich-black);
    `}
`
export const Tag = styled.div`
  color: var(--granich-red);
  padding: 0.18vw 1vw 0.3vw;
  border-radius: 100vw;
  font-size: 0.8vw;
  margin-right: 0.6vw;
  font-weight: 500;
  border: 1px solid var(--granich-red);
  ${props =>
    props.disabled &&
    `
        border-color: var(--granich-black);
        color: var(--granich-black);
    `}
`
export const TagList = styled.div`
  display: flex;
`
export const CourseStart = styled.div`
  margin-right: 0.8vw;
  letter-spacing: -0.01vw;
  font-weight: 500;
  white-space: nowrap;
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
    line-height: 1.4;
  }
`

export const CourseMobileStart = styled.div`
  display: none;
  margin-right: 0.8vw;
  letter-spacing: -0.01vw;
  font-weight: 500;
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
    line-height: 1.4;
    display: block;
  }
`
export const CourseDuration = styled.div`
  font-weight: 500;
  letter-spacing: -0.01vw;
  white-space: nowrap;
  @media only screen and (max-width: 575px) {
    display: none;
  }
`
export const CourseButton = styled.a`
  display: inline-flex;
  align-items: center;
  color: white;
  background: var(--granich-red-gradient-horizontal);
  margin-left: auto;
  padding: 0.8vw 1.4vw 1vw 1.4vw;
  letter-spacing: 0.06vw;
  border-radius: 0.3vw;
  font-size: 1.5vw;
  font-weight: 400;
  transition: all 0.2s ease;
  user-select: none;
  box-shadow: 0.25vw 0.25vw 0.4vw rgba(0, 0, 0, 0.25);
  letter-spacing: 0.05vw;
  white-space: nowrap;

  svg {
    width: 0.9vw;
    height: 0.9vw;
    margin-left: 0.5vw;
    margin-top: 0.2vw;
  }
  :hover {
    transform: scale(1.05);
    cursor: pointer;
    color: white;
    font-size: 1.5vw;
    font-weight: 400;
    letter-spacing: 0.05vw;
  }

  @media only screen and (max-width: 575px) {
    margin-left: 0;
    font-size: 4.3vw;
    padding: 3vw 5vw;
    border-radius: 1.5vw;
    margin-right: 4.5vw;
    box-shadow: 0.7vw 0.7vw 1.5vw rgba(0, 0, 0, 0.3);
    :hover {
      font-size: 4.3vw;
      transform: none;
    }
    svg {
      width: 3vw;
      height: 3vw;
      margin-left: 1.2vw;
      margin-top: 0.8vw;
    }
  }
  ${props =>
    props.type === "Мастер-класс" &&
    `
        padding: 0.8vw 3vw 1vw;
        @media only screen and (max-width: 575px) {
            padding: 3vw 10vw;
        }
    `}
  ${props =>
    props.status &&
    `
        background: var(--granich-black-gradient);
    `}
`

export const CourseButtonDevelopment = styled.div`
  display: inline-flex;
  color: white;
  background: var(--granich-black-gradient);
  padding: 0.8vw 1.4vw 1vw 1.4vw;
  border-radius: 0.3vw;
  font-size: 1.5vw;
  font-weight: 400;
  user-select: none;
  box-shadow: 0.25vw 0.25vw 0.4vw rgba(0, 0, 0, 0.25);
  letter-spacing: 0.05vw;
  @media only screen and (max-width: 575px) {
    font-size: 4.3vw;
    padding: 3vw 5vw;
    border-radius: 1.5vw;
    margin-right: 4.5vw;
    box-shadow: 0.7vw 0.7vw 1.5vw rgba(0, 0, 0, 0.3);
  }
`

export const ContentMain = styled.div`
  display: flex;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
  }
`

export const ContentButton = styled.div`
  margin-left: auto;

  @media only screen and (max-width: 575px) {
    margin-left: 0;
    display: flex;
  }
`
