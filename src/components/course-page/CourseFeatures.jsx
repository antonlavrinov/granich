import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import Img from 'gatsby-image';
import ArrowOut from '../../assets/svgs/header-arrow-icon-out.svg';


const ArrowLinkOut = styled(props => <ArrowOut {...props}/>)`
  position: absolute;
  top: -0.5vw;
  right: -1.4vw;
  width: 1vw;
  height: 1vw;
  @media only screen and (max-width: 575px) {
    top: -1.6vw;
    right: -3.7vw;
    width: 3.1vw;
    height: 3.1vw;
  }


`

const FeaturesSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`

const FeaturesSectionTitle = styled.div`
    font-size: 4.55vw;
    font-weight: 700;
    letter-spacing: -0.2vw;
    margin-bottom: 2.4vw;
    @media only screen and (max-width: 575px) {
        font-size: 11vw;
        margin-bottom: 4vw;
        letter-spacing: -0.7vw;
        line-height: 1;
    }
`


const FeaturesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap: 1.5vw;
    grid-row-gap: 1.5vw;
    @media only screen and (max-width: 575px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-column-gap: 3vw;
        grid-row-gap: 3vw;
    }
`

const FeatureWrapper = styled.div`
    padding: 1vw 1.2vw;
    background: white;
    border-radius: 0.6vw;
    display: flex;
    position: relative;
    :after {
        content: '';
        position: absolute;
        background: #f2f2f2;
        top: 50%;
        transform: translateY(-50%);
        left: 0.95vw;
        width: 5.2vw;
        height: 5.2vw;
        border-radius: 100vw;
        z-index: 0;
    }
    @media only screen and (max-width: 575px) {
        padding: 4vw 5vw;
        border-radius: 2vw;
        :after {
            left: 4.3vw;
            width: 21vw;
            height: 21vw;
        }
    }
`

const FeatureText = styled.div`
    font-size: 1.05vw;
    line-height: 1.3;
    color: var(--granich-grey);
    position: relative;
    z-index: 1;
    span {
        font-weight: 500;
        color: var(--granich-black);
    }
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
    }
`

const FeatureLink = styled.a`
    font-weight: 500;
    color: var(--granich-black);
    border-bottom: 1px solid var(--granich-light-grey);
    position: relative;
    :hover {
        font-weight: 500;
        color: var(--granich-black);
        border-bottom: none;
    }
`

const FeatureImage = styled(props => <Img {...props}/>)`
    width: 4.8vw;
    min-width: 4.8vw;
    height: 4.8vw;
    margin-right: 1vw;
    position: relative;
    z-index: 1;
    @media only screen and (max-width: 575px) {
        width: 20vw;
        min-width: 20vw;
        height: 20vw;
        margin-right: 5vw;
    }
`

const Feature = ({image, title, text, link}) => {
    return (
        <FeatureWrapper>
            <FeatureImage fluid={image}/>
            <FeatureText>
                {link ? (
                    <FeatureLink href={link} target="_blank">{title}<ArrowLinkOut/></FeatureLink>
                ) : (
                    <span>{title}</span>
                )}

                <br/> {text}
            </FeatureText>
        </FeatureWrapper>
    )
}


const CourseFeatures = ({data}) => {

    return (
        <FeaturesSection>
            <Container>
                <FeaturesSectionTitle>
                    Особенности курса
                </FeaturesSectionTitle>
                <FeaturesWrapper>
                    {data.edges.map(feature => {
                        return (
                            <Feature key={feature.node.id} link={feature.node.featuresLink} image={feature.node.featuresImage.fluid} title={feature.node.featuresTitle} text={feature.node.featuresText}/>
                        )
                    })}

                </FeaturesWrapper>
            </Container>
        </FeaturesSection>
    )
}

export default CourseFeatures
