import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import BackgroundImage from "gatsby-background-image";
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';




const ExplanationsSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`


const ExplanationsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1.5vw;
    grid-row-gap: 1.5vw;
    @media only screen and (max-width: 575px) {
        grid-template-columns: 1fr;
        grid-row-gap: 4vw;
    }
`

const ExplanationsBlockWrapper = styled.div`
    background: white;
    border-radius: 0.6vw;
    padding: 2.3vw 1.7vw 2.3vw;
    position: relative;
    @media only screen and (max-width: 575px) {
        padding: 6.2vw;
        border-radius: 2.5vw;
    }
    

`
const ExplanationsBlockTitle = styled.h3`
    font-size: 2.3vw;
    line-height: 1;
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    width: 14vw;
    margin-bottom: 1.5vw;
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

    }
    @media only screen and (max-width: 575px) {
        font-size: 7.5vw;
        width: 80%;
        margin-bottom: 4vw;
        :before {
            top: 8vw;
            right: 6vw;
            width: 2vw;
            height: 2vw;
    
        }
    }
`

const ExplanationsImage = styled(props => <BackgroundImage {...props}/>)`
    width: 100%;
    height: 19vw;
    margin-bottom: 1.5vw;
    @media only screen and (max-width: 575px) {
        height: 60vw;
        margin-bottom: 6vw;
    }
    
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
        position: relative;
        b {
            color: var(--granich-black);
            font-weight: 500;
            display: block;
            margin-bottom: 0.4vw;
            :before {
                content: '';
                width: 0.15vw;
                height: 100%;
                position: absolute;
                top: 0;
                left: -1vw;  
                background: var(--granich-red);

            }
        }

    }
    @media only screen and (max-width: 575px) {
        p {
            font-size: 3.7vw;  
            padding-left: 3vw; 
            margin-left: -1.5vw;
            b {
                margin-bottom: 1vw;
                :before {
                    width: 1.5px;
                    left: -1.4vw; 
                }
                
            }
        }
    }
`


const ExplanationsBlockTextLine = styled.div`
    margin-right: 0.9vw;
    margin-left: 0.5vw;
    @media only screen and (max-width: 575px) {
        margin-right: 2.5vw;
        margin-left: -1.2vw;
    }


`

const ExplanationsBlockGreyLine = styled.div`
    height: 100%;
    background: #E2E2E2;
    width: 1px;
    @media only screen and (max-width: 575px) {
        width: 0.4vw;
    }
`

const ExplanationsBlock = ({image, title, text }) => {

    return (
        <ExplanationsBlockWrapper>
            <ExplanationsBlockTitle>{title}</ExplanationsBlockTitle>
                <ExplanationsImage style={{backgroundSize: 'auto 100%'}} fluid={image}></ExplanationsImage>
            <ExplanationsBlockTextBlock>
                <ExplanationsBlockTextLine>
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
