import React from 'react'
import styled from 'styled-components';
import WhiteArrowNewPage from '../assets/svgs/arrow-white-newpage.svg';
import BackgroundImage from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby'

const CourseWrapper = styled.div`
    background: white;
    border-radius: 0.7vw;
    box-shadow: 0 0 0.9vw rgba(0,0,0,0.25);
    transition: all 0.4s ease;
    :hover {
        cursor: pointer;
        transform: scale(1.04);
    }
    
`
const CourseContainer = styled.div`
    padding: 0.8vw;
    padding-top: 0.9vw;
    display: flex;
    flex-direction: column;
`
const CourseTagList = styled.div`
    margin-bottom: 0.9vw;
`

const CourseMainTag = styled.div`
    border: 0.1vw solid var(--granich-red);
    color: white;
    border-radius: 100vw;
    background: var(--granich-red);
    font-weight: 600;
    line-height: 1;
    font-size: 0.83vw;
    padding: 0.15vw 1vw 0.17vw;
    display: inline-block;
    letter-spacing: -0.05em;
    margin-right: 5px;
`

const CourseTag = styled.div`
    border: 0.1vw solid var(--granich-red);
    color: var(--granich-red);
    border-radius: 100vw;
    font-weight: 600;
    line-height: 1;
    font-size: 0.83vw;
    padding: 0.15vw 0.4vw 0.17vw;
    display: inline-block;
    letter-spacing: -0.03vw;
`

const CourseTitle = styled.div`
    font-size: 1.75vw;
    margin-left: 0.3vw;
    line-height: 0.9;
    font-weight: 600;
    letter-spacing: 0;
    margin-bottom: 0.9vw;
`

const CourseImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    margin-bottom: 0.4vw;
    height: 14.5vw;
`

const CourseButton = styled.div`
    background: var(--granich-red);
    border-radius: 0 0 0.7vw 0.7vw;
    color: white;
    
`

const CourseButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
const CourseButtonText = styled.div`
    color: white;
    font-size: 1.45vw;
    font-weight: 600;
    line-height: 0.95;
    margin-left: 0.3vw;
    margin-top: -0.1vw;

`

const CourseInfo = styled.div`
    display: flex;
    margin-left: 0.3vw;
    font-size: 1vw;
    line-height: 1;
    margin-bottom: 0.45vw;
`
const CourseStart = styled.div`
    font-size: inherit;
    margin-right: 1.1vw;
    span {
        font-weight: 700;
        font-size: inherit;
    }
`

const CourseDuration = styled.div`
    font-size: inherit;
    span {
        font-weight: 700;
        font-size: inherit;
    }
`

const CourseTeachers = styled.div`
    display: flex;
    margin-left: auto;
`
const CourseTeacher = styled.div`
    background: grey;
    border-radius: 100px;
    margin-top: -0.2vw;
    margin-right: 0.1vw;
    height: 2.2vw;
    width: 2.2vw;
    :first-child {
        transform: translateX(17%);
    }
`

const Course = () => {
    const data = useStaticQuery(graphql`
        query CourseImage {
            placeholderImage: file(relativePath: { eq: "course_image.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600, quality: 100) {

                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    const imageData = data.placeholderImage.childImageSharp.fluid
    return (
        <CourseWrapper>
            <CourseContainer>
                <CourseTagList>
                    <CourseMainTag>Курс</CourseMainTag>
                    <CourseTag>Базовый</CourseTag>
                </CourseTagList>

                <CourseImage fluid={imageData}></CourseImage>
                <CourseTitle>Осознанный графдизайн</CourseTitle>
                <CourseInfo>
                    <CourseStart>
                        Стартуем <br/> <span>1 июля</span>
                    </CourseStart>
                    <CourseDuration>
                        Учимся <br/> <span>2 месяца</span>
                    </CourseDuration>
                    <CourseTeachers>
                        <CourseTeacher/>
                        <CourseTeacher/>
                    </CourseTeachers>
                </CourseInfo>
            </CourseContainer>
            <CourseButton>
                <CourseContainer>
                    <CourseButtonWrapper>
                        <CourseButtonText>
                            Узнать <br/>о наборе
                        </CourseButtonText>
                        <WhiteArrowNewPage/>
                    </CourseButtonWrapper>


                    
                    
                </CourseContainer>
            </CourseButton>
        </CourseWrapper> 
    )
}

export default Course;