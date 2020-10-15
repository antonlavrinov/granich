import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import ArrowIcon from '../../assets/svgs/white-arrow-inter.svg';
// import { graphql, useStaticQuery } from 'gatsby'
// import Img from 'gatsby-image';

const Arrow = styled(props => <ArrowIcon {...props}/>)`
    width: 1vw;
    height: 1vw;
    margin: 0 0.4vw;
    @media only screen and (max-width: 575px) {
        width: 3vw;
        height: 3vw;
        margin: 0 1.5vw;
    }
`


// const Telegram = styled(props => <Img {...props}/>)`
//     width: 2.3vw;
//     height: 2.3vw;
//     @media only screen and (max-width: 575px) {
//         width: 7.5vw;
//         height: 7.5vw;
//     }
// `

// const TelegramOut = styled(props => <Img {...props}/>)`
//     width: 2.3vw;
//     height: 2.3vw;
//     margin-right: -0.4vw;
//     @media only screen and (max-width: 575px) {
//         width: 7.5vw;
//         height: 7.5vw;
//         margin-right: -1.3vw;
//     }
// `

const ReviewsSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 3vw;
    }
`


const ReviewsWrapper = styled.div`
    background: #E8E8E8;
    padding: 3vw 1vw 3vw 3vw;
    border-radius: 0.6vw;
    @media only screen and (max-width: 575px) {
        border-radius: 2.5vw;
        padding: 5vw 6vw 6vw;
    }
`

const ReviewsTitle = styled.h2`
    color: var(--granich-black);
    font-size: 4vw;
    letter-spacing: -0.1vw;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 2.7vw;
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

// const ReviewsList = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     grid-column-gap: 1.65vw;
//     grid-row-gap: 1.65vw;
//     margin-bottom: 3vw;
//     @media only screen and (max-width: 575px) {
//         grid-template-columns: 1fr;
//         grid-column-gap: 5vw;
//         grid-row-gap: 5vw;
//         margin-bottom: 5vw;
//     }
// `

// const ReviewWrapper = styled.div`
//     background: white;
//     border-radius: 0.5vw;
//     box-shadow: 0.1vw 0 0.5vw rgba(0,0,0,0.15);
//     @media only screen and (max-width: 575px) {
//         border-radius: 1.5vw;
//         box-shadow: 0.4vw 0.4vw 1.5vw rgba(0,0,0,0.15);
//     }

// `

// const ReviewButton = styled.a`
//     padding: 1vw 2.5vw;
//     display: flex;
//     background: #f2f2f2;
//     width: 100%;
//     border-radius: 0 0 0.5vw 0.5vw;

//     transition: all 0.2s ease;
//     align-items: center;
//     span {
//         color: var(--granich-light-grey);
//         display: inline-block;
//         border-bottom: 1.5px dotted var(--granich-light-grey);
//         padding-bottom: 0.1vw;
//         font-size: 1.05vw;
//     }
//     :hover {
//         cursor: pointer;
//         span{
//             border-bottom: 1.5px dotted #f2f2f2;
//         }
//     }
//     @media only screen and (max-width: 575px) {
//         padding: 2.5vw 8.8vw 3.5vw;
//         border-radius: 0 0 1.5vw 1.5vw;
//         span {
//             padding-bottom: 0.1vw;
//             font-size: 3.7vw;
//         }
//     }
// `



// const ReviewButtonIcons = styled.div`
//     margin-left: auto;
//     display: flex;

//     @media only screen and (max-width: 575px) {
//         margin-top: 1vw;
//     }
// `

// const ReviewImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
//     height: 16.5vw;
//     min-height: 16vw;
//     overflow: hidden;
//     border-radius: 0.5vw 0.5vw 0 0;
//     @media only screen and (max-width: 575px) {
//         height: 58.5vw;
//         min-height: 58.5vw;
//         border-radius: 1.5vw 1.5vw 0 0;
//     }
// `



const ReviewsFooter = styled.div`
    display: flex;
    align-items: center;
    // background: #dedede;
    border-radius: 0.5vw;
    // padding: 1vw 3vw;
    @media only screen and (max-width: 575px) {
        border-radius: 1.5vw;
        padding: 5vw 5vw 5vw;
        flex-direction: column;
        background: #dedede;
        ${props => props.masterClass && `
            padding: 5vw;
        `}
    }
`

// const ReviewsFooterTitle = styled.div`
//     font-style: italic;
//     font-family: EB Garamond;
//     font-size: 2.37vw;
//     font-weight: 500;
//     line-height: 1;
//     margin-top: -0.5vw;
//     @media only screen and (max-width: 575px) {
//         font-size: 8vw;
//         margin-top: 0;
//         margin-bottom: 4vw;


//     }
// `

const ReviewsLinks = styled.div`
    display: flex;
    // margin-left: auto;
    @media only screen and (max-width: 575px) {
        // margin-left: 0;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
`
const ReviewsText = styled.div`
    font-size: 1.2vw;
    max-width: 48%;
    margin-left: 1.2vw;
    line-height: 1.4;
    font-weight: 500;
    letter-spacing: -0.01em;
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        max-width: 100%;
        margin-top: 3vw;
        margin-left: 0;
    }
`

const ReviewsLinkTelegram = styled.a`
    display: flex;
    align-items: center;
    font-size: 1.25vw;
    background: var(--granich-telegram-gradient);
    border-radius: 0.3vw;
    padding: 1.3vw 1.3vw;
    color: white;
    margin-right: 1vw;
    transition: transform 0.2s ease;
    box-shadow: .15vw .15vw .4vw rgba(0,0,0,0.25);
    white-space: nowrap;
    
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
        min-width: 100%;
        width: 100%;
        margin-right: 0;
        justify-content: center;
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
    padding: 0.7vw 1.5vw;
    color: white;
    transition: transform 0.2s ease;
    box-shadow: .15vw .15vw .4vw rgba(0,0,0,0.25);
    white-space: nowrap;
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
        padding: 1.7vw 14vw 2vw;
        width: 100%;
        text-align: center;
        box-shadow: 0.5vw 0.5vw 1vw rgba(0,0,0,0.25);
        justify-content: center;
        :hover {
            font-size: 3.9vw;
            text-align: center;
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



// const Review = ({image, link, telegramIcon, telegramIconOut}) => {
//     return (
//         <ReviewWrapper>
//             <ReviewImage fluid={image}></ReviewImage>
//             <ReviewButton href={link} target="_blank">
//                 <span>Показать полностью</span>
//                 <ReviewButtonIcons>
//                     <TelegramOut fluid={telegramIconOut}/><Telegram fluid={telegramIcon}/>
//                 </ReviewButtonIcons> 
//             </ReviewButton>
//         </ReviewWrapper>
//     )
// }


const CourseReviews = ({data, dataHeader, masterClass}) => {
    // const dataImage = useStaticQuery(graphql`
    //     query reviewsIcons {
    //         telegramReviewsIcon: file(relativePath: { eq: "graph-design/reviews/telegram-small-icon-01.png" }) {
    //             childImageSharp {
    //                 fluid(maxWidth: 120) {
    //                     ...GatsbyImageSharpFluid
    //                 }
    //             }
    //         }
    //         telegramReviewsIconOut: file(relativePath: { eq: "graph-design/reviews/telegram-small-link-out-01.png" }) {
    //             childImageSharp {
    //                 fluid(maxWidth: 120) {
    //                     ...GatsbyImageSharpFluid
    //                 }
    //             }
    //         }

    //     }
    // `)

    // const telegramIcon = dataImage.telegramReviewsIcon.childImageSharp.fluid;
    // const telegramIconOut = dataImage.telegramReviewsIconOut.childImageSharp.fluid;

    return (
        <ReviewsSection>
            <Container>
                <ReviewsWrapper>
                    {!masterClass ? (
                        <ReviewsTitle>{dataHeader.reviewsHeaderTitle}</ReviewsTitle>
                    ) : (
                        <ReviewsTitle masterClass>{dataHeader.reviewsHeaderTitle}</ReviewsTitle>
                    )}
                    
                    {/* <ReviewsList>
                        {data.edges.map((review) => {
                            return (
                                <Review telegramIcon={telegramIcon} telegramIconOut={telegramIconOut} key={review.node.id} image={review.node.reviewsImage.fluid} link={review.node.reviewsLink}/>
                            )
                        })}
                    </ReviewsList> */}
                    <ReviewsFooter masterClass={masterClass}>
                        {!masterClass ? (
                            <>
                                {/* <ReviewsFooterTitle>Все отзывы о курсе:</ReviewsFooterTitle> */}
                                <ReviewsLinks>
                                    <ReviewsLinkTelegram target="_blank" href={dataHeader.reviewsHeaderLinkTelegram}>Все свежие отзывы<Arrow/>ТГ</ReviewsLinkTelegram>
                                    {dataHeader.reviewsHeaderLinkVk && <ReviewsLinkVk target="_blank" href={dataHeader.reviewsHeaderLinkVk}><div>Архив отзывов<Arrow/>ВК</div><div>На стене Вадима Гранича</div></ReviewsLinkVk>}
                                </ReviewsLinks>
                                <ReviewsText>Напишите выпускникам прошлых потоков, они с радостью поделятся эмоциями от прохождения курса</ReviewsText>
                            </>
                          
                        ) : (

                            <ReviewsLinkTelegram masterClass target="_blank" href={dataHeader.reviewsHeaderLinkTelegram}>Все свежие отзывы<Arrow/>ТГ</ReviewsLinkTelegram>
                        )}


                    </ReviewsFooter>
                </ReviewsWrapper>
            </Container>
        </ReviewsSection>
    )
}

export default CourseReviews
