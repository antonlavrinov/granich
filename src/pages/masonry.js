

import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Header from "../components/global/header"
import { graphql } from "gatsby"
import FoundationPortfolio from "../components/foundation-of-graph-design/foundation-portfolio"

export const contentfulQuery = graphql`
  query masonryQuery {
    masonryPosters: allContentfulGranichPoster(
      sort: { fields: [posterOrderNumber], order: ASC }
    ) {
      edges {
        node {
          id
          posterImage {
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          posterAuthor
          posterStream
        }
      }
    }
  }
`

const MasonryPage = ({
  data,
}) => {
    
  return (
    <Layout>
      <Header type={"dark"} />
      <SEO noIndex />
      <div className="section-top-block"></div>
       <FoundationPortfolio posters={data?.masonryPosters.edges} />
    </Layout>
  )
}

export default MasonryPage
