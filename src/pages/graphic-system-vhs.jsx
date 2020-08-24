import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import CourseOffer from '../components/course-page/CourseOffer';
import Header from "../components/Header"
import CourseExplanations from "../components/course-page/CourseExplanations"
import CoursePortfolio from "../components/course-page/CoursePortfolio"
import CourseReviews from "../components/course-page/CourseReviews"
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
        VHSportfolioPosters: allContentfulGranichCoursePortfolio(filter: {portfolioAttachmentTo: {eq: "Графсистема VHS"} portfolioType: {eq: "Одностраничный"}}, sort: {fields: [portfolioOrderNumber], order: ASC}) {
          edges {
            node {
              portfolioMedia {
                id
              }
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
    <CourseExplanations/>
    <CoursePortfolio posters={data.VHSportfolioPosters} multiPages={data.portfolioMultipage}/>
    <CourseReviews/>

  </Layout>
)

export default GraphicSystemVhsPage
