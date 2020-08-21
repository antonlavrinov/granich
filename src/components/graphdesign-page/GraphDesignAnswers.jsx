import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';


const AnswersSection = styled.section`
    margin-bottom: 5vw;
` 

const AnswersWrapper = styled.div`
    background: #E8E8E8;
    padding: 3vw 3vw;
    border-radius: 0.6vw;
`

const AnswersHeader = styled.div`
    display: flex;
    border-bottom: 2px soliv var(--granich-black);
    margin-bottom: 5vw;
`

const AnswersSectionTitle = styled.div`
    color: var(--granich-black);
    font-size: 4.55vw;
    letter-spacing: -0.2vw;
    font-weight: 700;
    line-height: 1.05;
    margin-right: 3vw;
    @media only screen and (max-width: 575px) {
        font-size: 11.9vw;
        letter-spacing: -0.7vw;
        line-height: 1;
        margin-right: 0;
        margin-bottom: 4vw;
    }

`

const AnswersSectionText = styled.div`
    color: var(--granich-black);
    font-size: 1.5vw;
    margin-top: 1.5vw;
    line-height: 1.55;
    letter-spacing: 0.02vw;
    font-weight: 500;
    @media only screen and (max-width: 575px) {
        font-size: 3.9vw;
        letter-spacing: -0.08vw;
    }
    

`

const AnswerCategoryWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid var(--granich-grey);
`


const AnswerCategoryTag = styled.div`
    background: grey;
    width: 20%;

`

const AnswerCategoryColumnOne = styled.div`
    background: blue;
    width: 40%;
    margin-right: 2vw;
`

const AnswerCategoryColumnTwo = styled.div`
    background: red;
    width: 40%;
`

const AnswerCategory = () => {
    return (
        <AnswerCategoryWrapper>
            <AnswerCategoryTag>dfsdsfdf</AnswerCategoryTag>
            <AnswerCategoryColumnOne>dfddsfdfs</AnswerCategoryColumnOne>
            <AnswerCategoryColumnTwo>dfsdfsdf</AnswerCategoryColumnTwo>
        </AnswerCategoryWrapper>
    )
}

const GraphDesignAnswers = () => {
    return (
        <AnswersSection>
            <Container>
                <AnswersWrapper>
                    <AnswersHeader>
                        <AnswersSectionTitle>Точечные ответы <br/>о курсе</AnswersSectionTitle>
                        <AnswersSectionText>Тут мы собрали ответы на самые популярные вопросы о курсе Осознанный графдизайн</AnswersSectionText>
                    </AnswersHeader>
                    <AnswerCategory/>
                </AnswersWrapper>
            </Container>

        </AnswersSection>
    )
}

export default GraphDesignAnswers
