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
import ogImage from '../assets/images/seo/index.jpg';



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
                  ...GatsbyContentfulFluid_withWebp
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
        contentCardsNew: allContentfulGranichMainContentCard(sort: {fields: [createdAt], order: DESC}) {
            nodes {
              contentDescription {
                json
              }
              contentTags
              contentTitle
              contentImage {
                fluid(maxWidth: 350) {
                  ...GatsbyContentfulFluid_withWebp
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
        
        contentCardsRecommended: allContentfulGranichMainContentCard(sort: {fields: [contentOrderNumber], order: DESC}) {
            nodes {
              contentDescription {
                json
              }
              contentTags
              contentTitle
              contentImage {
                fluid(maxWidth: 350) {
                  ...GatsbyContentfulFluid_withWebp
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
          description="Онлайн-школа Granich"
          keywords={['vhs', 'графсистема']}
          ogImage={ogImage}
          url="https://anton-dev.ru/" />
      <Offer data={data.header}/>
      <Courses data={data.courseCards} toggleMailingActive={toggleMailingActive} />

      {/* <Manifest/> */}
      {mailingActive && <Mailing/>}
      <div className="content"></div>
      <PreCoursePreparation dataRecommended={data.contentCardsRecommended.nodes} dataNew={data.contentCardsNew.nodes}/>
      <OurTeam data={data.team}/> 

    </Layout>
  )
}


export default IndexPage
