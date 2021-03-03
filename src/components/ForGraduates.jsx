import React, { useState } from 'react'
import styled from 'styled-components';
import { Container } from './style';
// import TelegramIcon from '../assets/svgs/telegram-plane-brands.svg';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ForGraduatesSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`

const ForGraduatesWrapper = styled.div`
    width: 100%;
    background: white;
    border-radius: 0.6vw;
    position: relative;
    padding: 2vw 3vw;
    display: flex;
    align-items: center;

    background: #e8e8e8;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
        border-radius: 2.5vw;
        padding: 7vw 8vw 5vw;
    }

`

const ForGraduatesTitle = styled.h2`
    font-family: EB Garamond;
    font-style: italic;
    font-size: 3.2vw;
    min-width: 48%;
    font-weight: 500;
    line-height: 1.05;
    margin-top: -0.5vw;
    letter-spacing: 0;
    @media only screen and (max-width: 575px) {
        white-space: normal;
        font-size: 11vw;
        margin-bottom: 5vw;
        line-height: 0.9;
        margin-top: 0;
    }
`

const ForGraduatesText = styled.div`
    font-size: 1.4vw;
    line-height: 1.35;
    color: var(--granich-grey);
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

// const ForGraduatesButton = styled.a`
//     display: inline-flex;
//     align-items: center;
//     font-size: 1.4vw;
//     background: var(--granich-telegram-gradient);
//     border-radius: 0.3vw;
//     padding: 1.2vw 2vw;
//     color: white;
//     transition: transform 0.2s ease;
//     box-shadow: .15vw .15vw .4vw rgba(0,0,0,0.25);
//     margin-top: 1vw;
//     white-space: nowrap;
//     svg {
//         width: 2vw;
//         height: 2vw;
//         fill: white;
//         margin-left: 0.5vw;
//     }
//     :hover {
//         font-size: 1.4vw;
//         transform: scale(1.03);
//         cursor: pointer;
//         color: white;
//     }

//     @media only screen and (max-width: 575px) {
//         font-size: 3.9vw;
//         border-radius: 1.3vw;
//         padding: 3.6vw 3vw;
//         box-shadow: 0.5vw 0.5vw 1vw rgba(0,0,0,0.25);
//         :hover {
//             font-size: 3.9vw;
//         }
//         margin-bottom: 0;
//         width: 100%;
//         margin-right: 0;
//         justify-content: center;
//         svg {
//             width: 4vw;
//             height: 4vw;
//             fill: white;
//             margin-left: 2vw;
//         }

//     }
// `

// const ForGraduatesInfoWrapper = styled.div`
//     display: flex;
//     align-items: flex-start;
//     justify-content: space-between;
//     @media only screen and (max-width: 575px) {
//         flex-direction: column;
//     }

// `

const ForGraduatesMail = styled.div`
    position: relative;
    color: var(--granich-black);
    display: inline-block;
    border-bottom: solid 1px var(--granich-light-grey);
    user-select: none;
    :hover {
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
        top: -0.65vw;
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
        background: var(--granich-black);
        ${props => props.content === 'Скопировано :)' && `
            background: var(--granich-red);
        `}
        

    }

    @media only screen and (max-width: 575px) {

        padding-bottom: 0;
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

const ForGraduates = () => {

    const [tooltipEmail, setTooltipEmail] = useState('Скопировать')

    return (
        <ForGraduatesSection>
            <Container>
                <ForGraduatesWrapper>
                    <ForGraduatesTitle>
                        Ищете графдизайнеров на проект?
                    </ForGraduatesTitle>
                    <ForGraduatesText>
                        Мы ведём базу лучших выпускников.
                        Напишите нам на почту и мы сможем
                        предложить для вас специалиста по
                        графическому дизайну.
                        <CopyToClipboard text={'hello@granich.design'}>
                            <ForGraduatesMail
                                content={tooltipEmail}
                                onMouseLeave={() => setTooltipEmail('Скопировать')}
                                onClick={() => setTooltipEmail('Скопировано :)')} >
                                hello@granich.design
                            </ForGraduatesMail>
                        </CopyToClipboard>

                    </ForGraduatesText>
                    {/* <ForGraduatesInfoWrapper> */}

                    {/* <ForGraduatesButton rel="noopener noreferrer" href="https://t.me/granich_projects" target="_blank">Написать в Телеграм <TelegramIcon/></ForGraduatesButton> */}
                    {/* </ForGraduatesInfoWrapper> */}


                </ForGraduatesWrapper>
            </Container>

        </ForGraduatesSection>
    )
}

export default ForGraduates
