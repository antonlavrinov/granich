import { graphql, useStaticQuery } from "gatsby"

export const useLocalQuery = () => {
  const data = useStaticQuery(graphql`
    query contentIcons {
      pinterestContentIcon: file(relativePath: { eq: "pinterest-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 60, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      behanceContentIcon: file(relativePath: { eq: "behance-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 60, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pinterestLinkContentIcon: file(
        relativePath: { eq: "pinterest-link-icon.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 60, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      behanceLinkContentIcon: file(
        relativePath: { eq: "behance-link-icon.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 60, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contentMediumPng: file(relativePath: { eq: "medium-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 60, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contentYoutubePng: file(relativePath: { eq: "youtube-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 60, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      podborkaLinkContentIcon: file(
        relativePath: { eq: "podborka-link-out.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 60, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mediumLinkContentIcon: file(
        relativePath: { eq: "arrow-black-newpage-01.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 60, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const behanceIcon = data.behanceContentIcon.childImageSharp.fluid
  const pinterestIcon = data.pinterestContentIcon.childImageSharp.fluid
  const pinterestLinkIcon = data.pinterestLinkContentIcon.childImageSharp.fluid
  const behanceLinkIcon = data.behanceLinkContentIcon.childImageSharp.fluid
  const mediumIcon = data.contentMediumPng.childImageSharp.fluid
  const mediumLinkIcon = data.mediumLinkContentIcon.childImageSharp.fluid
  const youtubePng = data.contentYoutubePng.childImageSharp.fluid
  const podborkaLinkIcon = data.podborkaLinkContentIcon.childImageSharp.fluid

  return [
    behanceIcon,
    pinterestIcon,
    pinterestLinkIcon,
    behanceLinkIcon,
    mediumIcon,
    mediumLinkIcon,
    youtubePng,
    podborkaLinkIcon,
  ]
}
