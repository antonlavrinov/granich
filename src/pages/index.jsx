import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {graphql} from 'gatsby'
import Offer from '../components/Offer';
import Courses from "../components/Courses"
import Mailing from "../components/Mailing"
import Manifest from "../components/Manifest"


export const courseQuery = graphql`
  query {
    courses: allContentfulGranichMainCourses {
      edges {
        node {
          courseCardName
        }
      }
    }
  }
`

    {/* {data.courses.edges.map((edge, idx) => {
      return (
        <div key={idx}>{edge.node.courseCardName}</div> 
      )
    })} */}


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Онлайн-школа Granich" />
    <Offer/>
    <Courses/>
    <Manifest/>
    <Mailing/>
  </Layout>
)

export default IndexPage
