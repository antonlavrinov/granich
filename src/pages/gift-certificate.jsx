import React from "react"
import Layout from "../components/Layout"
import Header from "../components/global/header"
import { graphql } from "gatsby"
import LegalDocument from "../components/legal-document/LegalDocument"
import SEO from "../components/seo"
import ogImage from "../assets/images/seo/index-main.jpg"
import ogImageVK from "../assets/images/seo/vk/index-main.jpg"

export const contentfulQuery = graphql`
  query contentfulQueryGiftCertificate {
    giftCertificate: allContentfulGranichLegalDoc(
      filter: { legalDocType: { in: ["Подарочный сертификат"] } }
    ) {
      edges {
        node {
          childContentfulGranichLegalDocLegalDocTextRichTextNode {
            json
          }
          legalDocDate
          legalDocType
          legalDocAdditionalInfo {
            json
          }
          legalDocPDF {
            file {
              url
            }
          }
        }
      }
    }
  }
`

const GiftCertificatePage = ({ data }) => {
  const mainText =
    data.giftCertificate.edges[0].node
      .childContentfulGranichLegalDocLegalDocTextRichTextNode.json
  const dataPdf = data.giftCertificate.edges[0].node.legalDocPDF.file.url
  const date = data.giftCertificate.edges[0].node.legalDocDate
  const docType = data.giftCertificate.edges[0].node.legalDocType
  const additionalInfo =
    data.giftCertificate.edges[0].node.legalDocAdditionalInfo.json
  return (
    <Layout>
      <SEO
        title="Подарочный сертификат"
        url="https://granich.design/gift-сertificate"
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

export default GiftCertificatePage
