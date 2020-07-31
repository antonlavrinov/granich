import React from 'react'
import styled from 'styled-components';
import {Container} from './style';
import Course from './Course';

const CoursesSection = styled.section`
    position: relative;
    margin-top: -4.5vw;
    margin-bottom: 2.6vw;
`

const CoursesWrapper = styled.div`
    // padding: 0 1vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1.7vw;
    // position: absolute;
    // top: 0;


`



const Courses = () => {
    return (
        <CoursesSection>
            <Container>
                <CoursesWrapper>
                    <Course/>
                    <Course/>
                    <Course/>
                    <Course/>
                </CoursesWrapper>
            </Container>
        </CoursesSection>
    )
}

export default Courses
