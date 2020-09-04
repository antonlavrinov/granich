import React, {useState} from 'react'
import styled from 'styled-components';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Container} from './style';


const EducationQuestionsSection = styled.section`

`

const EducationQuestionsWrapper = styled.div`
    background: #e8e8e8;
    border-radius: 0.6vw;
    padding: 1.8vw 2vw;
    font-size: 1.15vw;
    color: var(--granich-grey);
    color: #666666;
    font-weight: 500;
    text-align: center;
    margin-bottom: 2vw;
    @media only screen and (max-width: 575px) {
        font-size: 3.8vw;
        border-radius: 3vw;
        padding: 4vw 0;
        line-height: 1.25;
    }

`

const EducationQuestionsEmail = styled.span`
    position: relative;
    font-weight: 500;
    color: var(--granich-black);
    border-bottom: 1px solid var(--granich-light-grey);
    :hover {
        font-weight: 500;
        font-size: 1.15vw;
        cursor: pointer;
        border-bottom: none;
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
        display: inline-block;
        border-bottom: solid 0.2vw var(--granich-light-grey);
        :hover {
            font-size: 3.8vw;
            border-bottom: solid 0.2vw var(--granich-black);

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

`


const EducationQuestions = () => {
    const [tooltipEmail, setTooltipEmail] = useState('Скопировать')
    console.log(tooltipEmail)
    return (
        <EducationQuestionsSection>
            <Container>
                <EducationQuestionsWrapper>
                    Вопросы по обучению пишите: <CopyToClipboard text={'hello@granich.design'}>
                                                    <EducationQuestionsEmail content={tooltipEmail} onMouseLeave={() => setTooltipEmail('Скопировать')} onClick={() => setTooltipEmail('Скопировано :)')}>
                                                        hello@granich.design
                                                    </EducationQuestionsEmail>
                                                </CopyToClipboard>
                </EducationQuestionsWrapper>
            </Container>
        </EducationQuestionsSection>

    )
}

export default EducationQuestions
