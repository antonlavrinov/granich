import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
// import CourseOffer from '../components/course-page/CourseOffer';
import Header from "../components/Header"
import CourseCurriculum from "../components/course-page/CourseCurriculum"
import CourseParticipation from "../components/course-page/CourseParticipation"
import { graphql } from 'gatsby';
import ogImage from '../assets/images/seo/conscious-freelance.jpg';
import ogImageVK from '../assets/images/seo/vk/conscious-freelance.jpg';
// import CourseForWhom from "../components/course-page/freelance/ForWhom";
import CourseFeatures from "../components/course-page/CourseFeatures";
import FreelanceHardWork from "../components/course-page/freelance/FreelanceHardWork";
import CourseFreelanceBanner from "../components/course-page/freelance/CourseFreelanceBanner";
import CoursePaymentChoices from "../components/course-page/payment-choices/CoursePaymentChoices";
import Combination from "../components/course-page/freelance/Combination";
import FreelanceOffer from "../components/course-page/freelance/FreelanceOffer";
import FreelanceBefore from "../components/course-page/freelance/FreelanceBefore"
import FreelanceAfter from "../components/course-page/freelance/FreelanceAfter"
import FreelanceProblem from "../components/course-page/freelance/FreelanceProblem"
import FreelanceSkills from "../components/course-page/freelance/FreelanceSkills"
import FreelanceParticipation from "../components/course-page/freelance/FreelanceParticipation"

export const contentfulQuery = graphql`

    query freelanceQuery {
        offer:   contentfulGranichCourse(courseTitle: {eq: "Осознанный Фриланс"}) {
          courseMainImage {
            fluid(maxWidth: 850, quality: 90) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          courseTitle
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
      {/* <CourseOffer data={data.offer} /> */}
      <FreelanceOffer />
      <FreelanceBefore />
      <FreelanceAfter />
      <FreelanceProblem />
      {/* <CourseForWhom /> */}
      <Combination />
      <CourseCurriculum
        compressedHeader
        dataHeader={data.curriculumHeader}
        data={data.curriculum} />
      {/* <CourseTimetableFreelance /> */}
      <CourseFeatures title="Особенности курса" data={data.features} />
      <FreelanceHardWork />
      <FreelanceSkills />
      <FreelanceParticipation courseData={data.offer} />
      {/* <div id="participation-section"></div>
      <CourseParticipation
        data={data.offer}
        formId={`ltForm5127304`}
        formAction={`https://school.granich.design/pl/lite/block-public/process-html?id=935677483`}
        googleAnaliticsCategory={`Отправка формы Осознанный Фриланс`}
        additionalTags={['Только 6 учеников']}
        telegram
        additionalComponent
      /> */}
      {/* <CoursePaymentChoices paymentsAvailable={{ 'credit': true, 'corporate': false, 'abroad': false }} /> */}
      <CourseFreelanceBanner />


    </Layout>
  )
}




export default OsoznannyFreelancePage
