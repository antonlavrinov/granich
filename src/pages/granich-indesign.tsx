import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Header from "../components/global/header"
import { graphql, PageProps } from "gatsby"
import ogImage from "../assets/images/seo/granich-indesign.jpg"
import ogImageVK from "../assets/images/seo/vk/granich-indesign.jpg"
import IndesignOffer from "../components/indesign-page/offer"
import { ICourseOffer } from "../interfaces/course-page"
import CourseCurriculum from "../components/course-page/CourseCurriculum"
import HomeworkAndConsulting from "../components/indesign-page/homework-and-consulting/"
import CourseQandA from "../components/course-page-templates/q-and-a"

export const contentfulQuery = graphql`
  query indesignQuery {
    consultingAccessibility: contentfulGranichIndesignAdditionalInfo {
      indesignConsultingAccessibility
    }
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
    contentCards: allContentfulGranichMainContentCard(
      sort: { fields: [contentOrderDecimalNumber], order: DESC }
      filter: {
        contentTitle: {
          in: [
            "Виды гарнитур (шрифтов)"
            "Как построить сетку. Часть 1"
            "Как оформить абзац текста"
          ]
        }
      }
    ) {
      nodes {
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
        contentPDF {
          file {
            url
          }
        }
        contentLinkPinterest
        contentLinkBehance
        contentLinkMedium
        contentYoutubeTiming
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
    answers: allContentfulGranichCourseAnswers(
      filter: { answersAttachmentTo: { eq: "Granich InDesign" } }
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
  curriculum: any
  curriculumHeader: any
  contentCards: any
  consultingAccessibility: any
  answers: any
}

const GraphicMetaphorsInIdentityPage: React.FC<PageProps<GraphQlResults>> = ({
  data,
}) => {
  console.log("CURRICULUM DATA", data.contentCards)
  const curriculumDataWithContentCards = {
    edges: [
      ...data?.curriculum?.edges,
      {
        node: {
          id: "djfhsdjfhskd",
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
                      value: "Дополнительные уроки",
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
          curriculumAttachmentTo: "Granich InDesign",
          curriculumColumnsType: false,
          curriculumImportantDescr: null,
          curriculumTagName: "4 урок",
          curriculumType: true,
          contentCards: [...data?.contentCards?.nodes],
        },
      },
    ],
  }
  return (
    <Layout>
      <Header type={"dark"} />
      <SEO
        title="Granich InDesign"
        description="Всё важное, что вам следует знать о программе Adobe InDesign + закрепление практикой"
        socialDescription="Всё важное, что вам следует знать о программе Adobe InDesign + закрепление практикой"
        keywords={[
          "indesign",
          "free",
          "бесплатный",
          "course",
          "гранич",
          "granich",
          "курс",
          "индизайн",
        ]}
        ogImage={ogImage}
        ogImageVk={ogImageVK}
        url="https://granich.design/granich-indesign"
      />
      <div className="section-top-block"></div>
      <IndesignOffer data={data.offer} />
      <CourseCurriculum
        compressedHeader
        dataHeader={data.curriculumHeader}
        data={curriculumDataWithContentCards}
      />
      <HomeworkAndConsulting
        consultingAccessibility={data.consultingAccessibility}
      />
      <CourseQandA
        data={data.answers}
        title="Чуть подробнее"
        description=""
        urlText="Видеоразбора!"
      />
    </Layout>
  )
}

export default GraphicMetaphorsInIdentityPage
