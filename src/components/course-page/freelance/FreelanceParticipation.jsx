import React, { useState } from 'react'
import { Container } from '../../style';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import FreelanceParticipationLogoIcon from '../../../assets/svgs/freelance/freelance-participation-logo.svg';
import FreelanceParticipationTelegramIcon from '../../../assets/svgs/freelance/telegram-icon.svg';
import CheckIcon from '../../../assets/svgs/freelance/freelance-participation-check-icon.svg';
import arrowIcon from '../../../assets/images/freelance/telegram_arrow_out.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import DisabledForm from './DisabledForm';
import CopyIcon from '../../../assets/svgs/copy-icon.svg';


const Section = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`


const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    justify-content: center;
    padding: 6vw 4vw 6vw;
    border-radius: 0.6vw;
    @media only screen and (max-width: 575px) {
        border-radius: 2.5vw;
        padding: 8vw 6vw 8vw 6vw;
        align-items: flex-start;

    }
`

const SectionTitle = styled.h2`
    font-size: 7.2vw;
    letter-spacing: -0.01rem;
    text-align: center;
    font-weight: 800;
    width: 90%;
    line-height: 0.92;
    position: relative;
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        font-size: 11vw;
        text-align: left;
        margin-bottom: 4vw;
        letter-spacing: -0.07rem;
        line-height: 1;
    }
`

// const ParticipationStepsWrapper = styled.div`
//     display: flex;
//     margin-bottom: 6vw;
//     padding: 0 2vw 0 6vw;
//     @media only screen and (max-width: 575px) {
//         flex-direction: column;
//         align-items: flex-start;
//         padding: 0;
//         margin-bottom: 10vw;
//     }
// `

// const ParticipationStepWrapper = styled.div`
//     position: relative;
//     padding-left: 4vw;
//     padding-right: 3vw;
//     :first-child {
//         padding-left: 0;
//         :after {
//             content: '';
//             position: absolute;
//             top: 50%;
//             right: 0;
//             width: 0.25vw;
//             height: 120%;
//             transform: translateY(-50%);
//             background: var(--granich-black);
//         }
//     }
//     @media only screen and (max-width: 575px) {
//         padding: 0;
//         margin-bottom: 0;
//         :first-child {
//             margin-bottom: 20vw;
//             padding: 0;
//             :after {
//                 top: auto;
//                 bottom: -10vw;
//                 right: 0;
//                 width: 100%;
//                 height: 0.5vw;
//                 transform: none;

//             }
//         }
//     }
// `
// const ParticipationStepHeader = styled.div`
//     display: flex;
//     margin-bottom: 1.8vw;
//     align-items: center;
//     @media only screen and (max-width: 575px) {
//         margin-bottom: 0;
//     }
// `

// const ParticipationStepNumber = styled.div`
//     border: 0.4vw solid var(--granich-black);
//     border-radius: 100vw;
//     width: 7vw;
//     height: 7vw;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 5vw;
//     font-weight: 800;
//     margin-right: 1.5vw;
//     @media only screen and (max-width: 575px) {
//         border-width: 0.6vw;
//         width: 10vw;
//         height: 10vw;
//         font-size: 7vw;
//         margin-right: 3vw;
//     }
// `

const OptionLogo = styled(props => <FreelanceParticipationLogoIcon {...props} />)`
    width: 16vw;
    min-width: 16vw;
    margin-right: 1.6vw;
    margin-bottom: 1vw;
    @media only screen and (max-width: 575px) {
        width: 60%;
        margin-right: 0;
        margin-bottom: 3vw;
    }

`

const OptionImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    width: 8vw;
    height: 8vw;
    min-width: 8vw;
    min-height: 8vw;
    border: 0.3vw solid var(--granich-black);
    border-radius: 100vw;
    overflow: hidden;
    margin-right: 1.5vw;

    @media only screen and (max-width: 575px) {
        width: 19vw;
        height: 19vw;
        min-width: 19vw;
        min-height: 19vw;
        // margin-bottom: 3vw;
        margin-right: 3vw;
        border-width: 0.7vw;
    }
`

// const ParticipationStepTitle = styled.div`
//     font-weight: 800;
//     font-size: 2.65vw;
//     line-height: 1.4;
//     margin-bottom: 1.5vw;
//     @media only screen and (max-width: 575px) {
//         font-size: 5.5vw;
//         line-height: 1.2;
//     }
// `

const OptionNotice = styled.div`
    font-size: 1.65vw;
    line-height: 1.4;
    color: var(--granich-grey);
    display: flex;
    align-items: flex-start;
    margin-bottom: 1vw;
    svg {
        position: relative;
        width: 2.3vw;
        min-width: 2.3vw;
        margin-right: 0.6vw;
    }
    ${props => props.narrow && `
        width: 19vw;
    `}
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        width: 100%;
        svg {
            width: 4vw;
            min-width: 4vw;
            top: 0.3vw;
            margin-right: 1vw;
        }
    }
`

const TelegramInstructions = styled.div`
    display: flex;
    align-items: flex-start;
    // @media only screen and (max-width: 575px) {
    //     width: 100%;
    // }

`

const TelegramIcon = styled(props => <FreelanceParticipationTelegramIcon {...props} />)`
    width: 2.3vw;
    min-width: 2.3vw;
    margin-right: 0.6vw;
    position: relative;
    top: 0.2vw;
    // transform: translateY(-15%);
    @media only screen and (max-width: 575px) {
        width: 4vw;
        min-width: 4vw;
        margin-right: 1vw;
        top: 1vw;
    }


`



const TelegramInfoWrapper = styled.div`

`

const TelegramLink = styled.a`
    color: var(--telegram);
    font-size: 1.65vw;
    line-height: 1.55;
    position: relative;
    font-weight: 500;
    display: inline-block;
    // margin-bottom: 0.5vw;
    :after {
        position: absolute;
        content: '';
        width: 100%;
        bottom: 0;
        left: 0;
        height: 1px;
        background: rgba(52,162,205,0.4);
    }
    :before {
        content: '';
        background: url(${props => props.arrowIcon});
        width: 1vw;
        height: 1vw;
        top: 0;
        right: -1.2vw;
        background-size: cover;
        border-radius: 100vw;
        position: absolute;
    }




    :hover {
        color: var(--telegram);
        font-size: 1.65vw;
        cursor: pointer;
        font-weight: 500;
        :after {
            background: rgba(52,162,205,0.8);
        }
    }
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        :after {
            height: 0.3vw;
            background: rgba(52,162,205,0.5);
        }
        :before {
            width: 2.7vw;
            height: 2.7vw;
            top: -0.5vw;
            right: -3.2vw;
        }
        :hover {
            font-size: 3.7vw;
        }
    }
`

const TelegramDescr = styled.div`
    color: var(--granich-grey);
    font-size: 1.65vw;
    letter-spacing: -0.015rem;
    line-height: 1.25;
    padding-left: 0.5vw;
    span {
        display: block;
        margin: 0.2vw 0;
    }
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;

    }
`

const OptionTitle = styled.div`
    font-size: 4vw;
    font-family: EB Garamond;
    font-style: italic;
    color: var(--granich-light-grey);
    margin-bottom: 3vw;

    span {
        font-size: 4vw;
        color: rgba(0,0,0,0.3)
        font-family: Inter;
        font-style: normal;
        font-weight: 700;
        letter-spacing: -0.05rem;
        color: var(--granich-light-grey);
    }
    @media only screen and (max-width: 575px) {
        font-size: 6.5vw;
        margin-bottom: 5vw;
        span {
            margin-top: 1vw;
            display: block;
            font-size: 10vw;

        }
    }

`

const Option = styled.div`
    position: relative;
    padding-bottom: 4.5vw;
    margin-bottom: 2.5vw;
    :after {
        content: '';
        width: 100%;
        height: 0.3vw;
        background: var(--granich-black);
        background: rgba(0,0,0,0.15);
        position: absolute;
        bottom: 0;
        left: 0;
    }
    :last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        :after {
            display: none;
        }
    }
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
        padding-bottom: 8vw;
        :after {
            height: 0.5vw;
        }
    }
`

const OptionWrapperCourse = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
    }
`



const OptionWrapperMentor = styled.div`

`

const OptionGeneralTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.5vw;
    width: 70%;
    @media only screen and (max-width: 575px) {
        width: 100%;

    }
`

const OptionGeneral = styled.div`
    width: 100%;
    min-width: 100%;
    ${props => props.half && `
        width: 45%;
        min-width: 45%;
        @media only screen and (max-width: 575px) {
            width: 100%;
            min-width: 100%;
        }
    `}

`

const OptionGeneralTitle = styled.div`
    font-weight: 800;
    font-size: 2.65vw;
    line-height: 1.3;
    // margin-bottom: 1.5vw;
    @media only screen and (max-width: 575px) {
        font-size: 5.5vw;
        line-height: 1.2;

    }
`

const OptionInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2vw;
    ${props => props.horizontal && `
        flex-direction: row;
    `}
    @media only screen and (max-width: 575px) {
        margin-top: 4vw;
        margin-bottom: 6vw;
        flex-direction: column;
    }
`


const TelegramText = styled.span`
    display: block;
    padding-bottom: 0.2vw;
    position: relative;
    margin: 0.2vw 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    svg {
        width: 1.2vw;
        min-width: 1.2vw;
        position: absolute;
        right: -1.5vw;
        top: 49%;
        transform: translateY(-50%);
        fill: rgba(0,0,0,0.25);

    }
    :hover {
        border-bottom: 1px solid var(--granich-grey);
        cursor: pointer;
        &:before, &:after {
            display: block;
        }
    }
    &:before {
        content: '';
        display: none;
        position: absolute;
        z-index: 9998;
        top: -0.85vw;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        //bottom
        border-right: 0.55vw solid transparent;
        border-left: 0.55vw solid transparent;
        border-top: 0.55vw solid var(--granich-black);
        ${props => props.content === 'Скопировано :)' && `
            border-top: 0.55vw solid var(--granich-red);
        `}
    }

    &:after {
        content: '${props => props.content}';
        display: none;
        position: absolute;
        z-index: 9999;
        top: -2.8vw;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-size: 0.8vw;
        line-height: 1;
        padding: 0.7vw 1vw;
        min-width: 5vw; 
        text-align: center;
        border-radius: 0.2vw;
        white-space: nowrap;
        background: var(--granich-black);
        ${props => props.content === 'Скопировано :)' && `
            background: var(--granich-red);
        `}
        

    }

    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        padding-bottom: 0;
        border-bottom: solid 1.5px rgba(0,0,0,0.15);
        letter-spacing: -0.015rem;
        :hover {
            font-size: 3.7vw;
            border-bottom: solid 1.5px rgba(0,0,0,0.15);
        }
        svg {
            width: 3vw;
            min-width: 3vw;
            right: -4vw;
            top: 49%;
            transform: translateY(-50%);
        }
        &:after {
            font-size: 4.5vw;
            padding: 3vw;
            top: -13vw;
            ${props => props.content === 'Скопировано :)' && `
                background: var(--granich-red);
            `}
        }
        &:before {
            top: -3.2vw;
            border-right: 2vw solid transparent;
            border-left: 2vw solid transparent;
            border-top: 2vw solid var(--granich-black);
            ${props => props.content === 'Скопировано :)' && `
                border-top: 2vw solid var(--granich-red);
            `}
        }

        

`






const FreelanceParticipation = ({ courseData }) => {

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


    const formatPrice = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }


    return (
        <Section>
            <Container>
                <MainWrapper>
                    <SectionTitle>
                        Участвовать
                    </SectionTitle>
                    <Option>
                        <OptionTitle>
                            1 вариант участия: <span>{courseData && formatPrice(courseData.coursePrice)} ₽</span>
                        </OptionTitle>
                        <OptionWrapperCourse>
                            <OptionGeneral half>
                                <OptionLogo />
                                <OptionGeneralTitle>
                                    Записаться на курс-наставничество Осознанный Фриланс
                                </OptionGeneralTitle>
                                <OptionInfoWrapper>
                                    <OptionNotice>
                                        <CheckIcon /> С домашними заданиями и учебной группой
                                    </OptionNotice>
                                    <TelegramInfo text="Хочу на Осознанный Фриланс" />

                                </OptionInfoWrapper>
                            </OptionGeneral>
                            <DisabledForm data={courseData} />
                        </OptionWrapperCourse>


                    </Option>
                    <Option>
                        <OptionTitle>
                            2 вариант участия: <span>{formatPrice(5000)} ₽</span>
                        </OptionTitle>
                        <OptionWrapperMentor>
                            <OptionGeneral>
                                <OptionGeneralTitleWrapper>
                                    <OptionImage fluid={author} />
                                    <OptionGeneralTitle>
                                        Провести со мной личную сессию наставничества
                                    </OptionGeneralTitle>
                                </OptionGeneralTitleWrapper>
                                <OptionInfoWrapper horizontal>
                                    <OptionNotice narrow>
                                        <CheckIcon /> По нужной вам теме и в удобное время
                                    </OptionNotice>
                                    <TelegramInfo text="Хочу личную сессию наставничества" />
                                </OptionInfoWrapper>
                            </OptionGeneral>


                        </OptionWrapperMentor>
                    </Option>
                </MainWrapper>
            </Container>

        </Section>
    )
}

export default FreelanceParticipation




const TelegramInfo = ({ text }) => {

    const [tooltipText, setTooltipText] = useState('Скопировать')

    return (
        <TelegramInstructions>
            <TelegramIcon />
            <TelegramInfoWrapper>
                <TelegramLink arrowIcon={arrowIcon} rel="noopener noreferrer" href="https://t.me/vadim_granich" target="_blank">
                    @vadim_granich
                </TelegramLink>
                <TelegramDescr>
                    Напишите мне:
                    <CopyToClipboard text={text}>
                        <TelegramText content={tooltipText} onMouseLeave={() => setTooltipText('Скопировать')} onClick={() => setTooltipText('Скопировано :)')}>
                            «{text}» <CopyIcon />
                        </TelegramText>
                    </CopyToClipboard>
                </TelegramDescr>
            </TelegramInfoWrapper>
        </TelegramInstructions>
    )
}

// const ParticipationStep = ({ number, title, notice, image }) => {
//     return (
//         <ParticipationStepWrapper>
//             <ParticipationStepHeader>
//                 <ParticipationStepNumber>
//                     {number}
//                 </ParticipationStepNumber>
//                 {image ? (
//                     <ParticipationStepImage fluid={image} />
//                 ) : (
//                         <ParticipationStepLogo />
//                     )}
//             </ParticipationStepHeader>
//             <ParticipationStepTitle>
//                 {title}
//             </ParticipationStepTitle>
//             <ParticipationStepNotice>
//                 <CheckIcon /> {notice}
//             </ParticipationStepNotice>
//         </ParticipationStepWrapper>
//     )
// }
