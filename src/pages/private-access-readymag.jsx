import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import CourseOffer from '../components/course-page/CourseOffer';
import Header from "../components/Header"
// import CourseCurriculum from "../components/course-page/CourseCurriculum"
// import CourseParticipation from "../components/course-page/CourseParticipation"
import { graphql } from 'gatsby';
import ogImage from '../assets/images/seo/conscious-freelance.jpg';
import ogImageVK from '../assets/images/seo/vk/conscious-freelance.jpg';
// import CourseForWhom from "../components/course-page/freelance/ForWhom";
// import CourseFeatures from "../components/course-page/CourseFeatures";
// import FreelanceHardWork from "../components/course-page/freelance/FreelanceHardWork";
// import CourseFreelanceBanner from "../components/course-page/freelance/CourseFreelanceBanner";
// import CoursePaymentChoices from "../components/course-page/CoursePaymentChoices";

export const contentfulQuery = graphql`

    query readymagQuery {
        offer:   contentfulGranichCourse(courseTitle: {eq: "Осознанный Медиадизайн"}) {
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



const ReadymagPage = ({ data }) => {

  return (
    <Layout>
      <Header type={'dark'} />
      <SEO title="Осознанный Медиадизайн"
        description="Курс Осознанный Фриланс от Вадима Гранича. Онлайн-школа Granich."
        socialDescription="Курс для творцов, которые хотят преуспеть на фрилансе"
        keywords={['фриланс', 'осознанный', 'гранич', 'freelance', 'granich', 'conscious']}
        ogImage={ogImage}
        ogImageVk={ogImageVK}
        url="https://granich.design/readymag" />
      <div className="section-top-block"></div>
      <CourseOffer data={data.offer} />

      {/* <CourseForWhom /> */}

      {/* <CourseCurriculum compressedHeader dataHeader={data.curriculumHeader} data={data.curriculum} /> */}
      {/* <CourseFeatures title="Особенности курса" data={data.features} /> */}
      {/* <FreelanceHardWork /> */}
      <div id="participation-section"></div>
      {/* <CourseParticipation
                data={data.offer}
                formId={`ltForm5127304`}
                formAction={`https://school.granich.design/pl/lite/block-public/process-html?id=935677483`}
                googleAnaliticsCategory={`Отправка формы Осознанный Фриланс`}
                additionalTags={['Только 6 учеников']}
            /> */}
      {/* <CoursePaymentChoices paymentsAvailable={{ 'credit': true, 'corporate': false, 'abroad': false }} /> */}
      {/* <CourseFreelanceBanner /> */}


    </Layout>
  )
}




export default ReadymagPage
