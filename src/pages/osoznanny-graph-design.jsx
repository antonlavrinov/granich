import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {graphql} from 'gatsby'
import GraphDesignOffer from '../components/graphdesign-page/GraphDesignOffer';
import Header from "../components/Header"
import GraphDesignAnswers from "../components/graphdesign-page/GraphDesignAnswers"
import GraphDesignExample from "../components/graphdesign-page/GraphDesignExample"
import GraphDesignForWhom from "../components/graphdesign-page/GraphDesignForWhom"
import GraphDesignPortfolio from "../components/graphdesign-page/GraphDesignPortfolio"
import GraphDesignTrainingPath from "../components/graphdesign-page/GraphDesignTrainingPath"
import GraphDesignCurriculum from "../components/graphdesign-page/GraphDesignCurriculum"
import GraphDesignFeatures from "../components/graphdesign-page/GraphDesignFeatures"
import GraphDesignReviews from "../components/graphdesign-page/GraphDesignReviews"
import GraphDesignParticipation from "../components/graphdesign-page/GraphDesignParticipation"




const OsoznannyGraphDesignPage = ({data}) => (
  <Layout>
    <Header style={'dark'}/>
    <SEO title="Осознанный графдизайн" />
    <GraphDesignOffer/>
    <GraphDesignAnswers/>
    <GraphDesignExample/>
    <GraphDesignForWhom/>
    <GraphDesignPortfolio/>
    <GraphDesignTrainingPath/>
    <GraphDesignCurriculum/>
    <GraphDesignFeatures/>
    <GraphDesignReviews/>
    <GraphDesignParticipation/>

  </Layout>
)

export default OsoznannyGraphDesignPage
