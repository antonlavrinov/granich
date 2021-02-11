import React from 'react'
import styled from 'styled-components';
import CourseCard from './course-cards/CourseCard';
import MasterClassCard from './course-cards/MasterClassCard';
import DevelopmentCard from './course-cards/DevelopmentCard';
import { graphql, useStaticQuery } from 'gatsby'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'



const CourseLinkWrapper = styled.a`
    transition: all 0.2s ease;
    :hover {
        cursor: pointer;
        transform: scale(1.03);
    }
    @media only screen and (max-width: 575px) {
        :hover {
            transform: none;
        }
    }
`

const CourseLinkModal = styled.div`
    text-align: left;
    background: none;
    :hover {
        cursor: pointer;
    }

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


    if (courseData.node.courseTitle === 'Графсистемы Брутализм и Антидизайн') {
        return null
    }

    console.log('COURSE TITLE', courseData.node.courseTitle)

    return (
        <>
            {courseData.node.courseTypeDevelopment ? (
                <DevelopmentCard />
            ) : (
                    <>
                        {courseData.node.courseTypeEmpty ? (
                            <CourseLinkModal type="button" onClick={() => { openModal(); trackCustomEvent({ category: `Главная: карточка "${courseData.node.courseTitle}"`, action: 'click' }) }} >
                                {courseData.node.courseType === 'Курс' ? (
                                    <CourseCard arrowBlack={arrowBlack} arrowWhite={arrowWhite} calendar={calendar} empty courseData={courseData} />
                                ) : (
                                        <MasterClassCard arrowBlack={arrowBlack} arrowWhite={arrowWhite} calendar={calendar} empty courseData={courseData} />
                                    )}
                            </CourseLinkModal>
                        ) : (
                                <CourseLinkWrapper onClick={() => trackCustomEvent({ category: `Главная: карточка "${courseData.node.courseTitle}"`, action: 'click' })} href={`/${courseData.node.courseSlug}`}>
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