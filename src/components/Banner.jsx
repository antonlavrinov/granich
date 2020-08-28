import React from 'react'
import styled from 'styled-components';
import { Container } from './style';
import Img from 'gatsby-image';
import CourseArrowOut from '../assets/svgs/course-arrow-out.svg';

const BannerSection = styled.div`
    margin-bottom: 1.7vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 4vw;
    }
`

const BannerWrapper = styled.div`
    background: white;
    border-radius: 0.5vw;
    padding: 1.5vw 2vw 1.5vw 15.8vw;
    position: relative;
    display: flex;
    box-shadow: .25vw .25vw .5vw rgba(0,0,0,0.15);
    @media only screen and (max-width: 575px) {
        padding: 6vw 6.6vw 6.6vw;
        border-radius: 1.5vw;
        box-shadow: .6vw .6vw 1.8vw rgba(0,0,0,0.23);
    }
`

const BannerContentWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    @media only screen and (max-width: 575px) {
        display: none;
    }
`

const BannerContentWrapperMobile = styled.div`
    display: none;
    @media only screen and (max-width: 575px) {
        display: flex;
        // align-items: center;
        flex-direction: column;
        // width: 100%;
    }


`


const BannerImage = styled(props => <Img {...props} />)`
    width: 9vw;
    bottom: 0;
    left: 3.1vw;
    @media only screen and (max-width: 575px) {
        display: none;
    }

`

const BannerSubtext = styled.div`
    font-size: 1.15vw;
    width: 11vw;
    font-weight: 500;
    line-height: 1.4;
    margin-right: 2vw;
    @media only screen and (max-width: 575px) {
        font-size: 3.5vw;
        letter-spacing: -0.05vw;
        width: 100%;
        margin-bottom: 1vw;
    }

`
const BannerMainInfo = styled.div`
    font-size: 1.15vw;
    margin-top: -0.5vw;
    margin-right: 1.5vw;
    @media only screen and (max-width: 575px) {
        display: flex;
        align-items: center;
    }

`
const BannerTitle = styled.div`
    font-size: 2.3vw;
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    margin-bottom: 0.8vw;
    @media only screen and (max-width: 575px) {
        font-size: 7vw;
        margin-left: -0.8vw;
        letter-spacing: -0.05vw;
        margin-bottom: 3.5vw;
    }
    
`
const BannerInfoItems = styled.div`
    display: flex;
    align-items: center;

`
const BannerTag = styled.div`
    color: white;
    padding: 0.18vw 1vw 0.18vw;
    background: var(--granich-red);
    border-radius: 100vw;
    font-size: 0.8vw;
    margin-right: 0.6vw;
    font-weight: 500;

`
const BannerCourseStart = styled.div`
    margin-right: 0.8vw;
    letter-spacing: -0.01vw;
    font-weight: 500;
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        line-height: 1.4;
    }
`
const BannerCourseDuration = styled.div`
    font-weight: 500;
    letter-spacing: -0.01vw;
    @media only screen and (max-width: 575px) {
        display: none;
    }
`
const BannerCourseButton = styled.a`
    display: inline-flex;
    align-items: center;
    color: white;
    background: var(--granich-red-gradient-horizontal);
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
        }
        svg {
            width: 3vw;
            height: 3vw;
            margin-left: 1.2vw;
            margin-top: 0.8vw;
        }
    }
`


const Banner = ({data}) => {
    
    return (
        <BannerSection>
            <Container>
                <BannerWrapper>
                    {data.courseBannerImage && <BannerImage style={{ position: 'absolute'}} fluid={data.courseBannerImage.fluid}/>}
                    <BannerContentWrapper>
                        <BannerSubtext>
                            {data.courseBannerSubtext}
                        </BannerSubtext>
                        <BannerMainInfo>
                            <BannerTitle>
                                {data.courseTitle}
                            </BannerTitle>
                            <BannerInfoItems>
                                <BannerTag>{data.courseType}</BannerTag>
                                <BannerCourseStart>Стартуем {data.courseStart}</BannerCourseStart>
                                <BannerCourseDuration>Учимся {data.courseDuration}</BannerCourseDuration>
                            </BannerInfoItems>                            
                        </BannerMainInfo>
                        {data.courseType === 'Курс' ? (
                            <BannerCourseButton target="_blank" href={data.courseSlug}>Участвовать <CourseArrowOut/></BannerCourseButton>
                        ) : (
                            <BannerCourseButton target="_blank" href={data.courseSlug}>Купить <CourseArrowOut/></BannerCourseButton>
                        )}
                    </BannerContentWrapper>
                    <BannerContentWrapperMobile>
                        <BannerSubtext>
                            {data.courseBannerSubtext}
                        </BannerSubtext>
                        <BannerTitle>
                            {data.courseTitle}
                        </BannerTitle>
                        <BannerMainInfo>
                            {data.courseType === 'Курс' ? (
                                <BannerCourseButton target="_blank" href={data.courseSlug}>Участвовать <CourseArrowOut/></BannerCourseButton>
                            ) : (
                                <BannerCourseButton target="_blank" href={data.courseSlug}>Купить <CourseArrowOut/></BannerCourseButton>
                            )}
                            <BannerCourseStart>Стартуем <br/>{data.courseStart}</BannerCourseStart>                          
                        </BannerMainInfo>

                    </BannerContentWrapperMobile>
                </BannerWrapper>
            </Container>
        </BannerSection>

    )
}

export default Banner
