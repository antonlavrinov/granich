import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

export const SocialIcon = styled(props => <Img {...props} />)`
  width: 2.1vw;
  height: 2.1vw;
  transition: transform 0.2s ease;
  :hover {
    transform: scale(1.05);
  }
  @media only screen and (max-width: 575px) {
    width: 7.5vw;
    height: 7.5vw;
  }
  ${props =>
    props.round &&
    `
        width: 2vw;
        height: 2vw;
        @media only screen and (max-width: 575px) {
            width: 7vw;
            height: 7vw;
        }
    `}
`

export const Wrapper = styled.div`
  background: #e8e8e8;
  border-radius: 0.6vw;
  padding: 1.7vw 1.5vw 2vw 2.8vw;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 575px) {
    border-radius: 2.5vw;
    padding: 6.5vw 8vw 8vw 10vw;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 3vw;
  }
`
export const Image = styled(props => (
  <BackgroundImage {...props}></BackgroundImage>
))`
  width: 5.1vw;
  height: 5.1vw;
  border-radius: 100vw;
  overflow: hidden;
  border: 1.5px solid var(--granich-black);
  background-color: var(--granich-grey);
  @media only screen and (max-width: 575px) {
    width: 19.5vw;
    height: 19.5vw;
  }
`
export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 0.8vw;
  position: relative;
  @media only screen and (max-width: 575px) {
    margin-right: 0;
  }
`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0.6vw;
  margin-bottom: 0.1vw;
  svg {
    transition: all 0.2s ease;
    :hover {
      transform: scale(1.1);
    }
  }
  @media only screen and (max-width: 575px) {
    margin-top: 2vw;
    margin-bottom: 1.5vw;
  }
`
export const Email = styled.span`
    font-size: 0.8vw;
    font-weight: 400;
    display: block;
    color: var(--granich-grey);
    padding-bottom: 0.2vw;
    position: relative;
    margin-right: 0.4vw;
    background: none;
    border-bottom: 2px dotted rgba(0,0,0,0.2);
    :hover {
        font-size: 0.8vw;
        color: var(--granich-grey);
        border-bottom: 2px dotted var(--granich-grey);
        cursor: pointer;
        &:before, &:after {
            display: block;
        }
    }
    &:before {
        content: '';
        display: none;
        position: absolute;
        z-index: 9998;
        top: -0.85vw;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        //bottom
        border-right: 0.55vw solid transparent;
        border-left: 0.55vw solid transparent;
        border-top: 0.55vw solid var(--granich-black);
        ${props =>
          props.content === "Скопировано :)" &&
          `
            border-top: 0.55vw solid var(--granich-red);
        `}
    }

    &:after {
        content: '${props => props.content}';
        display: none;
        position: absolute;
        z-index: 9999;
        top: -2.8vw;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-size: 0.8vw;
        line-height: 1;
        padding: 0.7vw 1vw;
        min-width: 5vw; 
        text-align: center;
        border-radius: 0.2vw;
        white-space: nowrap;
        background: var(--granich-black);
        ${props =>
          props.content === "Скопировано :)" &&
          `
            background: var(--granich-red);
        `}
        

    }

    @media only screen and (max-width: 575px) {
        font-size: 3.8vw;
        padding-bottom: 0;
        :hover {
            font-size: 3.8vw;
            border-bottom: dotted 1.5px rgba(0,0,0,0);

        }
        &:after {
            font-size: 4.5vw;
            padding: 3vw;
            top: -13vw;
            ${props =>
              props.content === "Скопировано :)" &&
              `
                background: var(--granich-red);
            `}
        }
        &:before {
            top: -3.2vw;
            border-right: 2vw solid transparent;
            border-left: 2vw solid transparent;
            border-top: 2vw solid var(--granich-black);
            ${props =>
              props.content === "Скопировано :)" &&
              `
                border-top: 2vw solid var(--granich-red);
            `}
        }
    }

        

`
export const Info = styled.div`
  min-height: 5.8vw;
  line-height: 1.35;

  @media only screen and (max-width: 575px) {
    min-height: 21vw;
  }
`
export const InfoName = styled.div`
  font-weight: 600;
  font-size: 1.16vw;
  width: 18.5vw;
  padding-bottom: 0.4vw;

  @media only screen and (max-width: 575px) {
    font-size: 4.4vw;
    line-height: 1.3;
    width: 67vw;
    padding-bottom: 1.5vw;
  }
`

export const Description = styled.div`
  font-size: 1.16vw;
  font-weight: 500;
  width: 18.5vw;
  p:empty {
    display: none;
  }

  p {
    color: var(--granich-grey);
    padding-bottom: 0.4vw;
    position: relative;

    :before {
      content: "• ";
      position: absolute;
      top: -0vw;
      left: -1vw;
      font-size: 1.1vw;
      color: rgba(0, 0, 0, 0.2);
    }
  }
  a {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    :hover {
      border-bottom: 1px solid var(--granich-grey);
    }
  }
  @media only screen and (max-width: 575px) {
    font-size: 4.3vw;
    line-height: 1.3;
    margin-top: 0;
    width: 67vw;
    p {
      color: var(--granich-grey);
      padding-bottom: 1.5vw;
      position: relative;
      :before {
        content: "• ";
        position: absolute;
        top: -0vw;
        left: -4vw;
        font-size: 4vw;
        color: rgba(0, 0, 0, 0.2);
      }
    }
  }
`

export const SocialLink = styled.a``

export const CategoryTitle = styled.div`
  font-size: 2vw;
  letter-spacing: -0.1vw;
  font-weight: 700;
  margin-bottom: 1vw;
  @media only screen and (max-width: 575px) {
    font-size: 9vw;
    margin-bottom: 4vw;
  }
`
