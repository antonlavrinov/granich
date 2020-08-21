import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import CourseArrowDown from '../../assets/svgs/course-arrow-down-27.svg';
import PotokIcon from '../../assets/svgs/graph-design/graph-design-potok-icon.svg';
import DurationIcon from '../../assets/svgs/graph-design/graph-design-duration-icon.svg';
import DateIcon from '../../assets/svgs/graph-design/graph-design-date-icon.svg';
import BackgroundImage from 'gatsby-background-image';

const Potok = styled(props => <PotokIcon {...props}/>)`
    width: 1.3vw;
    margin-right: 0.3vw;
    fill: white;
`

const Duration = styled(props => <DurationIcon {...props}/>)`
    width: 1.3vw;
    fill: var(--granich-red);
    margin-right: 0.3vw;
`
const Date = styled(props => <DateIcon {...props}/>)`
    width: 1.3vw;
    fill: var(--granich-red);
    margin-right: 0.3vw;
`

const GraphDesignOfferSection = styled.section`
    padding-top: 8.4vw;
    margin-bottom: 5vw;


`

const GraphDesignOfferWrapper = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    background: white;
    border-radius: 0.5vw;
    padding: 3.4vw 2.7vw 4.4vw;
    position: relative;
    box-shadow: 0.25vw 0.15vw 0.4vw rgba(0,0,0,0.1);
    background-size: auto auto;
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: right;

    // :before {
    //     content: '';
    //     width: 29.4vw;
    //     height: 29.4vw;
    //     background: var(--granich-red);
    //     position: absolute;
    //     top: 50%;
    //     right: 3.2vw;
    //     border-radius: 100vw;
    //     transform: translateY(-50%);
    // }


`

const GraphDesignOfferTags = styled.div`
    display: flex;
    margin-bottom: 2.1vw; 
`
const GraphDesignOfferTag = styled.div`
    font-size: 1.2vw;
    display: flex;
    color: var(--granich-red);
    border: 0.1vw solid var(--granich-red);
    padding: 0.3vw 0.8vw;
    border-radius: 100vw;
    margin-right: 1vw;
    font-weight: 500;
`
const GraphDesignOfferMainTag = styled.div`
    font-size: 1.2vw;
    display: flex;
    color: white;
    background: var(--granich-red);
    border: 0.1vw solid var(--granich-red);
    padding: 0.3vw 0.8vw;
    border-radius: 100vw;
    margin-right: 1vw;
    font-weight: 500;
`

const GraphDesignOfferTitle = styled.h1`
    font-size: 7.5vw;
    letter-spacing: 0.28vw;
    line-height: 0.8;
    font-family: EB Garamond;
    style: normal;
    font-weight: 500;
    margin-left: -0.3vw;
    margin: 0;
    margin-bottom: 4.25vw;
    span {
        letter-spacing: -0.05vw;
        line-height: inherit;
        font-style: italic;
        font-size: 7.2vw;
        font-weight: inherit;
        font-family: EB Garamond;
    }
`
const GraphDesignOfferDescr = styled.div`
    width: 33vw;
    font-size: 1.55vw;
    margin-bottom: 2vw;
    margin-left: 0.8vw;
    line-height: 1.47;
    font-weight: 500;
    letter-spacing: -0.01vw;
`

const GraphDesignOfferButton = styled.a`
  display: inline-flex;
  align-items: center;
  color: white;
  background: var(--granich-red-gradient-horizontal);
  margin-left: 0.7vw;
  padding: 1vw 1.6vw 1.2vw 1.3vw;
  letter-spacing: 0.06vw;
  border-radius: 0.3vw;
  font-size: 1.61vw;
  font-weight: 400;
  transition: all 0.2s ease;
  user-select: none;
  box-shadow: .25vw .25vw .4vw rgba(0,0,0,0.25);
  letter-spacing: 0.05vw;
  svg {
    width: 1.5vw;
    height: 1.5vw;
    margin-right: 0.5vw;
  }
  :hover {
    transform: scale(1.05);
    cursor: pointer;
    color: white;
    font-size: 1.61vw;
    font-weight: 400;
    letter-spacing: 0.06vw;
  }
`

const GraphDesignOfferImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
  top: 0;
  right: 0;
  bottom: 0;
  min-height: 45vw;
  width: 100%;
`


const GraphDesignOffer = ({data}) => {
    console.log(data)
    return (
        <GraphDesignOfferSection>
            <Container>
                <GraphDesignOfferWrapper fluid={data.edges[0].node.courseMainImage.fluid}>
                    {/* {/* <GraphDesignOfferImage style={{position: 'absolute'}} fluid={data.edges[0].node.courseMainImage.fluid}/> */}
                    <GraphDesignOfferTags>
                        <GraphDesignOfferMainTag><Potok/>17 поток</GraphDesignOfferMainTag>
                        <GraphDesignOfferTag><Date/>Старт 1 сентября</GraphDesignOfferTag>
                        <GraphDesignOfferTag><Duration/>2 месяца интенсива</GraphDesignOfferTag>
                    </GraphDesignOfferTags>
                    <GraphDesignOfferTitle>
                        <span>Осознанный</span> <br/> графдизайн
                    </GraphDesignOfferTitle>
                    <GraphDesignOfferDescr>
                        За 2 месяца вы получите упорядоченные знания о графическом дизайне
                        и создадите свое портфолио 
                    </GraphDesignOfferDescr>
                    <GraphDesignOfferButton><CourseArrowDown/>Участвовать</GraphDesignOfferButton>
                    
                </GraphDesignOfferWrapper>
            </Container>

        </GraphDesignOfferSection>
    )
}

export default GraphDesignOffer
