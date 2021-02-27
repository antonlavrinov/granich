import React, { useState } from 'react'
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import TelegramIcon from '../../../assets/svgs/telegram-plane-brands.svg'
import Tinkoff from '../payment-choices/Tinkoff';


const PolicyWrapper = styled.div`
    height: 100%;
    background: white;
    border-radius: 0.5vw;
    padding: 2vw;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 575px) {
        border-radius: 2.5vw;
        padding: 5vw;
    }
`

const PolicyText = styled.div`
    line-height: 1.45;
    margin-bottom: 1vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ul {
        background: var(--granich-red);
        display: block;
        padding: 0.4vw 1vw;
        border-radius: 0.6vw;
        margin-bottom: 1vw;
        li {
            p {
                color: white;
            }
        }

    }
    p {
        font-size: 1.05vw;
        color: var(--granich-grey);
        margin-bottom: 0.55vw;


        :last-child {
            margin-bottom: 0;
        }
    }

    b {
        display: block;
        color: var(--granich-black);
        font-weight: 500;
    }
    i {
        font-style: normal;
        color: var(--granich-red);
        font-weight: 500;
    }
    @media only screen and (max-width: 575px) {
        margin-bottom: 2vw;
        p {
            font-size: 3.7vw;
            margin-bottom: 2vw;
            letter-spacing: -0.08vw;
        }
        ul {
            padding: 0.4vw 2vw;
            border-radius: 1.8vw;
        }
    }

`
const PolicyFooter = styled.div`
    background: #f2f2f2;
    border-radius: 0.5vw;
    padding: 1vw 2vw;
    margin-top: auto;
    font-size: 1.05vw;
    color: var(--granich-grey);
    color: #666666;
    font-weight: 500;
    text-align: center;
    span {
        position: relative;
    }
    white-space: nowrap;
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        svg {
            position: relative;
            top: 0.1vw;
            width: 1vw;
            fill: #2DA2D4;
            margin-right: 0.3vw;
        }
        span {
            position: relative;
            color: var(--granich-black);
            color: #2DA2D4;
            font-weight: 500;
            &:before {
                content: '';
                position: absolute;
                bottom: -0.2vw;
                left: 0;
                background: var(--granich-light-grey);
                background: #2DA2D4;
                opacity: 0.5;
                height: 1px;
                width: 100%;
            }
            &:hover {
                &:before {
                    background: var(--granich-grey);
                    background: #2DA2D4;
                    opacity: 1;
                }
            }
        }

    }
    @media only screen and (max-width: 575px) {
        border-radius: 1.5vw;
        padding: 3vw 3vw;
        font-size: 3.7vw;
        text-align: center;
        margin-top: 4vw;
        margin-bottom: 1vw;
        line-height: 1.3;
        white-space: normal;
        a {
            display: inline-flex;
            top: 0.5vw;
            svg {
                width: 4vw;
                margin-right: 1vw;
                top: 0.5vw;
            }
        }

    }
`

const PolicyFooterEmail = styled.span`

    font-weight: 500;
    font-size: 1.05vw;
    color: #666666;
    display: inline-block;
    border-bottom: 1.5px solid #dedede;
    background: none;
    user-select: none;
    :hover {
        font-weight: 500;
        font-size: 1.05vw;
        cursor: pointer;
        border-bottom: 1.5px solid var(--granich-light-grey);
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
            border-bottom: solid 1.5px var(--granich-black);

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

const ParticipationPolicy = ({ data, telegram, additionalComponent }) => {
    const [tooltipEmail, setTooltipEmail] = useState('Скопировать')
    return (
        <PolicyWrapper>
            {data.childContentfulGranichCourseCoursePolicyRichTextNode && <PolicyText>{documentToReactComponents(data.childContentfulGranichCourseCoursePolicyRichTextNode.json)}</PolicyText>}
            {additionalComponent && (
                <Tinkoff inbuilt />

            )}

            {telegram ? (
                <PolicyFooter>
                    Вопросы по обучению пишите мне в телеграме: <a rel="noopener" rel="noreferrer" target="_blank" href="https://t.me/vadim_granich" ><TelegramIcon /> <span>@vadim_granich</span></a>
                </PolicyFooter>
            ) : (
                    <PolicyFooter>
                        Вопросы по обучению пишите: <CopyToClipboard text={'hello@granich.design'}><PolicyFooterEmail content={tooltipEmail} onMouseLeave={() => setTooltipEmail('Скопировать')} onClick={() => setTooltipEmail('Скопировано :)')}>hello@granich.design</PolicyFooterEmail></CopyToClipboard>
                    </PolicyFooter>
                )}
        </PolicyWrapper>
    )
}

export default ParticipationPolicy
