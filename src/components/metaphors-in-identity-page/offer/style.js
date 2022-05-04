import React from "react";
import styled from "styled-components";
import PotokIcon from "../../../assets/svgs/graph-design/graph-design-potok-icon.svg";
import DateIcon from "../../../assets/svgs/graph-design/graph-design-date-icon.svg";
import { Link } from "gatsby";

export const Section = styled.section`
  margin-bottom: 2vw;
`

export const Wrapper = styled.div`
  background: white;
  border-radius: 0.6vw;
  padding: 4vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 575px) {
    padding: 5vw 0vw;
    border-radius: 2.5vw;
    align-items: start;
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
`;

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
`;

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
`;

export const MainImage = styled.img`
  position: absolute !important;
  width: auto;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  user-select: none;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
    position: relative !important;
    width: 100% !important;
    ${({ courseTitle }) => courseTitle === "Фундамент Графдизайна" && `
      margin-bottom: 0;
    `}
  }
`

export const Tags = styled.div`
  display: flex;
  margin-bottom: 1vw;
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

export const Title = styled.h1`
  line-height: 1;
  margin-bottom: 3vw;
  position: relative;
  text-align: center;

  p {
    font-size: 7.5vw;
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
    margin: 4vw 0;
    line-height: 0.8;
    padding: 0 5vw;
    text-align: left;
    margin-bottom: 10vw;

    p {
      font-size: 15vw;
      letter-spacing: -0.1vw;
      i { 
          letter-spacing: -0.2vw;
          font-size: 15.5vw;
          margin-top: 2vw;
      }
    }
  }   
`
export const Descr = styled.div`
  width: 38vw;
  font-size: 1.55vw;
  margin-bottom: 2.5vw;
  margin-left: 0.8vw;
  line-height: 1.47;
  font-weight: 500;
  position: relative;
  z-index: 1;
  text-align: center;

  p {
    letter-spacing: 0 !important;
    font-size: 7vw;
    line-height: 1.05;

  }

  @media only screen and (max-width: 575px) {
    width: 95%;
    font-size: 4.6vw;
    padding: 0 5vw;
    margin-bottom: 5vw;
    margin-left: 0;
    text-align: left;

    p {
      font-size: 15vw;
    }
  }

`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    align-items: flex-start;
  }
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
  position: relative;
  z-index: 1;
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

export const AdditionalText = styled.div`
    font-size: 1vw;
    width: 17vw;
    margin-left: 1.5vw;
    line-height: 1.45;
    font-weight: 500;
    @media only screen and (max-width: 575px) {
        width: 90%;
        font-size: 3.7vw;
        padding: 0 3vw;
        margin-top: 2vw;
    }
`
