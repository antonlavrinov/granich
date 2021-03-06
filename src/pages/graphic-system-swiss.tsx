import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import CourseOffer from "../components/course-page-templates/offer/"
import Header from "../components/global/header"
import CourseExplanations from "../components/course-page/CourseExplanations"
import CoursePortfolio from "../components/course-page/CoursePortfolio"
// import CourseReviews from "../components/course-page/CourseReviews"
import CoursePriceRange from "../components/course-page/CoursePriceRange"
import { graphql, PageProps } from "gatsby"
import EducationQuestions from "../components/global/education-questions"
import CourseAuthors from "../components/course-page/CourseAuthors"
import MasterClassExample from "../components/course-page/MasterClassExample"
import ogImage from "../assets/images/seo/graphic-system-swiss-min.jpg"
import ogImageVK from "../assets/images/seo/vk/graphic-system-swiss.jpg"
import {
  ICourseExplanations,
  ICourseOffer,
  ICoursePortfolioHeader,
  ICoursePortfolioPosters,
  IPriceRange,
} from "../interfaces/course-page"
import { ITeam } from "../interfaces/main-page"
import Mailing from "../components/global/mailing"

export const contentfulQuery = graphql`
  query graphicSystemSwissQuery {
    SwissOffer: contentfulGranichCourse(
      courseTitle: { eq: "Графсистема Swiss" }
    ) {
      courseTags
      courseMainTitle {
        json
      }
      courseDescr
      courseStatus
      courseType
      courseTitle
      courseMainImage {
        fluid(maxWidth: 850, quality: 90) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    SwissExplanations: allContentfulGranichCourseExplanations(
      filter: { explanationsAttachmentTo: { eq: "Графсистема Swiss" } }
      sort: { fields: [explanationsOrderNumber], order: ASC }
    ) {
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
    SwissTeam: allContentfulGranichMainTeachers(
      filter: {
        teacherName: {
          in: ["Вадим Гранич", "Елизавета Черникова", "Андрей Павлушин"]
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
    SwissPortfolioHeader: contentfulGranichCoursePortfolioHeader(
      portfolioHeaderAttachmentTo: { eq: "Графсистема Swiss" }
    ) {
      portfolioHeaderTitle
      childContentfulGranichCoursePortfolioHeaderPortfolioHeaderSummaryRichTextNode {
        json
      }
      portfolioHeaderInfo {
        json
      }
    }
    SwissPortfolioPosters: allContentfulGranichCoursePortfolio(
      filter: {
        portfolioAttachmentTo: { eq: "Графсистема Swiss" }
        portfolioType: { eq: "Одностраничный" }
      }
      sort: { fields: [portfolioOrderNumber], order: ASC }
    ) {
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
    SwissPricesRange: allContentfulGranichCoursePricesRange(
      filter: { pricesAttachmentTo: { eq: "Графсистема Swiss" } }
      sort: { fields: [pricesOrderNumber], order: ASC }
    ) {
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

type GraphQlResults = {
  SwissOffer: ICourseOffer
  SwissExplanations: {
    edges: {
      node: ICourseExplanations
    }
  }
  SwissTeam: {
    edges: {
      node: ITeam
    }
  }
  SwissPortfolioHeader: {
    edges: {
      node: ICoursePortfolioHeader
    }
  }

  SwissPortfolioPosters: {
    edges: {
      node: ICoursePortfolioPosters
    }
  }
  SwissPricesRange: {
    edges: {
      node: IPriceRange
    }
  }
}

const GraphicSystemSwissPage: React.FC<PageProps<GraphQlResults>> = ({
  data,
}) => (
  <Layout>
    <Header type={"dark"} />
    <div className="section-top-block"></div>
    <SEO
      title="Графсистема Swiss"
      description="Мастер-класс по графической системе Swiss. В него входят: PDF-презентация, Закрытый телеграм-чат, Видеолекция, Видеоинструкция, Домашнее задание, индивидуальный разбор ДЗ, Вводный урок по InDesign, Макет в портфолио, Бонусный урок."
      keywords={[
        "swiss",
        "графсистема",
        "гранич",
        "granich",
        "швейцария",
        "типографика",
        "сетка",
        "воздух",
      ]}
      ogImage={ogImage}
      ogImageVk={ogImageVK}
      url="https://granich.design/graphic-system-swiss"
    />
    <CourseOffer courseName={"Swiss"} data={data.SwissOffer} />
    <CourseExplanations data={data.SwissExplanations} />
    <CourseAuthors
      numberOfTeachers={"3"}
      data={data.SwissTeam}
      quote="Основное исследование — Андрей Павлушин. Дополнения, запись видеолекции и видеоинструкции — Елизавета Черникова. Дизайн-система, рекомендации и забота — Вадим Гранич."
      text={
        <>
          Швейцарский стиль — графсистема вне времени. Она не привязана к
          трендам, не имеет национальности. Её принципы можно использовать в
          любой отрасли дизайна, для любой аудитории. Поэтому она так важна.
          Многим Swiss кажется слишком сложной. Мы постарались разложить всё по
          полочкам и сделать её понятнее.
        </>
      }
    />
    <MasterClassExample />
    <CoursePortfolio
      dataHeader={data.SwissPortfolioHeader}
      masterClass
      posters={data.SwissPortfolioPosters}
    />
    {/* <CourseReviews dataHeader={data.VHSreviewsHeader} data={data.VHSreviews} masterClass/> */}
    <div id="prices-range-section"></div>
    {data.SwissOffer.courseStatus ? (
      <CoursePriceRange
        formId={`ltForm3153227`}
        valueInput1={`1372632`}
        valueInput2={`1372669`}
        valueInput3={`1372671`}
        valueInput4={`1372674`}
        googleAnaliticsCategory={`Отправка формы Графсистема Swiss`}
        formPostUrl={`https://school.granich.design/pl/lite/block-public/process-html?id=863550509`}
        data={data.SwissPricesRange}
      />
    ) : (
      <Mailing />
    )}
    <EducationQuestions />
  </Layout>
)

export default GraphicSystemSwissPage
