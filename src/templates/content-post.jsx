import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import SEO from '../components/seo'
import {graphql} from 'gatsby'
import YoutubeVideo from '../components/content-page/YoutubeVideo'
import Mailing from '../components/Mailing';
import ContentLinks from '../components/content-page/ContentLinks'
import Banner from '../components/Banner'




export const pageQuery = graphql`
    query ContentfulContentBySlug($slug: String!, $banner: String) {
        contentfulContent: contentfulGranichMainContentCard( contentSlug: { eq: $slug }) {
            contentSlug
            contentTitle
            contentYoutubeVideoLink
            contentLinkBehance
            contentLinkMedium
            contentPDF {
                file { 
                  url 
                }
              }
            contentBannerSwitch
            contentTags

        }
        courseBanner: contentfulGranichCourse(courseTitle: {eq: $banner}) {
            courseTitle
            courseStart
            courseDuration
            courseStatus
            courseType
            courseBannerImage {
                fluid(maxWidth: 120) {
                    ...GatsbyContentfulFluid
                  }
            }
            courseBannerSubtext
            courseSlug
            courseTags
        }
    }
`

const ContentPage = ({data}) => {
    return (
        <Layout>
            <Header type="dark"/>
            <SEO title={`${data.contentfulContent.contentTitle}`}
                 url={`https://anton-dev.ru/${data.contentfulContent.contentSlug}`} />
            <div className="section-top-block"></div>
            {data.contentfulContent.contentBannerSwitch && data.courseBanner && <Banner data={data.courseBanner}/>}
            <YoutubeVideo data={data}/>
            <ContentLinks data={data}/>
            <Mailing/>

        </Layout>
    )
}

export default ContentPage
