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
      background: url("./images/arrow-white-newpage-01.png");
      /* background: url(../assets/images/arrow_out.png); */
      background-size: cover;
      z-index: 1;
    }
    :before {
      content: "";
      position: absolute;
      border-bottom: 1.5px solid white;
      width: 100%;
      bottom: 0.1vw;
      left: 0;
    }
  }
`

// export const Tooltip = styled(Tippy)`
//   background: white;
//   border-radius: 3px;
//   line-height: 1.3;
//   pointer-events: none;

//   .tippy-content {
//     padding: 10px 10px;
//     overflow: hidden;
//   }

//   .tippy-arrow {
//     &:before {
//       background: none;
//       transform: scaleX(0.7);
//       border-left: 7px solid transparent;
//       border-right: 7px solid transparent;
//     }
//   }

//   &[data-placement^='bottom'] {
//     bottom: 0;
//     .tippy-arrow {
//       &:before {
//         border-bottom-color: white;
//         filter: drop-shadow(0px -1px 0px black);
//       }
//     }
//   }

//   &[data-placement^='top'] {
//     top: 0;
//     .tippy-arrow {
//       &:before {
//         border-top-color: white;
//         bottom: -7.5px;
//         filter: drop-shadow(0px 1px 0px black);
//       }
//     }
//   }
// `;