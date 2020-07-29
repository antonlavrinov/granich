import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import CourseArrowDown from '../../assets/svgs/course-arrow-down-27.svg';

const CourseOfferSection = styled.section`
    padding: 150px 0 0;
    margin-bottom: 50px;


`

const CourseOfferWrapper = styled.div`
    background: white;
    border: 1.5px solid var(--granich-grey);
    border-radius: 5px;
    padding: 50px;


`

const CourseOfferTags = styled.div`
    display: flex;
`
const CourseOfferTag = styled.div`
    font-size: 18px;
    display: flex;
    color: var(--granich-red);
    border: 1.5px solid var(--granich-red);
    padding: 5px 8px;
    border-radius: 100px;
    margin-right: 10px;
    font-weight: 500;
`
const CourseOfferTitle = styled.h1`
    font-size: 110px;
    line-height: 0.8;
    font-family: EB Garamond;
    style: normal;
    font-weight: 500;
    span {

        line-height: inherit;
        font-style: italic;
        font-size: 100px;
        font-weight: inherit;
        font-family: EB Garamond;
    }
`
const CourseOfferDescr = styled.div`
    width: 520px;
    font-size: 25px;
    margin-bottom: 50px;
`

const CourseOfferButton = styled.a`
  display: inline-flex;
  align-items: center;
  color: white;
  background: var(--granich-red-gradient-horizontal);
  margin-top: -10px;
  margin-left: auto;
  padding: 15px 16px;
  letter-spacing: 0.02em;
  border-radius: 8px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.2s ease;
  user-select: none;
  svg {
    width: 14px;
    margin-right: 5px;
  }
  :hover {
    transform: scale(1.1);
    cursor: pointer;
    color: white;
    font-size: 15px;
    font-weight: 600;
  }
`


const CourseOffer = () => {
    return (
        <CourseOfferSection>
            <Container>
                <CourseOfferWrapper>
                    <CourseOfferTags>
                        <CourseOfferTag>17 поток</CourseOfferTag>
                        <CourseOfferTag>Старт 1 сентября</CourseOfferTag>
                        <CourseOfferTag>2 месяца интенсива</CourseOfferTag>
                    </CourseOfferTags>
                    <CourseOfferTitle>
                        <span>Осознанный</span> <br/> графдизайн
                    </CourseOfferTitle>
                    <CourseOfferDescr>
                        За 2 месяца вы получите упорядоченные знания о графическом дизайне
                        и создадите свое портфолио
                    </CourseOfferDescr>
                    <CourseOfferButton><CourseArrowDown/>Учавствовать</CourseOfferButton>
                    
                </CourseOfferWrapper>
            </Container>

        </CourseOfferSection>
    )
}

export default CourseOffer
