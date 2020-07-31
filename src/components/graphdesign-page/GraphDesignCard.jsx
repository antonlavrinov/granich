import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';

const CardsSection = styled.section`
    margin-bottom: 50px;
`
const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const CardWrapper = styled.div`
    width: 33,3%;
    background: white;
    padding: 20px 35px;
    margin-right: 20px;
    :last-child {
        margin-right: 0;
    }

`
const CardTitle = styled.div`
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
const CardImage = styled.div`
    background: url(${courseCard1}) center center no-repeat;
    background-size: 90%;
    width: 100%;
    height: 300px;
`
const CardTextBlock = styled.div`
    display: flex;
`

const CardText = styled.div`
    color: grey;
    font-size: 16px;
    span {
        font-weight: 600;
        font-size: inherit;
        color: black;
    }
`

const CardTextLine = styled.div`
    width: 25%;
    margin-right: 5px;
`

const CardRedLine = styled.div`
    height: 40%;
    background: var(--granich-red);
    width: 2px;

`
const CardGreyLine = styled.div`
    height: 60%;
    background: var(--granich-grey);
    width: 2px;
`




const GraphDesignCard = () => {
    return (
        <CardWrapper>
            <CardTitle>Что такое графдизайн?</CardTitle>
            <CardImage/>
            <CardTextBlock>
                <CardTextLine>
                    <CardRedLine/>
                    <CardGreyLine/>
                </CardTextLine>
                <CardText>
                <span>Графдизайн — это вид визуальной коммуникации</span> <br/>
                Главный канал этой коммуникации — печатный или цифровой макет (layout). Через него графдизайнер помогает бизнесу говорить с аудиторией: оповещать, обучать, убеждать
            </CardText>
            </CardTextBlock>
        </CardWrapper> 
    )
}

export default GraphDesignCard
