import React from 'react'
import styled from 'styled-components';
import {Container} from './style';
import Course from './Course';
import {graphql} from 'gatsby';


// export const courseQuery = graphql`
//   query {
//     courses: allContentfulGranichMainCourseCard {
//         edges {
//           node {
//             id
//             cardActive
//             cardDate
//             cardDescription {
//               cardDescription
//             }
//             cardDuration
//             cardTags
//             cardTitle
//             typeOfCard
//           }
//         }
//       }
//   }
// `

    {/* {data.courses.edges.map((edge, idx) => {
      return (
        <div key={idx}>{edge.node.courseCardName}</div> 
      )
    })} */}


const CoursesSection = styled.section`
    position: relative;
    margin-top: -4.5vw;
    margin-bottom: 4vw;
`

const CoursesWrapper = styled.div`
    // padding: 0 1vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1.7vw;
    grid-row-gap: 1.7vw;
    // position: absolute;
    // top: 0;


`

// export const contentfulQuery = graphql`
//     query myQuery {
//         allContentfulGranichMainCourseCard {
//             edges {
//                 node {
//                     id
//                 }
//             }
//         }
//     }
// `



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


