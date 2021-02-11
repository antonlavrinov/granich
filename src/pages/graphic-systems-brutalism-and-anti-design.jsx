import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import CourseOffer from '../components/course-page/CourseOffer';
import Header from "../components/Header"
import CourseExplanations from "../components/course-page/CourseExplanations"
import CoursePortfolio from "../components/course-page/CoursePortfolio"
// import CourseReviews from "../components/course-page/CourseReviews"
import CoursePriceRange from "../components/course-page/CoursePriceRange"
import { graphql } from 'gatsby';
import EducationQuestions from "../components/EducationQuestions";
import CourseAuthors from "../components/course-page/CourseAuthors";
import MasterClassExample from '../components/course-page/MasterClassExample';
import Mailing from '../components/Mailing';
import ogImage from '../assets/images/seo/graphic-system-vhs-min.jpg';
import ogImageVK from '../assets/images/seo/vk/graphic-system-vhs.jpg';




export const contentfulQuery = graphql`
    query graphicSystemBrutalismAntiQuery {

        BrutalismAntiOffer:   contentfulGranichCourse(courseTitle: {eq: "Графсистемы Брутализм и Антидизайн"}) {

            courseTags
            courseMainTitle {
                json
            }
            courseDescr
            courseStatus
            courseType
            courseMainImage {
                fluid(maxWidth: 850, quality: 90) {
                ...GatsbyContentfulFluid_withWebp
                }
            }


        }

        BrutalismAntiExplanations: allContentfulGranichCourseExplanations(filter: {explanationsAttachmentTo: {eq: "Графсистемы Брутализм и Антидизайн"}}, sort: {fields: [explanationsOrderNumber], order: ASC}) {
          edges {
            node {
              id
              explanationsImage {
                fluid(maxWidth: 450) {
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
        BrutalismAntiTeam: allContentfulGranichMainTeachers(filter: {teacherName: {in: ["Вадим Гранич", "Елизавета Черникова"]}}, sort: {fields: [teacherOrderNumber], order: ASC}) {
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
        BrutalismAntiPortfolioHeader: contentfulGranichCoursePortfolioHeader(portfolioHeaderAttachmentTo: {eq: "Графсистемы Брутализм и Антидизайн"}) {
          portfolioHeaderTitle
          childContentfulGranichCoursePortfolioHeaderPortfolioHeaderSummaryRichTextNode {
            json
          }
          portfolioHeaderInfo {
            json
          }
        }
        BrutalismAntiPortfolioPosters: allContentfulGranichCoursePortfolio(filter: {portfolioAttachmentTo: {eq: "Графсистемы Брутализм и Антидизайн"} portfolioType: {eq: "Одностраничный"}}, sort: {fields: [portfolioOrderNumber], order: ASC}) {
          edges {
            node {
              id
              portfolioMedia {
                fluid(maxWidth: 800) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
          }
        }
        BrutalismAntiReviewsHeader: contentfulGranichCourseReviewsHeader(reviewsHeaderAttachmentTo: {eq: "Графсистемы Брутализм и Антидизайн"}) {
          reviewsHeaderTitle
          reviewsHeaderLinkTelegram
          reviewsHeaderLinkVk
        }
        BrutalismAntiPricesRange : allContentfulGranichCoursePricesRange(filter: {pricesAttachmentTo: {eq: "Графсистемы Брутализм и Антидизайн"}}, sort: {fields: [pricesOrderNumber], order: ASC}) {
          edges {
            node {
              pricesTitle
              pricesText {
                json
              }
              pricesSubtext
              pricesPrice
              id
            }
          }
        }
    }
`


// const authorText = (<>«Я отыскала всё самое интересное и полезное про графдизайн VHS-кассет: почему он появился, какие графсистемы с ним связаны, кто использует его в своей айдентике и как самостоятельно создавать VHS-макеты. Вдобавок, в <a href="https://www.pinterest.ru/vadim_granich/vhs/" target="_blank" rel="noopener noreferrer">Энциклопедии графдизайна</a> на Пинтересте есть примеры работ в графсистеме VHS»</>)


const GraphicSystemBrutalismAntiPage = ({ data }) => (
  <Layout>
    <Header type={'dark'} />
    <div className="section-top-block"></div>
    <SEO title="Графсистемы Брутализм и Антидизайн"
      description="Мастер-класс по графическим системам Брутализм и Антидизайн. В него входят: PDF-презентация, Закрытый телеграм-чат, Видеолекция, Видеоинструкция, Домашнее задание, индивидуальный разбор ДЗ, Вводный урок по InDesign, Макет в портфолио, Бонусный урок."
      keywords={['брутализм', 'антидизайн', 'графсистема', 'гранич', 'granich', 'видеокассеты', 'аудиокассеты']}
      ogImage={ogImage}
      ogImageVk={ogImageVK}
      url="https://granich.design/graphic-systems-brutalism-and-anti-design" />
    <CourseOffer data={data.BrutalismAntiOffer} />
    <CourseExplanations data={data.BrutalismAntiExplanations} />
    <CourseAuthors quote="Исследование, видеолекции, домашнее задание — Елизавета Черникова. Дизайн-система — Вадим Гранич"
      text={(<>Графический Брутализм связан с послевоенным архитектурным движением. Он борется с шаблонным дизайном и декоративностью. Антидизайн — это движение графдизайнеров против удобства, функциональности и скуки «идеальных» коммерческих макетов</>)}
      data={data.BrutalismAntiTeam} />
    <MasterClassExample />
    <CoursePortfolio dataHeader={data.BrutalismAntiPortfolioHeader} masterClass posters={data.BrutalismAntiPortfolioPosters} />
    {/* <CourseReviews dataHeader={data.BrutalismAntiReviewsHeader} data={data.BrutalismAntiReviews} masterClass/> */}
    <div id="prices-range-section"></div>
    {/* {data.BrutalismAntiOffer.courseStatus ? ( */}
    <CoursePriceRange formId={`ltForm2774650`}
      valueInput1={`1164222`}
      valueInput2={`1164224`}
      valueInput3={`1164226`}
      valueInput4={`1164228`}
      googleAnaliticsCategory={`Отправка формы Графсистема VHS`}
      formPostUrl={`https://school.granich.design/pl/lite/block-public/process-html?id=855570200`}
      data={data.BrutalismAntiPricesRange} />
    {/* ) : (
                <Mailing />
            )} */}
    <EducationQuestions />

  </Layout>
)

export default GraphicSystemBrutalismAntiPage
