import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Zoom from 'react-medium-image-zoom'
import ArrowIcon from '../../assets/svgs/graph-design/graph-design-training-path-arrow.svg';
import CheckIcon from '../../assets/svgs/graph-design/graph-design-training-path-check.svg';


const Arrow = styled(props => <ArrowIcon {...props}/>)`
    width: 3vw;
    margin-left: 1.5vw;
    fill: var(--granich-red);
    @media only screen and (max-width: 575px) {
        transform: rotate(90deg);
        width: 10vw;
        margin-left: 3vw;
    }
`

const Check = styled(props => <CheckIcon {...props}/>)`
    width: 3vw;
    margin-left: 1.5vw;
    fill: var(--granich-red);
    @media only screen and (max-width: 575px) {
        width: 10vw;
        margin-left: 3vw;
    }
`


const TrainingPathSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`


const TrainingPathWrapper = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1.5vw;
    grid-row-gap: 1.5vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
        grid-template-columns: 1fr;
        grid-column-gap: 5vw;
        grid-row-gap: 5vw;
    }
`

const TrainingPathBlockWrapper = styled.div`
    background: white;
    display: flex;
    flex-direction: column;

    border-radius: 0.6vw;
    position: relative;
    :before {
        content: '';
        width: 10.5vw;
        height: 10.5vw;
        background: var(--granich-red);
        position: absolute;
        bottom: 1.2vw;;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 100vw;
    }
    @media only screen and (max-width: 575px) {
        border-radius: 2vw;
    }

`
const TrainingPathBlockContainer = styled.div`
    padding: 0.8vw 1.5vw 1.5vw;


    @media only screen and (max-width: 575px) {
        padding: 5vw 5vw 5vw;
    }
`

// const TrainingPathImageContainer = styled.div`
//     padding: 1.5vw;
//     background: var(--granich-red);
//     border-radius: 0.6vw;
//     margin-top: auto;
//     @media only screen and (max-width: 575px) {
//         border-radius: 2vw;
//         padding: 7.5vw;
//     }
// `

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
    @media only screen and (max-width: 575px) {
        font-size: 16.5vw;
        margin-bottom: 4vw;
        margin-left: 0;
    }
`

const TrainingPathBlockText = styled.div`

    line-height: 1.45;
    p {
        color: var(--granich-grey);
        font-size: 1.15vw;
        letter-spacing: -0.01vw;
        b {
            display: block;
            font-weight: 500;
            color: var(--granich-black);
        }
    }
    @media only screen and (max-width: 575px) {
        p {
            font-size: 3.7vw;
        }
    }


`

const TrainingPathBlockImage = styled.div`
    width: 14.7vw;
    height: auto;
    transition: transform 0.3s ease;
    margin-top: auto;
    margin: 0 auto;
    margin-top: auto;
    margin-bottom: 1.75vw;

    div {
        width: 100%;
    }
    :hover {
        // transform: scale(1.05);

    }

    @media only screen and (max-width: 575px) {
        width: 100%;
        :hover {
            transform: none;
    
        }
    }
`



const TrainingPathImage = styled(props => <BackgroundImage {...props}/>)`
    width: 100%;
    height: 8.8vw;
    background-size: 110%;
    @media only screen and (max-width: 575px) {
        height: 43.8vw;
    }

`

const TrainingPathSectionTitle = styled.div`
    color: var(--granich-black);
    font-size: 4.55vw;
    letter-spacing: -0.2vw;
    font-weight: 700;
    line-height: 0.87;
    margin-bottom: 2.5vw;
    @media only screen and (max-width: 575px) {
        font-size: 11vw;
        letter-spacing: -0.7vw;
        line-height: 1;
        margin-bottom: 4vw;
    }
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
                                    <TrainingPathBlockNumber >{block.node.trainingPathTitle}{idx === 3 ? <Check/> : <Arrow/>}</TrainingPathBlockNumber>
                                    <TrainingPathBlockText>{documentToReactComponents(block.node.trainingPathText.json)}</TrainingPathBlockText>
                                </TrainingPathBlockContainer>
                                {/* <TrainingPathImageContainer> */}
                                    <TrainingPathBlockImage>
                                        <Zoom>
                                            <TrainingPathImage fluid={block.node.trainingPathImage.fluid}></TrainingPathImage>
                                        </Zoom>
                                    </TrainingPathBlockImage>
{/* 
                                </TrainingPathImageContainer> */}
                            </TrainingPathBlockWrapper>
                        )
                    })}

                </TrainingPathWrapper>
            </Container>
        </TrainingPathSection>
    )
}

export default CourseTrainingPath
