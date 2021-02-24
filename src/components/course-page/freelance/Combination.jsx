import React from 'react'
import styled from 'styled-components';
import { Container } from '../../style';

const CombinationSection = styled.div`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        // margin-bottom: 5vw;
        margin-bottom: 7vw;
    }
`

const CombinationWrapper = styled.div`
    margin-bottom: 4vw;
    display: flex;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
        flex-direction: column;
    }
`

const CombinationSectionTitle = styled.h2`
    font-size: 3.85vw;
    font-weight: 700;
    letter-spacing: -0.1vw;
    margin-bottom: 2.4vw;
    @media only screen and (max-width: 575px) {
        font-size: 11vw;
        margin-bottom: 4vw;
        letter-spacing: -0.7vw;
        line-height: 1;
    }
`

const CombinationBlock = styled.div`
    display: flex;
    align-items: flex-start;
    background: white;
    padding: 1.8vw;
    width: 48%;
    border-radius: 0.6vw;
    margin-right: 4%;
    position: relative;
    :after {
        content: '+';
        position: absolute;
        color: var(--granich-black);
        font-weight: 600;
        top: 50%;
        transform: translateY(-50%);
        right: -2.5vw;
        font-size: 3vw;
    }
    :last-child {
        margin-right: 0;
        :after {
            display: none;
        }
    }


    @media only screen and (max-width: 575px) {
        border-radius: 2.5vw;
        padding: 4vw; 
        min-height: auto;
        margin-right: 0;
        margin-bottom: 11vw;
        width: 100%;
        :last-child {
            margin-bottom: 0;
        }
        :after {
            right: auto;
            transform: translate(-50%, 0);
            left: 50%;
            bottom: -11vw;
            top: auto;
            font-size: 11vw;

        }
    }
`

const CombinationInfo = styled.div`
    color: var(--granich-grey);
    font-size: 1.3vw;
    line-height: 1.35;
    span {
        font-weight: bold;
    }
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
    }


`

const CombinationNumber = styled.div`
    font-family: EB Garamond;
    font-style: italic;
    font-size: 4vw;
    font-weight: 500;
    background: #e2e2e2;
    border-radius: 100vw;
    min-height: 4vw;
    min-width: 4vw;
    line-height: 0.9;
    margin-right: 1vw;
    letter-spacing: 0;
    margin-left: -0.1vw;
    text-align: center;
    @media only screen and (max-width: 575px) {
        font-size: 10vw;
        min-height: 10vw;
        min-width: 10vw;
        margin-right: 3vw;
    }
`

const combinationsObj = [
    {
        number: 1,
        title: 'Курс ',
        text: '— идёте по спланированной учебной программе, с лекциями, презентациями и ДЗ к ним.'
    },
    {
        number: 2,
        title: 'Наставничество ',
        text: '— я делаю по каждому ученику личные разборы, чтобы повысить качество усвоения материала.'
    },
]

const Combination = () => {
    return (
        <CombinationSection>
            <Container>
                <CombinationSectionTitle>
                    Курс-наставничество это комбинация:
                </CombinationSectionTitle>
                <CombinationWrapper>
                    {combinationsObj.map((el) => (
                        <CombinationBlock key={el.number}>
                            <CombinationNumber>
                                {el.number}
                            </CombinationNumber>
                            <CombinationInfo>
                                <span>{el.title}</span>
                                {el.text}
                            </CombinationInfo>

                        </CombinationBlock>
                    ))}
                </CombinationWrapper>
            </Container>
        </CombinationSection>
    )
}

export default Combination
