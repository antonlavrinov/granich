import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Zoom from 'react-medium-image-zoom'


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
    display: flex;
    flex-direction: column;

    border-radius: 0.5vw;

`
const TrainingPathBlockContainer = styled.div`
    padding: 0.8vw 1.5vw 3vw;
`

const TrainingPathImageContainer = styled.div`
    padding: 1.5vw;
    background: var(--granich-red);
    border-radius: 0.5vw;
    margin-top: auto;
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

    line-height: 1.55vw;
    p {
        color: var(--granich-grey);
        font-size: 1.17vw;
        letter-spacing: -0.01vw;
        b {
            display: block;
            font-weight: 500;
            color: var(--granich-black);
        }
    }


`

const TrainingPathBlockImage = styled.div`
    width: 14.7vw;
    height: auto;
    transition: transform 0.3s ease;
    div {
        width: 100%;
    }
    :hover {
        transform: scale(1.05);
        // width: 16vw;

    }
`

const TrainingPathImage = styled(props => <BackgroundImage {...props}/>)`
    width: 100%;
    height: 7.8vw;
    background-size: 110%;


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

const CheckMark = styled.span`
    font-size: 2.5vw !important;
    color: black;
`

const CourseTrainingPath = ({data}) => {
    return (
        <TrainingPathSection>
            <Container>
                <TrainingPathSectionTitle>Как проходит обучение</TrainingPathSectionTitle>
                <TrainingPathWrapper>
                    {data.edges.map((block, idx) => {
                        return (
                            <TrainingPathBlockWrapper key={block.node.id}>
                                <TrainingPathBlockContainer>
                                    <TrainingPathBlockNumber >{block.node.trainingPathTitle}{idx === 3 ? <CheckMark > ✓⃝  </CheckMark> : <span>→</span>}</TrainingPathBlockNumber>
                                    <TrainingPathBlockText>{documentToReactComponents(block.node.trainingPathText.json)}</TrainingPathBlockText>
                                </TrainingPathBlockContainer>
                                <TrainingPathImageContainer>
                                    <TrainingPathBlockImage>
                                        <Zoom>
                                            <TrainingPathImage fluid={block.node.trainingPathImage.fluid}>✓</TrainingPathImage>
                                        </Zoom>
                                    </TrainingPathBlockImage>

                                </TrainingPathImageContainer>
                            </TrainingPathBlockWrapper>
                        )
                    })}

                </TrainingPathWrapper>
            </Container>
        </TrainingPathSection>
    )
}

export default CourseTrainingPath
