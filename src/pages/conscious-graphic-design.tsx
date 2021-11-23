import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import CourseOffer from "../components/course-page-templates/offer/"
import Header from "../components/global/header"
import CourseExample from "../components/course-page/CourseExample"
import CoursePortfolio from "../components/course-page/CoursePortfolio"
import CourseTrainingPath from "../components/course-page/CourseTrainingPath"
import CourseCurriculum from "../components/course-page/CourseCurriculum"
import Features from "../components/course-page-templates/features"
import CourseReviews from "../components/course-page/CourseReviews"
import CourseParticipation from "../components/course-page/CourseParticipation";
import { graphql, PageProps, navigate } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll"
import Mailing from "../components/global/mailing"
import CourseExplain from "../components/course-page/CourseExplain"
import ogImage from "../assets/images/seo/conscious-graphic-design.jpg"
import ogImageVK from "../assets/images/seo/vk/conscious-graphic-design.jpg"
import CourseIndividualSupport from "../components/course-page/CourseIndividualSupport"
import CourseTimetable from "../components/course-page/CourseTimetable"
import CourseAftermath from "../components/course-page/CourseAftermath"
import CourseOpportunities from "../components/course-page/CourseOpportunities"
import CourseHardWork from "../components/course-page/CourseHardWork"
import CoursePaymentChoices from "../components/course-page/payment-choices/CoursePaymentChoices"
import CourseBanner from "../components/course-page/CourseBanner"
import MasterClasses from "../components/graph-design-page/master-classes"
import CourseQandA from "../components/course-page-templates/q-and-a"

export const contentfulQuery = graphql`
  query graphDesignQuery {
    offer: contentfulGranichCourse(
      courseTitle: { eq: "Осознанный Графдизайн" }
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
      courseButtonText
      courseExternalLinkTransition
      courseAdditionalType
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
    courseCards: allContentfulGranichCourse(
      filter: { courseType: { eq: "Мастер-класс" } }
      sort: { fields: [courseOrderNumber], order: ASC }
    ) {
      edges {
        node {
          id
          courseStatus
          courseButtonText
          courseExternalLinkTransition
          courseAdditionalType
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
    explanations: allContentfulGranichCourseExplanations(
      filter: { explanationsAttachmentTo: { eq: "Осознанный графдизайн" } }
      sort: { fields: [explanationsOrderNumber], order: ASC }
    ) {
      edges {
        node {
          id
          explanationsImage {
            fluid(maxWidth: 450, quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          explanationsTitle
          explanationsText {
            json
          }
        }
      }
    }
    forWhom: allContentfulGranichCourseForWhom(
      filter: { forWhomAttachmentTo: { eq: "Осознанный графдизайн" } }
      sort: { fields: [forWhomOrderNumber], order: ASC }
    ) {
      edges {
        node {
          id
          forWhomImage {
            fluid(maxWidth: 450) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          forWhomTitle
          forWhomText {
            json
          }
        }
      }
    }
    curriculumHeader: contentfulGranichCourseCurriculumHeader(
      curriculumHeaderAttachmentTo: { eq: "Осознанный графдизайн" }
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
      filter: { curriculumAttachmentTo: { eq: "Осознанный графдизайн" } }
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
    features: allContentfulGranichCourseFeatures(
      filter: { featuresAttachmentTo: { eq: "Осознанный графдизайн" } }
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
    trainingPath: allContentfulGranichMainTrainingPath(
      filter: { trainingPathAttachmentTo: { eq: "Осознанный графдизайн" } }
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
    portfolioHeader: contentfulGranichCoursePortfolioHeader(
      portfolioHeaderAttachmentTo: { eq: "Осознанный графдизайн" }
    ) {
      portfolioHeaderTitle
      childContentfulGranichCoursePortfolioHeaderPortfolioHeaderSummaryRichTextNode {
        json
      }
      portfolioHeaderInfo {
        json
      }
    }
    portfolioPosters: allContentfulGranichCoursePortfolio(
      filter: {
        portfolioAttachmentTo: { eq: "Осознанный графдизайн" }
        portfolioType: { eq: "Одностраничный" }
      }
      sort: { fields: [portfolioOrderNumber], order: ASC }
    ) {
      edges {
        node {
          portfolioMedia {
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
    portfolioMultipage: allContentfulGranichCoursePortfolio(
      filter: {
        portfolioAttachmentTo: { eq: "Осознанный графдизайн" }
        portfolioType: { eq: "Многостраничный" }
      }
      sort: { fields: [portfolioOrderNumber], order: ASC }
    ) {
      edges {
        node {
          portfolioMedia {
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid_withWebp
              src
            }
            resize(width: 100) {
              src
            }
          }
        }
      }
    }
    reviewsHeader: contentfulGranichCourseReviewsHeader(
      reviewsHeaderAttachmentTo: { eq: "Осознанный графдизайн" }
    ) {
      reviewsHeaderTitle
      reviewsHeaderLinkTelegram
      reviewsHeaderLinkVk
    }
    reviews: allContentfulGranichCourseReviews(
      filter: { reviewsAttachmentTo: { eq: "Осознанный графдизайн" } }
      sort: { fields: [reviewsOrderNumber], order: ASC }
    ) {
      edges {
        node {
          id
          reviewsImage {
            fluid(maxWidth: 450) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          reviewsLink
        }
      }
    }
    answers: allContentfulGranichCourseAnswers(
      filter: { answersAttachmentTo: { eq: "Осознанный графдизайн" } }
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
  useEffect(() => {
    navigate("/foundation-of-graphic-design")
  }, [])
  
  return <></>
  return (
    <Layout>
      <Header type={"dark"} />
      <SEO
        title="Осознанный Графдизайн"
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
      <CourseExample title={`Для кого этот курс?`} />
      <CourseExplain />
      <CourseOpportunities />
      <CourseAftermath />
      <CourseTimetable text="Я выстроил Программу обучения так, что на каждый из уроков даётся 1 неделя. С понедельника по воскресенье. В день необходимо инвестировать в своё обучение хотя бы пару часов. Уроки насыщены обязательной к изучению и дополнительной информацией, поэтому откладывать обучение на последний день не стоит.  При этом домашнее задание по уроку необходимо выполнить ровно за эту неделю. Это строгий дедлайн. Иначе вы будете отстранены от обучения."/>
      <CourseTrainingPath data={data.trainingPath} />
      <CoursePortfolio
        dataHeader={data.portfolioHeader}
        posters={data.portfolioPosters}
        multiPages={data.portfolioMultipage}
      />
      <CourseCurriculum
        dataHeader={data.curriculumHeader}
        data={data.curriculum}
      />
      <Features title="Еще пара бонусов" data={data.features} />
      <CourseReviews description="Напишите выпускникам прошлых потоков, они с радостью поделятся
                  эмоциями от прохождения курса" dataHeader={data.reviewsHeader} data={data.reviews} />
      <CourseHardWork
        title="«Пожалуйста, примите осознанное решение об участии на этом курсе»"
        text="Хоть я и создал на нём условия для быстрого развития твёрдых навыков, но это не произойдёт по волшебству. Вам понадобится прилагать много сил, чтобы дойти до конца."
      />
      <div id="participation-section"></div>
      <CourseParticipation
        policy={true}
        data={data.offer}
        formId={`ltForm6865073`}
        formAction={`https://school.granich.design/pl/lite/block-public/process-html?id=855573236`}
        googleAnaliticsCategory={`Отправка формы Осознанный Графдизайн`}
        additionalTags={["Интенсивный", "С нуля"]}
      />
      <CoursePaymentChoices
        paymentsAvailable={{ credit: true, corporate: true, abroad: true }}
      />
      <MasterClasses 
        title="Не готовы сейчас записаться на Осознанный Графдизайн?"
        description="Тогда вы можете попробовать наши мастер‑классы. Они стоят гораздо
        меньше, и у них нет дедлайнов."
        data={data.courseCards.edges} 
      />
      {!data.offer.courseStatus && <Mailing />}
      <CourseIndividualSupport />
      <CourseBanner />
      <CourseQandA
        data={data.answers}
        title="Точечные ответы о курсе"
        description="Тут мы собрали ответы на самые популярные вопросы о курсе Осознанный Графдизайн"
        urlText="Курса!"
      />
    </Layout>
  )
}

export default OsoznannyGraphDesignPage
