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



export const contentfulQuery = graphql`
    query graphicSystemVHSQuery {
        VHSoffer:   allContentfulGranichCourse(filter: {courseTitle: {eq: "Графсистема VHS"}}) {
          edges {
            node {
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
          }
        }
        explanations: allContentfulGranichCourseExplanations(filter: {explanationsAttachmentTo: {eq: "Осознанный графдизайн"}}, sort: {fields: [explanationsOrderNumber], order: ASC}) {
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
        VHSportfolioPosters: allContentfulGranichCoursePortfolio(filter: {portfolioAttachmentTo: {eq: "Графсистема VHS"} portfolioType: {eq: "Одностраничный"}}, sort: {fields: [portfolioOrderNumber], order: ASC}) {
          edges {
            node {
              portfolioMedia {
                id
              }
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
    <Header type={'dark'}/>
    <SEO title="Графсистема VHS" />
    <CourseOffer data={data.VHSoffer}/>
    {/* <CourseExplanations data={data.explanations}/> */}
    <CoursePortfolio posters={data.VHSportfolioPosters} multiPages={data.portfolioMultipage}/>
    {/* <CourseReviews/> */}
    <CoursePriceRange data={data.VHSPricesRange}/>

  </Layout>
)

export default GraphicSystemVhsPage
