import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

export const TimetableSection = styled.section`
  margin-bottom: 4vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
  }
`;

export const TimetableWrapper = styled.div`
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
`;

export const TimetableTitle = styled.h2`
  color: var(--granich-black);
  font-size: 4vw;
  letter-spacing: -0.2vw;
  font-weight: 700;
  line-height: 1;
  margin-top: -0.6vw;
  margin-bottom: 4vw;
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
    margin-bottom: 0vw;

    span {
      white-space: normal;
      font-size: 10.4vw;
      margin-left: 0;
      letter-spacing: -0.4vw;
      margin-bottom: 6.8vw;
      line-height: 0.9;
    }
  }
`;

export const TimetableImageWrapper = styled.div`
  margin-right: 4%;
  height: auto;
  min-width: 48%;
  width: 48%;
  @media only screen and (max-width: 575px) {
    min-width: 100%;
    width: 100%;
    margin-right: 0;
  }
`;

export const TimetableImage = styled(props => <Img {...props} />)`
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.15);
`;

export const TimetableInfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
  }
`;

export const TimetableInfoTextWrapper = styled.div`
  min-width: 48%;
  width: 48%;

  @media only screen and (max-width: 575px) {
    min-width: 100%;
    width: 100%;
    margin-top: 4vw;
  }
`;

export const TimetableInfoText = styled.div`
  font-size: 1.35vw;
  line-height: 1.45;
  margin-bottom: 2vw;
  font-weight: 500;
  i {
    font-weight: 500;
    color: var(--granich-black);
    border-radius: 0.2vw;
    padding: 0 0.3vw;
    font-style: normal;
    white-space: nowrap;
    background: var(--granich-light-red);
  }
  @media only screen and (max-width: 575px) {
    display: none;
  }
`;

export const TimetableInfoTextMobile = styled.div`
  display: none;
  @media only screen and (max-width: 575px) {
    display: block;
    font-size: 3.7vw;
    line-height: 1.45;
    margin-bottom: 6vw;
    font-weight: 500;
    i {
      font-weight: 500;
      color: var(--granich-black);
      font-style: normal;
      white-space: nowrap;
      background: var(--granich-light-red);
      padding: 0 1vw;
      border-radius: 0.5vw;
    }
  }
`

export const TimetableInfoGifBlock = styled.div`
  padding: 1.8vw 1.8vw 2.3vw;
  border-radius: 0.6vw;
  background: #2a2a2a;
  background: #f2f2f2;
  display: block;
  @media only screen and (max-width: 575px) {
    padding: 4vw 4vw 5vw;
    border-radius: 1.7vw;
    width: 100%;
  }
`

export const TimetableGifWrapper = styled.div`
  min-width: 100%;
  width: 100%;
  margin-right: 3vw;
  border-radius: 0.5vw;
  // background: #f2f2f2;
  min-height: 16vw;
  height: 16vw;
  @media only screen and (max-width: 575px) {
    min-width: 100%;
    width: 100%;
    border-radius: 2vw;
    margin-bottom: 0;
    min-height: 40vw;
    height: 40vw;
  }
`

export const TimetableGif = styled.img`
  min-width: 100%;
  width: 100%;
  margin-right: 3vw;
  border-radius: 0.5vw;
  @media only screen and (max-width: 575px) {
    min-width: 100%;
    width: 100%;
    margin-right: 0;
    // height: 40.8vw;
    border-radius: 2vw;
    margin-bottom: 0;
  }
`

export const TimetableGifText = styled.div`
  color: white;
  color: var(--granich-black);
  font-weight: 500;
  margin-bottom: 1vw;
  line-height: 1.35;
`

export const TimetableGifTextWrapper = styled.div`
  margin-top: 2vw;
  font-size: 1.25vw;
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
  }
`

export const TimetableGifPS = styled.div`
  padding-left: 1vw;
  color: white;
  border-left: 2px solid var(--granich-red);
  color: var(--granich-grey);
  line-height: 1.35;
  @media only screen and (max-width: 575px) {
    padding-left: 3vw;
    font-size: 3vw;
    margin-top: 2vw;
  }
`

export const BehanceContentCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1vw;
  
  margin-top: 4.5vw;
  position: relative;
  svg {
  
    :first-child {
      position: absolute;
      top: -6.3vw;
      left: 6.5vw;
      width: 6.5vw;
      fill: rgba(0,0,0,0.25);
      transform: rotate(7deg);
    }

    :nth-child(2) {
      display: none;
    }
  }

  @media only screen and (max-width: 575px) {
    grid-template-columns: 1fr 1fr;
    gap: 3vw;
    margin-top: 21vw;

    svg {

      :first-child {
        display: none;
      }

      :nth-child(2) {
        position: absolute;
        display: block;
        fill: rgba(0,0,0,0.25);
        top: -20vw;
        left: 50%;
        width: 3vw;
        transform: translateX(-50%);
      }
    }
  }
`;

export const WrapperExternalLink = styled.a`
    /* background: #0E3983; */
    border-radius: 0.5vw;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    height: 100%;
    /* min-height: 10vw; */
    box-shadow: 0 0 1vw rgba(0,0,0,0.2);
    border: 1.5px solid rgba(0,0,0,0.15);
    :hover {
        cursor: pointer;
        transform: scale(1.03);
    }
    :after {
      background: none !important;
    }

    @media only screen and (max-width: 575px) {
        /* min-height: 56vw; */
        box-shadow: 0 0 3vw rgba(0,0,0,0.1);
        border-radius: 1.5vw;
        :hover {
            transform: none;
        }
    } 
`

export const Button = styled.div`
    background: #0E3983;
    background: #F5F5F5;
    background: rgba(0,0,0,0.1);
    /* background: var(--granich-silver-gradient); */
    border-radius: 0 0 0.5vw 0.5vw;
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    padding: 0.5vw 1vw;
    align-items: center;
    ${props =>
      props.behance &&
      `
        background: #011E4B;
    `}

    @media only screen and (max-width: 575px) {
        border-radius: 0 0 1.5vw 1.5vw;
        padding: 2vw 2.5vw;
    }
`

export const ButtonText = styled.div`
  color: white;
  color: var(--granich-black);
  font-size: 1.05vw;
  font-weight: 500;
  line-height: 0.95;

  margin-left: -0.1vw;
  @media only screen and (max-width: 575px) {
    font-size: 3vw;
  }
`

export const IconsWrapper = styled.div`
  display: flex;
  margin-right: -0.4vw;
  align-items: center;
  margin-top: 0.1vw;

  @media only screen and (max-width: 575px) {
    margin-right: -1vw;
  }
`

export const BehanceOutIcon = styled(props => <Img {...props} />)`
  width: 2.2vw;
  display: block;
  @media only screen and (max-width: 575px) {
    width: 6.5vw;
  }
`

export const BehanceIcon = styled(props => <Img {...props} />)`
  width: 2.3vw;
  display: block;
  margin-right: -0.4vw;
  @media only screen and (max-width: 575px) {
    width: 6.5vw;
    margin-right: -1.4vw;
  }
`

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 10vw;
  height: 12vw;

  @media only screen and (max-width: 575px) {
    height: 29vw;
  }
`

export const ArrowText = styled.div`
  position: absolute;
  top: -5.8vw;
  left: 1.8vw;
  font-size: 0.9vw;
  max-width: 5vw;
  color: rgba(0,0,0,0.4);
  line-height: 1.35;

  @media only screen and (max-width: 575px) {
    top: -19vw;
    font-size: 3.3vw;
    color: rgba(0,0,0,0.3);
    left: 14vw;
  }
`;