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
import IndesignOffer from "../components/indesign-page/offer"
import Timetable from "../components/metaphors-in-identity-page/timetable"
import {
  ICourseExplanations,
  ICourseOffer,
  ICoursePortfolioHeader,
  ICoursePortfolioPosters,
  IPriceRange,
} from "../interfaces/course-page"
import { ITeam } from "../interfaces/main-page"
import CourseCurriculum from "../components/course-page/CourseCurriculum"

export const contentfulQuery = graphql`
  query indesignQuery {
    offer: contentfulGranichCourse(
      courseTitle: { eq: "Графические метафоры как путь в айдентику" }
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
    curriculumHeader: contentfulGranichCourseCurriculumHeader(
      curriculumHeaderAttachmentTo: { eq: "Granich InDesign" }
    ) {
      curriculumHeaderTitle
      childContentfulGranichCourseCurriculumHeaderCurriculumHeaderSummaryRichTextNode {
        json
      }
      curriculumHeaderInfo {
        json
      }
    }
    curriculum: allContentfulGranichCourseCurriculum(
      filter: { curriculumAttachmentTo: { eq: "Granich InDesign" } }
      sort: { fields: [curriculumOrderNumber], order: ASC }
    ) {
      edges {
        node {
          id
          curriculumAttachmentTo
          curriculumImportantDescr
          childContentfulGranichCourseCurriculumCurriculumTitleWithAssetRichTextNode {
            json
          }
          curriculumTagName
          curriculumType
          curriculumImportantDescr
          curriculumColumnsType
          childContentfulGranichCourseCurriculumCurriculumFirstColumnRichTextNode {
            json
          }
          childContentfulGranichCourseCurriculumCurriculumFourthColumnRichTextNode {
            json
          }
          childContentfulGranichCourseCurriculumCurriculumImportantTextRichTextNode {
            json
          }
          childContentfulGranichCourseCurriculumCurriculumSecondColumnRichTextNode {
            json
          }
          childContentfulGranichCourseCurriculumCurriculumThirdColumnRichTextNode {
            json
          }
        }
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
      <IndesignOffer data={data.offer} />
      <CourseCurriculum
        dataHeader={data.curriculumHeader}
        data={data.curriculum}
      />
      {/* <Timetable />
      <CourseParticipation
        policy={false}
        data={data.offer}
        formId={`ltForm5911337`}
        formAction={`https://school.granich.design/pl/lite/block-public/process-html?id=1022043147`}
        googleAnaliticsCategory={`Отправка формы Графметафоры`}
        // additionalTags={["Интенсивный", "С нуля"]}
      /> */}
    </Layout>
  )
}

export default GraphicMetaphorsInIdentityPage
