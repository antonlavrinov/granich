import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import SEO from '../components/seo'
import {graphql} from 'gatsby'
import Mailing from '../components/Mailing';
import Banner from '../components/Banner'
import Books from '../components/content-page/Books'
import Tools from '../components/content-page/Tools'
import Video from '../components/content-page/Video'
import Wishes from '../components/content-page/Wishes'
import PodborkaOffer from '../components/content-page/PodborkaOffer';



export const podborkaPageQuery = graphql`
    query ContentfulPodborkaBySlug($slug: String!, $banner: String) {
        contentfulPodborka: contentfulGranichMainContentCard( contentSlug: { eq: $slug }) {
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
            contentType

        }
        coursePodborkaBanner: contentfulGranichCourse(courseTitle: {eq: $banner}) {
            courseTitle
            courseStart
            courseDuration
            courseStatus
            courseType
            courseBannerImage {
                fluid(maxWidth: 120) {
                    ...GatsbyContentfulFluid_withWebp
                  }
            }
            courseBannerSubtext
            courseSlug
            courseTags
        }
        videoPodborkaGraphDesign: allContentfulGranichCollectionVideo(filter: {videoAttachmentTo: {eq: "Осознанный графдизайн"}}, sort: {fields: [videoOrderNumber], order: ASC}) {
            edges {
                node {
                    id
                    videoLink
                    videoImagePreview {
                        fluid(maxWidth: 800, quality: 70) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                    videoTiming
                    videoText {
                        json
                    }
                    childContentfulGranichCollectionVideoVideoAdditionalLinksRichTextNode {
                        json
                    }
                    videoOrderNumber
                    videoCategory

                }
            }
        }
        booksPodborkaGraphDesign: allContentfulGranichCollectionBooks(filter: {booksAttachmentTo: {eq: "Осознанный графдизайн"}}, sort: {fields: [booksOrderNumber], order: ASC}) {
            edges {
                node {
                    id
                    booksImage {
                        fluid(maxWidth: 800, quality: 70) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                    booksText {
                        json
                    }
                    childContentfulGranichCollectionBooksBooksLinksRichTextNode {
                        json
                    }
                    booksOrderNumber
                    booksCategory

                }
            }
        }
        toolsPodborkaGraphDesign: allContentfulGranichCollectionTools(sort: {fields: [toolsOrderNumber], order: ASC}) {
            edges {
                node {
                    id
                    toolsImage {
                        fluid(maxWidth: 190, quality: 70) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                    toolsText {
                        json
                    }
                    childContentfulGranichCollectionToolsToolsLinksRichTextNode {
                        json
                    }

                }
            }
        }
        offerPodborkaGraphDesign: contentfulGranichCollectionOffer(collectionOfferAttachmentTo: {eq: "Осознанный графдизайн"}) {
            collectionOfferTitle {
                json
            }
            collectionOfferDescr
            collectionOfferMainImage {
                fluid(maxWidth: 850) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
        }

    }
`

const PodborkaPage = ({data}) => {
    return (
        <Layout>
            <Header type="dark"/>
            <SEO title={`${data.contentfulPodborka.contentTitle}`}
                 url={`https://anton-dev.ru/${data.contentfulPodborka.contentSlug}`} />
            <div className="section-top-block"></div>
            {data.contentfulPodborka.contentBannerSwitch && data.coursePodborkaBanner && <Banner data={data.coursePodborkaBanner}/>}
            <PodborkaOffer tags={data.contentfulPodborka.contentTags} dataContentPodborka={data.offerPodborkaGraphDesign}/>
            <Mailing/>
            <Video data={data.videoPodborkaGraphDesign.edges}/>
            <Books data={data.booksPodborkaGraphDesign.edges}/>
            <Tools data={data.toolsPodborkaGraphDesign.edges}/>
            <Wishes/>


        </Layout>
    )
}

export default PodborkaPage
