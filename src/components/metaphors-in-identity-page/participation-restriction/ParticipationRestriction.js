import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import WarningSign from "../../../assets/svgs/freelance/warning-icon.svg"

export const Section = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  margin-bottom: 4vw;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  height: 100%;
  min-height: 100%;
  .container {
      position: relative;
      /* background: black; */
      height: 100%;
      min-height: 100%;
  }
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
  }
`

export const Wrapper = styled.div`
    padding: 2vw 1vw;
    background: rgba(256,256,256,0.85);
    border-radius: 0.6vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 100%;
    /* min-height: 100%; */
    @media only screen and (max-width: 575px) {
        border-radius: 2.5vw;
        padding: 5vw 1vw 2vw;
        align-items: flex-start;
        /* height: 149vw;
        min-height: 149vw; */
    }
`;

export const RestrictionWarning = styled.div`
    background: rgba(0,30,160);
    width: 56vw;
    border-radius: 1.5vw;
    padding: 3vw;
    padding: 3.5vw 4vw;
    @media only screen and (max-width: 575px) {
        margin-top: 30vw;
        padding: 5vw 7vw 7vw;
        border-radius: 2.5vw;
        width: 78vw;
    }
`

export const RestionWarningTitle = styled.div`
    color: white;
    font-size: 3.7vw;
    font-weight: 700;
    margin-bottom: 2vw;

    @media only screen and (max-width: 575px) {
        font-size: 7vw;
        width: 100%;
        margin-bottom: 3vw;
    }
`;

export const RestionWarningInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media only screen and (max-width: 575px) {
        flex-direction: column;

    }
`;

export const RestionionWarningText = styled.div`
    color: white;
    margin-right: 3vw;
    font-size: 1.7vw;
    min-width: 48%;
    width: 48%;
    line-height: 1.3;
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        width: 100%;
        margin-right: 0;
        margin-bottom: 5vw;
    }
`;

export const RestionWarningTelegramButton = styled.a`
    color: white;
    background: var(--granich-red);
    border-radius: 3vw;
    display: flex;
    align-items: center;
    /* justify-content: flex-start; */
    padding: 1.5vw 2.2vw;
    border-radius: 1.5vw;
    font-size: 2vw;
    font-weight: bold;
    display: inline-flex;
    /* margin-right: 3vw; */
    /* max-width: 38%; */
    transition: all 0.2s ease;

    svg {
        margin-left: 1vw;
        width: 4.5vw;
        min-width: 4.5vw;
    }
    
    :hover {
        cursor: pointer;
        transform: scale(1.1);
        font-size: 2vw;
        color: white;
        font-weight: bold;
    };

    @media only screen and (max-width: 575px) {
        font-size: 4.9vw;
        max-width: 70%;
        padding: 2vw 4vw;
        border-radius: 2.5vw;

        :hover {
            font-size: 4.9vw;
            transform: none;
        }

        svg {
            margin-left: 2vw;
            width: 9vw;
            min-width: 9vw;
        }
    }
`;
