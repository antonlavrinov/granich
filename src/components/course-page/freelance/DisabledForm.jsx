import React from 'react'
import styled from 'styled-components';
import { Link } from "gatsby";
import WarningIcon from '../../../assets/svgs/freelance/warning-icon.svg';





const FormFieldsWrapper = styled.div`

`

const FormContainer = styled.div`
    padding: 2vw 2vw 1vw 2vw;
    @media only screen and (max-width: 575px) {
        padding: 3.5vw;
    }
`

const FormTags = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 1vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 1vw;
        flex-wrap: wrap;
    }

`
const FormTag = styled.div`
    border: 1px solid var(--granich-grey);
    border-radius: 100vw;
    padding: 0.15vw 0.7vw;
    font-size: 0.9vw;
    margin-right: 0.5vw;
    color: var(--granich-grey);
    letter-spacing: 0;
    :last-child {
        margin-right: 0;
    }
    ${props => props.important && `
        color: white;
        background: var(--granich-light-grey);
        border: 1px solid var(--granich-light-grey);
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



const Form = styled.form`
    height: 100%;
    width: 50%;
    position: relative;
    background: white;
    border-radius: 0.6vw;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 0 1vw rgba(0,0,0,0.2);
    @media only screen and (max-width: 575px) {
        border-radius: 1.5vw;
        width: 100%;
        br {
            display: none;
        }
    }
`
const FormInput = styled.input`
    border-radius: 0.8vw;
    border: none;
    // width: 25vw;
    width: 100%;
    box-shadow: inset 0 0 0.5vw rgba(0,0,0,0.2);
    padding: 0.7vw 1.4vw;
    margin-top: 0.7vw;
    margin-bottom: 0.7vw;
    // margin-right: 0.7vw;
    // margin-left: 0.3vw;
    font-size: 1.35vw;
    border: 1px solid #dedede;
    background: #fafafa;
    @media only screen and (max-width: 575px) {
        width: 100%;
        box-shadow: inset 0 0 1.2vw rgba(0,0,0,0.2);
        padding: 2vw 4vw;
        font-size: 4vw;
        margin-right: 0;
        margin-left: 0;
        margin-bottom: 1vw;
        margin-top: 3vw;
        border-radius: 1.5vw;
    }



`

// const FormInputLabel = styled.label`
//     font-size: 0.9vw;
//     color: var(--granich-light-grey);
//     max-width: 9vw;
//     display: inline-block;
//     position: relative;
//     top: 0.3vw;

//     @media only screen and (max-width: 575px) {
//         font-size: 3vw;
//         max-width: 100%;
//         top: 0vw;
//         margin-left: 0.4vw;
//         display: none;

//     }
// `

const FormInputLabelMobile = styled.label`
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



const FormPolitikaLabel = styled.div`
    font-size: 1.2vw;
    user-select: none;
    letter-spacing: -0.02vw;
    margin-top: 0.5vw;
    // margin-left: 0.4vw;
    margin-bottom: 0.7vw;
    line-height: 1.4;


    a {
        color: var(--granich-grey);
        font-weight: 400;
        display: inline-block;
        position: relative;
       
        :after {
            content: '';
            height: 1px;
            width: 100%;
            background: var(--granich-grey);
            position: absolute;
            bottom: -0.1vw;
            left: 0;

        }
        
        :hover {
            :after {
                background: var(--granich-black);
            }
        }
    }
    @media only screen and (max-width: 575px) {
        font-size: 3vw;
        margin-top: 5vw;
    }

`



const FormButtonBlock = styled.div`
    display: flex;
    // margin-bottom: 0.2vw;
    align-items: center;
    @media only screen and (max-width: 575px) {
        // margin-bottom: 1vw;
        
    }
`

const FormButton = styled.button`
    background: var(--granich-grey);
    color: white;
    padding: 1vw 1.5vw;
    text-align: center;
    border-radius: 0.5vw;
    font-size: 1.5vw;
    transition: transform 0.3s ease;
    box-shadow: 0.2vw 0.2vw 0.4vw rgba(0,0,0,0.4);
    @media only screen and (max-width: 575px) {
        font-size: 3.6vw;
        padding: 3vw 4.5vw;
        border-radius: 1.5vw;
        box-shadow: 0.5vw 0.5vw 1vw rgba(0,0,0,0.25);
        span {
            font-size: 2.5vw;
        }
    }

`

const FormPrice = styled.div`
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


const FormFooterWrapper = styled.div`
    background: var(--granich-light-grey);
    border-radius: 0 0 0.6vw 0.6vw;
    margin-top: auto;
    @media only screen and (max-width: 575px) {
        border-radius: 0 0 1.5vw 1.5vw;
    }


`



const FormFooterContainer = styled.div`
    padding: 1.3vw 3vw 2vw 2vw;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 575px) {
        padding: 3.5vw;
    }
`




const ParticipationWarning = styled.div`
    display: flex;
    position: absolute;
    top: 13vw;
    left: -3vw;
    transform: rotate(-20deg);
    align-items: center;
    width: 120%;
    background: var(--granich-red-gradient);
    padding: 1.2vw 5vw 1.3vw 3vw;
    margin-bottom: 6vw;

    z-index: 10;
    svg {
        fill: #830404;
        width: 4vw;
        min-width: 4vw;
        margin-right: 1.2vw;
    }
    @media only screen and (max-width: 575px) {
        width: 125%;
        padding: 3.5vw 9vw 4vw 12vw;
        align-items: flex-start;
        top: 35%;
        left: -9vw;
        transform: translateY(-50%), rotate(-30deg);
        svg {
            position: relative;
            top: 0.5vw;
            width: 10vw;
            min-width: 10vw;
            margin-right: 2vw;
        }
    }
`
const ParticipationWarningText = styled.div`
    color: white;
    font-size: 1.4vw;
    @media only screen and (max-width: 575px) {
        font-size: 3.5vw;
    }
`





const DisabledForm = ({ data }) => {



    return (
        <Form action="#" method="post" >
            <ParticipationWarning>
                <WarningIcon />
                <ParticipationWarningText>
                    Записаться можно только предварительно отправив мне своё портфолио для оценки вашей компетенции. После чего я вышлю вам ссылку для оплаты места
                </ParticipationWarningText>
            </ParticipationWarning>
            <FormFieldsWrapper>
                <FormContainer>
                    <FormTags>
                        {data.courseStream && <FormTag important>{data.courseStream} поток</FormTag>}
                        {data.courseStartAndEnd && <FormTag>{data.courseStartAndEnd}</FormTag>}
                        {data.courseTags.map((tag, idx) => {
                            return (
                                <FormTag key={idx}>{tag}</FormTag>
                            )
                        })}
                    </FormTags>
                    <FormInput
                        type="text"
                        placeholder="Имя"
                        disabled={true}

                    /> <br />
                    <FormInput
                        type="text"
                        placeholder="Фамилия"
                        name="formParams[last_name]"
                        disabled={true}

                    /> <br />
                    <FormInput
                        type="email"
                        placeholder="Электропочта"
                        name="formParams[email]"
                        id="formParams[email]"
                        disabled={true}

                    />
                    {/* <FormInputLabel htmlFor="formParams[email]">чтобы выслать ссылку для входа</FormInputLabel>
                    <br /> */}
                    <FormInputLabelMobile htmlFor="formParams[email]">чтобы выслать ссылку для входа</FormInputLabelMobile>
                    <FormInput
                        type="tel"
                        maxLength="60"
                        placeholder="Телефон"
                        name="formParams[phone]"
                        id="formParams[phone]"
                        disabled={true}

                    />
                    {/* <FormInputLabel htmlFor="formParams[phone]">для экстренной связи</FormInputLabel>
                    <br /> */}

                    <FormInputLabelMobile htmlFor="formParams[phone]">для экстренной связи</FormInputLabelMobile>
                    <FormPolitikaLabel > Нажимая на кнопку в этой форме, я принимаю условия <Link to="/privacy"> политики конфиденциальности</Link> <br />и <Link to="/public-offer"> учебного договора </Link></FormPolitikaLabel>
                </FormContainer>
            </FormFieldsWrapper>
            <FormFooterWrapper>
                <FormFooterContainer>
                    <FormButtonBlock>
                        <FormButton
                            disabled={true}
                            type="submit"
                            id="button970916"
                        >
                            Оплатить
                            </FormButton>
                        {data.coursePrice && (
                            <FormPrice><i>→ </i>{data.coursePrice}<span>₽</span></FormPrice>
                        )}
                    </FormButtonBlock>

                </FormFooterContainer>
            </FormFooterWrapper>

        </Form>
    )
}

export default DisabledForm
