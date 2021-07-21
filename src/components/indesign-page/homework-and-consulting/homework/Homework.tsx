import React from "react"
import styled from "styled-components"

export const Wrapper = styled.div`
  border-radius: 0.6vw;
  background: var(--granich-black);
  padding: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2vw;
  /* min-height: 100%; */
  /* align-items: center; */
  @media only screen and (max-width: 575px) {
    border-radius: 2.5vw;
    padding: 6vw;
    margin-bottom: 5vw;
  }
`

export const Title = styled.div`
  color: white;
  font-size: 4vw;
  font-weight: 600;
  margin-bottom: 3vw;
  @media only screen and (max-width: 575px) {
    font-size: 10vw;
    margin-bottom: 7vw;
  }
`

export const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: var(--granich-red-gradient-horizontal);
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
  /* margin-bottom: 1vw; */
  /* margin-top: auto; */
  align-self: flex-end;
  min-width: 55%;
  margin-right: 1vw;
  svg {
    width: 2.3vw;
    height: 2.3vw;
    margin-right: 0.8vw;
    fill: white;
  }
  :hover {
    transform: scale(1.05);
    cursor: pointer;
    color: white;
    font-size: 1.61vw;
    font-weight: 400;
    letter-spacing: 0.06vw;
  }
  @media only screen and (max-width: 575px) {
    font-size: 5.5vw;
    /* margin: 0 5vw; */
    padding: 3vw 5vw 4vw 5vw;
    border-radius: 1.5vw;
    margin-bottom: 4vw;
    box-shadow: 0.7vw 0.7vw 1.5vw rgba(0, 0, 0, 0.3);
    width: 100%;
    :hover {
      transform: scale(1);
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

export const Notice = styled.div`
  font-size: 1.15vw;
  line-height: 1.3;
  color: var(--granich-grey);
  @media only screen and (max-width: 575px) {
    font-size: 4vw;
  }
`

export const Footer = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
  }
`
