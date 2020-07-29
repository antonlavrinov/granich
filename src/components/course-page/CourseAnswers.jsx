import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import courseAnswer1 from '../../assets/images/course-page-answers-section-01.png';

const AnswersSection = styled.section`
    margin-bottom: 50px;
`
const AnswersWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const AnswerWrapper = styled.div`
    width: 33,3%;
    background: white;
    padding: 20px 35px;
    margin-right: 20px;
    :last-child {
        margin-right: 0;
    }

`
const AnswerTitle = styled.div`
    font-size: 40px;
    line-height: 0.8;
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;

    :before {
        content: '.';
        color: var(--granich-red);
        font-size: 80px;
        line-height: 0.5;
        margin-left: -20px;

    }
`
const AnswerImage = styled.div`
    background: url(${courseAnswer1}) center center no-repeat;
    background-size: 90%;
    width: 100%;
    height: 300px;
`
const AnswerTextBlock = styled.div`
    display: flex;
`

const AnswerText = styled.div`
    color: grey;
    font-size: 16px;
    span {
        font-weight: 600;
        font-size: inherit;
        color: black;
    }
`

const AnswerTextLine = styled.div`
    width: 25%;
    margin-right: 5px;
`

const AnswerRedLine = styled.div`
    height: 40%;
    background: var(--granich-red);
    width: 2px;

`
const AnswerGreyLine = styled.div`
    height: 60%;
    background: var(--granich-grey);
    width: 2px;
`

const AnswerBlock = () => {
    return (
        <AnswerWrapper>
            <AnswerTitle>Что такое графдизайн?</AnswerTitle>
            <AnswerImage/>
            <AnswerTextBlock>
                <AnswerTextLine>
                    <AnswerRedLine/>
                    <AnswerGreyLine/>
                </AnswerTextLine>
                <AnswerText>
                <span>Графдизайн — это вид визуальной коммуникации</span> <br/>
                Главный канал этой коммуникации — печатный или цифровой макет (layout). Через него графдизайнер помогает бизнесу говорить с аудиторией: оповещать, обучать, убеждать
            </AnswerText>
            </AnswerTextBlock>


        </AnswerWrapper> 
    )
}

const Answers = () => {
    return (
        <AnswersSection>
            <Container>
                <AnswersWrapper>
                    <AnswerBlock/>
                    <AnswerBlock/>
                    <AnswerBlock/>
                </AnswersWrapper>
            </Container>
        </AnswersSection>
    )
}

export default Answers
