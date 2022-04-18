import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import CourseOffer from "../components/course-page-templates/offer"
import Header from "../components/global/header"
import CourseExplanations from "../components/course-page/CourseExplanations"
import CoursePortfolio from "../components/course-page/CoursePortfolio"
import CoursePriceRange from "../components/course-page/CoursePriceRange"
// import { graphql, PageProps } from "gatsby"
import EducationQuestions from "../components/global/education-questions"
import CourseAuthors from "../components/course-page/CourseAuthors"
import MasterClassExample from "../components/course-page/MasterClassExample"
import ogImage from "../assets/images/seo/graphic-systems-brutalism-and-anti-design.jpg"
import ogImageVK from "../assets/images/seo/vk/graphic-systems-brutalism-and-anti-design.jpg"
import dataIndex from "../data/pages/index";
import data from "../data/pages/graphic-systems-brutalism-and-anti-design";

// export const contentfulQuery = graphql`
//   query graphicSystemBrutalismAntiQuery {
//     BrutalismAntiOffer: contentfulGranichCourse(
//       courseTitle: { eq: "Графсистемы Брутализм и Антидизайн" }
//     ) {
//       courseTags
//       courseMainTitle {
//         json
//       }
//       courseTitle
//       courseDescr
//       courseStatus
//       courseButtonText
//       courseExternalLinkTransition
//       courseAdditionalType
//       courseType
//       courseMainImage {
//         fluid(maxWidth: 850, quality: 90) {
//           ...GatsbyContentfulFluid_withWebp
//         }
//       }
//     }

//     BrutalismAntiExplanations: allContentfulGranichCourseExplanations(
//       filter: {
//         explanationsAttachmentTo: { eq: "Графсистемы Брутализм и Антидизайн" }
//       }
//       sort: { fields: [explanationsOrderNumber], order: ASC }
//     ) {
//       edges {
//         node {
//           id
//           explanationsImage {
//             fluid(maxWidth: 450) {
//               ...GatsbyContentfulFluid_withWebp
//             }
//           }
//           explanationsTitle
//           explanationsText {
//             json
//           }
//         }
//       }
//     }
//     BrutalismAntiTeam: allContentfulGranichMainTeachers(
//       filter: { teacherName: { in: ["Вадим Гранич", "Елизавета Черникова"] } }
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
//     BrutalismAntiPortfolioHeader: contentfulGranichCoursePortfolioHeader(
//       portfolioHeaderAttachmentTo: { eq: "Графсистемы Брутализм и Антидизайн" }
//     ) {
//       portfolioHeaderTitle
//       childContentfulGranichCoursePortfolioHeaderPortfolioHeaderSummaryRichTextNode {
//         json
//       }
//       portfolioHeaderInfo {
//         json
//       }
//     }
//     BrutalismAntiPortfolioPosters: allContentfulGranichCoursePortfolio(
//       filter: {
//         portfolioAttachmentTo: { eq: "Графсистемы Брутализм и Антидизайн" }
//         portfolioType: { eq: "Одностраничный" }
//       }
//       sort: { fields: [portfolioOrderNumber], order: ASC }
//     ) {
//       edges {
//         node {
//           id
//           portfolioMedia {
//             fluid(maxWidth: 800) {
//               ...GatsbyContentfulFluid_withWebp
//             }
//           }
//         }
//       }
//     }
//     BrutalismAntiReviewsHeader: contentfulGranichCourseReviewsHeader(
//       reviewsHeaderAttachmentTo: { eq: "Графсистемы Брутализм и Антидизайн" }
//     ) {
//       reviewsHeaderTitle
//       reviewsHeaderLinkTelegram
//       reviewsHeaderLinkVk
//     }
//     BrutalismAntiPricesRange: allContentfulGranichCoursePricesRange(
//       filter: {
//         pricesAttachmentTo: { eq: "Графсистемы Брутализм и Антидизайн" }
//       }
//       sort: { fields: [pricesOrderNumber], order: ASC }
//     ) {
//       edges {
//         node {
//           pricesTitle
//           pricesText {
//             json
//           }
//           pricesSubtext
//           pricesPrice
//           id
//         }
//       }
//     }
//   }
// `

const GraphicSystemBrutalismAntiPage = () => {

  const britalismOffer = dataIndex.courseCards.edges.find((el) => el.node.courseTitle === "Графсистемы Брутализм и Антидизайн")?.node;
  const britalismTeam = dataIndex.team.edges.filter((el) => el.node.teacherName === "Вадим Гранич" || el.node.teacherName === "Елизавета Черникова");
  // if (
  //   !data.BrutalismAntiOffer &&
  //   !data.BrutalismAntiExplanations &&
  //   !data.BrutalismAntiTeam &&
  //   !data.BrutalismAntiPortfolioHeader &&
  //   !data.BrutalismAntiPortfolioPosters &&
  //   !data.BrutalismAntiReviewsHeader &&
  //   !data.BrutalismAntiPricesRange
  // )
  //   return <></>
  return (
    <Layout>
      <Header type={"dark"} />
      <div className="section-top-block"></div>
      <SEO
        title="Графсистемы Брутализм и Антидизайн"
        description="Мастер-класс по графическим системам Брутализм и Антидизайн. В него входят: PDF-презентация, Закрытый телеграм-чат, 2 лекции, Домашнее задание, индивидуальный разбор ДЗ, Вводный урок по InDesign, Макет в портфолио, Бонусный урок."
        keywords={[
          "брутализм",
          "антидизайн",
          "графсистема",
          "гранич",
          "granich",
        ]}
        ogImage={ogImage}
        ogImageVk={ogImageVK}
        url="https://granich.design/graphic-systems-brutalism-and-anti-design"
      />
      <CourseOffer
        courseName="Графсистемы Брутализм и Антидизайн"
        data={britalismOffer}
      />
      <CourseExplanations data={data.BrutalismAntiExplanations} />
      <CourseAuthors
        quote="Исследование, видеолекции, домашнее задание — Елизавета Черникова. Дизайн‑система — Вадим Гранич"
        text={
          <>
            Графический Брутализм связан с послевоенным архитектурным движением.
            Он борется с шаблонным дизайном и декоративностью. Антидизайн — это
            движение графдизайнеров против удобства, функциональности и скуки
            «идеальных» коммерческих макетов
          </>
        }
        data={{ edges: britalismTeam }}
      />
      <MasterClassExample />
      <CoursePortfolio
        dataHeader={data.BrutalismAntiPortfolioHeader}
        masterClass
        posters={data.BrutalismAntiPortfolioPosters}
      />
      <div id="prices-range-section"></div>
      <CoursePriceRange
        formId={`ltForm1609092`}
        valueInput1={`1728715`}
        valueInput2={`1728729`}
        valueInput3={`1728733`}
        valueInput4={`1728741`}
        googleAnaliticsCategory={`Отправка формы Графсистемы Брутализм и Антидизайн`}
        formPostUrl={`https://school.granich.design/pl/lite/block-public/process-html?id=988002262`}
        data={data.BrutalismAntiPricesRange}
      />
      <EducationQuestions />
    </Layout>
  )
}

export default GraphicSystemBrutalismAntiPage
