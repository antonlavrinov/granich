import React from 'react'
import styled from 'styled-components';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const PolicyWrapper = styled.div`
    // width: 47%;
    // min-width: 47%;
    height: 100%;
    // min-height: 100%;
    // max-height: 100%;
    background: white;
    border-radius: 0.5vw;
    padding: 2vw;
    display: flex;
    flex-direction: column;
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
    // text-align: center;

    span {
        position: relative;


    }
`

const PolicyFooterEmail = styled.button`
    position: absolute;
    left: 0.4vw;
    top: 0;
    font-weight: 500;
    font-size: 1.05vw;
    color: #666666;
    display: block;
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
        border-right: 0.55vw solid transparent;
        border-left: 0.55vw solid transparent;
        border-top: 0.55vw solid var(--granich-black);
    }

    &:after {
        content: 'Скопировать';
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
        background: rgba(0,0,0,.95);
        background: var(--granich-black);
        border-radius: 3px;
    }



    &:active, :focus {
        outline: none;
        
        &:after {
            content: 'Скопировано :)';
            width: 6.5vw; 
            background: var(--granich-red);
        }
        &:before {
            border-top-color: var(--granich-red);
        }
    }
    @media only screen and (max-width: 575px) {
        font-size: 3.8vw;
        padding-bottom: 0;
        :hover {
            font-size: 3.8vw;
            border-bottom: solid 0.2vw var(--granich-black);
        }
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
        &:active, :focus {        
            &:after {
                width: 35vw; 
            }
        }
    }
`

const ParticipationPolicy = ({data}) => {
    return (
        <PolicyWrapper>
            {data.coursePolicy && <PolicyText>{documentToReactComponents(data.coursePolicy.json)}</PolicyText>}
            <PolicyFooter>
                Вопросы по обучению пишите: <span><CopyToClipboard text={'hello@granich.design'}><PolicyFooterEmail>hello@granich.design</PolicyFooterEmail></CopyToClipboard></span>
            </PolicyFooter>
        </PolicyWrapper>
    )
}

export default ParticipationPolicy
