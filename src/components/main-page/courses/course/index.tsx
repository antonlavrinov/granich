import React from "react"
import CourseCard from "./cards/CourseCard"
import MasterClassCard from "./cards/MasterClassCard"
import DevelopmentCard from "./cards/DevelopmentCard"
import { graphql, useStaticQuery } from "gatsby"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import * as SC from "./Course"

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
      courseArrowBlack: file(
        relativePath: { eq: "arrow-black-newpage-01.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      courseArrowWhite: file(
        relativePath: { eq: "arrow-white-newpage-01.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const calendar = data.courseCalendar.childImageSharp.fluid
  const arrowWhite = data.courseArrowWhite.childImageSharp.fluid
  const arrowBlack = data.courseArrowBlack.childImageSharp.fluid

  // if (
  //   courseData.node.courseTitle === "Графические метафоры как путь в айдентику"
  // ) {
  //   return null
  // }

  return (
    <>
      {courseData.node.courseTypeDevelopment ? (
        <DevelopmentCard />
      ) : (
        <>
          {courseData.node.courseTypeEmpty ? (
            <SC.LinkModal
              onClick={() => {
                openModal()
                trackCustomEvent({
                  category: `Главная: карточка "${courseData.node.courseTitle}"`,
                  action: "click",
                  label: "Карточка курса",
                })
              }}
            >
              {courseData.node.courseType === "Курс" ? (
                <CourseCard
                  arrowBlack={arrowBlack}
                  arrowWhite={arrowWhite}
                  calendar={calendar}
                  empty
                  courseData={courseData}
                />
              ) : (
                <MasterClassCard
                  arrowBlack={arrowBlack}
                  arrowWhite={arrowWhite}
                  calendar={calendar}
                  empty
                  courseData={courseData}
                />
              )}
            </SC.LinkModal>
          ) : (
            <SC.LinkWrapper
              onClick={() =>
                trackCustomEvent({
                  category: `Главная: карточка "${courseData.node.courseTitle}"`,
                  action: "click",
                  label: "Карточка курса",
                })
              }
              href={`/${courseData.node.courseSlug}`}
            >
              <>
                {courseData.node.courseType === "Курс" ? (
                  <CourseCard
                    arrowBlack={arrowBlack}
                    arrowWhite={arrowWhite}
                    calendar={calendar}
                    courseData={courseData}
                  />
                ) : (
                  <MasterClassCard
                    arrowBlack={arrowBlack}
                    arrowWhite={arrowWhite}
                    calendar={calendar}
                    courseData={courseData}
                  />
                )}
              </>
            </SC.LinkWrapper>
          )}
        </>
      )}
    </>
  )
}

export default Course
