import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import {graphql} from 'gatsby';
import LegalDocument from '../components/legal-document/LegalDocument';


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
    return (
        <Layout>
            <Header type={'dark'}/>
             <LegalDocument type={docType} mainText={mainText} dataPdf={dataPdf} date={date}/>
        </Layout>
    )
}

export default PrivacyPage
