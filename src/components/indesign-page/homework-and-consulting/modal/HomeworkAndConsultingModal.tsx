import React from "react"
import styled from "styled-components"

export const FormWrapper = styled.div``

export const FormContainer = styled.div`
  padding: 3vw 2.5vw 2.5vw 2.5vw;
  @media only screen and (max-width: 575px) {
    padding: 5vw 5vw 3vw;
  }
`

export const FormTitle = styled.h2`
  font-size: 3vw;
  font-weight: 600;
  letter-spacing: -0.15vw;
  line-height: 0.85;
  margin-bottom: 1.3vw;
  @media only screen and (max-width: 575px) {
    font-size: 11vw;
    width: 100%;
    margin-bottom: 8vw;
  }
`
export const Form = styled.form`
  background: white;
  border-radius: 0.6vw;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0.7vw rgba(0, 0, 0, 0.2);
  position: relative;
  width: 30vw;

  @media only screen and (max-width: 575px) {
    border-radius: 2.5vw;
    width: 100%;
    br {
      display: none;
    }
  }
`
export const FormInput = styled.input`
  border-radius: 0.8vw;
  border: none;
  width: 100%;
  box-shadow: inset 0 0 0.5vw rgba(0, 0, 0, 0.2);
  padding: 0.7vw 1.4vw;
  margin-top: 0.7vw;
  margin-bottom: 0.7vw;
  /* margin-right: 1vw; */
  /* margin-left: 0.3vw; */
  font-size: 1.35vw;
  border: 1px solid #dedede;
  background: #fafafa;
  @media only screen and (max-width: 575px) {
    width: 100%;
    box-shadow: inset 0 0 1.2vw rgba(0, 0, 0, 0.2);
    padding: 2vw 4vw;
    font-size: 4vw;
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 1vw;
    margin-top: 3vw;
    border-radius: 2.5vw;
  }
  ${props =>
    props.errorStyle &&
    `
          border: 1px solid var(--granich-red);
          box-shadow: inset 0 0 0.5vw rgba(228, 5, 33, 0.4);
          @media only screen and (max-width: 575px) {
              box-shadow: inset 0 0 1.2vw rgba(228, 5, 33, 0.4);
          }
      `}
`

export const FormInputLabel = styled.label`
  font-size: 0.9vw;
  color: var(--granich-light-grey);
  max-width: 7vw;
  display: inline-block;
  position: relative;
  top: 0.7vw;

  @media only screen and (max-width: 575px) {
    font-size: 3vw;
    max-width: 100%;
    top: 0vw;
    margin-left: 0.4vw;
    display: none;
  }
`

export const FormInputLabelMobile = styled.label`
  font-size: 0.9vw;
  color: var(--granich-light-grey);
  max-width: 7vw;
  display: inline-block;
  position: relative;
  top: 0.3vw;
  display: none;
  @media only screen and (max-width: 575px) {
    display: block;
    font-size: 3vw;
    max-width: 100%;
    top: 0vw;
    margin-left: 0.4vw;
  }
`

export const FormCheckbox = styled.input`
  margin-left: 0.3vw;
  @media only screen and (max-width: 575px) {
  }
`

export const FormPolitikaLabel = styled.div`
  font-size: 1.2vw;
  letter-spacing: -0.02vw;
  /* margin-top: 1vw; */
  /* margin-left: 0.4vw; */
  /* margin-bottom: 0.7vw; */
  /* padding-bottom: 1vw; */
  /* margin-right: 0.8vw; */
  line-height: 1.4;

  a {
    color: var(--granich-red);
    font-weight: 400;
    display: inline-block;
    position: relative;

    :after {
      content: "";
      height: 1px;
      width: 100%;
      background: rgba(228, 5, 33, 0.2);
      position: absolute;
      bottom: -0.1vw;
      left: 0;
    }

    :hover {
      // border-bottom: none;
      :after {
        background: var(--granich-red);
      }
    }
  }
  @media only screen and (max-width: 575px) {
    font-size: 3vw;
    margin-top: 3vw;
  }
  ${props =>
    props.line &&
    `
        border-bottom: 1px solid #dedede;
        :last-child {
            border-bottom: none;
        }
        @media only screen and (max-width: 575px) {
            padding-bottom: 3vw;
        }
      `}
`

export const FormCheckboxLabel = styled.label`
  font-size: 1.2vw;
  user-select: none;
  letter-spacing: -0.02vw;
  margin-top: 1vw;
  margin-left: 0.4vw;
  margin-bottom: 0.7vw;
  display: flex;

  padding-bottom: 1vw;
  margin-right: 0.8vw;

  a {
    color: var(--granich-red);
    font-weight: 400;
    display: inline-block;
    margin: 0 0.4vw;
    position: relative;

    :after {
      content: "";
      height: 1px;
      width: 100%;
      background: rgba(228, 5, 33, 0.2);
      position: absolute;
      bottom: -0.1vw;
      left: 0;
    }

    :hover {
      // border-bottom: none;
      :after {
        background: var(--granich-red);
      }
    }
  }
  @media only screen and (max-width: 575px) {
    font-size: 3vw;
    margin-top: 3vw;
  }
  ${props =>
    props.line &&
    `
    border-bottom: 1px solid #dedede;
    :last-child {
        border-bottom: none;
    }
    @media only screen and (max-width: 575px) {
        padding-bottom: 3vw;
    }
  `}
`

export const FormLabelPrice = styled.div`
  font-family: EB Garamond;
  font-style: italic;
  font-weight: 500;
  font-size: 2vw;
  line-height: 1;
  white-space: nowrap;
  @media only screen and (max-width: 575px) {
    font-size: 5vw;
  }
`

export const FormLabelText = styled.div`
  width: 24vw;
  @media only screen and (max-width: 575px) {
    width: 56vw;
  }
`

export const ErrorMessage = styled.div`
  font-size: 1vw;
  color: var(--granich-red);
  margin-left: 0.4vw;
  margin-bottom: 0.5vw;
  @media only screen and (max-width: 575px) {
    font-size: 3vw;
    margin-bottom: 0.5vw;
  }
`

export const FormButtonBlock = styled.div`
  display: flex;
  /* margin-bottom: 1vw; */
  align-items: center;
  @media only screen and (max-width: 575px) {
    /* margin-bottom: 2vw; */
  }
`

export const FormButton = styled.button`
  background: var(--granich-black-gradient);
  color: white;
  padding: 1vw 1.5vw;
  border-radius: 0.5vw;
  font-size: 1.65vw;
  transition: transform 0.3s ease;
  box-shadow: 0.2vw 0.2vw 0.4vw rgba(0, 0, 0, 0.4);
  user-select: none;
  display: flex;
  align-items: center;
  svg {
    width: 2.3vw;
    height: 2.3vw;
    margin-right: 0.8vw;
    fill: white;
  }
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  @media only screen and (max-width: 575px) {
    font-size: 4.4vw;
    padding: 3vw 8vw;
    border-radius: 1.5vw;
    box-shadow: 0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.25);
    :hover {
      transform: none;
    }
    svg {
      width: 5vw;
      height: 5vw;
      margin-left: 0;
      margin-right: 1vw;
    }
  }
`

export const FormPrice = styled.div`
  display: block;
  font-family: EB Garamond;
  color: white;
  font-size: 3.5vw;
  font-style: italic;
  margin-left: 1.5vw;
  line-height: 1;
  margin-top: -0.4vw;
  letter-spacing: -0.1vw;
  white-space: nowrap;
`

export const FormSubText = styled.div`
  color: white;
  font-size: 1.17vw;
  line-height: 1.4;
  @media only screen and (max-width: 575px) {
    font-size: 2.85vw;
  }
`

export const FormFooterWrapper = styled.div`
  background: var(--granich-red);
  border-radius: 0 0 0.6vw 0.6vw;
  margin-top: auto;
  @media only screen and (max-width: 575px) {
    border-radius: 0 0 2.5vw 2.5vw;
  }
`

export const FormFooterContainer = styled.div`
  padding: 2vw 2.5vw 2vw 2.5vw;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 575px) {
    padding: 4.5vw 5vw 7vw;
  }
`

export const FormCross = styled.div`
  position: absolute;
  top: 1vw;
  right: 1vw;
  svg {
    fill: rgba(0, 0, 0, 0.2);
    width: 4vw;
    height: 4vw;
  }
  :hover {
    cursor: pointer;
    svg {
      fill: var(--granich-red);
    }
  }
  @media only screen and (max-width: 575px) {
    svg {
      width: 12vw;
      height: 12vw;
    }
  }
`

export const FormSubTextEmail = styled.span`
    position: relative;
    left: 0.5vw;
    color: inherit;
    font-size: inherit;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    :hover {
        cursor: pointer;
        border-bottom: 1px solid rgba(255, 255, 255, 1);
        &:before, &:after {
            display: block;
        }
    }
    &:before {
        content: '';
        display: none;
        position: absolute;
        z-index: 9999;
        top: -0.85vw;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        //bottom
        border-right: 0.55vw solid transparent;
        border-left: 0.55vw solid transparent;
        border-top: 0.55vw solid var(--granich-black);
    }

    &:after {
        content: '${props => props.content}';
        display: none;
        position: absolute;
        z-index: 9998;
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
        

    }

    @media only screen and (max-width: 575px) {
        padding-bottom: 0;
        display: inline-block;
        &:after {
            font-size: 4.5vw;
            padding: 3vw;
            top: -13vw;

        }
        &:before {
            top: -3.2vw;
            border-right: 2vw solid transparent;
            border-left: 2vw solid transparent;
            border-top: 2vw solid var(--granich-black);
        }
      }
`

export const CustomBr = styled(props => <br {...props} />)`
  display: none !important;
  @media only screen and (max-width: 575px) {
    display: block !important;
  }
`
