import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import {graphql} from 'gatsby';
import LegalDocument from '../components/legal-document/LegalDocument';
import SEO from "../components/seo"

export const contentfulQuery = graphql`
    query contentfulQueryPrivacy {
        privacy: allContentfulGranichLegalDoc(filter: {legalDocType: {in: ["Политика конфиденциальности"]}}) {
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



const PrivacyPage = ({data}) => {
    const mainText = data.privacy.edges[0].node.childContentfulGranichLegalDocLegalDocTextRichTextNode.json;
    const dataPdf = data.privacy.edges[0].node.legalDocPDF.file.url;
    const date = data.privacy.edges[0].node.legalDocDate;
    const docType = data.privacy.edges[0].node.legalDocType;
    const additionalInfo = data.privacy.edges[0].node.legalDocAdditionalInfo.json;
    return (
        <Layout>
            <SEO title="Политика конфиденциальности"
                url="https://anton-dev.ru/privacy" />
            <Header type={'dark'}/>
            <div className="section-top-block"></div>
            <LegalDocument additionalInfo={additionalInfo} type={docType} mainText={mainText} dataPdf={dataPdf} date={date}/>
        </Layout>
    )
}

export default PrivacyPage
