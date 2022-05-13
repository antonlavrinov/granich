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

  const icons = {
    behanceIcon: data.behanceContentIcon.childImageSharp.fluid,
    pinterestIcon: data.pinterestContentIcon.childImageSharp.fluid,
    pinterestLinkIcon: data.pinterestLinkContentIcon.childImageSharp.fluid,
    behanceLinkIcon: data.behanceLinkContentIcon.childImageSharp.fluid,
    mediumIcon: data.contentMediumPng.childImageSharp.fluid,
    mediumLinkIcon: data.mediumLinkContentIcon.childImageSharp.fluid,
    youtubePng: data.contentYoutubePng.childImageSharp.fluid,
    podborkaLinkIcon: data.podborkaLinkContentIcon.childImageSharp.fluid,
  }

  return icons
}
