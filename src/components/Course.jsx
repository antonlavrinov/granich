import React from 'react'
import styled from 'styled-components';

const CourseWrapper = styled.div`
    background: white;
    border-radius: 0.8vw;
    box-shadow: 0px 0px 0.8vw rgba(0,0,0,0.2);
    transition: all 0.4s ease;
    :hover {
        cursor: pointer;
        transform: scale(1.04);
    }
    
`
const CourseContainer = styled.div`
    padding: 1vw;
    display: flex;
    flex-direction: column;
`

const CourseTag = styled.div`

`

const CourseTitle = styled.div`
    font-size: 1.7vw;
    line-height: 1.5vw;
    font-weight: 600;
    letter-spacing: 0;
    margin-top: 0.5vw;
`

const CourseButton = styled.div`
    background: var(--granich-black);
    border-radius: 0 0 0.8vw 0.8vw;
    color: white;
`
const CourseButtonText = styled.div`
    color: white;
    font-size: 1.5vw;
    font-weight: 600;
    line-height: 1.5vw;

`

const Course = () => {
    return (
        <CourseWrapper>
            <CourseContainer>
                ff
                <div style={{background: 'grey', width: '100%', height: `13vw`}}></div>
                <CourseTitle>Осознанный графдизайн</CourseTitle>
            </CourseContainer>
            <CourseButton>
                <CourseContainer>
                    <CourseButtonText>
                        Узнать <br/>о наборе
                    </CourseButtonText>
                    
                </CourseContainer>
            </CourseButton>
        </CourseWrapper> 
    )
}

export default Course;