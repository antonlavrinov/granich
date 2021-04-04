import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

export const ArrowRightButton = styled(props => <Img {...props} />)`
  width: 3.6vw;
  transition: all 0.2s ease;
  :hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 575px) {
    width: 11.5vw;
  }
`

export const PrivacyPopupLink = styled.a``

export const Section = styled.section``

export const Wrapper = styled.div`
  width: 100%;
  background: var(--granich-red);
  border-radius: 0.6vw;
  position: relative;
  @media only screen and (max-width: 575px) {
    border-radius: 2.5vw;
  }
`

export const Container = styled.div`
  padding: 2.1vw 3vw;
  padding-right: 3vw;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    padding: 7.2vw 5.5vw 8vw;
  }
`

export const Text = styled.div`
  font-size: 1.7vw;
  font-weight: 400;
  width: 36vw;
  line-height: 1.3;
  color: white;
  span {
    font-style: italic;
    color: inherit;
    font-size: 2.3vw;
    line-height: 0.5;
    font-weight: 500;
    font-family: EB Garamond;
  }
  @media only screen and (max-width: 575px) {
    font-size: 4vw;
    width: 70vw;
    line-height: 1.3;
    margin-bottom: 4vw;
    span {
      letter-spacing: -0.01vw;
      font-size: 5.4vw;
    }
  }
`

export const Form = styled.form`
  display: flex;
  align-items: flex-start;
  position: relative;
  flex-direction: column;
`

export const Input = styled.input`
  height: 3.2vw;
  border: none;
  border-radius: 0.6vw;
  box-shadow: 0 0 0.5vw rgba(0, 0, 0, 0.5) inset;
  padding: 1vw 1.1vw;
  width: 26vw;
  font-size: 1.55vw;
  margin-right: 1.1vw;
  ${props =>
    props.errorStyle &&
    `
        ::placeholder {
            color: var(--granich-red);
        }
    `}
  ::placeholder {
    font-size: 1.55vw;
  }

  @media only screen and (max-width: 575px) {
    border-radius: 2.5vw;
    width: 64vw;
    height: 10.5vw;
    padding: 0 4vw;
    font-size: 4.1vw;
    margin-right: 2.5vw;
    box-shadow: 0 0 1.5vw rgba(0, 0, 0, 0.5) inset;
    ::placeholder {
      font-size: 4.1vw;
    }
  }
`

export const Button = styled.button`
  height: 3.4vw;
  border: none;

  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 575px) {
    min-width: 14vw;
    min-height: 14vw;

    svg {
      margin-left: -1vw;
    }
  }
`

export const FormPolitikaLabel = styled.div`
  color: white;
  margin-top: 0.5vw;
  font-size: 1.1vw;
  width: 27vw;
  a {
    color: white;
    font-weight: 500;
    display: inline-block;
    position: relative;
    font-weight: 400;

    :after {
      content: "";
      height: 1px;
      width: 100%;
      background: rgba(256, 256, 256, 0.5);
      position: absolute;
      bottom: -0.2vw;
      left: 0;
    }
    :hover {
      :after {
        background: white;
      }
    }
  }
  @media only screen and (max-width: 575px) {
    font-size: 3.6vw;
    margin-top: 2vw;
    line-height: 1.3;
    width: 100%;
    a {
      margin: 0;
    }
  }
`

export const WrapperInputAndButton = styled.div`
  display: flex;
  align-items: center;
`
