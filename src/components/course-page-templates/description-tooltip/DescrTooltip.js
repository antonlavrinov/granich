import styled from "styled-components";
import 'react-tippy/dist/tippy.css'
import {
  Tooltip,
} from 'react-tippy';
// import Tippy from "@tippyjs/react";
// import "tippy.js/dist/tippy.css";


export const StyledTooltip = styled(Tooltip)`
  span {
    font-weight: 500;
    position: relative;
    color: var(--granich-red);
    cursor: pointer;
    /* :hover {
      :after {
        border-color: transparent;
      }
    } */
    :after {
      content: "";
      position: absolute;
      border-bottom: 1.5px dashed var(--granich-red);
      width: 100%;
      bottom: -0.2vw;
      left: 0;
    }
  }
`;

export const StyledContent = styled.div`
  color: white;
  font-size: 1.4vw;
  line-height: 1.7;
  text-align: left;
  i {
    font-family: "EB Garamond";
    color: white;
    font-style: italic;
    font-weight: 500;
    font-size: 2vw;
    line-height: 1;
    display: block;
    white-space: nowrap;
  }

  span {
    display: inline-flex;
    align-items: center;
    color: white;
    /* img {
      width: 1.5vw;
      top: 0.5vw;
      position: relative;
    } */
  }

  a {
    /* display: block; */
    /* font-size: 1vw; */
    position: relative;


    /* text-decoration: underline; */
    :hover {
      :before {
        border-color: transparent;
      }
    }
    :after {
      content: "";
      position: absolute;
      top: 55%;
      transform: translateY(-50%);
      right: -2vw;
      height: 1.5vw;
      width: 1.5vw;
      background: url("/images/arrow-white-newpage-01.png");
      background-size: cover;
      z-index: 1;
    }
    :before {
      content: "";
      position: absolute;
      border-bottom: 1.5px solid white;
      width: 100%;
      bottom: 0.25vw;
      left: 0;
    }
  }
  @media only screen and (max-width: 575px) {
    font-size: 4vw;
    i {
      font-size: 5.5vw;
      font-weight: 400;
    }

    a {
      :after {
        right: -5vw;
        height: 4vw;
        width: 4vw;
      }
      :before {
        bottom: 1vw;
      }
    }
`;