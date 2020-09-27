import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import CourseOffer from '../components/course-page/CourseOffer';
import Header from "../components/Header"
import CourseExplanations from "../components/course-page/CourseExplanations"
import CourseExample from "../components/course-page/CourseExample"
import CourseForWhom from "../components/course-page/CourseForWhom"
import CoursePortfolio from "../components/course-page/CoursePortfolio"
import CourseTrainingPath from "../components/course-page/CourseTrainingPath"
// import CourseCurriculum from "../components/course-page/CourseCurriculum"
import CourseFeatures from "../components/course-page/CourseFeatures"
// import CourseReviews from "../components/course-page/CourseReviews"
import CourseParticipation from "../components/course-page/CourseParticipation"
import CourseCommitment from "../components/course-page/CourseCommitment"
import {graphql} from 'gatsby';
import CourseAnswers from "../components/course-page/CourseAnswers";
import Mailing from '../components/Mailing';
import ogImage from '../assets/images/seo/osoznanny-graph-design.jpg';
import LazyLoad from "react-lazyload";

export const contentfulQuery = graphql`

    query graphDesignQuery {
        offer:   contentfulGranichCourse(courseTitle: {eq: "Осознанный Графдизайн"}) {
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
          courseStream
          courseStatus
          courseType
          coursePrice
          childContentfulGranichCourseCoursePolicyRichTextNode {
            json
          }
        }
        explanations: allContentfulGranichCourseExplanations(filter: {explanationsAttachmentTo: {eq: "Осознанный графдизайн"}}, sort: {fields: [explanationsOrderNumber], order: ASC}) {
          edges {
            node {
              id
              explanationsImage {
                fluid(maxWidth: 450, quality: 100) {
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
        forWhom: allContentfulGranichCourseForWhom(filter: {forWhomAttachmentTo: {eq: "Осознанный графдизайн"}}, sort: {fields: [forWhomOrderNumber], order: ASC}) {
          edges {
            node {
              id
              forWhomImage {
                fluid(maxWidth: 450) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
              forWhomTitle
              forWhomText {
                json
              }

            }
          }
        }
        curriculumHeader: contentfulGranichCourseCurriculumHeader(curriculumHeaderAttachmentTo: {eq: "Осознанный графдизайн"}) {
          curriculumHeaderTitle
          childContentfulGranichCourseCurriculumHeaderCurriculumHeaderSummaryRichTextNode {
            json
          }
          curriculumHeaderInfo {
            json
          }
        }
        curriculum: allContentfulGranichCourseCurriculum(filter: {curriculumAttachmentTo: {eq: "Осознанный графдизайн"}}, sort: {fields: [curriculumOrderNumber], order: ASC}) {
          edges {
            node {
              id
              curriculumAttachmentTo
              curriculumImportantDescr
              curriculumTitle
              curriculumTagName
              curriculumType
              curriculumImportantDescr
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
        features: allContentfulGranichCourseFeatures(filter: {featuresAttachmentTo: {eq: "Осознанный графдизайн"}}, sort: {fields: [featuresOrderNumber], order: ASC}) {
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
        trainingPath: allContentfulGranichMainTrainingPath(filter: {trainingPathAttachmentTo: {eq: "Осознанный графдизайн"}}, sort: {fields: [trainingPathOrderNumber], order: ASC}) {
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
        portfolioHeader: contentfulGranichCoursePortfolioHeader(portfolioHeaderAttachmentTo: {eq: "Осознанный графдизайн"}) {
          portfolioHeaderTitle
          childContentfulGranichCoursePortfolioHeaderPortfolioHeaderSummaryRichTextNode {
            json
          }
          portfolioHeaderInfo {
            json
          }
        }
        portfolioPosters: allContentfulGranichCoursePortfolio(filter: {portfolioAttachmentTo: {eq: "Осознанный графдизайн"} portfolioType: {eq: "Одностраничный"}}, sort: {fields: [portfolioOrderNumber], order: ASC}) {
          edges {
            node {
              portfolioMedia {
                fluid(maxWidth: 800) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
          }
        }
        portfolioMultipage: allContentfulGranichCoursePortfolio(filter: {portfolioAttachmentTo: {eq: "Осознанный графдизайн"} portfolioType: {eq: "Многостраничный"}}, sort: {fields: [portfolioOrderNumber], order: ASC}) {
          edges {
            node {
              portfolioMedia {
                fluid(maxWidth: 1200 ) {
                  ...GatsbyContentfulFluid_withWebp
                  src
                }
                resize(width: 100) {
                  src
                }
              }
              
            }
          }
        }
        reviewsHeader: contentfulGranichCourseReviewsHeader(reviewsHeaderAttachmentTo: {eq: "Осознанный графдизайн"}) {
          reviewsHeaderTitle
          reviewsHeaderLinkTelegram
          reviewsHeaderLinkVk
        }
        reviews: allContentfulGranichCourseReviews(filter: {reviewsAttachmentTo: {eq: "Осознанный графдизайн"}}, sort: {fields: [reviewsOrderNumber], order: ASC}) {
          edges {
            node {
              id
              reviewsImage {
                fluid(maxWidth: 450) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
              reviewsLink
            }
          }
        }
        answers: allContentfulGranichCourseAnswers(filter: {answersAttachmentTo: {eq: "Осознанный графдизайн"}}, sort: {fields: [answersOrderNumber], order: ASC}) {
          edges {
            node {
              id
              answersTagName
              answersTagType
              childContentfulGranichCourseAnswersAnswersFirstColumnRichTextNode {
                json
              }
              childContentfulGranichCourseAnswersAnswersSecondColumnRichTextNode {
                json
              }
            }
          }
        }

      }
      `



const OsoznannyGraphDesignPage = ({data}) => (
  <Layout>
    <Header type={'dark'}/>
    <SEO title="Осознанный Графдизайн"
         description="Осознанный курс по графическому дизайну от Вадима Гранича (Granich). За 2 месяца вы получите упорядоченные знания о графическом дизайне и создадите свое портфолио. А еще изучите Adobe InDesign"
         keywords={['vhs', 'графсистема']}
         ogImage={ogImage}
         url="https://granich.design/osoznanny-graph-design" />
    <div className="section-top-block"></div>
    <CourseOffer data={data.offer}/>
    <CourseExplanations data={data.explanations}/>
    <CourseExample/>
    <CourseForWhom data={data.forWhom}/>
    <CourseCommitment/>
    <CoursePortfolio dataHeader={data.portfolioHeader} posters={data.portfolioPosters} multiPages={data.portfolioMultipage}/>
    
    <CourseTrainingPath data={data.trainingPath}/>
    <CourseCurriculum dataHeader={data.curriculumHeader} data={data.curriculum}/>
    <CourseFeatures data={data.features}/>
    {/* <CourseReviews dataHeader={data.reviewsHeader} data={data.reviews}/> */}
    <div id="participation-section"></div>
    {data.offer.courseStatus ? (
      <CourseParticipation data={data.offer}/>
    ) : (
      <Mailing/>
    )}
    <CourseAnswers data={data.answers} courseStatus={data.offer.courseStatus}/>
    
    


  </Layout>
)

export default OsoznannyGraphDesignPage
