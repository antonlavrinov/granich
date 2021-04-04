import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
// import CourseOffer from "../components/course-page/CourseOffer"
import Header from "../components/global/header"
// import CourseCurriculum from "../components/course-page/CourseCurriculum"
import CourseParticipation from "../components/course-page/CourseParticipation"
import { graphql, PageProps } from "gatsby"
import ogImage from "../assets/images/seo/graphic-metaphors-in-identity.jpg"
import ogImageVK from "../assets/images/seo/vk/graphic-metaphors-in-identity.jpg"
import VideoPresentationOffer from "../components/metaphors-in-identity-page/video-presentation"
import Timetable from "../components/metaphors-in-identity-page/timetable"
import {
  ICourseExplanations,
  ICourseOffer,
  ICoursePortfolioHeader,
  ICoursePortfolioPosters,
  IPriceRange,
} from "../interfaces/course-page"
import { ITeam } from "../interfaces/main-page"

export const contentfulQuery = graphql`
  query graphicMetaphorsQuery {
    offer: contentfulGranichCourse(
      courseTitle: { eq: "Графические метафоры как путь в айдентику" }
    ) {
      courseMainImage {
        fluid(maxWidth: 850, quality: 90) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      courseTitle
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

type GraphQlResults = {
  offer: ICourseOffer
}

const GraphicMetaphorsInIdentityPage: React.FC<PageProps<GraphQlResults>> = ({
  data,
}) => {
  return (
    <Layout>
      <Header type={"dark"} />
      <SEO
        title="Графические метафоры как путь в айдентику"
        description="Курс по графическим метафорам для графических дизайнеров, которые хотят начать путь в создании айдентики (фирменных стилей)"
        socialDescription="Курс по графическим метафорам для графических дизайнеров, которые хотят начать путь в создании айдентики (фирменных стилей)"
        keywords={[
          "метафоры",
          "айдентика",
          "гранич",
          "identity",
          "granich",
          "conscious",
          "metaphors",
        ]}
        ogImage={ogImage}
        ogImageVk={ogImageVK}
        url="https://granich.design/graphic-metaphors-in-identity"
      />
      <div className="section-top-block"></div>
      <VideoPresentationOffer data={data.offer} />
      <Timetable />
      <CourseParticipation
        policy={false}
        data={data.offer}
        formId={`ltForm5911337`}
        formAction={`https://school.granich.design/pl/lite/block-public/process-html?id=1022043147`}
        googleAnaliticsCategory={`Отправка формы Графметафоры`}
        // additionalTags={["Интенсивный", "С нуля"]}
      />
    </Layout>
  )
}

export default GraphicMetaphorsInIdentityPage
