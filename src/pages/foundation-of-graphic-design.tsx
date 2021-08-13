

import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import CourseOffer from "../components/course-page-templates/offer/"
import Header from "../components/global/header"
import CourseParticipation from "../components/course-page/CourseParticipation"
import { graphql, PageProps } from "gatsby"
import ogImage from "../assets/images/seo/conscious-graphic-design-min.jpg"
import ogImageVK from "../assets/images/seo/vk/conscious-graphic-design.jpg"
import CoursePaymentChoices from "../components/course-page/payment-choices/CoursePaymentChoices"
import CourseBanner from "../components/course-page/CourseBanner"
import Mailing from "../components/global/mailing"
import CourseExample from "../components/course-page/CourseExample"
import CourseExplain from "../components/course-page/CourseExplain"
import CourseHardWork from "../components/course-page/CourseHardWork"
import CourseReviews from "../components/course-page/CourseReviews"
import CourseCurriculum from "../components/course-page/CourseCurriculum"
import CourseTimetable from "../components/course-page/CourseTimetable"
import CourseTrainingPath from "../components/course-page/CourseTrainingPath"
import Features from "../components/course-page-templates/features"
import CourseQandA from "../components/course-page-templates/q-and-a"
import MasterClasses from "../components/graph-design-page/master-classes"

export const contentfulQuery = graphql`
  query foundationGraphDesignQuery {
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
    foundationFeatures: allContentfulGranichCourseFeatures(
      filter: { featuresAttachmentTo: { eq: "Фундамент Графдизайна" } }
      sort: { fields: [featuresOrderNumber], order: ASC }
    ) {
      edges {
        node {
          id
          featuresImage {
            fluid(maxWidth: 120) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          featuresText
          featuresTitle
          featuresLink
        }
      }
    }
    foundationTrainingPath: allContentfulGranichMainTrainingPath(
      filter: { trainingPathAttachmentTo: { eq: "Фундамент Графдизайна" } }
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
    foundationCurriculumHeader: contentfulGranichCourseCurriculumHeader(
      curriculumHeaderAttachmentTo: { eq: "Фундамент Графдизайна" }
    ) {
      curriculumHeaderTitle
      childContentfulGranichCourseCurriculumHeaderCurriculumHeaderSummaryRichTextNode {
        json
      }
      curriculumHeaderInfo {
        json
      }
    }
    foundationCurriculum: allContentfulGranichCourseCurriculum(
      filter: { curriculumAttachmentTo: { eq: "Фундамент Графдизайна" } }
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
    foundationCourseCards: allContentfulGranichCourse(
      filter: { courseTitle: { eq: "Granich InDesign" } }
      sort: { fields: [courseOrderNumber], order: ASC }
    ) {
      edges {
        node {
          id
          courseStatus
          courseStart
          courseDescr
          courseDuration
          coursePreviewImage {
            fluid(maxWidth: 450) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          courseTags
          courseTeachers {
            id
            fluid(maxWidth: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          courseTitle
          courseType
          courseSlug
          courseTypeDevelopment
          courseTypeEmpty
        }
      }
    }
    foundationReviewsHeader: contentfulGranichCourseReviewsHeader(
      reviewsHeaderAttachmentTo: { eq: "Фундамент Графдизайна" }
    ) {
      reviewsHeaderTitle
      reviewsHeaderLinkTelegram
      reviewsHeaderLinkVk
    }
    foundationAnswers: allContentfulGranichCourseAnswers(
      filter: { answersAttachmentTo: { eq: "Фундамент Графдизайна" } }
      sort: { fields: [answersOrderNumber], order: ASC }
    ) {
      edges {
        node {
          id
          answersTagName
          answersTagType
          isWrap
          childContentfulGranichCourseAnswersAnswersFirstColumnRichTextNode {
            json
          }
          childContentfulGranichCourseAnswersAnswersSecondColumnRichTextNode {
            json
          }
        }
      }
    }
    
    
  }
`

const OsoznannyGraphDesignPage: React.FC<PageProps<GraphQlResults>> = ({
  data,
}) => {
    console.log("data", data)
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
      <CourseOffer 
        allowPosters={true} 
        data={data.foundationOffer} 
        additionalText={"Этот курс является первой из трёх частей учебной программы Осознанного Графдизайна"} 
      />
      <CourseExample />
      <CourseExplain />
      <CourseTimetable />
      <CourseTrainingPath data={data.foundationTrainingPath}/>
      <Features title="Еще пара бонусов" data={data.foundationFeatures}/>
      <CourseCurriculum  
        dataHeader={data.foundationCurriculumHeader}
        data={data.foundationCurriculum}
      />
      <CourseReviews dataHeader={data.foundationReviewsHeader}/>
      <CourseHardWork
        title="«Пожалуйста, примите осознанное решение об участии на этом курсе»"
        text="Хоть я и создал на нём условия для быстрого развития твёрдых навыков, но это не произойдёт по волшебству. Вам понадобится прилагать много сил, чтобы дойти до конца."
      />

      <div id="participation-section"></div>
      <CourseParticipation
        policy={true}
        data={data.foundationOffer}
        formId={`ltForm6865073`}
        formAction={`https://school.granich.design/pl/lite/block-public/process-html?id=855573236`}
        googleAnaliticsCategory={`Отправка формы Осознанный Графдизайн`}
        additionalTags={["Интенсивный", "С нуля"]}
      />
      <CoursePaymentChoices
        paymentsAvailable={{ credit: true, corporate: true, abroad: true }}
      />
      <MasterClasses 
        title="Важно! Для качественного прохождения курса изучите Adobe InDesign."
        description="Чтобы сосредоточиться на обучении графическому дизайну, мы вывели в отдельный бесплатный курс информацию по программе Adobe InDesign. В нём есть домашнее задание, которое вам следует пройти, чтобы в дальнейшем не отвлекаться на технические аспекты, и полностью погрузиться в графический дизайн. Участники Фундамента Графдизайна получают бесплатный видеоразбор ДЗ с курса Granich InDesign."
        data={data.foundationCourseCards.edges}
      />
      <CourseBanner />
      <CourseQandA 
        data={data.foundationAnswers}
        title="Точечные ответы о курсе"
        description="Тут мы собрали ответы на самые популярные вопросы о курсе Осознанный Графдизайн"
        urlText="Курса!"
      />
    </Layout>
  )
}

export default OsoznannyGraphDesignPage