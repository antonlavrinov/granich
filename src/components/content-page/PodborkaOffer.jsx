import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';



const PodborkaOfferSection = styled.section`
    margin-bottom: 1.7vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }


`

const PodborkaOfferWrapper = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    background: white;
    border-radius: 0.6vw;
    padding: 2.5vw 2.7vw 4.4vw;
    position: relative;
    box-shadow: 0.25vw 0.15vw 0.4vw rgba(0,0,0,0.1);
    background-size: auto auto;
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: right;
    overflow: hidden;
    @media only screen and (max-width: 575px) {
        display: none;
    }



`

const PodborkaOfferWrapperMobile = styled.section`
    display: none;
    @media only screen and (max-width: 575px) {
        display: block;
        background: white;
        border-radius: 2.5vw;
        padding: 7vw 1vw 6vw;
        box-shadow: 0 0 1.8vw rgba(0,0,0,0.15);
    }
`

const PodborkaOfferMainImage = styled(props => <Img {...props} />)`
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`

const PodborkaOfferTags = styled.div`
    display: flex;
    margin-bottom: 2.1vw; 
    align-items: flex-start;
    flex-wrap: wrap;
    @media only screen and (max-width: 575px) {
        padding: 0 3.5vw;
    }
`
const PodborkaOfferTag = styled.div`
    font-size: 1.2vw;
    display: flex;
    color: var(--granich-red);
    border: 1.5px solid var(--granich-red);
    padding: 0.3vw 0.8vw;
    border-radius: 100vw;
    margin-right: 1vw;
    font-weight: 500;
    align-items: center;
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        padding: 1.8vw 2.5vw 1.6vw;
        margin-right: 3vw;
        white-space: nowrap;
        margin-bottom: 3vw;
        line-height: 1;
    }
`


const PodborkaOfferTitle = styled.h1`
    line-height: 0.8;
    margin-left: -0.3vw;
    margin: 0;
    margin-bottom: 4.25vw;
    p {
        font-size: 7.5vw;
        letter-spacing: 0.28vw;
        font-family: EB Garamond;
        style: normal;
        font-weight: 500;
        i {
            display: block;
            letter-spacing: -0.05vw;
            line-height: inherit;
            font-style: italic;
            font-size: 7.2vw;
            font-weight: inherit;
            font-family: EB Garamond;
        }
    }
    

    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
        margin-left: 0vw;
        margin-top: -1vw;
        line-height: 0.8;
        padding: 0 5vw;
        p {
            font-size: 15vw;
            letter-spacing: 0.5vw;
            i { 
                letter-spacing: -0.2vw;
                font-size: 14vw;
                margin-top: 2vw;
            }
        }
    }
`
const PodborkaOfferDescr = styled.div`
    width: 35vw;
    font-size: 1.55vw;
    margin-bottom: 2vw;
    margin-left: 0.8vw;
    line-height: 1.47;
    font-weight: 500;
    letter-spacing: -0.01vw;
    @media only screen and (max-width: 575px) {
        width: 95%;
        font-size: 5vw;
        padding: 0 5vw;
        margin-bottom: 5vw;
        margin-left: 0;
    }

`





const PodborkaOffer = ({tags, dataContentPodborka}) => {
    return (
        <PodborkaOfferSection>
            <Container>
                <PodborkaOfferWrapper fluid={dataContentPodborka.collectionOfferMainImage.fluid}>
                    <PodborkaOfferTags>
                        {tags.map((tag, idx) => {
                            return (
                                <PodborkaOfferTag key={idx}>{tag}</PodborkaOfferTag>
                            )
                        })}
                    </PodborkaOfferTags>
                    <PodborkaOfferTitle>
                        {documentToReactComponents(dataContentPodborka.collectionOfferTitle.json)}
                    </PodborkaOfferTitle>
                    <PodborkaOfferDescr>
                        {dataContentPodborka.collectionOfferDescr}
                    </PodborkaOfferDescr>
                </PodborkaOfferWrapper>
                <PodborkaOfferWrapperMobile>
                    <PodborkaOfferTags>
                        {tags.map((tag, idx) => {
                            return (
                                <PodborkaOfferTag key={idx}>{tag}</PodborkaOfferTag>
                            )
                        })}
                    </PodborkaOfferTags>
                    <PodborkaOfferTitle>
                        {documentToReactComponents(dataContentPodborka.collectionOfferTitle.json)}
                    </PodborkaOfferTitle>
                    <PodborkaOfferMainImage loading="eager" fadeIn={false} fluid={dataContentPodborka.collectionOfferMainImage.fluid}/>
                    <PodborkaOfferDescr>
                        {dataContentPodborka.collectionOfferDescr}
                    </PodborkaOfferDescr>
                </PodborkaOfferWrapperMobile>
            </Container>

        </PodborkaOfferSection>
    )
}

export default PodborkaOffer
