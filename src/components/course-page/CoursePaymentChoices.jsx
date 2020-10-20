import React, {useState} from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import CorporateIcon from '../../assets/svgs/graph-design/graph-design-corporate.svg';
import PaypalIcon from '../../assets/svgs/graph-design/graph-design-paypal.svg';
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image';

const Paypal = styled(props=> <PaypalIcon {...props}/>)`
    width: 7.5vw;
    position: absolute;
    right: 1.5vw;
    bottom: 1vw;
    @media only screen and (max-width: 575px) {
        width: 25vw;
        right: 4vw;
        bottom: 4vw;
    }


`

const CorporateWrapper = styled.div`
    position: absolute;
    right: 1.2vw;
    bottom: 1.2vw;
    background: #ab8161;
    border-radius: 100vw;
    width: 5vw;
    height: 5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        width: 5vw;
        fill: #65442c;
    }
    @media only screen and (max-width: 575px) {
        right: 4vw;
        bottom: 3vw;
        width: 17vw;
        height: 17vw;
        svg {
            width: 17vw;
        }
    }

`

const PaymentChoicesSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`


const PaymentChoicesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1.5vw;
    @media only screen and (max-width: 575px) {
        grid-template-columns: 1fr;
        grid-column-gap: 0;
        grid-row-gap: 3vw;
    }
    
`

const PaymentChoice = styled.div`
    padding: 1.3vw 1.5vw;
    border-radius: 0.5vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 12vw;
    position: relative;
    ${props => props.grey && `
        background: var(--granich-silver-gradient);
    `}
    ${props => props.gold && `
        background: var(--granich-beige-gradient);
    `}
    ${props => props.blue && `
        background: linear-gradient(110deg, #003289 0%, #1776d7 100%);;
    `}
    @media only screen and (max-width: 575px) {
        border-radius: 1.5vw;
        padding: 5vw;
        min-height: 40vw;
    }
`

const PaymentChoiceTitle = styled.div`
    font-size: 1.5vw;
    font-weight: 600;
    color: white;
    margin-bottom: 0.2vw;
    @media only screen and (max-width: 575px) {
        font-size: 5vw;
    }
`
const PaymentChoiceText = styled.div`
    font-size: 1.1vw;
    line-height: 1.25;
    color: white;
    max-width: 80%;
    margin-top: auto;
    ${props => props.mail && `
        margin-top: auto;
        max-width: 55%;
    `}


    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        max-width: 70%;
        ${props => props.mail && `
            margin-top: auto;
            max-width: 55%;
        `}
    }

`

// const PaymentChoiceButton = styled.span`
//     background: var(--granich-black-gradient);
//     color: white;
//     padding: 0.8vw 1.5vw;
//     border-radius: 0.3vw;
//     font-size: 1.15vw;
//     transition: transform 0.3s ease;
//     display: inline-flex;
//     margin-top: auto;
//     box-shadow: 0.2vw 0.2vw 0.4vw rgba(0,0,0,0.4);
//     :hover {
//         color: white;
//         cursor: pointer;
//         transform: scale(1.03);
//     }
//     @media only screen and (max-width: 575px) {
//         font-size: 4.4vw;
//         padding: 3vw 8vw;
//         border-radius: 1.5vw;
//         box-shadow: 0.5vw 0.5vw 1vw rgba(0,0,0,0.25);
//         :hover {
//             transform: none;
//         }
//     }
// `



const PaymentChoiceEmail = styled.span`
    color: white;
    display: inline-block;
    border-bottom: 1.5px solid rgba(256,256,256,0.3);
    background: none;
    user-select: none;
    position: relative;
    :hover {
        cursor: pointer;
        border-bottom: 1.5px solid white;
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
        ${props => props.content === 'Скопировано :)' && `
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
        ${props => props.content === 'Скопировано :)' && `
            background: var(--granich-red);
        `}
        

    }

    @media only screen and (max-width: 575px) {
        font-size: 3.8vw;
        padding-bottom: 0;
        :hover {
            font-size: 3.8vw;
            border-bottom: solid 1.5px white;

        }
        &:after {
            font-size: 4.5vw;
            padding: 3vw;
            top: -13vw;
            ${props => props.content === 'Скопировано :)' && `
                background: var(--granich-red);
            `}
        }
        &:before {
            top: -3.2vw;
            border-right: 2vw solid transparent;
            border-left: 2vw solid transparent;
            border-top: 2vw solid var(--granich-black);
            ${props => props.content === 'Скопировано :)' && `
                border-top: 2vw solid var(--granich-red);
            `}
        }
    }

`

const PaymentChoiceImageIcon = styled(props => <Img {...props}/>)`
    width: 5vw;
    right: 1vw;
    bottom: 1vw;
    @media only screen and (max-width: 575px) {
        width: 17vw;
        right: 4vw;
        bottom: 3vw;
    }
`


const CoursePaymentChoices = () => {
    const [tooltipEmail, setTooltipEmail] = useState('Скопировать');
    
    const data = useStaticQuery(graphql`
        query paymentChoicesImages {
            tinkoffImage: file(relativePath: { eq: "graph-design/payment-choices/tinkoff.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

        }
    `)

    const tinkoff = data.tinkoffImage.childImageSharp.fluid



    return (
        <PaymentChoicesSection>
            <Container>
                <PaymentChoicesWrapper>
                    <PaymentChoice grey>
                        <PaymentChoiceTitle>Можно оплатить в рассрочку</PaymentChoiceTitle>
                        <PaymentChoiceText>Рассрочка 0% от Тинькофф на 4 месяца или полгода. Для получения рассрочки перейдите к заполнению обычной формы ↑</PaymentChoiceText>
                        <PaymentChoiceImageIcon style={{position: 'absolute'}} fluid={tinkoff}/>
                        {/* <PaymentChoiceButton>Оплатить</PaymentChoiceButton> */}
                        
                    </PaymentChoice>
                    <PaymentChoice gold>
                        <PaymentChoiceTitle>Оформить корпоративное обучение</PaymentChoiceTitle>
                        <PaymentChoiceText mail>Для этого напишите нам на почту <CopyToClipboard text={'hello@granich.design'}><PaymentChoiceEmail content={tooltipEmail} onMouseLeave={() => setTooltipEmail('Скопировать')} onClick={() => setTooltipEmail('Скопировано :)')}>hello@granich.design</PaymentChoiceEmail></CopyToClipboard></PaymentChoiceText>
                        <CorporateWrapper>
                            <CorporateIcon/>
                        </CorporateWrapper>
                    </PaymentChoice>
                    {/* <PaymentChoice blue>
                        <PaymentChoiceTitle>Оплата <br/>из-за рубежа</PaymentChoiceTitle>
                        <PaymentChoiceText mail>Для этого напишите нам на почту <CopyToClipboard text={'hello@granich.design'}><PaymentChoiceEmail content={tooltipEmail} onMouseLeave={() => setTooltipEmail('Скопировать')} onClick={() => setTooltipEmail('Скопировано :)')}>hello@granich.design</PaymentChoiceEmail></CopyToClipboard></PaymentChoiceText>
                        <Paypal/>
                    </PaymentChoice> */}
                </PaymentChoicesWrapper>
            </Container>
        </PaymentChoicesSection>
    )
}

export default CoursePaymentChoices
