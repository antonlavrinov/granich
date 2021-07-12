import React from "react"
import CourseCard from "./cards/CourseCard"
import MasterClassCard from "./cards/MasterClassCard"
import DevelopmentCard from "./cards/DevelopmentCard"
import { graphql, useStaticQuery, navigate } from "gatsby"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import * as SC from "./Course"

type Props = {
  courseData: any
  openModal: () => void
}

const Course: React.FC<Props> = ({ courseData, openModal }) => {
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

  const icons = {
    calendar: data.courseCalendar.childImageSharp.fluid,
    arrowWhite: data.courseArrowWhite.childImageSharp.fluid,
    arrowBlack: data.courseArrowBlack.childImageSharp.fluid,
  }
  return (
    <PureCourse icons={icons} courseData={courseData} openModal={openModal} />
  )
}

export const PureCourse = ({ icons, courseData, openModal }) => {
  if (
    courseData.courseTitle === "Осознанный Фриланс" ||
    courseData.courseTitle === "Granich InDesign"
  ) {
    return null
  }
  // const openModalIfEmpty = (title, bool, slug, ) => {
  //   trackCustomEvent({
  //     category: `Главная: карточка "${title}"`,
  //     action: "click",
  //     label: "Карточка курса",
  //   })
  //   if (bool) {
  //     openModal()
  //   } else {
  //     navigate(`/${slug}`)
  //     return
  //   }
  // }

  return (
    <>
      {courseData.courseTypeDevelopment ? (
        <DevelopmentCard />
      ) : (
        <>
          {courseData.courseTypeEmpty ? (
            <SC.LinkModal
              onClick={() => {
                openModal()
                trackCustomEvent({
                  category: `Главная: карточка "${courseData.courseTitle}"`,
                  action: "click",
                  label: "Карточка курса",
                })
              }}
            >
              {courseData.courseType === "Курс" ? (
                <CourseCard icons={icons} courseData={courseData} />
              ) : (
                <MasterClassCard icons={icons} courseData={courseData} />
              )}
            </SC.LinkModal>
          ) : (
            <SC.LinkWrapper
              onClick={() =>
                trackCustomEvent({
                  category: `Главная: карточка "${courseData.courseTitle}"`,
                  action: "click",
                  label: "Карточка курса",
                })
              }
              href={`/${courseData.courseSlug}`}
            >
              <>
                {courseData.courseType === "Курс" ? (
                  <CourseCard icons={icons} courseData={courseData} />
                ) : (
                  <MasterClassCard icons={icons} courseData={courseData} />
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

// export const PureCourse = ({ icons, courseData, openModal }) => {
//   const openModalIfEmpty = (
//     title: string,
//     bool: boolean,
//     slug: string
//   ): void => {
//     trackCustomEvent({
//       category: `Главная: карточка "${title}"`,
//       action: "click",
//       label: "Карточка курса",
//     })
//     if (bool) {
//       openModal()
//     } else {
//       navigate(`/${slug}`)
//       return
//     }
//   }

// if (courseData.courseTitle === "Осознанный Фриланс") {
//   return null
// }

//   return (
//     <>
//       {courseData.courseTypeDevelopment ? (
//         <DevelopmentCard />
//       ) : (
//         <SC.LinkWrapper
//           onClick={openModalIfEmpty.bind(
//             null,
//             courseData.courseTitle,
//             courseData.courseTypeEmpty,
//             courseData.courseSlug
//           )}
//           target="_blank"
//         >
//           {courseData.courseType === "Курс" ? (
//             <CourseCard icons={icons} courseData={courseData} />
//           ) : (
//             <MasterClassCard icons={icons} courseData={courseData} />
//           )}
//         </SC.LinkWrapper>
//       )}
//     </>
//   )
// }

// export default Course
