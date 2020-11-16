import React, {useState} from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import {graphql} from 'gatsby'
import Offer from '../components/Offer';
import Courses from "../components/Courses"
import Mailing from "../components/Mailing";
import Manifest from "../components/Manifest";
import Header from '../components/Header';
import PreCoursePreparation from "../components/PreCoursePreparation"
import OurTeam from "../components/OurTeam"
import ForGraduates from "../components/ForGraduates";
// import ogImage from '../assets/images/seo/index.jpg';




export const contentfulQuery = graphql`
    query contentfulQuery {
        header:   allContentfulGranichMainHeader {
          edges {
            node {
              headerImage {
                fluid(maxWidth: 2729) {
                  ...GatsbyContentfulFluid_withWebp
                }
                
              }
              headerImageMobile {
                fluid(maxWidth: 575) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
              headerSubtitleImage {
                fluid(maxWidth: 50) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
              headerSubtitle_01
              headerSubtitle_02
              headerSubtitle_03
              headerTitle
            }
          }
        }
        courseCards: allContentfulGranichCourse(sort: {fields: [courseOrderNumber], order: ASC}) {
          edges {
            node {
              id
              courseStatus
              courseStart
              courseDescr
              courseDuration
              coursePreviewImage {
                fluid(maxWidth: 450) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
              }
              courseTags
              courseTeachers {
                id
                fluid(maxWidth: 100) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
              courseTitle
              courseType
              courseSlug
              courseTypeDevelopment
              courseTypeEmpty
            }
          }
        },
        contentCardsNew: allContentfulGranichMainContentCard(sort: {fields: [contentOrderDecimalNumberNew], order: DESC}) {
            nodes {
              contentDescription {
                json
              }
              contentTags
              contentTitle
              contentImage {
                fluid(maxWidth: 350) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
              }
              contentType
              contentSlug
              contentPDF {
                file { 
                  url 
                }
              }
              contentYoutubeVideoLink
              contentYoutubeTiming
              contentLinkPinterest
              contentLinkBehance
              contentLinkMedium
            }
        },
        
        contentCardsRecommended: allContentfulGranichMainContentCard(sort: {fields: [contentOrderDecimalNumber], order: DESC}) {
            nodes {
              contentDescription {
                json
              }
              contentTags
              contentTitle
              contentImage {
                fluid(maxWidth: 350) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
              }
              contentType
              contentSlug
              contentYoutubeVideoLink
              contentPDF {
                file { 
                  url 
                }
              }
              contentLinkPinterest
              contentLinkBehance
              contentLinkMedium
              contentYoutubeTiming
            }
        },
        team: allContentfulGranichMainTeachers(sort: {fields: [teacherOrderNumber], order: ASC}) {
          edges {
            node {
              id
              teacherDescr {
                json
              }
              teacherEmail
              teacherImage {
                fluid(maxWidth: 250) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
              teacherName
              teacherSocialInstagram
              teacherSocialPinterest
              teacherSocialTelegram
              teacherSocialBehance
              teacherSocialVK
              teacherSocialsOrder
              teacherCategory
              
            }
          }

        }
    }
`


//header or offer seems to be a problem

const IndexPage = ({data}) => {
  const [mailingActive, setMailingActive] = useState(true)

  const toggleMailingActive = (boolean) => {
    setMailingActive(boolean)
  }
  return (
    <Layout>
      
      <Header/>
      <SEO title="Онлайн-школа Granich"
          description="Делаем из любви, а не страха. Курсы с осознанным подходом. Выточенно. Интенсивно. С дедлайнами."
          keywords={['школа', 'осознанность', 'фриланс', 'графический', 'дизайн', 'granich', 'гранич', 'графдизайн', 'курсы']}
          url="https://granich.design/" />
      <Offer data={data.header}/>
      <Courses data={data.courseCards} toggleMailingActive={toggleMailingActive} />

      <Manifest/>
      {mailingActive && <Mailing/>}
      <div style={{height: '0.2vw', marginTop: '0.5vw'}} id="content"></div>
      <PreCoursePreparation dataRecommended={data.contentCardsRecommended.nodes} dataNew={data.contentCardsNew.nodes}/>
      <ForGraduates/>
      <OurTeam data={data.team}/>

    </Layout>
  )
}


export default IndexPage
