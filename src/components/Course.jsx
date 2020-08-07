import React from 'react'
import styled from 'styled-components';
import WhiteArrowNewPage from '../assets/svgs/arrow-white-newpage.svg';
import BlackArrowNewPage from '../assets/svgs/arrow-black-newpage.svg';
import BackgroundImage from 'gatsby-image';
import { graphql, useStaticQuery, Link } from 'gatsby'

const CourseWrapper = styled(props => <Link {...props}/>)`
    background: white;
    border-radius: 0.6vw;
    box-shadow: 0 0 0.9vw rgba(0,0,0,0.25);
    transition: all 0.4s ease;
    display: flex;
    flex-direction: column;
    filter: greyscale(50%);

    :hover {
        cursor: pointer;
        transform: scale(1.03);
    }
    
`
const CourseContainer = styled.div`
    padding: 0.9vw;
    padding-top: 0.9vw;
    display: flex;
    flex-direction: column;
    height: 100%;

`
const CourseTagList = styled.div`
    margin-bottom: 0.9vw;
    display: flex;
    width: 100%;
`

const CourseMainTag = styled.div`
    border: 0.1vw solid var(--granich-red);
    color: white;
    border-radius: 100vw;
    background: var(--granich-red);
    font-weight: 600;
    line-height: 1;
    font-size: 0.83vw;
    padding: 0.15vw 0.4vw 0.17vw;
    display: inline-block;
    letter-spacing: -0.05em;
    margin-right: 0.3vw;
    ${(props) => !props.active && `
        filter: opacity(30%);
        background: black;
        border-color: black;

    `}

`

const CourseTag = styled.div`
    border: 0.05vw solid var(--granich-red);
    color: var(--granich-red);
    border-radius: 100vw;
    font-weight: 600;
    line-height: 1;
    font-size: 0.83vw;
    padding: 0.15vw 0.4vw 0.17vw;
    display: inline-block;
    letter-spacing: -0.03vw;
    margin-right: 0.3vw;
    :last-child {
        margin-right: 0;
    }
    ${(props) => !props.active && `
        filter: opacity(40%);
        border-color: black;
        color: black;

    `}
`

const CourseTitle = styled.div`
    font-size: 1.75vw;
    margin-top: 0.4vw;
    margin-left: 0.3vw;
    line-height: 0.9;
    font-weight: 600;
    letter-spacing: 0;
    // margin-bottom: 0.9vw;
    max-width: 15.5vw;
    ${(props) => !props.cardType && `
        max-width: 13.5vw;

    `}
    ${(props) => !props.active && `
        color: var(--granich-light-grey);
    `}
`

const CourseImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    // margin-bottom: 0.4vw;
    min-height: 15.7vw;
    width: 100%;
    position: relative;
`

const CourseImageWrapper = styled.div`
    position: relative;
`

const CourseButton = styled.div`
    background: var(--granich-red);
    border-radius: 0 0 0.6vw 0.6vw;
    color: white;
    margin-top: auto;
    ${(props) => !props.active && `
        background: black;
    
    `}
    
`

const CourseButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const CourseButtonText = styled.div`
    color: white;
    font-size: 1.45vw;
    font-weight: 500;
    line-height: 0.95;
    margin-left: 0.3vw;
    margin-top: -0.5vw;

`

const CourseInfo = styled.div`
    display: flex;
    margin-left: 0.3vw;
    font-size: 1vw;
    line-height: 1.1;
    margin-bottom: 0.45vw;
    margin-top: 0.9vw;
    height: 100%;
    align-items: center;

`
const CourseDescr = styled.div`
    font-size: 1vw;
    margin-left: 0.3vw;
    color: var(--granich-light-grey);
    letter-spacing: -0.01vw;
    font-weight: 500;
    margin-top: 0.2vw;
    height: 100%;
    line-height: 1;
    margin-top: 0.5vw;
    ${(props) => !props.active && `
        color: var(--granich-light-grey);
    `}
`

const CourseStart = styled.div`
    font-size: inherit;
    margin-right: 1.1vw;
    font-weight: 600;
    color: var(--granich-light-grey);
    span {
        font-weight: inherit;
        font-size: inherit;
        color: black;
        ${(props) => !props.active && `
            color: var(--granich-light-grey);
        `}
    }
`

const CourseDuration = styled.div`
    font-size: inherit;
    font-weight: 600;
    color: var(--granich-light-grey);
    span {
        font-weight: inherit;
        font-size: inherit;
        color: black;
        ${(props) => !props.active && `
            color: var(--granich-light-grey);
        `}
    }
    
`

const CourseTeachers = styled.div`
    position: absolute;
    display: flex;
    // margin-left: auto;
    bottom: 0.8vw;
    left: 0.8vw;
    z-index: 100;
    ${(props) => !props.active && `
        filter: opacity(30%) grayscale(100%);
    `}
`
const CourseTeacher = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    background: grey;
    border-radius: 100px;
    margin-top: -0.2vw;
    margin-right: 0.1vw;
    height: 2.4vw;
    width: 2.4vw;
    ${props => props.several && `
        :last-child {
            transform: translateX(-17%);
            z-index: 1;
        }
    `}

`

const Course = ({courseData}) => {
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
    console.log('courseData', courseData)
    return (
        <CourseWrapper to={courseData.node.cardSlug}>
            <CourseContainer>
                <CourseTagList>
                    <>
                        {courseData.node.typeOfCard === 'Курс' ? (
                            <CourseMainTag active={courseData.node.cardActive}>Курс</CourseMainTag>
                        ) : (
                            <CourseMainTag active={courseData.node.cardActive}>Мастер-класс</CourseMainTag>
                        )}
                    </>
                    <>
                        {courseData.node.cardTags.map((cardTag, idx) => {
                            return (
                                <CourseTag key={idx} active={courseData.node.cardActive}>{cardTag}</CourseTag>
                            )
                        })}
                        
                    </>

                    
                </CourseTagList>

                <CourseImageWrapper>
                    <CourseImage fluid={courseData.node.cardImage.fluid}>
                    </CourseImage>
                    <CourseTeachers active={courseData.node.cardActive}>
                        {courseData.node.cardTeachers.length > 1 ? (
                            <>
                                {courseData.node.cardTeachers.map((teacher, idx) => {
                                    return (
                                        <CourseTeacher several={true} key={idx} fluid={teacher.fluid}/>
                                    )
                                })}
                            </>

                        ) : (
                            <CourseTeacher  fluid={courseData.node.cardTeachers[0].fluid}/>
                        )}
                    </CourseTeachers>
                </CourseImageWrapper>



                <CourseTitle cardType={courseData.node.typeOfCard === 'Курс' ? true : false} active={courseData.node.cardActive}>{courseData.node.cardTitle}</CourseTitle>
                {courseData.node.typeOfCard === 'Курс' ? (
                    <CourseInfo active={courseData.node.cardActive}>
                        <CourseStart active={courseData.node.cardActive}>
                            Стартуем <br/> <span>{courseData.node.cardDate}</span>
                        </CourseStart>
                        <CourseDuration active={courseData.node.cardActive}>
                            Учимся <br/> <span>{courseData.node.cardDuration}</span>
                        </CourseDuration>

                    </CourseInfo>
                ) : (
                    <CourseDescr active={courseData.node.cardActive}>
                        {courseData.node.cardDescription.cardDescription}
                    </CourseDescr>
                )}

            </CourseContainer>
            <CourseButton active={courseData.node.cardActive}>
                <CourseContainer>
                    <CourseButtonWrapper>
                        {courseData.node.cardActive ? (
                            <>  
                                {courseData.node.typeOfCard === "Курс" ? (
                                    <CourseButtonText>
                                        Участвовать
                                    </CourseButtonText>
                                ) : (
                                    <CourseButtonText>
                                        Купить
                                    </CourseButtonText>
                                )}

                                <WhiteArrowNewPage/>
                            </>
                        ) : (
                            <>
                                <CourseButtonText>
                                    Узнать <br/>о наборе
                                </CourseButtonText>
                                <BlackArrowNewPage/>
                            </>
                        )}

                    </CourseButtonWrapper>


                    
                    
                </CourseContainer>
            </CourseButton>
        </CourseWrapper> 
    )
}

export default Course;