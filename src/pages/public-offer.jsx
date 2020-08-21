import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import {graphql} from 'gatsby';
import LegalDocument from '../components/legal-document/LegalDocument';


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
    return (
        <Layout>
            <Header type={'dark'}/>
            <LegalDocument type={docType} mainText={mainText} dataPdf={dataPdf} date={date}/>
        </Layout>
    )
}

export default PublicOfferPage
