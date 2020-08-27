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
    margin-bottom: 50px;
`


const FeaturesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap: 1.5vw;
    grid-row-gap: 1.5vw;
`

const FeatureWrapper = styled.div`
    padding: 1vw;
    background: white;
    border-radius: 0.5vw;
    display: flex;
`

const FeatureText = styled.div`
    // font-size: 1vw;
    font-size: 1.15vw;
    font-size: 1.06vw;
    line-height: 1.3;
    color: var(--granich-grey);
    span {
        font-weight: 500;
        color: var(--granich-black);
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
    width: 5.4vw;
    min-width: 5.4vw;
    height: 5.4vw;
    margin-right: 1vw;
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
