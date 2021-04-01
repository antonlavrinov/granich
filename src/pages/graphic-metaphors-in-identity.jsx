import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import CourseOffer from "../components/course-page/CourseOffer"
import Header from "../components/global/header"
// import CourseCurriculum from "../components/course-page/CourseCurriculum"
import CourseParticipation from "../components/course-page/CourseParticipation"
import { graphql } from "gatsby"
import ogImage from "../assets/images/seo/conscious-freelance.jpg"
import ogImageVK from "../assets/images/seo/vk/conscious-freelance.jpg"
import VideoPresentationOffer from "../components/metaphors-in-identity-page/video-presentation"
import Timetable from "../components/metaphors-in-identity-page/timetable"
// import CourseForWhom from "../components/course-page/freelance/ForWhom";
// import CourseFeatures from "../components/course-page/CourseFeatures";
// import FreelanceHardWork from "../components/course-page/freelance/FreelanceHardWork";
// import CourseFreelanceBanner from "../components/course-page/freelance/CourseFreelanceBanner";
// import CoursePaymentChoices from "../components/course-page/payment-choices/CoursePaymentChoices";
// import Combination from "../components/course-page/freelance/Combination";
// import FreelanceOffer from "../components/course-page/freelance/FreelanceOffer";
// import FreelanceBefore from "../components/course-page/freelance/FreelanceBefore"
// import FreelanceAfter from "../components/course-page/freelance/FreelanceAfter"
// import FreelanceProblem from "../components/course-page/freelance/FreelanceProblem"
// import FreelanceSkills from "../components/course-page/freelance/FreelanceSkills"
// import FreelanceParticipation from "../components/course-page/freelance/FreelanceParticipation"

export const contentfulQuery = graphql`
  query graphicMetaphorsQuery {
    offer: contentfulGranichCourse(
      courseTitle: { eq: "Графические метафоры как путь в айдентику" }
    ) {
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
  }
`

const GraphicMetaphorsInIdentityPage = ({ data }) => {
  return (
    <Layout>
      <Header type={"dark"} />
      <SEO
        title="Графические метафоры как путь в айдентику"
        description="Курс Графические метафоры как путь в айдентику от Вадима Гранича. Онлайн-школа Granich."
        socialDescription="Курс для творцов, которые хотят преуспеть на фрилансе"
        keywords={[
          "фриланс",
          "осознанный",
          "гранич",
          "freelance",
          "granich",
          "conscious",
        ]}
        ogImage={ogImage}
        ogImageVk={ogImageVK}
        url="https://granich.design/conscious-freelance"
      />
      <div className="section-top-block"></div>
      {/* <CourseOffer data={data.offer} /> */}
      <VideoPresentationOffer data={data.offer} />
      <Timetable />
      <CourseParticipation
        policy={false}
        data={data.offer}
        formId={`ltForm6865073`}
        formAction={`https://school.granich.design/pl/lite/block-public/process-html?id=855573236`}
        googleAnaliticsCategory={`Отправка формы Осознанный Графдизайн`}
        additionalTags={["Интенсивный", "С нуля"]}
      />
      {/* <FreelanceOffer /> */}

      {/* <FreelanceHardWork />
      <FreelanceSkills /> */}
      {/* <div id="participation-section"></div> */}
      {/* <FreelanceParticipation courseData={data.offer} /> */}
    </Layout>
  )
}

export default GraphicMetaphorsInIdentityPage
