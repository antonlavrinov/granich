import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import CourseOffer from '../components/course-page/CourseOffer';
import Header from "../components/Header"
import CourseExplanations from "../components/course-page/CourseExplanations"
import CoursePortfolio from "../components/course-page/CoursePortfolio"
// import CourseReviews from "../components/course-page/CourseReviews"
import CoursePriceRange from "../components/course-page/CoursePriceRange"
import {graphql} from 'gatsby';
import EducationQuestions from "../components/EducationQuestions";
import CourseAuthors from "../components/course-page/CourseAuthors";
import MasterClassExample from '../components/course-page/MasterClassExample';
import Mailing from '../components/Mailing';
import ogImage from '../assets/images/seo/graphic-system-vhs.jpg';


export const contentfulQuery = graphql`
    query graphicSystemSwissQuery {
        SwissOffer:   contentfulGranichCourse(courseTitle: {eq: "Графсистема Swiss"}) {

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
        SwissExplanations: allContentfulGranichCourseExplanations(filter: {explanationsAttachmentTo: {eq: "Графсистема Swiss"}}, sort: {fields: [explanationsOrderNumber], order: ASC}) {
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
        SwissTeam: allContentfulGranichMainTeachers(filter: {teacherName: {in: ["Вадим Гранич", "Елизавета Черникова"]}}, sort: {fields: [teacherOrderNumber], order: ASC}) {
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
        SwissPortfolioHeader: contentfulGranichCoursePortfolioHeader(portfolioHeaderAttachmentTo: {eq: "Графсистема Swiss"}) {
          portfolioHeaderTitle
          childContentfulGranichCoursePortfolioHeaderPortfolioHeaderSummaryRichTextNode {
            json
          }
          portfolioHeaderInfo {
            json
          }
        }
        SwissPortfolioPosters: allContentfulGranichCoursePortfolio(filter: {portfolioAttachmentTo: {eq: "Графсистема Swiss"} portfolioType: {eq: "Одностраничный"}}, sort: {fields: [portfolioOrderNumber], order: ASC}) {
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
        SwissReviewsHeader: contentfulGranichCourseReviewsHeader(reviewsHeaderAttachmentTo: {eq: "Графсистема Swiss"}) {
          reviewsHeaderTitle
          reviewsHeaderLinkTelegram
          reviewsHeaderLinkVk
        }
        SwissReviews: allContentfulGranichCourseReviews(filter: {reviewsAttachmentTo: {eq: "Графсистема Swiss"}}, sort: {fields: [reviewsOrderNumber], order: ASC}) {
          edges {
            node {
              id
              reviewsImage {
                fluid(maxWidth: 600) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
              reviewsLink
            }
          }
        }
        SwissPricesRange : allContentfulGranichCoursePricesRange(filter: {pricesAttachmentTo: {eq: "Графсистема Swiss"}}, sort: {fields: [pricesOrderNumber], order: ASC}) {
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



const GraphicSystemSwissPage = ({data}) => (
  <Layout>
    <Header type={'dark'}/>
    <div className="section-top-block"></div>
    <SEO title="Графсистема Swiss"
         description="Мастер-класс по графической системе Swiss"
         keywords={['vhs', 'графсистема']}
         ogImage={ogImage}
         url="https://granich.design/graphic-system-swiss" />
    <CourseOffer data={data.SwissOffer}/>
    <CourseExplanations data={data.SwissExplanations}/>
    <CourseAuthors data={data.SwissTeam}/>
    <MasterClassExample/>
    <CoursePortfolio dataHeader={data.SwissPortfolioHeader} masterClass posters={data.SwissPortfolioPosters}/>
    {/* <CourseReviews dataHeader={data.VHSreviewsHeader} data={data.VHSreviews} masterClass/> */}
    <div id="prices-range-section"></div>
    {data.SwissOffer.courseStatus ? (
      <CoursePriceRange data={data.SwissPricesRange}/>
    ) : (
      <Mailing/>
    )}
    <EducationQuestions/>

  </Layout>
)

export default GraphicSystemSwissPage