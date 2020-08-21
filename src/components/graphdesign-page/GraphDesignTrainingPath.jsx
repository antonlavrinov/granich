import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';

const TrainingPathSection = styled.section`
    margin-bottom: 50px;
`


const TrainingPathWrapper = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1.5vw;
    grid-row-gap: 1.5vw;
`

const TrainingPathBlockWrapper = styled.div`
    background: white;

    border-radius: 0.5vw;

`
const TrainingPathBlockContainer = styled.div`
    padding: 0.8vw 1.5vw 3vw;
`

const TrainingPathImageContainer = styled.div`
    padding: 1.5vw;
    background: var(--granich-red);
    border-radius: 0.5vw;
`

const TrainingPathBlockNumber = styled.div`
    font-family: EB Garamond;
    font-style: italic;
    font-size: 5.4vw;
    font-weight: 500;
    position: relative;
    letter-spacing: 0;
    line-height: 1;
    margin-left: -0.1vw;
    margin-bottom: 1vw;
    span {
        font-style: normal;
        font-size: 3vw;
        position: relative;
        font-weight: 600;
        top: -0.8vw;
        left: 0.5vw;
        font-family: Inter;
        color: var(--granich-red);
        // :last-of-type {
        //     font-size: 2vw;
        // }
        // ${props => props.lastOne && `
        //     font-size: 3vw;
        // `}
    }
`

const TrainingPathBlockText = styled.div`
    color: var(--granich-grey);
    font-size: 1.17vw;
    letter-spacing: -0.01vw;
    line-height: 1.55vw;
    span {
        font-weight: 500;
        color: var(--granich-black);
    }
`

const TrainingPathBlockImage = styled.div`

`

const TrainingPathSectionTitle = styled.div`
    color: var(--granich-black);
    font-size: 4.55vw;
    letter-spacing: -0.2vw;
    font-weight: 700;
    line-height: 0.87;
    margin-bottom: 2.5vw;
    @media only screen and (max-width: 575px) {
        font-size: 11.9vw;
        letter-spacing: -0.7vw;
        line-height: 1;
        margin-bottom: 4vw;
    }
`

const GraphDesignTrainingPath = () => {
    return (
        <TrainingPathSection>
            <Container>
                <TrainingPathSectionTitle>Как проходит обучение</TrainingPathSectionTitle>
                <TrainingPathWrapper>
                    <TrainingPathBlockWrapper>
                        <TrainingPathBlockContainer>
                            <TrainingPathBlockNumber>01 <span>→</span></TrainingPathBlockNumber>
                            <TrainingPathBlockText><span>Изучаете видеолекции</span><br/>Записываешься в группу и вступаешь в закрытый чат по ссылке приглашению</TrainingPathBlockText>
                        </TrainingPathBlockContainer>
                        <TrainingPathImageContainer>
                            <TrainingPathBlockImage/>
                        </TrainingPathImageContainer>
                    </TrainingPathBlockWrapper>
                    <TrainingPathBlockWrapper>
                        <TrainingPathBlockContainer>
                            <TrainingPathBlockNumber>02 <span>→</span></TrainingPathBlockNumber>
                            <TrainingPathBlockText><span>Изучаете видеолекции</span><br/>Записываешься в группу и вступаешь в закрытый чат по ссылке приглашению</TrainingPathBlockText>
                        </TrainingPathBlockContainer>
                        <TrainingPathImageContainer>
                            <TrainingPathBlockImage/>
                        </TrainingPathImageContainer>
                    </TrainingPathBlockWrapper>
                    <TrainingPathBlockWrapper>
                        <TrainingPathBlockContainer>
                            <TrainingPathBlockNumber>03 <span>→</span></TrainingPathBlockNumber>
                            <TrainingPathBlockText><span>Изучаете видеолекции</span><br/>Записываешься в группу и вступаешь в закрытый чат по ссылке приглашению</TrainingPathBlockText>
                        </TrainingPathBlockContainer>
                        <TrainingPathImageContainer>
                            <TrainingPathBlockImage/>
                        </TrainingPathImageContainer>
                    </TrainingPathBlockWrapper>
                    <TrainingPathBlockWrapper>
                        <TrainingPathBlockContainer>
                            <TrainingPathBlockNumber lastOne>04 <span >✓⃝</span></TrainingPathBlockNumber>
                            <TrainingPathBlockText><span>Изучаете видеолекции</span><br/>Записываешься в группу и вступаешь в закрытый чат по ссылке приглашению</TrainingPathBlockText>
                        </TrainingPathBlockContainer>
                        <TrainingPathImageContainer>
                            <TrainingPathBlockImage/>
                        </TrainingPathImageContainer>
                    </TrainingPathBlockWrapper>
                </TrainingPathWrapper>
            </Container>
        </TrainingPathSection>
    )
}

export default GraphDesignTrainingPath
