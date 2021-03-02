import React from 'react'
import styled from 'styled-components';
import { Container } from '../../style';
import FreelancePresentationLabel from './FreelancePresentationLabel';
import CombinationHandsIcon from '../../../assets/svgs/freelance/combination-hands.svg';
import FreelanceCombinationLogoIcon from '../../../assets/svgs/freelance/freelance-combination-logo.svg';

const FreelanceCombinationLogo = styled(props => <FreelanceCombinationLogoIcon {...props} />)`
    width: 12vw;
    min-width: 12vw;
    margin-right: 1.6vw;
    @media only screen and (max-width: 575px) {
        width: 100%;
        margin-right: 0;
        margin-bottom: 5vw;
    }
`


const CombinationHands = styled(props => <CombinationHandsIcon {...props} />)`
    width: 21vw;
    position: relative;
    margin-bottom: 3.1vw;
    @media only screen and (max-width: 575px) {
        width: 40vw;
        margin-bottom: 5vw;
    }
`

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
    flex-direction: column;
    align-items: center;
    background: white;
    padding: 3vw 0 7vw;
    border-radius: 0 0 0.6vw 0.6vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
        flex-direction: column;
        padding-bottom: 5vw;
        border-radius: 2.5vw;
    }
`

const CombinationLabelWrapper = styled.div`
    padding-left: 5.3vw;
    margin-bottom: 2.5vw;
    display: block;
    @media only screen and (max-width: 575px) {
        display: none;
    }
`

const CombinationSectionTitle = styled.h2`
    font-size: 4.8vw;
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    letter-spacing: 0.11vw;
    margin-bottom: 2.4vw;
    padding-left: 6.7vw;

    line-height: 1;
    @media only screen and (max-width: 575px) {
        font-size: 8.5vw;
        margin-bottom: 8vw;
        letter-spacing: -0.1vw;
        line-height: 1;
    }
`

const CombinationBlock = styled.div`
    color: var(--granich-grey);
    font-size: 1.8vw;
    line-height: 1.4;
    font-weight: 200;
    letter-spacing: -0.015rem;
    align-items: flex-start;
    background: white;
    width: 25vw;
    border-radius: 0.6vw;
    margin-right: 14.5vw;
    position: relative;
    span {
        font-size: 1.8vw;
        display: block;
        font-weight: 500;
        margin-bottom: 0.8vw;
    }
    :after {
        content: '+';
        position: absolute;
        color: var(--granich-black);
        font-weight: 400;
        font-family: EB Garamond;
        top: 40%;
        transform: translateY(-50%);
        right: -8.4vw;
        font-size: 8.5vw;
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
        margin-bottom: 20vw;
        width: 100%;
        font-size: 4.5vw;
        span {
            font-size: 4.5vw;
        }
        :last-child {
            margin-bottom: 0;
        }
        :after {
            right: auto;
            transform: translate(-50%, 0);
            left: 50%;
            bottom: -19vw;
            top: auto;
            font-size: 14vw;

        }
    }
`


const CombinationList = styled.div`
    display: flex;
    align-items: flex-start;
    padding-left: 2.5vw;
    @media only screen and (max-width: 575px) {
        flex-direction: column;

    }
`

const combinationsObj = [
    {
        id: 1,
        title: 'Курс',
        text: 'Вы идёте по спланированной учебной программе — с лекциями, презентациями и ДЗ к ним.'
    },
    {
        id: 2,
        title: 'Наставничество',
        text: 'Вы получаете от меня личные разборы, чтобы повысить качество усвоения материала.'
    },
]

const Combination = () => {
    return (
        <CombinationSection>
            <Container>


                <CombinationWrapper>
                    <CombinationLabelWrapper>
                        <FreelancePresentationLabel logo={(<FreelanceCombinationLogo />)} />
                    </CombinationLabelWrapper>

                    <CombinationSectionTitle>
                        Курс-наставничество это эффективная модель обучения
                    </CombinationSectionTitle>
                    <CombinationHands />
                    <CombinationList>
                        {combinationsObj.map((el) => (
                            <CombinationBlock key={el.id}>
                                <span>{el.title}</span>
                                {el.text}
                            </CombinationBlock>
                        ))}
                    </CombinationList>

                </CombinationWrapper>
            </Container>
        </CombinationSection>
    )
}

export default Combination
