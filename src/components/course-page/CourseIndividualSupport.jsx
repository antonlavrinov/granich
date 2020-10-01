import React from 'react'
import styled from 'styled-components';
import { Container } from '../style';
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import TelegramIcon from '../../assets/svgs/telegram-plane-brands.svg';
import ArrowLongRightIcon from '../../assets/svgs/arrow-long-right.svg';

const SupportSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }

`
const SupportWrapper = styled.div`
    background: white;
    padding: 4vw 4vw;
    border-radius: 0.6vw;
    @media only screen and (max-width: 575px) {
        padding: 11vw 5vw 11vw 8vw;
        border-radius: 2.5vw;
    }
`
const SupportSecondaryWrapper = styled.div`
    display: flex;
    @media only screen and (max-width: 575px) {
        flex-direction: column-reverse;     
    }
`
const SupportAuthor = styled.div`
    margin-right: 4vw;
    margin-left: 0.2vw;
    margin-top: -1vw;
    @media only screen and (max-width: 575px) {
        display: flex;
    }
`

const SupportInfo = styled.div`

`

const SupportAuthorImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    width: 11vw;
    height: 11vw;
    border-radius: 100vw;
    overflow: hidden;
    margin-left: -0.5vw;
    margin-bottom: 1vw;
    @media only screen and (max-width: 575px) {
        width: 20vw;
        height: 20vw;
        margin-right: 3vw;
    }
`

const SupportAuthorInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 11vw;

    @media only screen and (max-width: 575px) {
        margin-top: 3vw;
    }

`

const SupportAuthorName = styled.div`
    font-size: 1.16vw;
    font-weight: 500;
    line-height: 1.4;
    margin-left: 0.5vw;
    @media only screen and (max-width: 575px) {
        font-size: 3.6vw;
    }
`

const SupportAuthorText = styled.div`
    margin-left: 0.5vw;
    font-size: 1.16vw;
    line-height: 1.4;
    color: var(--granich-grey);
    @media only screen and (max-width: 575px) {
        font-size: 3.6vw;

    }
`

const SupportInfoTitle = styled.h2`
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    font-size: 4.9vw;
    line-height: 0.75;
    position: relative;
    margin-bottom: 4vw;
    margin-left: 0vw;
    white-space: nowrap;
    letter-spacing: -0.115vw;
    @media only screen and (max-width: 575px) {
        white-space: normal;
        font-size: 10.4vw;
        margin-left: 0;
        letter-spacing: -0.4vw;
        margin-bottom: 6.8vw;
        line-height: 0.9;
    }

`

const SupportInfoText = styled.div`
    font-weight: 500;
    font-size: 1.55vw;
    line-height: 1.5;
    margin-bottom: 3vw;
    border: 2px solid var(--granich-black);
    border-radius: 100vw;
    padding: 0.5vw 1vw;
    // border-color: var(--granich-red);
    // color: var(--granich-red);
    
    display: inline-block;
    font-size: 1.3vw;
    @media only screen and (max-width: 575px) {
        font-size: 4.3vw;
        margin-bottom: 4.8vw;
        padding: 2vw 4vw;
    }


`

const SupportInfoRules = styled.div`
    display: flex;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
        margin-bottom: 6.8vw;
    }
    
`

const SupportInfoRule = styled.div`
    position: relative;
    font-size: 1.15vw;
    color: var(--granich-grey);
    width: 16vw;
    line-height: 1.4;
    margin-right: 1.3vw;
    :nth-child(n+2) {
        margin-right: 0.8vw;
    }
    :nth-child(n+3) {
        width: 20vw;
    }
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        width: auto;
        margin-right: 0;
        margin-left: 5.5vw;
        margin-bottom: 4vw;
        :nth-child(n+3) {
            width: auto;
        }
    }

`

const SupportRuleTitle = styled.span`
    display: block;
    font-weight: 500;
    font-size: 1.15vw;
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
    }

`

const SupportRuleNumber = styled.div`
    position: absolute;
    top: 0;
    left: -2vw;
    font-size: 2.3vw;
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    line-height: 0.5;
    @media only screen and (max-width: 575px) {
        font-size: 7.2vw;
        left: -5.7vw;
        top: 1.5vw;
    }
`

const SupportFooter = styled.div`
    background: #f2f2f2;
    border-radius: 0.5vw;
    padding: 1vw 2.2vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3.5vw;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
        background: white;
        padding: 0;

    }
`



const SupportPriceText = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.2vw;
    line-height: 1.3;
    color: var(--granich-grey);
    span {
        display: block;
        font-family: EB Garamond;
        font-size: 4vw;
        font-style: italic;
        margin-left: 1.5vw;
        line-height: 1;
        margin-top: -0.4vw;
        letter-spacing: -0.1vw;
    }
    @media only screen and (max-width: 575px) {
        font-size: 4vw;
        margin-bottom: 3vw;
        margin-top: 5vw;
        span {
            font-size: 11vw;
            font-style: italic;
            margin-left: 5vw;
            line-height: 1;
            margin-top: -0.4vw;
            letter-spacing: -0.1vw;
        }
    }
`



const SupportButton = styled.a`
    display: flex;
    align-items: center;
    font-size: 1.4vw;
    background: var(--granich-telegram-gradient);
    border-radius: 0.3vw;
    padding: 1.2vw 2vw;
    color: white;
    transition: transform 0.2s ease;
    box-shadow: .15vw .15vw .4vw rgba(0,0,0,0.25);
    svg {
        width: 2vw;
        height: 2vw;
        fill: white;
        margin-left: 0.5vw;
    }
    :hover {
        font-size: 1.4vw;
        transform: scale(1.03);
        cursor: pointer;
        color: white;
    }

    @media only screen and (max-width: 575px) {
        font-size: 3.9vw;
        border-radius: 1.3vw;
        padding: 3.6vw 3vw;
        box-shadow: 0.5vw 0.5vw 1vw rgba(0,0,0,0.25);
        :hover {
            font-size: 3.9vw;
        }
        margin-bottom: 4vw;
        width: 100%;
        margin-right: 0;
        justify-content: center;
        svg {
            width: 4vw;
            height: 4vw;
            fill: white;
            margin-left: 2vw;
        }

    }
`

const SupportArrow = styled(props => <ArrowLongRightIcon {...props}/>)`
    fill: rgba(0,0,0,0.2);
    width: 8vw;
    @media only screen and (max-width: 575px) {
        display: none;
    }

`


const CourseIndividualSupport = () => {
    const data = useStaticQuery(graphql`
        query authorIndividualSupportImage {
            placeholderImage: file(relativePath: { eq: "author.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 250, quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

        }
    `)

    const imageData = data.placeholderImage.childImageSharp.fluid
    return (
        <SupportSection id="individual-support">
            <Container>
                <SupportWrapper>
                    <SupportInfoTitle>
                        Индивидуальное прохождение курса
                    </SupportInfoTitle>
                    <SupportSecondaryWrapper>
                        <SupportAuthor>
                            <SupportAuthorImage fluid={imageData} style={{backgroundSize: 'cover'}}/>
                            <SupportAuthorInfoWrapper>
                                <SupportAuthorName>Вадим Гранич</SupportAuthorName>
                                <SupportAuthorText>Создатель школы, <br/>автор курсов</SupportAuthorText>
                            </SupportAuthorInfoWrapper>
                           
                        </SupportAuthor>
                        <SupportInfo>

                            <SupportInfoText>
                                С Вадимом Граничем
                            </SupportInfoText>
                            <SupportInfoRules>
                                <SupportRule title={``}
                                            text={`Я беру только одного ученика за раз, с возможностью личного общения по поводу графдизайна, фриланса, и многого другого`}
                                            number={1}
                                />
                                <SupportRule title={``}
                                            text={`Договор на обучение заключается индивидуально, подписывается между мной и вами`}
                                            number={2}
                                />
                                <SupportRule title={``}
                                            text={`Уроки будут не в записи, а лично проводиться мной. Чтобы мы могли остановиться на непонятных моментах и углубиться в интересную тему`}
                                            number={3}
                                />
                            </SupportInfoRules>
                        </SupportInfo>
                    </SupportSecondaryWrapper>
                    <SupportFooter>
                        <SupportPriceText>
                            Стоимость <br/>прохождения
                            <span>242 000 ₽</span>
                        </SupportPriceText>
                        <SupportArrow/>
                        <SupportButton rel="noopener noreferrer" href="https://t.me/vadim_granich" target="_blank" >Написать Вадиму в Телеграм<TelegramIcon/></SupportButton>
                    </SupportFooter>

                </SupportWrapper>
            </Container>
        </SupportSection>
    )
}

export default CourseIndividualSupport


const SupportRule = ({title, text, number}) => {
    return (
        <SupportInfoRule>
            <SupportRuleTitle>{title}</SupportRuleTitle>
                {text}
                <SupportRuleNumber>{number}</SupportRuleNumber>
        </SupportInfoRule>
    )
}