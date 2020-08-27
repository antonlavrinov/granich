import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import Img from "gatsby-image";
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';




const ExplanationsSection = styled.section`
    margin-bottom: 5vw;
`


const ExplanationsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1.5vw;
    grid-row-gap: 1.5vw;
`

const ExplanationsBlockWrapper = styled.div`
    background: white;
    border-radius: 0.5vw;
    padding: 2.3vw 1.7vw 2.3vw;
    position: relative;
    

`
const ExplanationsBlockTitle = styled.div`
    font-size: 2.3vw;
    line-height: 1;
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    width: 14vw;
    margin-bottom: 2.5vw;
    margin-left: 1.5vw;

    :before {
        content: '';
        background: var(--granich-red);
        position: absolute;
        top: 2.5vw;
        right: 1.5vw;
        width: 0.68vw;
        height: 0.68vw;
        border-radius: 100vw;
        transform: translateX(-50%);
        font-size: 1vw;

    }
`
const ExplanationsBlockImage = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 17vw;
    margin-bottom: 2.2vw;

`
const ExplanationsImage = styled(props => <Img {...props}/>)`
    width: 88%;
`

const ExplanationsBlockTextBlock = styled.div`
    display: flex;
`

const ExplanationsBlockText = styled.div`
    line-height: 1.45;    
    p {
        color: var(--granich-grey);
        font-size: 1.15vw;
        letter-spacing: -0.01vw;
        b {
            color: var(--granich-black);
            font-weight: 500;
        }

    }
`

const ExplanationsBlockTextTitle = styled.div`
    letter-spacing: inherit;
    font-weight: 500;
    font-size: inherit;
`

const ExplanationsBlockTextLine = styled.div`
    // width: 25%;
    margin-right: 0.9vw;
    margin-left: 0.5vw;
`

const ExplanationsBlockRedLine = styled.div`
    height: 23%;
    background: var(--granich-red);
    width: 0.1vw;

`
const ExplanationsBlockGreyLine = styled.div`
    height: 77%;
    background: #E2E2E2;
    width: 0.1vw;
`

const ExplanationsBlock = ({image, title, text }) => {

    return (
        <ExplanationsBlockWrapper>
            <ExplanationsBlockTitle>{title}</ExplanationsBlockTitle>
            <ExplanationsBlockImage>
                <ExplanationsImage fluid={image}/>
            </ExplanationsBlockImage>
            <ExplanationsBlockTextBlock>
                <ExplanationsBlockTextLine>
                    <ExplanationsBlockRedLine/>
                    <ExplanationsBlockGreyLine/>
                </ExplanationsBlockTextLine>
                <ExplanationsBlockText>
                    {documentToReactComponents(text)}
                </ExplanationsBlockText>
            </ExplanationsBlockTextBlock>


        </ExplanationsBlockWrapper> 
    )
}

const CourseExplanations = ({data}) => {

    return (
        <ExplanationsSection>
            <Container>
                <ExplanationsWrapper>
                    {data.edges.map((explanation) => {
                        return (
                            <ExplanationsBlock key={explanation.node.id} image={explanation.node.explanationsImage.fluid}
                                title={explanation.node.explanationsTitle}
                                text={explanation.node.explanationsText.json}
                            />
                        )
                    })}
                </ExplanationsWrapper>
            </Container>
        </ExplanationsSection>
    )
}

export default CourseExplanations
