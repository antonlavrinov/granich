

import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import CourseOffer from "../components/course-page-templates/offer/"
import Header from "../components/global/header"
import CourseParticipation from "../components/course-page/CourseParticipation"
import { graphql, PageProps } from "gatsby"
import ogImage from "../assets/images/seo/conscious-graphic-design-min.jpg"
import ogImageVK from "../assets/images/seo/vk/conscious-graphic-design.jpg"

export const contentfulQuery = graphql`
  query graphDesignQuery {
    foundationOffer: contentfulGranichCourse(
      courseTitle: { eq: "Фундамент Графдизайна" }
    ) {
      courseMainImage {
        fluid(maxWidth: 850, quality: 90) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      courseMainTitle {
        json
      }
      courseDescr
      courseStart
      courseDuration
      courseStartAndEnd
      courseStream
      courseStatus
      courseType
      courseTitle
      coursePrice
      courseTags
      coursePostersCollection {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
        resize(width: 600, quality: 100) {
          src
        }
      }
      childContentfulGranichCourseCoursePolicyRichTextNode {
        json
      }
    }
    
    
  }
`

const OsoznannyGraphDesignPage: React.FC<PageProps<GraphQlResults>> = ({
  data,
}) => {
  return (
    <Layout>
      <Header type={"dark"} />
      <SEO
        title="Фундамент Графдизайна"
        description="Курс по графическому дизайну, построенный на авторской дизайн-системе. Вы получите твёрдую базу и научитесь аргументировать свои макеты"
        keywords={[
          "графдизайн",
          "indesign",
          "индизайн",
          "осознанный",
          "гранич",
          "graphdesign",
          "granich",
          "conscious",
        ]}
        ogImage={ogImage}
        ogImageVk={ogImageVK}
        url="https://granich.design/conscious-graphic-design"
      />
      <div className="section-top-block"></div>
      <CourseOffer allowPosters={true} data={data.offer} />
      <div id="participation-section"></div>
      <CourseParticipation
        policy={true}
        data={data.offer}
        formId={`ltForm6865073`}
        formAction={`https://school.granich.design/pl/lite/block-public/process-html?id=855573236`}
        googleAnaliticsCategory={`Отправка формы Осознанный Графдизайн`}
        additionalTags={["Интенсивный", "С нуля"]}
      />
    </Layout>
  )
}

export default OsoznannyGraphDesignPage
