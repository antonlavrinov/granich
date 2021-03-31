import styled from "styled-components"

export const FormMainWrapper = styled.div`
  ${props =>
    !props.policy &&
    `
      width: 51%;
      @media only screen and (max-width: 575px) {
        width: auto;
      }
  `}
`

export const FormWrapper = styled.div``

export const FormContainer = styled.div`
  padding: 2vw 0vw 1vw 2.7vw;
  @media only screen and (max-width: 575px) {
    padding: 5vw;
  }
`

export const FormTags = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.8vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 4vw;
    flex-wrap: wrap;
  }
  ${props =>
    props.formDisabled &&
    `
        div {
            color: var(--granich-grey);
            border-color: color: var(--granich-grey);
        }
    `}
`
export const FormTag = styled.div`
  border: 1px solid var(--granich-red);
  border-radius: 100vw;
  padding: 0.15vw 0.7vw;
  font-size: 0.9vw;
  margin-right: 0.5vw;
  color: var(--granich-red);
  letter-spacing: 0;
  :last-child {
    margin-right: 0;
  }
  ${props =>
    props.important &&
    `
        color: white;
        background: var(--granich-red);
    `}
  @media only screen and (max-width: 575px) {
    padding: 0.8vw 2.2vw;
    font-size: 2.8vw;
    white-space: nowrap;
    margin-right: 1vw;
    margin-bottom: 1.5vw;
    letter-spacing: -0.05vw;
  }
`

export const FormTitle = styled.h2`
  font-size: 4vw;
  font-weight: 600;
  letter-spacing: -0.15vw;
  line-height: 0.85;

  @media only screen and (max-width: 575px) {
    font-size: 10vw;
    width: 100%;
    margin-bottom: 5vw;
    letter-spacing: -0.1rem;
  }
`
export const Form = styled.form`
  height: 100%;
  position: relative;
  background: white;
  border-radius: 0.6vw;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 575px) {
    border-radius: 2.5vw;
    br {
      display: none;
    }
  }
`
export const FormInput = styled.input`
  border-radius: 0.8vw;
  border: none;
  width: 25vw;
  box-shadow: inset 0 0 0.5vw rgba(0, 0, 0, 0.2);
  padding: 0.7vw 1.4vw;
  margin-top: 0.7vw;
  margin-bottom: 0.7vw;
  margin-right: 0.7vw;
  margin-left: 0.3vw;
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
  max-width: 9vw;
  display: inline-block;
  position: relative;
  top: 0.3vw;

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

// const FormCheckbox = styled.input`
//     margin-left: 0.3vw;
//     @media only screen and (max-width: 575px) {

//     }

// `

export const FormPolitikaLabel = styled.div`
  font-size: 1.2vw;
  user-select: none;
  letter-spacing: -0.02vw;
  margin-top: 1.5vw;
  margin-left: 0.4vw;
  margin-bottom: 0.7vw;
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
      :after {
        background: var(--granich-red);
      }
    }
  }
  @media only screen and (max-width: 575px) {
    font-size: 3vw;
    margin-top: 5vw;
  }
  ${props =>
    props.formDisabled &&
    `
        a {
            color: var(--granich-grey);
            :after {
                background: rgba(0,0,0, 0.2);
            }
            :hover {
                :after {
                    background: var(--granich-grey);
                }
                
            }
        }
    `}
`

export const ErrorMessage = styled.div`
  font-size: 1vw;
  color: var(--granich-red);
  margin-left: 0.4vw;
  margin-bottom: 0.5vw;
  // white-space: nowrap;
  @media only screen and (max-width: 575px) {
    font-size: 3vw;
    white-space: normal;
    margin-bottom: 0.5vw;
  }
`

export const FormButtonBlock = styled.div`
  display: flex;
  margin-bottom: 0.2vw;
  align-items: center;
  @media only screen and (max-width: 575px) {
    margin-bottom: 1vw;
  }
`

export const FormButton = styled.button`
  background: var(--granich-black-gradient);
  color: white;
  padding: 1vw 3vw;
  text-align: center;
  border-radius: 0.5vw;
  font-size: 1.65vw;
  transition: transform 0.3s ease;
  box-shadow: 0.2vw 0.2vw 0.4vw rgba(0, 0, 0, 0.4);

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  @media only screen and (max-width: 575px) {
    font-size: 4.4vw;
    padding: 3vw 8vw;
    border-radius: 1.5vw;
    box-shadow: 0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.25);
    span {
      font-size: 2.5vw;
    }
    :hover {
      transform: none;
    }
  }
  ${props =>
    props.formDisabled &&
    `
        background: var(--granich-grey);
        padding: 1vw 1.3vw;
        font-size: 1.4vw;
        :hover {
            transform: none;
            cursor: default;
        }
        @media only screen and (max-width: 575px) {
            font-size: 3.6vw;
            padding: 3vw 3.5vw;
            span {
                font-size: 2.5vw;
            }
            :hover {
                transform: none;
            }
        }
    `}
`

export const FormPrice = styled.div`
  color: white;
  margin-left: auto;
  font-family: EB Garamond;
  font-size: 4vw;
  font-style: italic;
  font-weight: 500;
  span {
    color: inherit;
    font-family: inherit;
    display: inline-block;
    margin-left: 0.5vw;
  }
  i {
    color: inherit;
    position: relative;
    top: -0.3vw;
    right: 0.8vw;
    display: inline-block;
  }
  @media only screen and (max-width: 575px) {
    font-size: 12.5vw;
    padding-right: 1vw;
    margin-top: -1vw;
    i {
      display: none;
    }
  }
`

export const FormSubText = styled.div`
  color: white;
  font-size: 1.17vw;
  white-space: nowrap;
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
  ${props =>
    props.formDisabled &&
    `
        background: var(--granich-light-grey);
    `}
`

export const FormFooterContainer = styled.div`
  padding: 1.3vw 3vw 2vw;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 575px) {
    padding: 4.5vw 5vw 7vw;
  }
`
