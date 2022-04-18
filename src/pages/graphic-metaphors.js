import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
// import CourseOffer from "../components/course-page/CourseOffer"
import Header from "../components/global/header"
// import CourseCurriculum from "../components/course-page/CourseCurriculum"
import CourseParticipation from "../components/course-page/CourseParticipation"
// import { graphql, PageProps } from "gatsby"
import ogImage from "../assets/images/seo/graphic-metaphors.jpg"
import ogImageVK from "../assets/images/seo/vk/graphic-metaphors.jpg"
import VideoPresentationOffer from "../components/metaphors-in-identity-page/video-presentation"
import CourseTrainingPath from "../components/course-page/CourseTrainingPath"
import CourseCurriculum from "../components/course-page/CourseCurriculum"
import CourseTimetable from "../components/course-page/CourseTimetable"
// import VideoPresentation from "../components/course-page-templates/video-presentation"
// import FoundationForWhom from "../components/foundation-of-graph-design/for-whom"
import MetaphorsForWhom from "../components/metaphors-in-identity-page/for-whom"
import MetaphorsAuthor from "../components/metaphors-in-identity-page/metaphors-author"
import HardWorkMetaphors from "../components/metaphors-in-identity-page/hard-work"
import CourseOffer from "../components/course-page-templates/offer"
import ParticipationRestriction from "../components/metaphors-in-identity-page/participation-restriction"
import { useQueryParam, NumberParam } from "use-query-params";
import CourseReviews from "../components/course-page/CourseReviews";
import dataIndex from "../data/pages/index";
import data from "../data/pages/graphic-metaphors";
import MetaphorsPortfolio from "../components/metaphors-in-identity-page/metaphors-portfolio"
import { useStaticQuery, graphql } from "gatsby";



// export const contentfulQuery = graphql`
//   query graphicMetaphorsQuery {
//     offer: contentfulGranichCourse(
//       courseTitle: { eq: "Графические метафоры" }
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
//       courseAdditionalType
//       courseExternalLinkTransition
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
//     metaphorsTrainingPath: allContentfulGranichMainTrainingPath(
//       filter: { trainingPathAttachmentTo: { eq: "Графические метафоры" } }
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
//     metaphorsCurriculumHeader: contentfulGranichCourseCurriculumHeader(
//       curriculumHeaderAttachmentTo: { eq: "Графические метафоры" }
//     ) {
//       curriculumHeaderTitle
//       childContentfulGranichCourseCurriculumHeaderCurriculumHeaderSummaryRichTextNode {
//         json
//       }
//       curriculumHeaderInfo {
//         json
//       }
//     }
//     metaphorsReviewsHeader: contentfulGranichCourseReviewsHeader(
//       reviewsHeaderAttachmentTo: { eq: "Графические метафоры" }
//     ) {
//       reviewsHeaderTitle
//       reviewsHeaderLinkTelegram
//       reviewsHeaderLinkVk
//       reviewsHeaderAttachmentTo
//     }
//     metaphorsCurriculum: allContentfulGranichCourseCurriculum(
//       filter: { curriculumAttachmentTo: { eq: "Графические метафоры" } }
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
//   }
// `

const GraphicMetaphorsInIdentityPage = () => {
  const [permission] = useQueryParam("permission", NumberParam);
  const metaphorsOffer = dataIndex.courseCards.edges.find((el) => el.node.courseTitle === "Графические метафоры")?.node;
  
  // const offerImages = useStaticQuery(graphql`
  //   query metaphorsOfferImages {
  //     allFile(filter: {relativeDirectory: {eq: "metaphors-in-identity-page/portfolio"}}) {
  //       edges {
  //         node {
  //           childImageSharp {
  //             fluid(maxWidth: 600, quality: 90) {
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  
  return (
    <Layout theme="blue">
      <Header type={"dark"} />
      <SEO
        title="Графические метафоры"
        description="Курс для тех, кто хочет создавать графдизайн, наполненный смыслом: айдентику, упаковки, афиши, обложки книг и музыкальных альбомов"
        socialDescription="Курс для тех, кто хочет создавать графдизайн, наполненный смыслом: айдентику, упаковки, афиши, обложки книг и музыкальных альбомов"
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
        url="https://granich.design/graphic-metaphors"
      />
      <div className="section-top-block"></div>
      <CourseOffer permission={permission} allowPosters data={metaphorsOffer} postersAuthors="Работы куратора курса"/> 
      <VideoPresentationOffer />
      <MetaphorsForWhom/>
      <MetaphorsPortfolio posters={data?.metaphorsPosters.edges} />
      <CourseTrainingPath data={data.metaphorsTrainingPath}/>
      <CourseCurriculum  
        dataHeader={data.metaphorsCurriculumHeader}
        data={data.metaphorsCurriculum}
        compressedHeader
        lessonsCount
        courseTitle="Графические метафоры"
      />
      <CourseReviews description="Напишите выпускникам Школы, они с радостью поделятся
            эмоциями от прохождения обучения" dataHeader={data.metaphorsReviewsHeader}/>
      <CourseTimetable courseTitle={metaphorsOffer.courseTitle} noGif noKeepCalm text="Программа обучения выстроена так, что на каждый урок с ДЗ даётся неделя — с понедельника по воскресенье. За этот срок нужно изучить материалы урока и отправить выполненное по ним ДЗ — иначе обучение для вас закончится. Уроки насыщены обязательной к изучению и дополнительной информацией, так что лучше не затягивать и распределять нагрузку равномерно в течение недели (хотя бы два часа каждый день)."/>
      <MetaphorsAuthor/>
      <HardWorkMetaphors
        title="«Пожалуйста, примите осознанное решение об участии на этом курсе»"
        text="Курс для графических дизайнеров с опытом активной работы больше одного года, а также для выпускников «Осознанного Графдизайна»."
      />
      <div id="participation-section"></div>
      <div style={{ position: "relative" }}>
        <CourseParticipation
          policy={true}
          data={metaphorsOffer}
          formId={`ltForm9450584`}
          formAction={`https://school.granich.design/pl/lite/block-public/process-html?id=1022043147`}
          googleAnaliticsCategory={`Отправка формы Графметафоры`}
          
          // additionalTags={["Интенсивный", "С нуля"]}
        />
        {!permission && metaphorsOffer.courseStatus && <ParticipationRestriction />}
      </div>
    </Layout>
  )
}

export default GraphicMetaphorsInIdentityPage
