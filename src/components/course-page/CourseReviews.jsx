import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import TelegramIcon from '../../assets/svgs/telegram-small-link-out.svg';
import TelegramLinkOut from '../../assets/svgs/telegram-small-icon.svg';


const Telegram = styled(props => <TelegramIcon {...props}/>)`
    width: 2.3vw;
    height: 2.3vw;
    @media only screen and (max-width: 575px) {
        width: 7.5vw;
        height: 7.5vw;
    }
`

const TelegramOut = styled(props => <TelegramLinkOut {...props}/>)`
    width: 2.3vw;
    height: 2.3vw;
    @media only screen and (max-width: 575px) {
        width: 7.5vw;
        height: 7.5vw;
    }
`

const ReviewsSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`


const ReviewsWrapper = styled.div`
    background: #E8E8E8;
    padding: 4.6vw 3vw 3vw;
    border-radius: 0.6vw;
    @media only screen and (max-width: 575px) {
        border-radius: 3vw;
        padding: 5vw 6vw 6vw;
    }
`

const ReviewsTitle = styled.div`
    color: var(--granich-black);
    font-size: 4.55vw;
    letter-spacing: -0.2vw;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 3vw;
    @media only screen and (max-width: 575px) {
        font-size: 11vw;
        letter-spacing: -0.7vw;
        line-height: 1;
        margin-bottom: 7vw;
        width: 60%;
        ${props => props.masterClass && `
            width: 100%;
        `}
    }
`

const ReviewsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1.65vw;
    grid-row-gap: 1.65vw;
    margin-bottom: 3vw;
    @media only screen and (max-width: 575px) {
        grid-template-columns: 1fr;
        grid-column-gap: 5vw;
        grid-row-gap: 5vw;
        margin-bottom: 5vw;
    }
`

const ReviewWrapper = styled.div`
    background: white;
    border-radius: 0.5vw;
    box-shadow: 0.1vw 0 0.5vw rgba(0,0,0,0.15);
    @media only screen and (max-width: 575px) {
        border-radius: 1.5vw;
        box-shadow: 0.4vw 0.4vw 1.5vw rgba(0,0,0,0.15);
    }

`

const ReviewButton = styled.a`
    padding: 1vw 2.5vw;
    display: flex;
    background: #f2f2f2;
    width: 100%;
    border-radius: 0 0 0.5vw 0.5vw;

    transition: all 0.2s ease;
    align-items: center;
    span {
        color: var(--granich-light-grey);
        display: inline-block;
        border-bottom: 1.5px dotted var(--granich-light-grey);
        padding-bottom: 0.1vw;
        font-size: 1.05vw;
    }
    :hover {
        cursor: pointer;
        span{
            border-bottom: 1.5px dotted #f2f2f2;
        }
    }
    @media only screen and (max-width: 575px) {
        padding: 2.5vw 8.8vw 3.5vw;
        border-radius: 0 0 1.5vw 1.5vw;
        span {
            padding-bottom: 0.1vw;
            font-size: 3.7vw;
        }
    }
`



const ReviewButtonIcons = styled.div`
    margin-left: auto;
    display: flex;

    svg {
        :first-child {
            margin-right: -0.4vw;
        }
    }
    @media only screen and (max-width: 575px) {
        svg {
            :first-child {
                margin-right: -1.3vw;
            }
        }
    }
    @media only screen and (max-width: 575px) {
        margin-top: 1vw;
    }
`

const ReviewImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    height: 16.5vw;
    min-height: 16vw;
    overflow: hidden;
    border-radius: 0.5vw 0.5vw 0 0;
    @media only screen and (max-width: 575px) {
        height: 58.5vw;
        min-height: 58.5vw;
        border-radius: 1.5vw 1.5vw 0 0;
    }
`

const ReviewsFooter = styled.div`
    display: flex;
    align-items: center;
    background: #dedede;
    border-radius: 0.5vw;
    padding: 1vw 3vw;
    @media only screen and (max-width: 575px) {
        border-radius: 1.5vw;
        padding: 5vw 3vw 10vw;
        flex-direction: column;
        ${props => props.masterClass && `
            padding: 5vw;
        `}
    }
`

const ReviewsFooterTitle = styled.div`
    font-style: italic;
    font-family: EB Garamond;
    font-size: 2.37vw;
    font-weight: 500;
    line-height: 1;
    margin-top: -0.5vw;
    @media only screen and (max-width: 575px) {
        font-size: 8vw;
        margin-top: 0;
        margin-bottom: 4vw;


    }
`

const ReviewsLinks = styled.div`
    display: flex;
    margin-left: auto;
    @media only screen and (max-width: 575px) {
        margin-left: 0;
        flex-direction: column;
        align-items: center;
    }
`
const ReviewsLinkTelegram = styled.a`
    display: flex;
    align-items: center;
    font-size: 1.25vw;
    background: var(--granich-telegram-gradient);
    border-radius: 0.3vw;
    padding: 0.7vw 2.2vw;
    color: white;
    margin-right: 2vw;
    transition: transform 0.2s ease;
    box-shadow: .15vw .15vw .4vw rgba(0,0,0,0.25);
    :hover {
        font-size: 1.25vw;
        transform: scale(1.05);
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
    }
    ${props => props.masterClass && `
        padding: 1vw 1vw;
        margin: 0 auto;
        width: auto;
        @media only screen and (max-width: 575px) {
            font-size: 3.9vw;
            border-radius: 1.3vw;
            padding: 3.6vw 3vw;
            margin-bottom: 0;
            text-align: center;
            display: inline-flex;
            width: auto;
            margin: 0 auto;
        }
    `}

`
const ReviewsLinkVk = styled.a`
    font-size: 1.25vw;
    background: var(--granich-vk-gradient);
    border-radius: 0.3vw;
    padding: 0.7vw 2.5vw;
    color: white;
    transition: transform 0.2s ease;
    box-shadow: .15vw .15vw .4vw rgba(0,0,0,0.25);
    div {
        color: inherit;
        :last-child {
            margin-top: 0.1vw;
            font-size: 0.8vw;
        }
    }
    :hover {
        font-size: 1.25vw;
        transform: scale(1.05);
        cursor: pointer;
        color: white;
    }
    @media only screen and (max-width: 575px) {
        font-size: 3.9vw;
        border-radius: 1.3vw;
        padding: 1.7vw 7.5vw 2vw;
        width: 100%;
        text-align: center;
        box-shadow: 0.5vw 0.5vw 1vw rgba(0,0,0,0.25);
        :hover {
            font-size: 3.9vw;
        }
        div {
            :last-child {
                font-size: 2.5vw;
                text-align: left;
                margin-top: 0.3vw;
            }
        }
    }
`



const Review = ({image, link}) => {
    return (
        <ReviewWrapper>
            <ReviewImage fluid={image}></ReviewImage>
            <ReviewButton href={link} target="_blank">
                <span>Показать полностью</span>
                <ReviewButtonIcons>
                    <Telegram/><TelegramOut/>
                </ReviewButtonIcons> 
            </ReviewButton>
        </ReviewWrapper>
    )
}


const CourseReviews = ({data, masterClass}) => {

    return (
        <ReviewsSection>
            <Container>
                <ReviewsWrapper>
                    {!masterClass ? (
                        <ReviewsTitle>Отзывы о курсе</ReviewsTitle>
                    ) : (
                        <ReviewsTitle masterClass>Отзывы о мастер-классе</ReviewsTitle>
                    )}
                    
                    <ReviewsList>
                        {data.edges.map((review) => {
                            return (
                                <Review key={review.node.id} image={review.node.reviewsImage.fluid} link={review.node.reviewsLink}/>
                            )
                        })}
                    </ReviewsList>
                    <ReviewsFooter masterClass={masterClass}>
                        {!masterClass ? (
                            <>
                                <ReviewsFooterTitle>Все отзывы о курсе:</ReviewsFooterTitle>
                                <ReviewsLinks>
                                    <ReviewsLinkTelegram target="_blank" href={'https://vk.com/vadim_granich'}>Все свежие отзывы → ТГ</ReviewsLinkTelegram>
                                    <ReviewsLinkVk target="_blank" href={'https://vk.com/vadim_granich'}><div>Архив отзывов → ВК</div><div>На стене Вадима Гранича</div></ReviewsLinkVk>
                                </ReviewsLinks>
                            </>
                          
                        ) : (

                            <ReviewsLinkTelegram masterClass target="_blank" href={'https://vk.com/vadim_granich'}>Все свежие отзывы → ТГ</ReviewsLinkTelegram>
                        )}


                    </ReviewsFooter>
                </ReviewsWrapper>
            </Container>
        </ReviewsSection>
    )
}

export default CourseReviews
