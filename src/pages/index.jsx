import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
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
        courseCards: allContentfulGranichMainCourseCard {
          edges {
            node {
              id
              cardActive
              cardDate
              cardDescription {
                cardDescription
              }
              cardDuration
              cardImage {
                fluid(maxWidth: 600) {
                  ...GatsbyContentfulFluid
                }
              }
              cardTags
              cardTeachers {
                id
                fluid(maxWidth: 100) {
                  ...GatsbyContentfulFluid
                }
              }
              cardTitle
              typeOfCard
              cardSlug
            }
          }
        },
        postCards: allContentfulGranichMainPostCard {
          edges {
            node {
              postDescription {
                postDescription
              }
              postRecommended
              postTags
              postTitle
              postImage {
                fluid(maxWidth: 600) {
                  ...GatsbyContentfulFluid
                }
              }
              postType
              postSlug
              postLinkPinterest {
                postLinkPinterest
              }
              postLinkBehance {
                postLinkBehance
              }
              postLinkYoutube {
                postLinkYoutube
              }
              postLinkMedium {
                postLinkMedium
              }
            }
          }
        }
    }
`




const IndexPage = ({data}) => (
  <Layout>
    <Header/>
    <SEO title="Онлайн-школа Granich" />
    <Offer data={data.header}/>
    {console.log('contentful page', data)}
    <Courses data={data.courseCards}  />
    <Manifest/>
    <Mailing/>
    <PreCoursePreparation data={data.postCards}/>
    {/* <Manifest1/> */}

    <OurTeam/>
  </Layout>
)

export default IndexPage
