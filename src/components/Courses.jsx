import React from 'react'
import styled from 'styled-components';
import {Container} from './style';
import Course from './Course';




const CoursesSection = styled.section`
    position: relative;
    margin-top: -6.2vw;
    margin-bottom: 4vw;
    padding-top: 3vw;
    @media only screen and (max-width: 575px) {
        margin-top: -9vw;
        margin-bottom: 11vw;
    }
`

const CoursesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1.7vw;
    grid-row-gap: 1.7vw;
    @media only screen and (max-width: 575px) {
        grid-template-columns: 1fr;
        grid-template-columns: 1fr 1fr;
        // padding: 0 5.5vw;
        // grid-row-gap: 9.5vw;
        grid-row-gap: 4vw;
        grid-column-gap: 4vw;

    }



`


const Courses = ({data}) => {

    console.log('courses', data)

    return (
        <CoursesSection id="courses">
            <Container>
                <CoursesWrapper >
                    {data.edges.map((course, idx) => {
                        return (
                            <Course key={idx} courseData={course}/>
                        )
                    })}
                </CoursesWrapper>
            </Container>
        </CoursesSection>
    )
}

export default Courses


