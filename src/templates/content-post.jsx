import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import SEO from '../components/seo'
import {graphql} from 'gatsby'
import YoutubeVideo from '../components/content-page/YoutubeVideo'
import Mailing from '../components/Mailing';
import ContentLinks from '../components/content-page/ContentLinks'




export const pageQuery = graphql`
    query ContentfulContentBySlug($slug: String!) {
        contentfulContent: contentfulGranichMainContentCard( contentSlug: { eq: $slug }) {
            contentSlug
            contentTitle
            contentYoutubeVideoLink
            contentLinkBehance {
                contentLinkBehance
            }
            contentLinkMedium {
                contentLinkMedium
            }
            contentPDF {
                file { 
                  url 
                }
              }
            contentDescription {
                contentDescription
            }

        }
    }
`

const ContentPage = ({data}) => {
    return (
        <Layout>
            <Header type="dark"/>
            <YoutubeVideo data={data}/>
            <ContentLinks data={data}/>
            <Mailing/>
            <SEO title="Онлайн-школа Granich" />
        </Layout>
    )
}

export default ContentPage
