

import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import CourseOffer from "../components/course-page-templates/offer/"
import Header from "../components/global/header"
import CourseParticipation from "../components/course-page/CourseParticipation"
import { graphql, PageProps } from "gatsby"
import ogImage from "../assets/images/seo/foundation-of-graphic-design.jpg"
import ogImageVK from "../assets/images/seo/vk/foundation-of-graphic-design.jpg"
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
// import MasterClasses from "../components/graph-design-page/master-classes"
import VideoPresentation from "../components/poster-graphic-design/video-presentation"
import AdobeIndesign from "../components/foundation-of-graph-design/adobe-indesign"
import PinterestCompilationCurriculum from "../components/poster-graphic-design/pinterest-compilation-curriculum"
import PosterExample from "../components/poster-graphic-design/poster-example/PosterExample"
import PosterForWhom from "../components/poster-graphic-design/for-whom"
import styled from 'styled-components';
import TeamMember from "../components/main-page/team/teacher"
import { Container } from "../components/style"
import FoundationPortfolio from "../components/foundation-of-graph-design/foundation-portfolio"
import DescrTooltip from "../components/course-page-templates/description-tooltip"
import DescrTooltipContent from "../components/course-page-templates/description-tooltip/DescrTooltipContent"

export const contentfulQuery = graphql`
  query posterGraphDesignQuery {
    posterOffer: contentfulGranichCourse(
      courseTitle: { eq: "Плакатный Графдизайн" }
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
    posterFeatures: allContentfulGranichCourseFeatures(
      filter: { featuresAttachmentTo: { eq: "Плакатный Графдизайн" } }
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
    posterPosters: allContentfulGranichPoster(
      filter: { posterAttachmentTo: { eq: "Плакатный Графдизайн" } }
      sort: { fields: [posterOrderNumber], order: ASC }
    ) {
      edges {
        node {
          id
          posterImage {
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          posterAuthor
          posterStream
        }
      }
    }
    posterTrainingPath: allContentfulGranichMainTrainingPath(
      filter: { trainingPathAttachmentTo: { eq: "Плакатный Графдизайн" } }
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
    posterCurriculumHeader: contentfulGranichCourseCurriculumHeader(
      curriculumHeaderAttachmentTo: { eq: "Плакатный Графдизайн" }
    ) {
      curriculumHeaderTitle
      childContentfulGranichCourseCurriculumHeaderCurriculumHeaderSummaryRichTextNode {
        json
      }
      curriculumHeaderInfo {
        json
      }
    }
    posterCurriculum: allContentfulGranichCourseCurriculum(
      filter: { curriculumAttachmentTo: { eq: "Плакатный Графдизайн" } }
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
          childContentfulGranichCourseCurriculumCurriculumAdditionalBlockRichTextNode {
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
    posterCourseCards: allContentfulGranichCourse(
      filter: { courseTitle: { eq: "Granich InDesign" } }
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
    posterContentCard: contentfulGranichMainContentCard(
      contentTitle: { eq: "Энциклопедия Графдизайна" }
    ) {

        contentDescription {
          json
        }
        contentTags
        contentTitle
        contentImage {
          fluid(maxWidth: 350) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        contentType
        contentSlug
        contentYoutubeVideoLink
        contentYoutubeTiming
        contentLinkPinterest
        contentLinkBehance
        contentLinkMedium

    }
    posterReviewsHeader: contentfulGranichCourseReviewsHeader(
      reviewsHeaderAttachmentTo: { eq: "Плакатный Графдизайн" }
    ) {
      reviewsHeaderTitle
      reviewsHeaderLinkTelegram
      reviewsHeaderLinkVk
      reviewsHeaderAttachmentTo
    }
    posterAnswers: allContentfulGranichCourseAnswers(
      filter: { answersAttachmentTo: { eq: "Плакатный Графдизайн" } }
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
    posterTeam: allContentfulGranichMainTeachers(
      filter: {
        teacherName: {
          in: ["Вадим Гранич", "Евгения Дроботун", "Марина Асташова"]
        }
      }
      sort: { fields: [teacherOrderNumber], order: ASC }
    ) {
      edges {
        node {
          id
          teacherDescr {
            json
          }
          teacherEmail
          teacherImage {
            fluid(maxWidth: 250) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          teacherName
          teacherSocialInstagram
          teacherSocialPinterest
          teacherSocialTelegram
          teacherSocialVK
          teacherSocialsOrder
        }
      }
    }
    
    
  }
`

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

const OsoznannyGraphDesignPage = ({
  data,
}) => {
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
                        value: "Энциклопедия Графдизайна",
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
            curriculumAttachmentTo: "Плакатный Графдизайн",
            curriculumColumnsType: false,
            curriculumImportantDescr: null,
            curriculumTagName: "⚠ Подготовка",
            curriculumType: true,
            customContent: (<PinterestCompilationCurriculum dataInDesign={data.posterCourseCards.edges} dataPinterest={data.posterContentCard}/>),
            customLessonColor: "var(--granich-red)",
          },
        },
        ...data?.posterCurriculum?.edges,
        
      ],
    }

    // console.log("posters", data?.posterPosters)
    // console.log("content", data.posterContentCards)
  return (
    <Layout>
      <Header type={"dark"} />
      <SEO
        title="Плакатный Графдизайн"
        description="Курс с дедлайнами для продвинутого развития в графическом дизайне. Основан на графических системах."
        keywords={[
          "графдизайн",
          "продвинутый",
          "poster",
          "плакат",
          "гранич",
          "graphdesign",
          "granich",
        ]}
        ogImage={ogImage}
        ogImageVk={ogImageVK}
        url="https://granich.design/poster-graphic-design"
      />
      <div className="section-top-block"></div>
      <CourseOffer 
        // allowPosters={false} 
        data={data.posterOffer}
        courseDescr={(<>Курс с дедлайнами для <DescrTooltip content={(<DescrTooltipContent/>)}><span>продвинутого</span></DescrTooltip> развития в графическом дизайне. Основан на графических системах</>)}
        // postersAuthors="Работы учеников"
        // additionalText={"Этот курс является первой из трёх частей учебной программы Осознанного Графдизайна"} 
      />
       <PosterForWhom />
       <FoundationPortfolio posters={data?.posterPosters.edges} />

      <PosterExample />
      <VideoPresentation data={data.posterContentCard} />
     
      <CourseTimetable courseTitle={data.posterOffer.courseTitle} noGif noKeepCalm text={(<>Программа обучения выстроена так, что на каждый урок с ДЗ даётся неделя — с понедельника по воскресенье. За этот срок нужно изучить материалы урока и отправить выполненное по ним ДЗ — иначе вы не получите разбор куратора по этому домашнему заданию (в том числе не сможете делать творческий макет из этого ДЗ). Уроки насыщены обязательной к изучению и дополнительной информацией, так что лучше не затягивать и распределять нагрузку равномерно в течении недели <i>(хотя бы два часа каждый день).</i></>)}/>
      <CourseTrainingPath data={data.posterTrainingPath}/>
      <CourseCurriculum  
        dataHeader={data.posterCurriculumHeader}
        data={curriculumDataWithContentCards}
        compressedHeader
        lessonsCount
      />
      <Features title="Ещё пара бонусов" data={data.posterFeatures}/>
      
      <CourseReviews description="Напишите выпускникам Школы, они с радостью поделятся
                  эмоциями от прохождения обучения" dataHeader={data.posterReviewsHeader}/>
      <CourseHardWork
        title="«Пожалуйста, примите осознанное решение об участии на этом курсе»"
        text="На курсе созданы условия для быстрого развития твёрдых навыков, но это не произойдёт по волшебству. Вам понадобится прилагать много сил, чтобы дойти до конца (хотя бы 2 часа ежедневно)."
      />

      <div id="participation-section"></div>
      <CourseParticipation
        policy={true}
        data={data.posterOffer}
        formId={`ltForm7094719`}
        formAction={`https://school.granich.design/pl/lite/block-public/process-html?id=1127538041`}
        googleAnaliticsCategory={`Отправка формы Плакатный Графдизайн`}
        additionalTags={["Интенсивный"]}
      />
      <CoursePaymentChoices
        paymentsAvailable={{ credit: true, corporate: true, abroad: true }}
      />
      {/* <AdobeIndesign 
        title="Важно! Для качественного прохождения курса изучите Adobe InDesign."
        description="Чтобы сосредоточиться на обучении графическому дизайну, мы вывели в отдельный бесплатный курс информацию по программе Adobe InDesign. В нём есть домашнее задание, которое вам следует пройти, чтобы в дальнейшем не отвлекаться на технические аспекты, и полностью погрузиться в графический дизайн. Участники Фундамента Графдизайна получают бесплатный видеоразбор ДЗ с курса Granich InDesign."
        data={data.posterCourseCards.edges}
      /> */}
      {/* <CourseBanner /> */}
      <CourseQandA 
        data={data.posterAnswers}
        title="FAQ о курсах Школы"
        description="Тут мы собрали ответы на самые популярные вопросы о курсе Плакатный Графдизайн"
        urlText="Курса!"
      />
      {/* <Container>
        <TeamWrapper>
          <TeamTitle>Курс разрабатывали:</TeamTitle>
          <Team>
            {data?.posterTeam?.edges?.map((el, idx) => {
              return <TeamMember key={el.node.id} teacher={el.node} />
            })}
          </Team>
        </TeamWrapper>
        
      </Container> */}
    </Layout>
  )
}

export default OsoznannyGraphDesignPage
