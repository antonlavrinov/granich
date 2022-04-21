import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Header from "../components/global/header"
import Blog from "../components/blog"
import ogImage from "../assets/images/seo/index-main.jpg"
import ogImageVK from "../assets/images/seo/vk/index-main.jpg"
import dataIndex from "../data/pages/index";
// import { graphql } from "gatsby"

// export const contentfulQuery = graphql`
//   query blogQuery {
//     blogTeam: allContentfulGranichMainTeachers(
//       filter: {
//         teacherName: {
//           in: ["Вадим Гранич", "Елизавета Черникова", "Андрей Павлушин"]
//         }
//       }
//       sort: { fields: [teacherOrderNumber], order: ASC }
//     ) {
//       edges {
//         node {
//           id
//           teacherDescr {
//             json
//           }
//           teacherEmail
//           teacherImage {
//             fluid(maxWidth: 250) {
//               ...GatsbyContentfulFluid_withWebp
//             }
//           }
//           teacherName
//           teacherSocialInstagram
//           teacherSocialPinterest
//           teacherSocialTelegram
//           teacherSocialVK
//           teacherSocialsOrder
//         }
//       }
//     }
//   }
// `

const team = dataIndex.team.edges.filter((el) => el.node.teacherName === "Вадим Гранич" ||  el.node.teacherName === "Андрей Павлушин" || el.node.teacherName === "Елизавета Черникова");

const BlogPage = () => (
  <Layout>
    <SEO
      title="Ведём блог для дизайнеров"
      ogImage={ogImage}
      ogImageVk={ogImageVK}
    />
    <Header type={"dark"} />
    <div className="section-top-block"></div>
    <Blog team={team} />
  </Layout>
)

export default BlogPage