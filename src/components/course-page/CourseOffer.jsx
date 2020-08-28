import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import CourseArrowDown from '../../assets/svgs/course-arrow-down-27.svg';
import PotokIcon from '../../assets/svgs/graph-design/graph-design-potok-icon.svg';
import DurationIcon from '../../assets/svgs/graph-design/graph-design-duration-icon.svg';
import DateIcon from '../../assets/svgs/graph-design/graph-design-date-icon.svg';
import BackgroundImage from 'gatsby-background-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

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

const CourseOfferSection = styled.section`
    padding-top: 8.4vw;
    margin-bottom: 5vw;


`

const CourseOfferWrapper = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    background: white;
    border-radius: 0.5vw;
    padding: 3.4vw 2.7vw 4.4vw;
    position: relative;
    box-shadow: 0.25vw 0.15vw 0.4vw rgba(0,0,0,0.1);
    background-size: auto auto;
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: right;
    overflow: hidden;



`

const CourseOfferTags = styled.div`
    display: flex;
    margin-bottom: 2.1vw; 
`
const CourseOfferTag = styled.div`
    font-size: 1.2vw;
    display: flex;
    color: var(--granich-red);
    border: 0.1vw solid var(--granich-red);
    padding: 0.3vw 0.8vw;
    border-radius: 100vw;
    margin-right: 1vw;
    font-weight: 500;
`
const CourseOfferMainTag = styled.div`
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

const CourseOfferTitle = styled.h1`
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
    ${props => props.type === 'Мастер-класс' && `
        margin-bottom: 1.5vw;
        margin-left: 0vw;
        margin-top: -0.5vw;
        line-height: 1.15;
        p {
            font-size: 6vw;
            font-weight: 600;
            letter-spacing: 0.8vw;
            i { 
                margin-top: 2vw;
                font-weight: 500;
                display: block;
            }
        }
    `}
`
const CourseOfferDescr = styled.div`
    width: 33vw;
    font-size: 1.55vw;
    margin-bottom: 2vw;
    margin-left: 0.8vw;
    line-height: 1.47;
    font-weight: 500;
    letter-spacing: -0.01vw;
    ${props => props.type === 'Мастер-класс' && `
        width: 26vw;
        margin-bottom: 2vw;
    `}
`

const CourseOfferButton = styled.a`
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
    width: 1.4vw;
    height: 1.4vw;
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
  ${props => props.type === 'Мастер-класс' && `
    padding: 1vw 3vw 1.2vw 4.2vw;
    svg {
        margin-left: 0.4vw;
    }
  `}
`




const CourseOffer = ({data}) => {
    console.log(data)
    return (
        <CourseOfferSection>
            <Container>
                <CourseOfferWrapper fluid={data.courseMainImage.fluid}>
                    {/* {/* <CourseOfferImage style={{position: 'absolute'}} fluid={data.courseMainImage.fluid}/> */}
                    <CourseOfferTags>
                        {data.courseType === 'Курс' ? (
                            <>
                                {data.courseStream && <CourseOfferMainTag><Potok/>{data.courseStream} поток</CourseOfferMainTag>}
                                {data.courseStart && <CourseOfferTag><Date/>Старт {data.courseStart}</CourseOfferTag>}
                                {data.courseDuration && <CourseOfferTag><Duration/>{data.courseDuration} интенсива</CourseOfferTag>}
                            </>
                        ) : (
                            <>
                                {data.courseTags.map((tag, idx) => {
                                    return (
                                        <CourseOfferTag key={idx}>{tag}</CourseOfferTag>
                                    )
                                })}
                            </>
                        )}
                    </CourseOfferTags>
                    <CourseOfferTitle type={data.courseType}>
                        {documentToReactComponents(data.courseMainTitle.json)}
                    </CourseOfferTitle>
                    <CourseOfferDescr type={data.courseType}>
                        {data.courseDescr}
                    </CourseOfferDescr>
                    {data.courseType === 'Курс' ? (
                        <CourseOfferButton onClick={() => scrollTo('#participation-section')}><CourseArrowDown/>Участвовать</CourseOfferButton>
                    ) : (
                        <CourseOfferButton onClick={() => scrollTo('#prices-range-section')}  type={data.courseType}>Купить<CourseArrowDown/></CourseOfferButton>
                    )}

                    
                </CourseOfferWrapper>
            </Container>

        </CourseOfferSection>
    )
}

export default CourseOffer
