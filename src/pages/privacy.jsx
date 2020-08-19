import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import {graphql} from 'gatsby';
import Privacy from '../components/privacy/Privacy';


export const contentfulQuery = graphql`
    query contentfulQueryPrivacy {
        privacy: allContentfulGranichPrivacy {
            edges {
                node {
                    childContentfulGranichPrivacyPrivacyTextRichTextNode {
                        json
                    }
                    privacyDate
                    privacyPDF {
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
    console.log(data.privacy.edges[0].node.childContentfulGranichPrivacyPrivacyTextRichTextNode.json)
    return (
        <Layout>
            <Header type={'dark'}/>
             <Privacy data={data.privacy.edges[0].node}/>
        </Layout>
    )
}

export default PrivacyPage
