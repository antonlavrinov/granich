import React, {useState, useEffect} from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import CourseOffer from '../components/course-page/CourseOffer';
import Header from "../components/Header"
// import CourseExplanations from "../components/course-page/CourseExplanations"
import CourseExample from "../components/course-page/CourseExample"
// import CourseForWhom from "../components/course-page/CourseForWhom"
import CoursePortfolio from "../components/course-page/CoursePortfolio"
import CourseTrainingPath from "../components/course-page/CourseTrainingPath"
import CourseCurriculum from "../components/course-page/CourseCurriculum"
import CourseFeatures from "../components/course-page/CourseFeatures"
import CourseReviews from "../components/course-page/CourseReviews"
import CourseParticipation from "../components/course-page/CourseParticipation"
// import CourseCommitment from "../components/course-page/CourseCommitment"
import {graphql} from 'gatsby';
import CourseAnswers from "../components/course-page/CourseAnswers";
// import Mailing from '../components/Mailing';
import CourseExplain from '../components/course-page/CourseExplain'
import ogImage from '../assets/images/seo/conscious-graphic-design-min.jpg';
import ogImageVK from '../assets/images/seo/vk/conscious-graphic-design.jpg';
import CourseIndividualSupport from "../components/course-page/CourseIndividualSupport";
import CourseTimetable from "../components/course-page/CourseTimetable";
import CourseAftermath from "../components/course-page/CourseAftermath"
import CourseOpportunities from "../components/course-page/CourseOpportunities";
import CourseHardWork from "../components/course-page/CourseHardWork";
import CoursePaymentChoices from "../components/course-page/CoursePaymentChoices";
import CourseBanner from "../components/course-page/CourseBanner";

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
          courseStartAndEnd
          courseStream
          courseStatus
          courseType
          coursePrice
          courseTags
          coursePostersCollection {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
            resize(width: 600, quality: 100) {
              src
            }
          }
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



const OsoznannyGraphDesignPage = ({data}) => {
  const [deckVisibility, setDeckVisibility] = useState(false)
  useEffect(() => {
      let timer1 = setTimeout(() => setDeckVisibility(true), 800)
      return () => {
        clearTimeout(timer1)
      }
      
  }, [])
  return (
  <Layout>
      <Header type={'dark'}/>
      <SEO title="Осознанный Графдизайн"
          description="Курс по графическому дизайну, построенный на авторской дизайн-системе. Вы получите твёрдую базу и научитесь аргументировать свои макеты"
          keywords={['vhs', 'графсистема']}
          ogImage={ogImage}
          ogImageVk={ogImageVK}
          url="https://granich.design/conscious-graphic-design" />
      <div className="section-top-block"></div>
      <CourseOffer allowDeck={true} data={data.offer} deckVisibility={deckVisibility}/>
      {/* <CourseExplanations data={data.explanations}/> */}
      <CourseExample title={`Для кого этот курс?`}/> 
      <CourseExplain/>
      <CourseOpportunities/>
      <CourseAftermath/>
      

      {/* <CourseForWhom data={data.forWhom}/> */}
      {/* <CourseCommitment/> */}
      <CourseTimetable/>
      <CourseTrainingPath data={data.trainingPath}/>
      
      <CoursePortfolio dataHeader={data.portfolioHeader} posters={data.portfolioPosters} multiPages={data.portfolioMultipage}/>
      
      
      <CourseCurriculum dataHeader={data.curriculumHeader} data={data.curriculum}/>
      <CourseFeatures data={data.features}/>
      <CourseReviews dataHeader={data.reviewsHeader} data={data.reviews}/>
      
      {/* {data.offer.courseStatus ? (
        <CourseParticipation 
                      data={data.offer}
                      formId={`ltForm6865073`}
                      formAction={`https://school.granich.design/pl/lite/block-public/process-html?id=855573236`}/>
      ) : (
        <Mailing/>
      )} */}
      <CourseHardWork/>
      <div id="participation-section"></div>
      <CourseParticipation 
              data={data.offer}
              formId={`ltForm6865073`}
              formAction={`https://school.granich.design/pl/lite/block-public/process-html?id=855573236`}
              googleAnaliticsCategory={`Отправка формы Осознанный Графдизайн`}/>
      <CoursePaymentChoices/>
      <CourseIndividualSupport/>
      <CourseBanner/>
      <CourseAnswers data={data.answers} courseStatus={data.offer.courseStatus}/>
      
      


    </Layout>
  )
}

  


export default OsoznannyGraphDesignPage
