import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import CourseArrowDown from '../../assets/svgs/course-arrow-down-27.svg';

const GraphDesignOfferSection = styled.section`
    padding: 150px 0 0;
    margin-bottom: 50px;


`

const GraphDesignOfferWrapper = styled.div`
    background: white;
    border: 1.5px solid var(--granich-grey);
    border-radius: 5px;
    padding: 50px;


`

const GraphDesignOfferTags = styled.div`
    display: flex;
`
const GraphDesignOfferTag = styled.div`
    font-size: 18px;
    display: flex;
    color: var(--granich-red);
    border: 1.5px solid var(--granich-red);
    padding: 5px 8px;
    border-radius: 100px;
    margin-right: 10px;
    font-weight: 500;
`
const GraphDesignOfferTitle = styled.h1`
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
const GraphDesignOfferDescr = styled.div`
    width: 520px;
    font-size: 25px;
    margin-bottom: 50px;
`

const GraphDesignOfferButton = styled.a`
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


const GraphDesignOffer = () => {
    return (
        <GraphDesignOfferSection>
            <Container>
                <GraphDesignOfferWrapper>
                    <GraphDesignOfferTags>
                        <GraphDesignOfferTag>17 поток</GraphDesignOfferTag>
                        <GraphDesignOfferTag>Старт 1 сентября</GraphDesignOfferTag>
                        <GraphDesignOfferTag>2 месяца интенсива</GraphDesignOfferTag>
                    </GraphDesignOfferTags>
                    <GraphDesignOfferTitle>
                        <span>Осознанный</span> <br/> графдизайн
                    </GraphDesignOfferTitle>
                    <GraphDesignOfferDescr>
                        За 2 месяца вы получите упорядоченные знания о графическом дизайне
                        и создадите свое портфолио
                    </GraphDesignOfferDescr>
                    <GraphDesignOfferButton><CourseArrowDown/>Учавствовать</GraphDesignOfferButton>
                    
                </GraphDesignOfferWrapper>
            </Container>

        </GraphDesignOfferSection>
    )
}

export default GraphDesignOffer
