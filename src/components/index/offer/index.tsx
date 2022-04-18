import React from "react"
import { Container } from "../../style"
import * as SC from "./Offer"
import { graphql, useStaticQuery } from "gatsby"

const Offer = ({ scrollTo }) => {

  const images = useStaticQuery(graphql`
    query indexImages {
      headerImage: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2729) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      headerImageMobile: file(relativePath: { eq: "background_mobile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 575) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      headerSubtitleImage: file(relativePath: { eq: "flags.png" }) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const headerImage = images.headerImage.childImageSharp.fluid
  const headerImageMobile = images.headerImageMobile.childImageSharp.fluid
  const headerSubtitleImage = images.headerSubtitleImage.childImageSharp.fluid

  return (
    <>
      <SC.Section id="offer">
        <SC.MainImage fluid={headerImage} />
        <SC.MainImageMobile fluid={headerImageMobile} />
        <Container>
          <SC.Wrapper>
            <SC.Title>Онлайн-школа Granich</SC.Title>
            <SC.Descr>
              Осознанно развиваем {" "}
              <SC.FlagsImg alt="flags" fluid={headerSubtitleImage} /> <br />{" "}
              твёрдые навыки дизайнеров
              {/* <span
                role="button"
                onKeyDown={() => scrollTo("#manifest")}
                onClick={() => scrollTo("#manifest")}
              >
                {" "}
              </span> */}
            </SC.Descr>
          </SC.Wrapper>
        </Container>
      </SC.Section>
      <SC.SvgClip />
    </>
  )
}

export default Offer
