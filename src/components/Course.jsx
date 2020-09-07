import React from 'react'
import styled from 'styled-components';
import WhiteArrowNewPage from '../assets/svgs/arrow-white-newpage.svg';
import BlackArrowNewPage from '../assets/svgs/arrow-black-newpage.svg';
import BackgroundImage from 'gatsby-image';
// import { Link } from 'gatsby';
import CogwheelIcon from '../assets/svgs/cogwheels.svg';


const Cogwheel = styled(props => <CogwheelIcon {...props}/>)`
    width: 5vw;
    height: 5vw;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);

`

const RedArrow = styled(props => <WhiteArrowNewPage {...props}/>)`
    width: 3.1vw; 
    @media only screen and (max-width: 575px) {
        // width: 14vw; 
        // margin-right: -1vw;
        width: 7.5vw; 
        margin-right: -0.5vw;
    }
`
const BlackArrow = styled(props => <BlackArrowNewPage {...props}/>)`
    width: 3.1vw; 
    @media only screen and (max-width: 575px) {
        // width: 14vw; 
        // margin-right: -1vw;
        width: 7.5vw; 
        margin-right: -0.5vw;  
    }
`

const CourseWrapper = styled(props => <a {...props}/>)`
    background: white;
    border-radius: 0.6vw;
    box-shadow: 0 0 0.9vw rgba(0,0,0,0.25);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
    :hover {
        cursor: pointer;
        transform: scale(1.03);
    }

    ${props => props.courseType === 'Разрабатываем...' && `
        background: #E8E8E8;
        box-shadow: none;
        :hover {
            cursor: default;
            transform: none;
        }
        @media only screen and (max-width: 575px) {
            display: none;
        }
    `}
    @media only screen and (max-width: 575px) {
        border-radius: 1.5vw;
        box-shadow: 0 0 1.5vw rgba(0,0,0,0.25);
        // min-height: 90vw;
    }
    
`

const CourseDevelopingWrapper = styled.div`
    background: #E8E8E8;
    border-radius: 0.6vw;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 575px) {
        display: none;
    }

`

const CourseContainer = styled.div`
    padding: 0.9vw 1vw;
    @media only screen and (max-width: 575px) {
        padding: 2.5vw 2.5vw 3.5vw;
    }

`
const CourseButtonContainer = styled.div`
    padding: 0.9vw;
    display: flex;
    flex-direction: column;
    height: 100%;
    ${(props) => props.courseType === 'Разрабатываем...' && `
        padding: 2vw 0.9vw;
    `}

    @media only screen and (max-width: 575px) {
        // padding: 3vw 5vw 3vw;
        padding: 2.5vw;
    }
`

const CourseTagList = styled.div`
    margin-bottom: 0.7vw;
    display: flex;
    align-items: flex-start;
    width: 15.4vw;

    @media only screen and (max-width: 575px) {
        width: 38vw;
        margin-bottom: 1.5vw;
        margin-top: 0;
        margin-left: -0.2vw;
    }
`

const CourseMainTag = styled.div`
    border: 1px solid var(--granich-red);
    color: white;
    border-radius: 100vw;
    background: var(--granich-red);
    font-weight: 600;
    line-height: 1;
    font-size: 0.9vw;
    padding: 0.20vw 0.5vw 0.20vw;
    display: inline-block;
    letter-spacing: -0.05vw;
    position: absolute;
    bottom: 0.7vw;
    left: 0.7vw;
    z-index: 101;
    ${(props) => !props.active && `
        background: var(--granich-black);
        border-color: var(--granich-black);

    `}
    @media only screen and (max-width: 575px) {
        font-size: 2.5vw;
        padding: 0.2vw 1vw 0.2vw;
        border-width: 0.3vw;
        bottom: 1vw;
        left: 1vw;
    }

`

const CourseTag = styled.div`
    border: 1px solid var(--granich-red);
    color: var(--granich-red);
    border-radius: 100vw;
    font-weight: 500;
    line-height: 1;
    font-size: 1vw;
    padding: 0.2vw 0.5vw 0.2vw;
    display: block;
    letter-spacing: -0.03vw;
    margin-right: 0.4vw;
    white-space: nowrap;
    :last-child {
        margin-right: 0;
    }
    ${(props) => !props.active && `
        // filter: opacity(40%);
        border-color: var(--granich-grey);
        color: var(--granich-grey);

    `}
    ${(props) => props.courseType === 'Разрабатываем...' && `
        border: 2px solid #d4d4d4;
        filter: none;
        width: 100%;
        height: 1.45vw;

    `}
    @media only screen and (max-width: 575px) {
        border-width: 1px;
        font-size: 2.6vw;
        padding: 0.7vw 0.8vw;
        font-weight: 400;
        margin-right: 0.6vw;
        letter-spacing: -0.02em;


    }
`

const CourseTitle = styled.div`
    font-size: 1.75vw;
    margin-top: 0.4vw;
    margin-left: 0.3vw;
    line-height: 1.05;
    font-weight: 600;
    letter-spacing: 0;
    width: 15vw;
    @media only screen and (max-width: 575px) {
        font-size: 3.8vw;
        margin-top: 3vw;
        margin-left: 0.25vw;
        line-height: 1;
        width: 37vw;
    }
`

const CourseImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    min-height: 15.5vw;
    width: 100%;
    position: relative;
    @media only screen and (max-width: 575px) {
        min-height: 38vw;
        max-height: 38vw;
        height: 38vw;
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
    ${(props) => props.courseType === 'Разрабатываем...' && `
        background: #dedede;
    `}
    @media only screen and (max-width: 575px) {
        // border-radius: 0 0 3vw 3vw;
        border-radius: 0 0 1.5vw 1.5vw;
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
    ${(props) => props.courseType === 'Разрабатываем...' && `
        color: #C0C0C0;
    `}
    @media only screen and (max-width: 575px) {
        // font-size: 6.3vw;
        // margin-top: -1vw;

        font-size: 3.5vw;
        font-size: 4vw;
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
    // height: 100%;
    // align-items: center;
    ${(props) => !props.active && `
        color: var(--granich-black);
    `}
    @media only screen and (max-width: 575px) {
        // font-size: 4.3vw;
        // margin-top: 4vw;
        // margin-bottom: 0vw;
        // margin-left: -0.5vw;
        font-size: 2.7vw;
        font-size: 3vw;
        margin-top: 2.5vw;
        margin-bottom: 0vw;
        margin-left: 0vw;
    }

`
const CourseDescr = styled.div`
    font-size: 1vw;
    margin-left: 0.3vw;
    color: var(--granich-grey);
    letter-spacing: -0.01vw;
    font-weight: 500;
    line-height: 1;
    margin-top: 0.5vw;
    width: 15vw;
    ${(props) => !props.active && `
        color: var(--granich-light-grey);
    `}
    @media only screen and (max-width: 575px) {
        // font-size: 4.3vw;
        // margin-top: 2vw;
        margin-left: 0.1vw;
        font-size: 2.7vw;
        font-size: 3vw;
        margin-top: 1vw;
        width: 37vw;
    }
`

const CourseStart = styled.div`
    font-size: inherit;
    margin-right: 1.1vw;
    font-weight: 500;
    color: var(--granich-light-grey);
    // ${(props) => !props.active && `
    //     color: var(--granich-black);
    // `}
    span {
        font-weight: inherit;
        font-size: inherit;
        color: black;

    }
    @media only screen and (max-width: 575px) {
        // margin-right: 4vw;
        margin-right: 3vw;
    }


`

const CourseDuration = styled.div`
    font-size: inherit;
    font-weight: 500;
    color: var(--granich-light-grey);
    // ${(props) => !props.active && `
    //     color: var(--granich-black);
    // `}
    span {
        font-weight: inherit;
        font-size: inherit;
        color: black;

    }
    
`



const CourseTeachers = styled.div`
    position: absolute;
    display: flex;
    justify-content: flex-end;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.9vw 0.6vw 0.6vw;
    background: linear-gradient(360deg, rgba(0,0,0,0.2) 0%, rgba(45,45,45,0) 80%);
    z-index: 100;
    @media only screen and (max-width: 575px) {
        // padding: 2.2vw 3vw 2.2vw;
        padding: 1vw;
    }
    
`
const CourseTeacher = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    border-radius: 100vw;
    margin-top: -0.2vw;
    margin-right: 0;
    height: 2.35vw;
    width: 2.35vw;
    border: 1px solid var(--granich-black);
    box-shadow: 0.15vw 0.12vw 0.2vw rgba(0,0,0,0.25);
    ${props => props.several && `
        // transform: translateX(17%);
        margin-right: -0.2vw;
        :last-child {
            margin-right: 0;
            z-index: 1;
        }
        @media only screen and (max-width: 575px) {
            margin-right: -1vw;
            :last-child {
                margin-right: 0;
            }
        }
    `}
    @media only screen and (max-width: 575px) {
        height: 5.8vw;
        width: 5.8vw;
    }

`

const CourseDevelopingImage = styled.div`
    min-height: 15.5vw;
    border: 2px solid #D4D4D4;
    margin-bottom: 0.7vw;
    position: relative;
`
const CourseDevelopingTitle = styled.div`
    div {
        height: 1.3vw;
        width: 70%;
        background: #DeDeDe;
        margin-bottom: 0.4vw;
        :last-child {
            margin-bottom: 0;
            width: 45%;
        }
    }
    margin-bottom: 0.4vw;
`
const CourseDevelopingDescr = styled.div`
    div {
        height: 0.7vw;
        width: 90%;
        background: #DeDeDe;
        margin-bottom: 0.3vw;
        :nth-child(2) {
            width: 55%;
        }
        :last-child {
            margin-bottom: 0;
            width: 70%;
        }
    }
`



const Course = ({courseData}) => {
    return (
        <>
            {courseData.node.courseType === 'Разрабатываем...' ? (
                <CourseDevelopingWrapper courseType={courseData.node.courseType}>
                    <CourseContainer>
                        <CourseTagList>
                            <CourseTag courseType={courseData.node.courseType}></CourseTag>
                            <CourseTag courseType={courseData.node.courseType}></CourseTag>
                            <CourseTag courseType={courseData.node.courseType}></CourseTag>
                        </CourseTagList>
                        <CourseDevelopingImage>
                            <Cogwheel/>
                        </CourseDevelopingImage>
                        <CourseDevelopingTitle>
                            <div></div>
                            <div></div>
                        </CourseDevelopingTitle>
                        <CourseDevelopingDescr>
                            <div></div>
                            <div></div>
                            <div></div>
                        </CourseDevelopingDescr>

                    </CourseContainer>
                    <CourseButton courseType={courseData.node.courseType}>
                        <CourseButtonContainer courseType={courseData.node.courseType}>
                            <CourseButtonWrapper >
                                <CourseButtonText courseType={courseData.node.courseType}>{courseData.node.courseType}</CourseButtonText>
                            </CourseButtonWrapper>
                        </CourseButtonContainer>
                    </CourseButton>
                </CourseDevelopingWrapper>
            ) : (
                <CourseWrapper href={courseData.node.courseSlug}>
                            <CourseContainer>
                                <CourseTagList>
                                    <>
                                        {courseData.node.courseTags.map((courseTag, idx) => {
                                            return (
                                                <CourseTag key={idx} active={courseData.node.courseStatus}>{courseTag}</CourseTag>
                                            )
                                        })}
                                        
                                    </>

                                    
                                </CourseTagList>

                                <CourseImageWrapper>
                                    <CourseImage fluid={courseData.node.coursePreviewImage.fluid}>
                                    </CourseImage>
                                    <>
                                        {courseData.node.courseType === 'Курс' ? (
                                            <CourseMainTag active={courseData.node.courseStatus}>Курс</CourseMainTag>
                                        ) : (
                                            <CourseMainTag active={courseData.node.courseStatus}>Мастер-класс</CourseMainTag>
                                        )}
                                    </>
                                    <CourseTeachers>
                                        {courseData.node.courseTeachers.length > 1 ? (
                                            <>
                                                {courseData.node.courseTeachers.map((teacher, idx) => {
                                                    return (
                                                        <CourseTeacher several={true} key={idx} fluid={teacher.fluid}/>
                                                    )
                                                })}
                                            </>

                                        ) : (
                                            <CourseTeacher  fluid={courseData.node.courseTeachers[0].fluid}/>
                                        )}
                                    </CourseTeachers>
                                </CourseImageWrapper>



                                <CourseTitle courseType={courseData.node.courseType === 'Курс' ? true : false} active={courseData.node.courseStatus}>{courseData.node.courseTitle}</CourseTitle>
                                {courseData.node.courseType === 'Курс' ? (
                                    <CourseInfo active={courseData.node.courseStatus}>
                                        {courseData.node.courseStart && (
                                            <CourseStart active={courseData.node.courseStatus}>
                                                Стартуем <br/> <span>{courseData.node.courseStart}</span>
                                            </CourseStart>
                                        )}
                                        {courseData.node.courseDuration && (
                                            <CourseDuration active={courseData.node.courseStatus}>
                                                Учимся <br/> <span>{courseData.node.courseDuration}</span>
                                            </CourseDuration>
                                        )}


                                    </CourseInfo>
                                ) : (
                                    <CourseDescr active={courseData.node.courseStatus}>
                                        {courseData.node.courseDescr}
                                    </CourseDescr>
                                )}

                            </CourseContainer>
                            <CourseButton active={courseData.node.courseStatus}>
                                <CourseButtonContainer>
                                    <CourseButtonWrapper>
                                        {courseData.node.courseStatus ? (
                                            <>  
                                                {courseData.node.courseType === "Курс" ? (
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
                                                {courseData.node.courseType === "Курс" ? (
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
            )}
        
        </>
        
    )
}

export default Course;