import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`




    * {
        font-family: 'Inter', sans-serif;
        --granich-red: ${props => props.theme === "blue" ? "rgb(0,70,255)" : "rgb(228, 5, 33)"};
        --granich-dark-red: #830404;
        --granich-black: #2d2d2d;
        --granich-background-color: #f2f2f2;
        --granich-grey: #888989;
        --granich-light-grey: #a5a5a5;
        --granich-dark-grey: #2B2B2B;
        --granich-green: #38AA0F;
        --granich-light-red: rgba(228,5,33, 0.2);
        color: var(--granich-black);
        --granich-telegram: #36ADE0;
        --granich-black-gradient: linear-gradient(90deg, #333333 0%, #1B1B1B 50%);
        --granich-red-gradient: ${props => props.theme === "blue" ? "linear-gradient(90deg, rgb(0,70,255) 0%, rgba(0,30,160,1) 70%)" : "linear-gradient(90deg, rgba(230,25,51,1) 0%, rgba(213,12,34,1) 30%, rgba(189,3,27,1) 70%)"};
        --granich-telegram-gradient: linear-gradient(90deg, #32A1CD 0%, #36ADE0 50%);
        --granich-vk-gradient: linear-gradient(90deg, #167CC2 0%, #0980C5 50%);
        --granich-red-gradient-horizontal: ${props => props.theme === "blue" ? "linear-gradient(90deg, rgb(0,70,255) 0%,rgba(0,30,160,1) 100%)" : "linear-gradient(90deg, rgba(230,25,51,1) 0%, rgba(213,12,34,1) 50%, rgba(189,3,27,1) 100%)"};
        --granich-beige-gradient: linear-gradient(90deg, rgba(203,161,129,1) 0%, rgba(181,141,110,1) 100%);
        --granich-silver-gradient: linear-gradient(90deg, rgba(185,185,185,1) 0%, rgba(143,143,143,1) 100%);
        --granich-dark-beige: #946C4F;
        --telegram: #229ED9;
        letter-spacing: 0vw;
        font-weight: 400;
    }

    body {
        background: var(--granich-background-color);
        overflow-x: hidden;


    }

    u {
        text-decoration: none;
        color: inherit;
    }


    



`

export const Container = styled.div.attrs({ className: "container"})`
  width: 75.5vw;
  margin: 0 auto;
  @media only screen and (max-width: 575px) {
    width: 90vw;
  }
`
