import React from 'react'
import { Container } from '../../style';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import FreelanceParticipationLogoIcon from '../../../assets/svgs/freelance/freelance-participation-logo.svg';
import FreelanceParticipationTelegramIcon from '../../../assets/svgs/freelance/telegram-icon.svg';
import CheckIcon from '../../../assets/svgs/freelance/freelance-participation-check-icon.svg';



const ParticipationSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`
const ParticipationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    justify-content: center;
    padding: 8vw 0 10vw;
    border-radius: 0.6vw;
    
    @media only screen and (max-width: 575px) {
        border-radius: 2.5vw;
        padding: 8vw 6vw 10vw 6vw;
        align-items: flex-start;

    }
`

const ParticipationSectionTitle = styled.h2`
    font-size: 7.2vw;
    letter-spacing: -0.01rem;
    text-align: center;
    font-weight: 800;
    width: 90%;
    line-height: 0.92;
    position: relative;
    margin-bottom: 7vw;
    @media only screen and (max-width: 575px) {
        font-size: 11vw;
        text-align: left;
        margin-bottom: 9vw;
        letter-spacing: -0.07rem;
        line-height: 1;
    }
`

const ParticipationStepsWrapper = styled.div`
    display: flex;
    margin-bottom: 6vw;
    padding: 0 2vw 0 6vw;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
        margin-bottom: 10vw;
    }
`

const ParticipationStepWrapper = styled.div`
    position: relative;
    padding-left: 4vw;
    padding-right: 3vw;
    :first-child {
        padding-left: 0;
        :after {
            content: '';
            position: absolute;
            top: 50%;
            right: 0;
            width: 0.25vw;
            height: 120%;
            transform: translateY(-50%);
            background: var(--granich-black);
        }
    }
    @media only screen and (max-width: 575px) {
        padding: 0;
        margin-bottom: 0;
        :first-child {
            margin-bottom: 20vw;
            padding: 0;
            :after {
                top: auto;
                bottom: -10vw;
                right: 0;
                width: 100%;
                height: 0.5vw;
                transform: none;

            }
        }
    }
`
const ParticipationStepHeader = styled.div`
    display: flex;
    margin-bottom: 1.8vw;
    align-items: center;
    @media only screen and (max-width: 575px) {
        margin-bottom: 0;
    }
`

const ParticipationStepNumber = styled.div`
    border: 0.4vw solid var(--granich-black);
    border-radius: 100vw;
    width: 7vw;
    height: 7vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5vw;
    font-weight: 800;
    margin-right: 1.5vw;
    @media only screen and (max-width: 575px) {
        border-width: 0.6vw;
        width: 10vw;
        height: 10vw;
        font-size: 7vw;
        margin-right: 3vw;
    }
`

const ParticipationStepLogo = styled(props => <FreelanceParticipationLogoIcon {...props} />)`
    width: 16vw;
    min-width: 16vw;
    margin-right: 1.6vw;
    @media only screen and (max-width: 575px) {
        width: 75%;
        margin-right: 0;
        margin-bottom: 5vw;
    }

`

const ParticipationStepImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    width: 7vw;
    height: 7vw;
    min-width: 7vw;
    min-height: 7vw;
    transform: scale(1.4) translateX(12%);
    border: 0.2vw solid var(--granich-black);
    border-radius: 100vw;
    overflow: hidden;
    margin-right: 2.2vw;
    @media only screen and (max-width: 575px) {
        width: 25vw;
        height: 25vw;
        min-width: 25vw;
        min-height: 25vw;
        margin-bottom: 3vw;
        margin-right: 0;
        transform: none;
        border-width: 0.7vw;
    }
`

const ParticipationStepTitle = styled.div`
    font-weight: 800;
    font-size: 2.65vw;
    line-height: 1.4;
    margin-bottom: 1.5vw;
    @media only screen and (max-width: 575px) {
        font-size: 5.5vw;
        line-height: 1.2;
    }
`

const ParticipationStepNotice = styled.div`
    font-size: 1.65vw;
    line-height: 1.4;
    color: var(--granich-grey);
    svg {
        position: relative;
        width: 2.3vw;
        top: 0.45vw;
    }
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        svg {
            width: 4vw;
            top: 0.7vw;
        }
    }
`

const ParticipationTelegramInstructions = styled.div`
    display: flex;
    width: 65%;
    @media only screen and (max-width: 575px) {
        width: 100%;
    }

`

const ParticipationTelegramIcon = styled(props => <FreelanceParticipationTelegramIcon {...props} />)`
    width: 7.5vw;
    min-width: 7.5vw;
    margin-right: 1.5vw;
    transform: translateY(-15%);
    @media only screen and (max-width: 575px) {
        width: 8vw;
        min-width: 8vw;
        margin-right: 2vw;
        transform: translateY(-30%);
    }


`

const ParticipationTelegramInfo = styled.div`

`

const ParticipationTelegramLink = styled.a`
    color: var(--granich-grey);
    font-size: 5vw;
    line-height: 1.55;
    position: relative;


    :hover {
        color: var(--granich-grey);
        font-size: 5vw;
        cursor: pointer;
        :after {
            position: absolute;
            content: '';
            width: 100%;
            bottom: -0.3vw;
            left: 0;
            height: 0.2vw;
            background: rgba(0,0,0,0.1);
        }
    }
    @media only screen and (max-width: 575px) {
        font-size: 6vw;
        :hover {
            font-size: 6vw;
        }
    }
`

const ParticipationTelegramDescr = styled.div`
    color: var(--granich-grey);
    font-size: 1.65vw;
    letter-spacing: -0.015rem;
    line-height: 1.25;
    padding-left: 0.5vw;
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;

    }
`





const FreelanceParticipation = () => {

    const data = useStaticQuery(graphql`
        query FreelanceParticipationSectionQuery {
            freelanceParticipationAuthor: file(relativePath: { eq: "author.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 350, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

        }
    `)

    const author = data.freelanceParticipationAuthor.childImageSharp.fluid

    return (
        <ParticipationSection>
            <Container>
                <ParticipationWrapper>
                    <ParticipationSectionTitle>
                        Участвовать
                    </ParticipationSectionTitle>
                    <ParticipationStepsWrapper>
                        <ParticipationStep
                            number="1"
                            title="Записаться на курс-наставничество Осознанный Фриланс"
                            notice="С домашними заданиями и учебной группой" />
                        <ParticipationStep
                            number="2"
                            image={author}
                            title="Провести со мной личную сессию наставничества"
                            notice="По нужной вам теме и в удобное время" />
                    </ParticipationStepsWrapper>
                    <ParticipationTelegramInstructions>
                        <ParticipationTelegramIcon>
                        </ParticipationTelegramIcon>
                        <ParticipationTelegramInfo>
                            <ParticipationTelegramLink rel="noopener noreferrer" href="https://t.me/vadim_granich" target="_blank">
                                @vadim_granich
                            </ParticipationTelegramLink>
                            <ParticipationTelegramDescr>
                                Напишите мне: «Хочу на Осознанный Фриланс» или «Хочу личную сессию наставничества»
                            </ParticipationTelegramDescr>
                        </ParticipationTelegramInfo>
                    </ParticipationTelegramInstructions>
                </ParticipationWrapper>
            </Container>

        </ParticipationSection>
    )
}

export default FreelanceParticipation


const ParticipationStep = ({ number, title, notice, image }) => {
    return (
        <ParticipationStepWrapper>
            <ParticipationStepHeader>
                <ParticipationStepNumber>
                    {number}
                </ParticipationStepNumber>
                {image ? (
                    <ParticipationStepImage fluid={image} />
                ) : (
                        <ParticipationStepLogo />
                    )}
            </ParticipationStepHeader>
            <ParticipationStepTitle>
                {title}
            </ParticipationStepTitle>
            <ParticipationStepNotice>
                <CheckIcon /> {notice}
            </ParticipationStepNotice>
        </ParticipationStepWrapper>
    )
}
