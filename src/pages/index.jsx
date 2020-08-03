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
              postType
              postSlug
              postLinkPinterest {
                postLinkPinterest
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
    <Offer/>
    {console.log('contentful page', data)}
    <Courses data={data.courseCards}  />
    <Manifest/>
    <PreCoursePreparation data={data.postCards}/>
    {/* <Manifest1/> */}
    <Mailing/>
    <OurTeam/>
  </Layout>
)

export default IndexPage
