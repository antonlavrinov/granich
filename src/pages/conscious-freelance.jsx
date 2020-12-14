import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import CourseOffer from '../components/course-page/CourseOffer';
import Header from "../components/Header"
// import CourseExplanations from "../components/course-page/CourseExplanations"
// import CourseExample from "../components/course-page/CourseExample"
// // import CourseForWhom from "../components/course-page/CourseForWhom"
// import CoursePortfolio from "../components/course-page/CoursePortfolio"
// import CourseTrainingPath from "../components/course-page/CourseTrainingPath"
import CourseCurriculum from "../components/course-page/CourseCurriculum"
// import CourseFeatures from "../components/course-page/CourseFeatures"
// import CourseReviews from "../components/course-page/CourseReviews"
import CourseParticipation from "../components/course-page/CourseParticipation"
// import CourseCommitment from "../components/course-page/CourseCommitment"
import { graphql } from 'gatsby';
// import CourseAnswers from "../components/course-page/CourseAnswers";
// import Mailing from '../components/Mailing';
// import CourseExplain from '../components/course-page/CourseExplain'
import ogImage from '../assets/images/seo/conscious-freelance.jpg';
import ogImageVK from '../assets/images/seo/vk/conscious-freelance.jpg';
// import CourseIndividualSupport from "../components/course-page/CourseIndividualSupport";
// import CourseTimetable from "../components/course-page/CourseTimetable";
// import CourseAftermath from "../components/course-page/CourseAftermath"
// import CourseOpportunities from "../components/course-page/CourseOpportunities";
// import CoursePaymentChoices from "../components/course-page/CoursePaymentChoices";
// import CourseBanner from "../components/course-page/CourseBanner";
import CourseForWhom from "../components/course-page/freelance/ForWhom";
import CourseFeatures from "../components/course-page/CourseFeatures";
import FreelanceHardWork from "../components/course-page/freelance/FreelanceHardWork";
import CourseFreelanceBanner from "../components/course-page/freelance/CourseFreelanceBanner";
import CoursePaymentChoices from "../components/course-page/CoursePaymentChoices";

export const contentfulQuery = graphql`

    query freelanceQuery {
        offer:   contentfulGranichCourse(courseTitle: {eq: "Осознанный Фриланс"}) {
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

        curriculumHeader: contentfulGranichCourseCurriculumHeader(curriculumHeaderAttachmentTo: {eq: "Осознанный Фриланс"}) {
          curriculumHeaderTitle
          childContentfulGranichCourseCurriculumHeaderCurriculumHeaderSummaryRichTextNode {
            json
          }
          curriculumHeaderInfo {
            json
          }
        }
        curriculum: allContentfulGranichCourseCurriculum(filter: {curriculumAttachmentTo: {eq: "Осознанный Фриланс"}}, sort: {fields: [curriculumOrderNumber], order: ASC}) {
          edges {
            node {
              id
              curriculumAttachmentTo
              curriculumImportantDescr
              childContentfulGranichCourseCurriculumCurriculumTitleWithAssetRichTextNode {
                json
              }
              curriculumTagName
              curriculumType
              curriculumImportantDescr
              curriculumColumnsType
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
        features: allContentfulGranichCourseFeatures(filter: {featuresAttachmentTo: {eq: "Осознанный Фриланс"}}, sort: {fields: [featuresOrderNumber], order: ASC}) {
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



      }
      `



const OsoznannyFreelancePage = ({ data }) => {

  return (
    <Layout>
      <Header type={'dark'} />
      <SEO title="Осознанный Фриланс"
        description="Курс Осознанный Фриланс от Вадима Гранича. Онлайн-школа Granich."
        socialDescription="Курс для творцов, которые хотят преуспеть на фрилансе"
        keywords={['фриланс', 'осознанный', 'гранич', 'freelance', 'granich', 'conscious']}
        ogImage={ogImage}
        ogImageVk={ogImageVK}
        url="https://granich.design/conscious-freelance" />
      <div className="section-top-block"></div>
      <CourseOffer data={data.offer} />

      <CourseForWhom />

      <CourseCurriculum compressedHeader dataHeader={data.curriculumHeader} data={data.curriculum} />
      <CourseFeatures title="Особенности курса" data={data.features} />
      <FreelanceHardWork />
      <div id="participation-section"></div>
      <CourseParticipation
        data={data.offer}
        formId={`ltForm5127304`}
        formAction={`https://school.granich.design/pl/lite/block-public/process-html?id=935677483`}
        googleAnaliticsCategory={`Отправка формы Осознанный Фриланс`}
        additionalTags={['Только 6 учеников']}
      />
      <CoursePaymentChoices paymentsAvailable={{ 'credit': true, 'corporate': false, 'abroad': false }} />
      <CourseFreelanceBanner />


    </Layout>
  )
}




export default OsoznannyFreelancePage
