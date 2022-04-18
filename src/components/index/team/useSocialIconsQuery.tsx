import { graphql, useStaticQuery } from "gatsby"

export const useSocialIconsQuery = () => {
  const data = useStaticQuery(graphql`
    query teamSocialIcons {
      vk: file(relativePath: { eq: "team_socials/team_vk.png" }) {
        childImageSharp {
          fluid(maxWidth: 65) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      instagram: file(relativePath: { eq: "team_socials/team_instagram.png" }) {
        childImageSharp {
          fluid(maxWidth: 65) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pinterest: file(relativePath: { eq: "team_socials/team_pinterest.png" }) {
        childImageSharp {
          fluid(maxWidth: 65) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      telegram: file(relativePath: { eq: "team_socials/team_telegram.png" }) {
        childImageSharp {
          fluid(maxWidth: 65) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      behance: file(relativePath: { eq: "team_socials/team_behance.png" }) {
        childImageSharp {
          fluid(maxWidth: 65) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const vkIcon = data.vk.childImageSharp.fluid
  const pinterestIcon = data.pinterest.childImageSharp.fluid
  const instagramIcon = data.instagram.childImageSharp.fluid
  const telegramIcon = data.telegram.childImageSharp.fluid
  const behanceIcon = data.behance.childImageSharp.fluid

  return [
    vkIcon,
    pinterestIcon,
    instagramIcon,
    telegramIcon,
    behanceIcon,
  ] as const
}
