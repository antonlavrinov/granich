import React, {useState} from 'react'
import styled from 'styled-components';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {CopyToClipboard} from 'react-copy-to-clipboard';

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
    @media only screen and (max-width: 575px) {
        p {
            font-size: 3.7vw;
            margin-bottom: 2vw;
            letter-spacing: -0.08vw;
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
    span {
        position: relative;
    }
    @media only screen and (max-width: 575px) {
        border-radius: 1.5vw;
        padding: 3vw 3vw;
        font-size: 3.7vw;
        text-align: center;
        margin-top: 4vw;
        margin-bottom: 1vw;
        line-height: 1.5;
    }
`

const PolicyFooterEmail = styled.span`

    font-weight: 500;
    font-size: 1.05vw;
    color: #666666;
    display: inline-block;
    border-bottom: 1.5px solid var(--granich-light-grey);
    background: none;
    user-select: none;
    :hover {
        font-weight: 500;
        font-size: 1.05vw;
        cursor: pointer;
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

const ParticipationPolicy = ({data}) => {
    const [tooltipEmail, setTooltipEmail] = useState('Скопировать')
    return (
        <PolicyWrapper>
            {data.coursePolicy && <PolicyText>{documentToReactComponents(data.coursePolicy.json)}</PolicyText>}
            <PolicyFooter>
                Вопросы по обучению пишите: <CopyToClipboard text={'hello@granich.design'}><PolicyFooterEmail content={tooltipEmail} onMouseLeave={() => setTooltipEmail('Скопировать')} onClick={() => setTooltipEmail('Скопировано :)')}>hello@granich.design</PolicyFooterEmail></CopyToClipboard>
            </PolicyFooter>
        </PolicyWrapper>
    )
}

export default ParticipationPolicy
