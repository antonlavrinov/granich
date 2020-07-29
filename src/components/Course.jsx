import React from 'react'
import styled from 'styled-components';
import WhiteArrowNewPage from '../assets/svgs/arrow-white-newpage.svg';

const CourseWrapper = styled.div`
    background: white;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
    transition: all 0.4s ease;
    :hover {
        cursor: pointer;
        transform: scale(1.04);
    }
    
`
const CourseContainer = styled.div`
    padding: 12px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
`
const CourseTagList = styled.div`
    margin-bottom: 10px;
`

const CourseMainTag = styled.div`
    border: 1.5px solid var(--granich-red);
    color: white;
    border-radius: 100px;
    background: var(--granich-red);
    font-weight: 600;
    line-height: 1;
    font-size: 12px;
    padding: 2px 15px 3px;
    display: inline-block;
    letter-spacing: -0.05em;
    margin-right: 5px;
`

const CourseTag = styled.div`
    border: 1.5px solid var(--granich-red);
    color: var(--granich-red);
    border-radius: 100px;
    font-weight: 600;
    line-height: 1;
    font-size: 12px;
    padding: 2px 5px 3px;
    display: inline-block;
    letter-spacing: -0.05em;
`

const CourseTitle = styled.div`
    font-size: 20px;
    line-height: 1;
    font-weight: 600;
    letter-spacing: 0;
    margin-top: 5px;
    margin-bottom: 10px;
`

const CourseButton = styled.div`
    background: var(--granich-red);
    border-radius: 0 0 5px 5px;
    color: white;
    
`

const CourseButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
const CourseButtonText = styled.div`
    color: white;
    font-size: 20px;
    font-weight: 600;
    line-height: 1;

`

const CourseInfo = styled.div`
    display: flex;
`
const CourseStart = styled.div`
    margin-right: 15px;
    span {
        font-weight: 700;
    }
`

const CourseDuration = styled.div`
    span {
        font-weight: 700;
    }
`

const CourseTeachers = styled.div`
    display: flex;
    margin-left: auto;
`
const CourseTeacher = styled.div`
    background: grey;
    border-radius: 100px;
    height: 30px;
    width: 30px;
`

const Course = () => {
    return (
        <CourseWrapper>
            <CourseContainer>
                <CourseTagList>
                    <CourseMainTag>Курс</CourseMainTag>
                    <CourseTag>Базовый</CourseTag>
                </CourseTagList>

                <div style={{background: 'grey', width: '100%', height: '200px'}}></div>
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