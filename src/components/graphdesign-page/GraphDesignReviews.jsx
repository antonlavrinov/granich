import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';
import TelegramIcon from '../../assets/svgs/telegram-small-link-out.svg';
import TelegramLinkOut from '../../assets/svgs/telegram-small-icon.svg';


const Telegram = styled(props => <TelegramIcon {...props}/>)`
    width: 2.3vw;
    @media only screen and (max-width: 575px) {
        width: 6.5vw;
    }
`

const TelegramOut = styled(props => <TelegramLinkOut {...props}/>)`
    width: 2.3vw;
    @media only screen and (max-width: 575px) {
        width: 6.5vw;
    }
`

const ReviewsSection = styled.section`
    margin-bottom: 50px;
`


const ReviewsWrapper = styled.div`
    background: #E8E8E8;
    padding: 4.6vw 3vw 3vw;
    border-radius: 0.6vw;
`

const ReviewsTitle = styled.div`
    color: var(--granich-black);
    font-size: 4.55vw;
    letter-spacing: -0.2vw;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 3vw;
    @media only screen and (max-width: 575px) {
        font-size: 11.9vw;
        letter-spacing: -0.7vw;
        line-height: 1;
        margin-bottom: 4vw;
    }
`

const ReviewsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1.65vw;
    grid-row-gap: 1.65vw;
    margin-bottom: 3vw;
`

const ReviewWrapper = styled.div`
    border-radius: 0.5vw;
    background: white;
    border-radius: 0.5vw;
    box-shadow: 0 0 0.6vw rgba(0,0,0,0.25);
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
    svg {

    }
    :hover {
        cursor: pointer;
        span{
            // color: var(--granich-grey);
            border-bottom: 1.5px dotted #f2f2f2;
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
`

const ReviewImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    height: 16vw;
    min-height: 16vw;
    overflow: hidden;
    border-radius: 0.5vw 0.5vw 0 0;
`

const ReviewsFooter = styled.div`
    display: flex;
    align-items: center;
    background: #dedede;
    border-radius: 0.5vw;
    padding: 1vw 3vw;
`

const ReviewsFooterTitle = styled.div`
    font-style: italic;
    font-family: EB Garamond;
    font-size: 2.37vw;
    font-weight: 500;
    line-height: 1;
    margin-top: -0.5vw;
`

const ReviewsLinks = styled.div`
    display: flex;
    // align-items: center;
    margin-left: auto;
`
const ReviewsLinkTelegram = styled.div`
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
        transform: scale(1.05);
        cursor: pointer;
    }
`
const ReviewsLinkVk = styled.div`
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
        transform: scale(1.05);
        cursor: pointer;
    }
`



const Review = ({image}) => {
    return (
        <ReviewWrapper>
            <ReviewImage fluid={image}></ReviewImage>
            <ReviewButton>
                <span>Показать полностью</span>
                <ReviewButtonIcons>
                    <Telegram/><TelegramOut/>
                </ReviewButtonIcons> 
            </ReviewButton>
        </ReviewWrapper>
    )
}


const GraphDesignReviews = () => {
    const data = useStaticQuery(graphql`
    query ReviewsSectionQuery {
        review1: file(relativePath: { eq: "graph-design/reviews/review1.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 600, quality: 80) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `);
    const review1 = data.review1.childImageSharp.fluid;
    return (
        <ReviewsSection>
            <Container>
                <ReviewsWrapper>
                    <ReviewsTitle>Свежие отзывы о курсе</ReviewsTitle>
                    <ReviewsList>
                        <Review image={review1}/>
                        <Review image={review1}/>
                        <Review image={review1}/>
                        <Review image={review1}/>
                        <Review image={review1}/>
                        <Review image={review1}/>
                        <Review image={review1}/>
                        <Review image={review1}/>
                        <Review image={review1}/>
                    </ReviewsList>
                    <ReviewsFooter>
                        <ReviewsFooterTitle>Все отзывы о курсе:</ReviewsFooterTitle>
                        <ReviewsLinks>
                            <ReviewsLinkTelegram>Все свежие отзывы → ТГ</ReviewsLinkTelegram>
                            <ReviewsLinkVk><div>Архив отзывов → ВК</div><div>На стене Вадима Гранича</div></ReviewsLinkVk>
                        </ReviewsLinks>

                    </ReviewsFooter>
                </ReviewsWrapper>
            </Container>
        </ReviewsSection>
    )
}

export default GraphDesignReviews
