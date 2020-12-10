import React from 'react'
import styled from 'styled-components';
import { Container } from '../../style';
import Img from 'gatsby-image';
import CourseArrowOut from '../../../assets/svgs/course-arrow-out.svg';
import { graphql, useStaticQuery } from 'gatsby'



const BannerSection = styled.div`
    margin-bottom: 1.7vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`

const BannerWrapper = styled.div`
    background: white;
    border-radius: 0.6vw;
    padding: 1.8vw 2.5vw 1.8vw 15.8vw;
    position: relative;
    display: flex;
    // box-shadow: .25vw .25vw .5vw rgba(0,0,0,0.15);
    box-shadow: 0.25vw 0.15vw 0.4vw rgba(0,0,0,0.1);
    @media only screen and (max-width: 575px) {
        padding: 6vw 6.6vw 6.6vw;
        border-radius: 2.5vw;
        // box-shadow: .6vw .6vw 1.8vw rgba(0,0,0,0.23);
        box-shadow: 0 0 1.8vw rgba(0,0,0,0.15);
        
    }
`

const BannerContentWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
        align-items: flex-start;
    }
`




const BannerImage = styled(props => <Img {...props} />)`
    width: 12vw;
    bottom: 0.1vw;
    left: 2vw;
    @media only screen and (max-width: 575px) {
        left: auto;
        right: 7vw;
        bottom: 2vw;
        width: 19vw;
    }

`

const BannerSubtext = styled.div`
    font-size: 1.15vw;
    // width: 11vw;
    font-weight: 400;
    line-height: 1.4;
    margin-right: 1.5vw;
    color: var(--granich-grey);
    @media only screen and (max-width: 575px) {
        font-size: 3.35vw;
        letter-spacing: -0.05vw;
        width: 100%;
        margin-bottom: 4vw;
    }

`
const BannerMainInfo = styled.div`
    font-size: 1.15vw;
    margin-top: -0.5vw;
    // margin-right: 1vw;
    @media only screen and (max-width: 575px) {
        display: flex;
        align-items: center;
    }

`
const BannerTitle = styled.div`
    font-size: 2.5vw;
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    margin-bottom: 0.4vw;
    // min-width: 22.5vw;
    // width: 22.5vw;
    @media only screen and (max-width: 575px) {
        font-size: 7vw;
        margin-left: -0.8vw;
        letter-spacing: -0.05vw;
        margin-bottom: 3.5vw;
    }
    
`

const BannerCourseButton = styled.a`

    display: inline-flex;
    align-items: center;
    color: white;
    background: var(--granich-beige-gradient);
    
    margin-left: auto;
    padding: 0.8vw 1.4vw 1vw 1.4vw;
    letter-spacing: 0.06vw;
    border-radius: 0.3vw;
    font-size: 1.5vw;
    font-weight: 400;
    transition: all 0.2s ease;
    user-select: none;
    box-shadow: .25vw .25vw .4vw rgba(0,0,0,0.25);
    letter-spacing: 0.05vw;
    white-space: nowrap;


    svg {
        width: 0.9vw;
        height: 0.9vw;
        margin-left: 0.5vw;
        margin-top: 0.2vw;
    }
    :hover {
        transform: scale(1.05);
        cursor: pointer;
        color: white;
        font-size: 1.5vw;
        font-weight: 400;
        letter-spacing: 0.05vw;
    }

    


    @media only screen and (max-width: 575px) {
        margin-left: 0;
        font-size: 4.3vw;
        padding: 3vw 5vw;
        border-radius: 1.5vw;
        margin-right: 4.5vw;
        box-shadow: 0.7vw 0.7vw 1.5vw rgba(0,0,0,0.3);
        :hover {
            font-size: 4.3vw;
            transform: none;
        }
        svg {
            width: 3vw;
            height: 3vw;
            margin-left: 1.2vw;
            margin-top: 0.8vw;
        }
    }
    ${props => props.type === 'Мастер-класс' && `
        padding: 0.8vw 3vw 1vw;
        @media only screen and (max-width: 575px) {
            padding: 3vw 10vw;
        }
    `}
    ${props => props.status && `
        background: var(--granich-black-gradient);
    `}


`



const BannerContentMain = styled.div`

`

const BannerContentButton = styled.div`
        margin-left: auto;

        @media only screen and (max-width: 575px) {
            margin-left: 0;
            display: flex;
        }
`


const CourseFreelanceBanner = () => {

    const imageData = useStaticQuery(graphql`
        query bannerFreelancePodborkaImage {
            freelancePodborkaImageBanner: file(relativePath: { eq: "freelance/course-banner/course-banner.png" }) {
                childImageSharp {
                    fluid(maxWidth: 250, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

        }
    `)

    const box = imageData.freelancePodborkaImageBanner.childImageSharp.fluid;

    return (
        <BannerSection>
            <Container>
                <BannerWrapper>
                    <BannerImage style={{ position: 'absolute' }} fluid={box} />
                    <BannerContentWrapper>

                        <BannerContentMain>
                            <BannerMainInfo>
                                <BannerTitle>
                                    Осознанная подборка по Фрилансу
                                </BannerTitle>
                            </BannerMainInfo>
                            <BannerSubtext>
                                Это специальная подборка материалов для старта на фрилансе. Её необязательно изучать, чтобы пройти курс. Но если у вас есть время, то рекомендую. Это повысит качество вашего обучения на курсе.
                            </BannerSubtext>

                        </BannerContentMain>
                        <BannerContentButton>
                            <BannerCourseButton target="_blank" href={'https://granich.design/conscious-freelance-compilation'}>Изучить<CourseArrowOut /></BannerCourseButton>
                        </BannerContentButton>



                    </BannerContentWrapper>
                </BannerWrapper>
            </Container>
        </BannerSection>

    )
}

export default CourseFreelanceBanner
