import React from "react"
import styled from "styled-components"
import Logo from "../../../assets/svgs/granich-logo.svg"

import VisaIcon from "../../../assets/svgs/Visa.svg"
import MastercardIcon from "../../../assets/svgs/Mastercard.svg"
import CloudPaymentsIcon from "../../../assets/svgs/CloudPayments.svg"
import Link from "gatsby-link"

type IClickToCopyContent = {
  content: string
}

export const BlackLogo = styled(props => <Logo {...props} />)`
  width: 4.8vw;
  height: 3vw;
  min-width: 4.8vw;
  min-height: 3vw;
  @media only screen and (max-width: 575px) {
    width: 16vw;
    height: 11vw;
    min-width: 16vw;
    min-height: 11vw;
  }
`


export const Visa = styled(props => <VisaIcon {...props} />)`
  width: 5.5vw;
  height: 3vw;
  @media only screen and (max-width: 575px) {
    width: 14vw;
    height: 7.9vw;
  }
`
export const Mastercard = styled(props => <MastercardIcon {...props} />)`
  width: 4.8vw;
  height: 3vw;
  @media only screen and (max-width: 575px) {
    width: 12.5vw;
    height: 7.9vw;
  }
`
// const Robokassa = styled(props => <RobokassaIcon {...props} />)`
//     width: 5vw;
//     height: 3.4vw;
//     @media only screen and (max-width: 575px) {
//         width: 14vw;
//         height: 7.9vw;
//     }
// `

export const CloudPayments = styled(props => <CloudPaymentsIcon {...props} />)`
  width: 4.5vw;
  height: 3vw;
  transform: scale(1.2);
  @media only screen and (max-width: 575px) {
    width: 12.5vw;
    height: 7.9vw;
  }
`

export const Section = styled.footer`
  margin-top: auto;
  padding: 2.9vw 0 3.6vw;
  @media only screen and (max-width: 575px) {
    padding: 12vw 0 12vw;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const LogoWrapper = styled.a`
  fill: var(--granich-black);
  margin-right: 1vw;
  img {
    width: 3.6vw;
    height: 3.6vw;
    min-width: 3.6vw;
    min-height: 3.6vw;
  }
  @media only screen and (max-width: 575px) {
    margin-right: 3.5vw;
    img {
      width: 12vw;
      height: 12vw;
      min-width: 12vw;
      min-height: 12vw;
    }
  }
`

export const Info = styled.div`
  margin-right: 2vw;
  letter-spacing: -0.01vw;
  line-height: 1.4;
  @media only screen and (max-width: 575px) {
    margin-right: 0;
  }
`

export const InfoYear = styled.div`
  font-size: 1.1vw;
  font-weight: 500;
  // line-height: 1.4;
  color: var(--granich-black);
  user-select: none;
  white-space: nowrap;
  width: 100%;
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
  }
`

export const InfoMail = styled.div<IClickToCopyContent>`
    position: relative;
    font-weight: 500;
    font-size: 1.16vw;
    color: var(--granich-black);
    display: block;
    border-bottom: solid 1px var(--granich-light-grey);
    background: none;
    user-select: none;
    margin-top: -0.15vw;

    :hover {
        font-weight: 500;
        font-size: 1.16vw;
        cursor: pointer;
        border-bottom: solid 1px var(--granich-black);
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
export const FooterLink = styled(props => <Link {...props} />)`
  line-height: 1.4;
  color: var(--granich-light-grey);
  font-size: 1.16vw;
  margin-right: 1.3vw;
  user-select: none;

  :last-of-type {
    margin-right: 1.2vw;
    span {
      letter-spacing: -0.01vw;
    }
  }
  span {
    color: inherit;
    font-size: inherit;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    :hover {
      border-bottom: none;
    }
  }
  :hover {
    font-size: 1.16vw;
    color: var(--granich-light-grey);
    span {
      border-bottom: 1px solid var(--granich-light-grey);
    }
  }
  @media only screen and (max-width: 575px) {
    font-size: 3.85vw;
    margin-right: 5.5vw;
    :last-of-type {
      margin-right: 0;
    }
    span {
      :hover {
        border-bottom: 1px solid var(--granich-light-grey);
      }
    }
    :hover {
      font-size: 3.85vw;
    }
  }
`

export const Credentials = styled.div`
  line-height: 1.4;
  font-size: 0.8vw;
  letter-spacing: -0.01vw;
  color: var(--granich-light-grey);
  margin-right: 1.4vw;
  white-space: nowrap;
  // user-select: none;
  @media only screen and (max-width: 575px) {
    font-size: 2.5vw;
    line-height: 1.3;
    margin-right: 3vw;
  }
`

export const Payment = styled.div`
    display: flex;
    margin-right: -0.3vw;
    margin-top: -0.25vw;
    svg {
        margin-right: 0.8vw;
        :last-child {
            margin-right: 0;
        }
    }
    @media only screen and (max-width: 575px) {
        margin-right: 0vw;
        margin-left: auto;
        svg {
            margin-right: 1.6vw;
    }
`

export const LogoAndInfo = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5.5vw;
  }
`

export const Links = styled.div`
  display: flex;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5.5vw;
  }
`
export const CredentialsAndPayment = styled.div`
  display: flex;
  margin-left: auto;
  @media only screen and (max-width: 575px) {
    margin-left: 0;
    align-items: center;
  }
`

export const EmptyText = styled.div`
  opacity: 0;
  font-size: 0;
`
