import React from "react"
import Layout from "../components/Layout"
import Header from "../components/global/header"
// import { graphql, PageProps } from "gatsby"
import LegalDocument from "../components/legal-document/LegalDocument"
import SEO from "../components/seo"
import ogImage from "../assets/images/seo/index-main.jpg"
import ogImageVK from "../assets/images/seo/vk/index-main.jpg"
import data from "../data/pages/public-offer";

// export const contentfulQuery = graphql`
//   query contentfulQueryPublicOffer {
//     publicOffer: allContentfulGranichLegalDoc(
//       filter: { legalDocType: { in: ["Пользовательское соглашение"] } }
//     ) {
//       edges {
//         node {
//           childContentfulGranichLegalDocLegalDocTextRichTextNode {
//             json
//           }
//           legalDocDate
//           legalDocType
//           legalDocAdditionalInfo {
//             json
//           }
//           legalDocPDF {
//             file {
//               url
//             }
//           }
//         }
//       }
//     }
//   }
// `

const PublicOfferPage = () => {
  const mainText =
    data.publicOffer.edges[0].node
      .childContentfulGranichLegalDocLegalDocTextRichTextNode.json
  const dataPdf = data.publicOffer.edges[0].node.legalDocPDF.file.url
  const date = data.publicOffer.edges[0].node.legalDocDate
  const docType = data.publicOffer.edges[0].node.legalDocType
  const additionalInfo =
    data.publicOffer.edges[0].node.legalDocAdditionalInfo.json
  return (
    <Layout>
      <SEO
        title="Пользовательское соглашение"
        url="https://granich.design/public-offer"
        ogImage={ogImage}
        ogImageVk={ogImageVK}
      />
      <Header type={"dark"} />
      <div className="section-top-block"></div>
      <LegalDocument
        additionalInfo={additionalInfo}
        type={docType}
        mainText={mainText}
        dataPdf={dataPdf}
        date={date}
      />
    </Layout>
  )
}

export default PublicOfferPage
