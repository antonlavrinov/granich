import React from 'react'
import styled from 'styled-components';
import WhiteArrowNewPage from '../assets/svgs/arrow-white-newpage.svg';
import BlackArrowNewPage from '../assets/svgs/arrow-black-newpage.svg';
import BackgroundImage from 'gatsby-image';
import { Link } from 'gatsby'

const RedArrow = styled(props => <WhiteArrowNewPage {...props}/>)`
    width: 3.1vw; 
    @media only screen and (max-width: 575px) {
        width: 14vw; 
        margin-right: -1vw;
    }
`
const BlackArrow = styled(props => <BlackArrowNewPage {...props}/>)`
    width: 3.1vw; 
    @media only screen and (max-width: 575px) {
        width: 14vw; 
        margin-right: -1vw;
    }
`

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
    @media only screen and (max-width: 575px) {
        border-radius: 3vw;
        box-shadow: 0 0 2.5vw rgba(0,0,0,0.25);
    }
    
`
const CourseContainer = styled.div`
    padding: 0.9vw;
    display: flex;
    flex-direction: column;
    height: 100%;
    @media only screen and (max-width: 575px) {
        padding: 4vw 5vw 4vw;
    }

`
const CourseButtonContainer = styled.div`
    padding: 0.9vw;
    display: flex;
    flex-direction: column;
    height: 100%;
    @media only screen and (max-width: 575px) {
        padding: 3vw 5vw 3vw;
    }
`

const CourseTagList = styled.div`
    margin-bottom: 0.9vw;
    display: flex;
    width: 100%;
    @media only screen and (max-width: 575px) {
        margin-bottom: 4vw;
        margin-top: 0.5vw;
        margin-left: -0.5vw;
    }
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
    letter-spacing: -0.05vw;
    margin-right: 0.3vw;
    ${(props) => !props.active && `
        filter: opacity(30%);
        background: black;
        border-color: black;

    `}
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        padding: 0.5vw 2.5vw 0.8vw;
        font-weight: 500;
        margin-right: 1.5vw;
        border-width: 0.3vw;
        letter-spacing: -0.1vw;
    }

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
    @media only screen and (max-width: 575px) {
        border-width: 0.3vw;
        font-size: 3.7vw;
        padding: 0.5vw 2.5vw 0.8vw;
        font-weight: 500;
        margin-right: 1.5vw;
        letter-spacing: -0.1vw;
    }
`

const CourseTitle = styled.div`
    font-size: 1.75vw;
    margin-top: 0.4vw;
    margin-left: 0.3vw;
    line-height: 0.9;
    font-weight: 600;
    letter-spacing: 0;
    max-width: 15.5vw;
    ${(props) => !props.active && `
        color: var(--granich-light-grey);
    `}
    @media only screen and (max-width: 575px) {
        font-size: 7.65vw;
        margin-top: 2vw;
        margin-left: -0.5vw;
        max-width: 68vw;
    }
`

const CourseImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    min-height: 15.7vw;
    width: 100%;
    position: relative;
    @media only screen and (max-width: 575px) {
        min-height: 66vw;
    }
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
    @media only screen and (max-width: 575px) {
        border-radius: 0 0 3vw 3vw;
    }
    
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
    @media only screen and (max-width: 575px) {
        font-size: 6.2vw;
        margin-top: -1vw;
    }

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
    @media only screen and (max-width: 575px) {
        font-size: 4.3vw;
        margin-top: 4vw;
        margin-bottom: 0vw;
        margin-left: -0.5vw;
    }

`
const CourseDescr = styled.div`
    font-size: 1vw;
    margin-left: 0.3vw;
    color: var(--granich-light-grey);
    letter-spacing: -0.01vw;
    font-weight: 500;
    height: 100%;
    line-height: 1;
    margin-top: 0.5vw;
    ${(props) => !props.active && `
        color: var(--granich-light-grey);
    `}
    @media only screen and (max-width: 575px) {
        font-size: 4.3vw;
        margin-top: 2vw;
    }
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
    @media only screen and (max-width: 575px) {
        margin-right: 4vw;
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
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.8vw 0.5vw 0.4vw;
    background: linear-gradient(360deg, rgba(0,0,0,0.3) 0%, rgba(45,45,45,0) 80%);
    z-index: 100;
    @media only screen and (max-width: 575px) {
        padding: 2.2vw 3vw 2.2vw;
    }
    
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
    @media only screen and (max-width: 575px) {
        height: 10.2vw;
        width: 10.2vw;
    }

`

const Course = ({courseData}) => {
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
                    <CourseTeachers>
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
                <CourseButtonContainer>
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

                                <RedArrow/>
                            </>
                        ) : (
                            <>
                                {courseData.node.typeOfCard === "Курс" ? (
                                    <CourseButtonText>
                                        Узнать <br/>о наборе
                                    </CourseButtonText>
                                ) : (
                                    <CourseButtonText>
                                        Предзаказ
                                    </CourseButtonText>
                                )}

                                <BlackArrow/>
                            </>
                        )}

                    </CourseButtonWrapper>
 
                </CourseButtonContainer>
            </CourseButton>
        </CourseWrapper> 
    )
}

export default Course;