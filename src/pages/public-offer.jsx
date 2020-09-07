import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import {graphql} from 'gatsby';
import LegalDocument from '../components/legal-document/LegalDocument';
import SEO from "../components/seo"

export const contentfulQuery = graphql`
    query contentfulQueryPublicOffer {
        publicOffer: allContentfulGranichLegalDoc(filter: {legalDocType: {in: ["Пользовательское соглашение"]}}) {
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



const PublicOfferPage = ({data}) => {
    const mainText = data.publicOffer.edges[0].node.childContentfulGranichLegalDocLegalDocTextRichTextNode.json;
    const dataPdf = data.publicOffer.edges[0].node.legalDocPDF.file.url;
    const date = data.publicOffer.edges[0].node.legalDocDate;
    const docType = data.publicOffer.edges[0].node.legalDocType;
    const additionalInfo = data.publicOffer.edges[0].node.legalDocAdditionalInfo.json;
    return (
        <Layout>
            <SEO title="Пользовательское соглашение" />
            <Header type={'dark'}/>
            <div className="section-top-block"></div>
            <LegalDocument additionalInfo={additionalInfo} type={docType} mainText={mainText} dataPdf={dataPdf} date={date}/>
        </Layout>
    )
}

export default PublicOfferPage
