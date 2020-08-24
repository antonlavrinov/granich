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
import CourseCurriculum from "../components/Course-page/CourseCurriculum"
import CourseFeatures from "../components/Course-page/CourseFeatures"
import CourseReviews from "../components/Course-page/CourseReviews"
import CourseParticipation from "../components/course-page/CourseParticipation"
import CourseCommitment from "../components/course-page/CourseCommitment"
import {graphql} from 'gatsby';
import CourseAnswers from "../components/course-page/CourseAnswers";



export const contentfulQuery = graphql`
    query graphDesignQuery {
        offer:   allContentfulGranichCourse(filter: {courseTitle: {eq: "Осознанный графдизайн"}}) {
          edges {
            node {
              courseMainImage {
                fluid(maxWidth: 850, quality: 100) {
                  ...GatsbyContentfulFluid
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
              coursePolicy {
                json
              }
            }
          }
        }
        answers: allContentfulGranichCourseAnswers(filter: {AnswersAttachmentTo: {eq: "Осознанный графдизайн"}}, sort: {fields: [AnswersOrderNumber], order: ASC}) {
          edges {
            node {
              AnswersTagName
              AnswersTagType
              childContentfulGranichCourseAnswersAnswersFirstColumnRichTextNode {
                json
              }
              childContentfulGranichCourseAnswersAnswersSecondColumnRichTextNode {
                json
              }
            }
          }
        }
        curriculum: allContentfulGranichCourseCurriculum(filter: {curriculumAttachmentTo: {eq: "Осознанный графдизайн"}}, sort: {fields: [curriculumOrderNumber], order: ASC}) {
          edges {
            node {
              curriculumAttachmentTo
              curriculumImportantDescr
              curriculumImportantText {
                json
              }
              curriculumFirstColumn {
                json
              }
              curriculumFourthColumn {
                json
              }
              curriculumTitle
              curriculumTagName
              curriculumThirdColumn {
                json
              }
              curriculumSecondColumn {
                json
              }
              curriculumType
              curriculumImportantDescr
            }
          }
        }
        trainingPath: allContentfulGranichMainTrainingPath(filter: {trainingPathAttachmentTo: {eq: "Осознанный графдизайн"}}, sort: {fields: [trainingPathOrderNumber], order: ASC}) {
          edges {
            node {
              id
              trainingPathImage {
                fluid(maxWidth: 1200) {
                  ...GatsbyContentfulFluid
                }
              }
              trainingPathTitle
              trainingPathText {
                json
              }
              
            }
          }
        }
        portfolioPosters: allContentfulGranichCoursePortfolio(filter: {portfolioAttachmentTo: {eq: "Осознанный графдизайн"} portfolioType: {eq: "Одностраничный"}}, sort: {fields: [portfolioOrderNumber], order: ASC}) {
          edges {
            node {
              portfolioMedia {
                fluid(maxWidth: 800) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
        portfolioMultipage: allContentfulGranichCoursePortfolio(filter: {portfolioAttachmentTo: {eq: "Осознанный графдизайн"} portfolioType: {eq: "Многостраничный"}}, sort: {fields: [portfolioOrderNumber], order: ASC}) {
          edges {
            node {
              portfolioMedia {
                fluid(maxWidth: 800) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
      `



const OsoznannyGraphDesignPage = ({data}) => (
  <Layout>
    <Header type={'dark'}/>
    <SEO title="Осознанный графдизайн" />
    <CourseOffer data={data.offer}/>
    <CourseExplanations/>
    <CourseExample/>
    <CourseCommitment/>
    <CourseForWhom/>
    <CoursePortfolio posters={data.portfolioPosters} multiPages={data.portfolioMultipage}/>
    <CourseTrainingPath data={data.trainingPath}/>
    <CourseCurriculum data={data.curriculum}/>
    <CourseFeatures/>
    <CourseReviews/>
    <CourseParticipation data={data.offer}/>
    <CourseAnswers data={data.answers}/>

  </Layout>
)

export default OsoznannyGraphDesignPage
