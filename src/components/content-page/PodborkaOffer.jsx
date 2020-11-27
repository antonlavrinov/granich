import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types'


const options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            return <img
                //   title={ title ? title['en-US'] : null}
                //   alt={description ?  description['en-US'] : null}
                  src={node.data.target.fields.file['en-US'].url}
                />
          },
    },   
}

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
        // margin-bottom: 5vw;
        height: 80vw;
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
        font-size: 6.5vw;
        letter-spacing: 0.28vw;
        letter-spacing: 0;
        font-family: EB Garamond;
        style: normal;
        font-weight: 500;
        width: 60%;
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
        // margin-bottom: 5vw;
        margin-left: 0vw;
        margin-top: -1vw;
        line-height: 0.9;
        padding: 0 5vw;
        p {
            font-size: 13.5vw;
            letter-spacing: 0.1vw;
            width: 100%;
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
    margin-bottom: 2vw;
    margin-left: 0.8vw;
    line-height: 1.47;
    
    p {
        display: inline;
        font-size: 1.55vw;
        font-weight: 500;
        letter-spacing: -0.01vw;
    }
    img {
        display: inline;
        width: 1.5vw;
        margin-bottom: -0.3vw;
        position: relative;
        left: 0.2vw;

    }
    @media only screen and (max-width: 575px) {
        width: 95%;
        padding: 0 5vw;
        margin-bottom: 5vw;
        margin-left: 0;
        p {
            font-size: 5vw;
        }
        img {
            width: 7vw;
            margin-bottom: -0.8vw;
            left: 0.5vw;
    
        }
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
                        {documentToReactComponents(dataContentPodborka.childContentfulGranichCollectionOfferCollectionOfferDescrWithAssetRichTextNode.json, options)}
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
                        {documentToReactComponents(dataContentPodborka.childContentfulGranichCollectionOfferCollectionOfferDescrWithAssetRichTextNode.json, options)}
                    </PodborkaOfferDescr>
                </PodborkaOfferWrapperMobile>
            </Container>

        </PodborkaOfferSection>
    )
}

export default PodborkaOffer
