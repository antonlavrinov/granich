import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {graphql} from 'gatsby'
import CourseOffer from '../components/course-page/CourseOffer';
import Header from "../components/Header"
import CourseAnswers from "../components/course-page/CourseAnswers"
import CourseExample from "../components/course-page/CourseExample"




const OsoznannyGraphDesignPage = ({data}) => (
  <Layout>
    <Header style={'dark'}/>
    <SEO title="Осознанный графдизайн" />
    <CourseOffer/>
    <CourseAnswers/>
    <CourseExample/>
  </Layout>
)

export default OsoznannyGraphDesignPage
