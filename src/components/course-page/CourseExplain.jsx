import React from 'react'
import styled from 'styled-components';
import { Container } from '../style';


const ExplainSection = styled.section`
    margin-bottom: 4vw;
    margin-top: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
        margin-top: 5vw;
    }

`
const ExplainWrapper = styled.div`
    background: white;
    padding: 4vw 4vw;
    border-radius: 0.6vw;
    @media only screen and (max-width: 575px) {
        padding: 11vw 8vw 11vw 8vw;
        border-radius: 2.5vw;
    }
`

const ExplainTitle = styled.h2`
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    font-size: 4.9vw;
    line-height: 0.75;
    position: relative;
    margin-bottom: 4vw;
    margin-left: 0vw;
    white-space: nowrap;
    letter-spacing: -0.05vw;
    @media only screen and (max-width: 575px) {
        white-space: normal;
        font-size: 10.4vw;
        margin-left: 0;
        letter-spacing: -0.4vw;
        margin-bottom: 6.8vw;
        line-height: 0.9;
    }
`
const ExplainItems = styled.div`
    display: flex;
    margin-bottom: 3vw;
`
const ExplainItem = styled.div`
    display: flex;
    align-items: center;
    margin-right: 3vw;
`
const ExplainItemNumber = styled.div`

        font-family: EB Garamond;
        font-style: italic;
        font-size: 4.5vw;
        font-weight: 500;
        align-text: center;
        background: #f2f2f2;
        border-radius: 100vw;
        height: 4.1vw;
        width: 4.1vw;
        min-height: 4.1vw;
        min-width: 4.1vw;
        line-height: 0.8;
        letter-spacing: -0.4vw;
        padding-left: 0.8vw;
        margin-bottom: 0.6vw;
        margin-right: 1vw;


    @media only screen and (max-width: 575px) {
        height: 14.5vw;
        width: 14.5vw;
        min-height: 14.5vw;
        min-width: 14.5vw;
        font-size: 17vw;
        line-height: 0.8;
        padding-left: 3.2vw;
        margin-bottom: 3.3vw;
        background: #f2f2f2;
    }
`
const ExplainItemText = styled.div`
    font-size: 2vw;
    font-weight: 500;
`
const ExplainInfoWrapper = styled.div`
    display: flex;
    align-items: flex-start;
`
const ExplainInfoText = styled.div`
    font-size: 1.55vw;
    line-height: 1.4;
    max-width: 75%;
    font-weight: 500;
`
const ExplainInfoBonus = styled.div`
    display: flex;
    background: #f2f2f2;
    align-items: center;
    padding: 1vw 1.5vw;
    border-radius: 0.5vw;

`
const ExplainInfoBonusText = styled.div`

`


const CourseExplain = () => {

    return (
        <ExplainSection id="individual-Explain">
            <Container>
                <ExplainWrapper>
                    <ExplainTitle>Зачем нужен графдизайн?</ExplainTitle>
                    <ExplainItems>
                        <ExplainItem>
                            <ExplainItemNumber>1</ExplainItemNumber>
                            <ExplainItemText>Оповещать</ExplainItemText>
                        </ExplainItem>
                        <ExplainItem>
                            <ExplainItemNumber>2</ExplainItemNumber>
                            <ExplainItemText>Обучать</ExplainItemText>
                        </ExplainItem>
                        <ExplainItem>
                            <ExplainItemNumber>3</ExplainItemNumber>
                            <ExplainItemText>Убеждать</ExplainItemText>
                        </ExplainItem>
                    </ExplainItems>
                    <ExplainInfoWrapper>
                        <ExplainInfoText>Овладев графдизайном вы станете визуальным голосом ваших клиентов. Через макеты вы дадите возможность их бизнесу оповещать, обучать, убеждать. </ExplainInfoText>
                        <ExplainInfoBonus>
                            <ExplainInfoBonusText>Это востребовано на рынке</ExplainInfoBonusText>
                        </ExplainInfoBonus>
                    </ExplainInfoWrapper>


                </ExplainWrapper>
            </Container>
        </ExplainSection>
    )
}

export default CourseExplain

