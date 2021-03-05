import React from 'react'
import styled from 'styled-components';
import CourseCard from './course-cards/CourseCard';
import MasterClassCard from './course-cards/MasterClassCard';
import DevelopmentCard from './course-cards/DevelopmentCard';
import { graphql, useStaticQuery } from 'gatsby'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'



const CourseLinkWrapper = styled.a`
    transition: all 0.2s ease;
    border-radius: 0.6vw;
    // box-shadow: 0 0 0.9vw rgba(0,0,0,0.25);
    :hover {
        cursor: pointer;
        transform: scale(1.03);
    }
    @media only screen and (max-width: 575px) {
        border-radius: 1.5vw;
        // box-shadow: 0 0 1.5vw rgba(0,0,0,0.25);
        :hover {
            transform: none;
        }
        
    }
`

const CourseLinkModal = styled.div`
    // text-align: left;
    // background: none;
    // border-radius: 0.6vw;
    // box-shadow: 0 0 0.9vw rgba(0,0,0,0.25);
    :hover {
        cursor: pointer;
    }
    // @media only screen and (max-width: 575px) {
    //     // border-radius: 1.5vw;
    //     // box-shadow: 0 0 1.5vw rgba(0,0,0,0.25);
    // }

`




const Course = ({ courseData, openModal }) => {
    const data = useStaticQuery(graphql`
        query courseIcons {
            courseCalendar: file(relativePath: { eq: "empty_calendar-01.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            courseArrowBlack: file(relativePath: { eq: "arrow-black-newpage-01.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            courseArrowWhite: file(relativePath: { eq: "arrow-white-newpage-01.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }


        }
    `)

    const calendar = data.courseCalendar.childImageSharp.fluid;
    const arrowWhite = data.courseArrowWhite.childImageSharp.fluid;
    const arrowBlack = data.courseArrowBlack.childImageSharp.fluid;





    return (
        <>
            {courseData.node.courseTypeDevelopment ? (
                <DevelopmentCard />
            ) : (
                    <>
                        {courseData.node.courseTypeEmpty ? (
                            <CourseLinkModal onClick={() => { openModal(); trackCustomEvent({ category: `Главная: карточка "${courseData.node.courseTitle}"`, action: 'click', label: 'Карточка курса' }) }} >
                                {courseData.node.courseType === 'Курс' ? (
                                    <CourseCard arrowBlack={arrowBlack} arrowWhite={arrowWhite} calendar={calendar} empty courseData={courseData} />
                                ) : (
                                        <MasterClassCard arrowBlack={arrowBlack} arrowWhite={arrowWhite} calendar={calendar} empty courseData={courseData} />
                                    )}
                            </CourseLinkModal>
                        ) : (
                                <CourseLinkWrapper onClick={() => trackCustomEvent({ category: `Главная: карточка "${courseData.node.courseTitle}"`, action: 'click', label: 'Карточка курса' })} href={`/${courseData.node.courseSlug}`}>
                                    <>
                                        {courseData.node.courseType === 'Курс' ? (
                                            <CourseCard arrowBlack={arrowBlack} arrowWhite={arrowWhite} calendar={calendar} courseData={courseData} />
                                        ) : (
                                                <MasterClassCard arrowBlack={arrowBlack} arrowWhite={arrowWhite} calendar={calendar} courseData={courseData} />
                                            )}
                                    </>
                                </CourseLinkWrapper>
                            )}

                    </>
                )}

        </>

    )
}

export default Course;