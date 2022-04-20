import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container } from "../../style";
import * as SC from "./style";
import Zoom from "react-medium-image-zoom";

const MetaphorsPortfolio = ({posters}) => {

  const data = useStaticQuery(graphql`
    query metaphorsOfferImages {
      allFile(filter: {relativeDirectory: {eq: "metaphors-in-identity-page/portfolio"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 600, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <SC.Section>
      <Container>
          <SC.Wrapper>
          <SC.SectionTitle>Некоторые работы учеников</SC.SectionTitle>
        <SC.MasonryWrapper>
            <SC.MasonryOverflow isShowMore="true">
                {posters.map((item, index) => (
                    <SC.PosterWrapper key={index}>
                        <Zoom wrapStyle={{display: "block", height: "100%", cursor: "pointer"}}>
                            <SC.Image fluid={data.allFile.edges[index].node.childImageSharp.fluid} alt="poster"/>
                        </Zoom>
                        <SC.PosterAuthor>
                            <SC.AuthorName>{item.node.posterAuthor}</SC.AuthorName>
                            <SC.Course>{item.node.posterStream}</SC.Course>
                        </SC.PosterAuthor>
                    </SC.PosterWrapper>
                ))}
            </SC.MasonryOverflow>
        </SC.MasonryWrapper>
          </SC.Wrapper>
        
      </Container>
    </SC.Section>
  )
}

export default MetaphorsPortfolio
