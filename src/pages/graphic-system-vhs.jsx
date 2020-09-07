import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import CourseOffer from '../components/course-page/CourseOffer';
import Header from "../components/Header"
import CourseExplanations from "../components/course-page/CourseExplanations"
import CoursePortfolio from "../components/course-page/CoursePortfolio"
import CourseReviews from "../components/course-page/CourseReviews"
import CoursePriceRange from "../components/course-page/CoursePriceRange"
import {graphql} from 'gatsby';
import EducationQuestions from "../components/EducationQuestions";
import CourseAuthors from "../components/course-page/CourseAuthors";
import MasterClassExample from '../components/course-page/MasterClassExample';



export const contentfulQuery = graphql`
    query graphicSystemVHSQuery {
        VHSoffer:   contentfulGranichCourse(courseTitle: {eq: "Графсистема VHS"}) {

                courseTags
                courseMainTitle {
                    json
                }
                courseDescr
                courseStatus
                courseType
                courseMainImage {
                    fluid(maxWidth: 850, quality: 100) {
                    ...GatsbyContentfulFluid
                    }
                }
                

        }
        VHSexplanations: allContentfulGranichCourseExplanations(filter: {explanationsAttachmentTo: {eq: "Графсистема VHS"}}, sort: {fields: [explanationsOrderNumber], order: ASC}) {
          edges {
            node {
              id
              explanationsImage {
                fluid(maxWidth: 600) {
                  ...GatsbyContentfulFluid
                }
              }
              explanationsTitle
              explanationsText {
                json
              }

            }
          }
        }
        VHSteam: allContentfulGranichMainTeachers(filter: {teacherName: {in: ["Вадим Гранич", "Елизавета Черникова"]}}, sort: {fields: [teacherOrderNumber], order: ASC}) {
          edges {
            node {
              id
              teacherDescr {
                json
              }
              teacherEmail
              teacherImage {
                fluid(maxWidth: 250) {
                  ...GatsbyContentfulFluid
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
        VHSportfolioPosters: allContentfulGranichCoursePortfolio(filter: {portfolioAttachmentTo: {eq: "Графсистема VHS"} portfolioType: {eq: "Одностраничный"}}, sort: {fields: [portfolioOrderNumber], order: ASC}) {
          edges {
            node {
              id
              portfolioMedia {
                fluid(maxWidth: 800) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
        VHSreviews: allContentfulGranichCourseReviews(filter: {reviewsAttachmentTo: {eq: "Графсистема VHS"}}, sort: {fields: [reviewsOrderNumber], order: ASC}) {
          edges {
            node {
              id
              reviewsImage {
                fluid(maxWidth: 600) {
                  ...GatsbyContentfulFluid
                }
              }
              reviewsLink
            }
          }
        }
        VHSPricesRange : allContentfulGranichCoursePricesRange(filter: {pricesAttachmentTo: {eq: "Графсистема VHS"}}, sort: {fields: [pricesOrderNumber], order: ASC}) {
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



const GraphicSystemVhsPage = ({data}) => (
  <Layout>
    {/* <Header type={'dark'}/> */}
    <div className="section-top-block"></div>
    <SEO title="Графсистема VHS" />
    {/* <CourseOffer data={data.VHSoffer}/>
    <CourseExplanations data={data.VHSexplanations}/>
    <CourseAuthors data={data.VHSteam}/>
    <MasterClassExample/>
    <CoursePortfolio masterClass posters={data.VHSportfolioPosters}/>
    <CourseReviews data={data.VHSreviews} masterClass/>
    <CoursePriceRange data={data.VHSPricesRange}/> */}
    {/* <EducationQuestions/> */}

  </Layout>
)

export default GraphicSystemVhsPage
