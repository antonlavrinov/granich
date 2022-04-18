

import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import CourseOffer from "../components/course-page-templates/offer/";
import Header from "../components/global/header";
import CourseParticipation from "../components/course-page/CourseParticipation";
import { graphql, PageProps } from "gatsby";
import ogImage from "../assets/images/seo/foundation-of-graphic-design.jpg";
import ogImageVK from "../assets/images/seo/vk/foundation-of-graphic-design.jpg";
import CoursePaymentChoices from "../components/course-page/payment-choices/CoursePaymentChoices";
import CourseBanner from "../components/course-page/CourseBanner";
import Mailing from "../components/global/mailing";
import CourseExample from "../components/course-page/CourseExample";
import CourseExplain from "../components/course-page/CourseExplain";
import CourseHardWork from "../components/course-page/CourseHardWork";
import CourseReviews from "../components/course-page/CourseReviews";
import CourseCurriculum from "../components/course-page/CourseCurriculum";
import CourseTimetable from "../components/course-page/CourseTimetable";
import CourseTrainingPath from "../components/course-page/CourseTrainingPath";
import Features from "../components/course-page-templates/features";
import CourseQandA from "../components/course-page-templates/q-and-a";
// import MasterClasses from "../components/graph-design-page/master-classes"
import VideoPresentation from "../components/course-page-templates/video-presentation";
import AdobeIndesign from "../components/foundation-of-graph-design/adobe-indesign";
import AdobeIndesignCurriculum from "../components/foundation-of-graph-design/adobe-indesign-curriculum";
import FoundationExample from "../components/foundation-of-graph-design/foundation-example/FoundationExample";
import FoundationForWhom from "../components/foundation-of-graph-design/for-whom";
import styled from 'styled-components';
import TeamMember from "../components/index/team/teacher";
import { Container } from "../components/style";
import FoundationPortfolio from "../components/foundation-of-graph-design/foundation-portfolio";
import data from "../data/pages/foundation-of-graphic-design";
import dataIndex from "../data/pages/index";

// export const contentfulQuery = graphql`
//   query foundationGraphDesignQuery {
//     foundationOffer: contentfulGranichCourse(
//       courseTitle: { eq: "Фундамент Графдизайна" }
//     ) {
//       courseMainImage {
//         fluid(maxWidth: 850, quality: 90) {
//           ...GatsbyContentfulFluid_withWebp
//         }
//       }
//       courseMainTitle {
//         json
//       }
//       courseDescr
//       courseStart
//       courseDuration
//       courseStartAndEnd
//       courseStream
//       courseStatus
//       courseButtonText
//       courseExternalLinkTransition
//       courseAdditionalType
//       courseType
//       courseTitle
//       coursePrice
//       courseTags
//       coursePostersCollection {
//         fluid(maxWidth: 600, quality: 100) {
//           ...GatsbyContentfulFluid_withWebp
//         }
//         resize(width: 600, quality: 100) {
//           src
//         }
//       }
//       childContentfulGranichCourseCoursePolicyRichTextNode {
//         json
//       }
//     }
//     foundationFeatures: allContentfulGranichCourseFeatures(
//       filter: { featuresAttachmentTo: { eq: "Фундамент Графдизайна" } }
//       sort: { fields: [featuresOrderNumber], order: ASC }
//     ) {
//       edges {
//         node {
//           id
//           featuresImage {
//             fluid(maxWidth: 120) {
//               ...GatsbyContentfulFluid_withWebp
//             }
//           }
//           featuresText
//           featuresTitle
//           featuresLink
//         }
//       }
//     }
//     foundationPosters: allContentfulGranichPoster(
//       filter: { posterAttachmentTo: { eq: "Фундамент Графдизайна" } }
//       sort: { fields: [posterOrderNumber], order: ASC }
//     ) {
//       edges {
//         node {
//           id
//           posterImage {
//             fluid(maxWidth: 1000) {
//               ...GatsbyContentfulFluid_withWebp
//             }
//           }
//           posterAuthor
//           posterStream
//         }
//       }
//     }
//     foundationTrainingPath: allContentfulGranichMainTrainingPath(
//       filter: { trainingPathAttachmentTo: { eq: "Фундамент Графдизайна" } }
//       sort: { fields: [trainingPathOrderNumber], order: ASC }
//     ) {
//       edges {
//         node {
//           id
//           trainingPathImage {
//             fluid(maxWidth: 1200, quality: 70) {
//               ...GatsbyContentfulFluid_withWebp
//             }
//           }
//           trainingPathTitle
//           trainingPathText {
//             json
//           }
//         }
//       }
//     }
//     foundationCurriculumHeader: contentfulGranichCourseCurriculumHeader(
//       curriculumHeaderAttachmentTo: { eq: "Фундамент Графдизайна" }
//     ) {
//       curriculumHeaderTitle
//       childContentfulGranichCourseCurriculumHeaderCurriculumHeaderSummaryRichTextNode {
//         json
//       }
//       curriculumHeaderInfo {
//         json
//       }
//     }
//     foundationCurriculum: allContentfulGranichCourseCurriculum(
//       filter: { curriculumAttachmentTo: { eq: "Фундамент Графдизайна" } }
//       sort: { fields: [curriculumOrderNumber], order: ASC }
//     ) {
//       edges {
//         node {
//           id
//           curriculumAttachmentTo
//           curriculumImportantDescr

//           childContentfulGranichCourseCurriculumCurriculumTitleWithAssetRichTextNode {
//             json
//           }
//           curriculumTagName
//           curriculumType
//           curriculumImportantDescr
//           curriculumColumnsType
//           childContentfulGranichCourseCurriculumCurriculumFirstColumnRichTextNode {
//             json
//           }
//           childContentfulGranichCourseCurriculumCurriculumFourthColumnRichTextNode {
//             json
//           }
//           childContentfulGranichCourseCurriculumCurriculumAdditionalBlockRichTextNode {
//             json
//           }
//           childContentfulGranichCourseCurriculumCurriculumImportantTextRichTextNode {
//             json
//           }
//           childContentfulGranichCourseCurriculumCurriculumSecondColumnRichTextNode {
//             json
//           }
//           childContentfulGranichCourseCurriculumCurriculumThirdColumnRichTextNode {
//             json
//           }
//         }
//       }
//     }
//     foundationCourseCards: allContentfulGranichCourse(
//       filter: { courseTitle: { eq: "Granich InDesign" } }
//       sort: { fields: [courseOrderNumber], order: ASC }
//     ) {
//       edges {
//         node {
//           id
//           courseStatus
//           courseButtonText
//           courseExternalLinkTransition
//           courseAdditionalType
//           courseStart
//           courseDescr
//           courseDuration
//           coursePreviewImage {
//             fluid(maxWidth: 450) {
//               ...GatsbyContentfulFluid_withWebp
//             }
//           }
//           courseTags
//           courseTeachers {
//             id
//             fluid(maxWidth: 100) {
//               ...GatsbyContentfulFluid_withWebp
//             }
//           }
//           courseTitle
//           courseType
//           courseSlug
//           courseTypeDevelopment
//           courseTypeEmpty
//         }
//       }
//     }
//     foundationReviewsHeader: contentfulGranichCourseReviewsHeader(
//       reviewsHeaderAttachmentTo: { eq: "Фундамент Графдизайна" }
//     ) {
//       reviewsHeaderTitle
//       reviewsHeaderLinkTelegram
//       reviewsHeaderLinkVk
//       reviewsHeaderAttachmentTo
//     }
//     foundationAnswers: allContentfulGranichCourseAnswers(
//       filter: { answersAttachmentTo: { eq: "Фундамент Графдизайна" } }
//       sort: { fields: [answersOrderNumber], order: ASC }
//     ) {
//       edges {
//         node {
//           id
//           answersTagName
//           answersTagType
//           isWrap
//           childContentfulGranichCourseAnswersAnswersFirstColumnRichTextNode {
//             json
//           }
//           childContentfulGranichCourseAnswersAnswersSecondColumnRichTextNode {
//             json
//           }
//         }
//       }
//     }
//     foundationTeam: allContentfulGranichMainTeachers(
//       filter: {
//         teacherName: {
//           in: ["Вадим Гранич", "Евгения Дроботун", "Марина Асташова"]
//         }
//       }
//       sort: { fields: [teacherOrderNumber], order: ASC }
//     ) {
//       edges {
//         node {
//           id
//           teacherDescr {
//             json
//           }
//           teacherEmail
//           teacherImage {
//             fluid(maxWidth: 250) {
//               ...GatsbyContentfulFluid_withWebp
//             }
//           }
//           teacherName
//           teacherSocialInstagram
//           teacherSocialPinterest
//           teacherSocialTelegram
//           teacherSocialVK
//           teacherSocialsOrder
//         }
//       }
//     }
    
    
//   }
// `

export const Team = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1.6vw;
  grid-row-gap: 1.6vw;
  justify-content: space-between;
  margin-bottom: 2vw;
  @media only screen and (max-width: 575px) {
    grid-template-columns: 1fr;
    grid-row-gap: 4vw;
    margin-bottom: 5vw;
  }
`

export const TeamWrapper = styled.div`
  margin-top: 4vw;
  @media only screen and (max-width: 575px) {
    margin-top: 5vw;
  }
`

export const TeamTitle = styled.div`
    color: var(--granich-black);
  font-size: 4.55vw;
  letter-spacing: -0.1vw;
  font-weight: 700;
  line-height: 0.85;
  margin-right: 2vw;
  margin-bottom: 3vw;
  @media only screen and (max-width: 575px) {
    font-size: 11vw;
    letter-spacing: -0.7vw;
    line-height: 1;
    margin-right: 0;
    margin-bottom: 4vw;
  }
`

const OsoznannyGraphDesignPage = () => {
  const foundationOffer = dataIndex.courseCards.edges.find((el) => el.node.courseTitle === "Фундамент Графдизайна")?.node;
  // console.log("foundationOffer", foundationOffer)
    const curriculumDataWithContentCards = {
      edges: [
        {
          node: {
            id: "djfhsdjfhskddd",
            childContentfulGranichCourseCurriculumCurriculumFirstColumnRichTextNode: {
              json: {
                content: [],
                data: {},
                nodeType: "document",
              },
            },
            childContentfulGranichCourseCurriculumCurriculumFourthColumnRichTextNode: null,
            childContentfulGranichCourseCurriculumCurriculumImportantTextRichTextNode: null,
            childContentfulGranichCourseCurriculumCurriculumSecondColumnRichTextNode: null,
            childContentfulGranichCourseCurriculumCurriculumThirdColumnRichTextNode: null,
            childContentfulGranichCourseCurriculumCurriculumTitleWithAssetRichTextNode: {
              json: {
                content: [
                  {
                    content: [
                      {
                        data: {},
                        marks: [],
                        nodeType: "text",
                        value: "Изучение программы Adobe InDesign",
                      },
                    ],
                    data: {},
                    nodeType: "paragraph",
                  },
                ],
                data: {},
                nodeType: "document",
              },
            },
            curriculumAttachmentTo: "Фундамент Графдизайна",
            curriculumColumnsType: false,
            curriculumImportantDescr: null,
            curriculumTagName: "⚠ Подготовка",
            curriculumType: true,
            customContent: (<AdobeIndesignCurriculum data={dataIndex.courseCards.edges.filter(el => el.node.courseTitle === "Granich InDesign")}/>),
            customLessonColor: "var(--granich-red)",
          },
        },
        ...data?.foundationCurriculum?.edges,
        
      ],
    }

    // console.log("data", data);
    // console.log("posters", data?.foundationPosters)
  return (
    <Layout>
      <Header type={"dark"} />
      <SEO
        title="Фундамент Графдизайна"
        description="Курс с дедлайнами для уверенного старта в графическом дизайне. Основан на дизайн-системе и композициях."
        keywords={[
          "графдизайн",
          "фундамент",
          "foundation",
          "гранич",
          "graphdesign",
          "granich",
        ]}
        ogImage={ogImage}
        ogImageVk={ogImageVK}
        url="https://granich.design/foundation-of-graphic-design"
      />
      <div className="section-top-block"></div>
      <CourseOffer 
        // allowPosters={false} 
        data={foundationOffer} 
        // postersAuthors="Работы учеников"
        // additionalText={"Этот курс является первой из трёх частей учебной программы Осознанного Графдизайна"} 
      />
       <FoundationForWhom />
       <FoundationPortfolio posters={data?.foundationPosters.edges} />

      <FoundationExample />
      <VideoPresentation />
     
      <CourseTimetable courseTitle={foundationOffer.courseTitle} noGif noKeepCalm text={(<>Программа обучения выстроена так, что на каждый урок с ДЗ даётся неделя — с понедельника по воскресенье. За этот срок нужно изучить материалы урока и отправить выполненное по ним ДЗ — иначе вы не получите разбор куратора по этому домашнему заданию (в том числе не сможете делать творческий макет из этого ДЗ). Уроки насыщены обязательной к изучению и дополнительной информацией, так что лучше не затягивать и распределять нагрузку равномерно в течение недели <i>(хотя бы два часа каждый день).</i></>)}/>
      <CourseTrainingPath data={data.foundationTrainingPath}/>
      <CourseCurriculum  
        dataHeader={data.foundationCurriculumHeader}
        data={curriculumDataWithContentCards}
        compressedHeader
        lessonsCount
      />
      <Features title="Ещё пара бонусов" data={data.foundationFeatures}/>
      
      <CourseReviews description="Напишите выпускникам Школы, они с радостью поделятся
                  эмоциями от прохождения обучения" dataHeader={data.foundationReviewsHeader}/>
      <CourseHardWork
        title="«Пожалуйста, примите осознанное решение об участии на этом курсе»"
        text="На курсе созданы условия для быстрого развития твёрдых навыков, но это не произойдёт по волшебству. Вам понадобится прилагать много сил, чтобы дойти до конца (хотя бы 2 часа ежедневно)."
      />

      <div id="participation-section"></div>
      <CourseParticipation
        policy={true}
        data={foundationOffer}
        formId={`ltForm7094719`}
        formAction={`https://school.granich.design/pl/lite/block-public/process-html?id=1127538041`}
        googleAnaliticsCategory={`Отправка формы Фундамент Графдизайна`}
        additionalTags={["Интенсивный", "С нуля"]}
      />
      <CoursePaymentChoices
        paymentsAvailable={{ credit: true, corporate: true, abroad: true }}
      />
      {/* <AdobeIndesign 
        title="Важно! Для качественного прохождения курса изучите Adobe InDesign."
        description="Чтобы сосредоточиться на обучении графическому дизайну, мы вывели в отдельный бесплатный курс информацию по программе Adobe InDesign. В нём есть домашнее задание, которое вам следует пройти, чтобы в дальнейшем не отвлекаться на технические аспекты, и полностью погрузиться в графический дизайн. Участники Фундамента Графдизайна получают бесплатный видеоразбор ДЗ с курса Granich InDesign."
        data={data.foundationCourseCards.edges}
      /> */}
      <CourseBanner />
      <CourseQandA 
        data={data.foundationAnswers}
        title="FAQ о курсах Школы"
        description="Тут мы собрали ответы на самые популярные вопросы о курсе Фундамент Графдизайна"
        urlText="Курса!"
      />
      <Container>
        <TeamWrapper>
          <TeamTitle>Курс разрабатывали:</TeamTitle>
          <Team>
            {dataIndex.team.edges.filter((el) => {
              const condition = el.node.teacherName === "Вадим Гранич" || el.node.teacherName === "Евгения Дроботун" || el.node.teacherName === "Марина Асташова";
              return condition;
            }).map((el, idx) => {
              return <TeamMember key={el.node.id} teacher={el.node} />
            })}
          </Team>
        </TeamWrapper>
        
      </Container>
    </Layout>
  )
}

export default OsoznannyGraphDesignPage
