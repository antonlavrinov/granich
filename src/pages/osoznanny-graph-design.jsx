import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import GraphDesignOffer from '../components/graphdesign-page/GraphDesignOffer';
import Header from "../components/Header"
import GraphDesignExplanations from "../components/graphdesign-page/GraphDesignExplanations"
import GraphDesignExample from "../components/graphdesign-page/GraphDesignExample"
import GraphDesignForWhom from "../components/graphdesign-page/GraphDesignForWhom"
import GraphDesignPortfolio from "../components/graphdesign-page/GraphDesignPortfolio"
import GraphDesignTrainingPath from "../components/graphdesign-page/GraphDesignTrainingPath"
import GraphDesignCurriculum from "../components/graphdesign-page/GraphDesignCurriculum"
import GraphDesignFeatures from "../components/graphdesign-page/GraphDesignFeatures"
import GraphDesignReviews from "../components/graphdesign-page/GraphDesignReviews"
import GraphDesignParticipation from "../components/graphdesign-page/GraphDesignParticipation"
import GraphDesignCommitment from "../components/graphdesign-page/GraphDesignCommitment"
import {graphql} from 'gatsby';
import GraphDesignAnswers from "../components/graphdesign-page/GraphDesignAnswers";



export const contentfulQuery = graphql`
    query graphDesignQuery {
        offer:   allContentfulGranichMainCourseCard(filter: {cardTitle: {eq: "Осознанный графдизайн"}}) {
          edges {
            node {
              courseMainImage {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
      `



const OsoznannyGraphDesignPage = ({data}) => (
  <Layout>
    <Header type={'dark'}/>
    <SEO title="Осознанный графдизайн" />
    <GraphDesignOffer data={data.offer}/>
    <GraphDesignExplanations/>
    <GraphDesignExample/>
    <GraphDesignCommitment/>
    <GraphDesignForWhom/>
    <GraphDesignPortfolio/>
    <GraphDesignTrainingPath/>
    <GraphDesignCurriculum/>
    <GraphDesignFeatures/>
    <GraphDesignReviews/>
    <GraphDesignParticipation/>
    <GraphDesignAnswers/>

  </Layout>
)

export default OsoznannyGraphDesignPage
