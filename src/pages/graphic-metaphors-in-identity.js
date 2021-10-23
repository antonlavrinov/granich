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
import CourseHardWork from "../components/course-page/CourseHardWork"
import CourseTrainingPath from "../components/course-page/CourseTrainingPath"
import CourseCurriculum from "../components/course-page/CourseCurriculum"
import CourseTimetable from "../components/course-page/CourseTimetable"
import VideoPresentation from "../components/course-page-templates/video-presentation"
// import FoundationForWhom from "../components/foundation-of-graph-design/for-whom"
import MetaphorsForWhom from "../components/metaphors-in-identity-page/for-whom"
import MetaphorsAuthor from "../components/metaphors-in-identity-page/metaphors-author"
import HardWorkMetaphors from "../components/metaphors-in-identity-page/hard-work"

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
    metaphorsTrainingPath: allContentfulGranichMainTrainingPath(
      filter: { trainingPathAttachmentTo: { eq: "Графические метафоры как путь в айдентику" } }
      sort: { fields: [trainingPathOrderNumber], order: ASC }
    ) {
      edges {
        node {
          id
          trainingPathImage {
            fluid(maxWidth: 1200, quality: 70) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          trainingPathTitle
          trainingPathText {
            json
          }
        }
      }
    }
    metaphorsCurriculumHeader: contentfulGranichCourseCurriculumHeader(
      curriculumHeaderAttachmentTo: { eq: "Графические метафоры как путь в айдентику" }
    ) {
      curriculumHeaderTitle
      childContentfulGranichCourseCurriculumHeaderCurriculumHeaderSummaryRichTextNode {
        json
      }
      curriculumHeaderInfo {
        json
      }
    }
    metaphorsCurriculum: allContentfulGranichCourseCurriculum(
      filter: { curriculumAttachmentTo: { eq: "Графические метафоры как путь в айдентику" } }
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

const GraphicMetaphorsInIdentityPage = ({
  data,
}) => {
  console.log("metaphors", data)
  // if (!data.offer) return <></>
  return (
    <Layout theme="blue">
      <Header type={"dark"} />
      <SEO
        title="Тренировка графических метафор"
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
      <MetaphorsForWhom/>
      <CourseTrainingPath data={data.metaphorsTrainingPath}/>
      <CourseCurriculum  
        dataHeader={data.metaphorsCurriculumHeader}
        data={data.metaphorsCurriculum}
        compressedHeader
        lessonsCount
        courseTitle="Графические метафоры как путь в айдентику"
      />
      
      <CourseTimetable noGif noKeepCalm text="Программа обучения выстроена так, что на каждый урок с ДЗ даётся неделя — с понедельника по воскресенье. За этот срок нужно изучить материалы урока и отправить выполненное по ним ДЗ — иначе обучение для вас закончится. Уроки насыщены обязательной к изучению и дополнительной информацией, так что лучше не затягивать и распределять нагрузку равномерно в течении недели (хотя бы два часа каждый день)."/>
      <MetaphorsAuthor/>
      <HardWorkMetaphors
        title="«Пожалуйста, примите осознанное решение об участии на этом курсе»"
        text="Курс для опытных графических дизайнеров, не менее 1 года активной работы в графдизайне"
      />
      <CourseParticipation
        policy={true}
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
