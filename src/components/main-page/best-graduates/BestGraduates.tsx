import styled from "styled-components"

export const Section = styled.section`
  margin-bottom: 4vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  background: white;
  background: var(--granich-dark-grey);
  border-radius: 0.6vw;
  position: relative;
  padding: 2vw 3vw;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 575px) {
    flex-direction: column;
    border-radius: 2.5vw;
    padding: 7vw 8vw 5vw;
  }
`

export const Title = styled.h2`
  font-family: EB Garamond;
  font-style: italic;
  font-size: 3.2vw;
  min-width: 48%;
  font-weight: 500;
  line-height: 1.05;
  margin-top: -0.5vw;
  letter-spacing: 0;
  color: white;
  @media only screen and (max-width: 575px) {
    white-space: normal;
    font-size: 11vw;
    margin-bottom: 5vw;
    line-height: 0.9;
    margin-top: 0;
  }
`

export const Text = styled.div`
  font-size: 1.4vw;
  line-height: 1.35;
  color: var(--granich-light-grey);
  // margin-bottom: 1vw;
  max-width: 65%;
  margin-right: 1vw;
  span {
    display: block;
    font-weight: 500;
  }
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
    max-width: 100%;
    margin-bottom: 3vw;
  }
`

export const Mail = styled.div`
    position: relative;
    color: var(--granich-black);
    color: white;
    display: inline-block;
    border-bottom: solid 1px var(--granich-grey);
    user-select: none;
    :hover {
        cursor: pointer;
        border-bottom: solid 1px var(--granich-light-grey);
        &:before, &:after {
            display: block;
        }
    }
    &:before {
        content: '';
        display: none;
        position: absolute;
        z-index: 9998;
        top: -0.65vw;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        //bottom
        border-right: 0.55vw solid transparent;
        border-left: 0.55vw solid transparent;
        border-top: 0.55vw solid black;
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
        top: -2.6vw;
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
        background: black;
        ${props =>
          props.content === "Скопировано :)" &&
          `
            background: var(--granich-red);
        `}
        

    }

    @media only screen and (max-width: 575px) {

        padding-bottom: 0;
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
            border-top: 2vw solid black;
            ${props =>
              props.content === "Скопировано :)" &&
              `
                border-top: 2vw solid var(--granich-red);
            `}
        }

    }
`
