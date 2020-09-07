import React from "react"

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




export const contentfulQuery = graphql`
    query contentfulQuery {
        header:   allContentfulGranichMainHeader {
          edges {
            node {
              headerImage {
                fluid(maxWidth: 2729, quality: 100) {
                  ...GatsbyContentfulFluid
                }
              }
              headerImageMobile {
                fluid(maxWidth: 575, quality: 100) {
                  ...GatsbyContentfulFluid
                }
              }
              headerSubtitleImage {
                fluid(maxWidth: 50, quality: 100) {
                  ...GatsbyContentfulFluid
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
              courseStatus
              courseStart
              courseDescr
              courseDuration
              coursePreviewImage {
                fluid(maxWidth: 600) {
                  ...GatsbyContentfulFluid
                }
              }
              courseTags
              courseTeachers {
                id
                fluid(maxWidth: 100) {
                  ...GatsbyContentfulFluid
                }
              }
              courseTitle
              courseType
              courseSlug
            }
          }
        },
        contentCardsNew: allContentfulGranichMainContentCard(sort: {fields: [createdAt], order: DESC}) {
          edges {
            node {
              contentDescription {
                json
              }
              contentTags
              contentTitle
              contentImage {
                fluid(maxWidth: 600) {
                  ...GatsbyContentfulFluid
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
              contentLinkPinterest
              contentLinkBehance
              contentLinkYoutube
              contentLinkMedium
            }
          }
        },
        contentCardsRecommended: allContentfulGranichMainContentCard(sort: {fields: [contentOrderNumber], order: DESC}) {
          edges {
            node {
              contentDescription {
                json
              }
              contentTags
              contentTitle
              contentImage {
                fluid(maxWidth: 600) {
                  ...GatsbyContentfulFluid
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
              contentLinkYoutube
              contentLinkMedium
            }
          }
        },
        team: allContentfulGranichMainTeachers(sort: {fields: [teacherOrderNumber], order: ASC}) {
          edges {
            node {
              teacherDescr {
                json
              }
              teacherEmail
              teacherImage {
                fluid(maxWidth: 250) {
                  ...GatsbyContentfulFluid
                }
              }
              teacherName
              teacherSocialInstagram
              teacherSocialPinterest
              teacherSocialTelegram
              teacherSocialVK
              teacherSocialsOrder
              
            }
          }
        }
      
        
    }
`




const IndexPage = ({data}) => (
  <Layout>
    <Header/>
    <SEO title="Онлайн-школа Granich" />
    {/* <Offer data={data.header}/> */}
    <Courses data={data.courseCards}  />
    <Manifest/>
    <Mailing/>
    {/* <PreCoursePreparation dataRecommended={data.contentCardsRecommended} dataNew={data.contentCardsNew}/> */}
    <OurTeam data={data.team}/> 

  </Layout>
)

export default IndexPage
