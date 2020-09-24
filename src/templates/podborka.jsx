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
    query ContentfulPodborkaGraphdesignBySlug($slug: String!, $banner: String) {
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
            courseTypeEmpty
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
        videoPodborkaFreelance: allContentfulGranichCollectionVideo(filter: {videoAttachmentTo: {eq: "Осознанный фриланс"}}, sort: {fields: [videoOrderNumber], order: ASC}) {
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
        booksPodborkaFreelance: allContentfulGranichCollectionBooks(filter: {booksAttachmentTo: {eq: "Осознанный фриланс"}}, sort: {fields: [booksOrderNumber], order: ASC}) {
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
        toolsPodborkaGraphDesign: allContentfulGranichCollectionTools(filter: {toolsAttachmentTo: {eq: "Осознанный графдизайн"}}, sort: {fields: [toolsOrderNumber], order: ASC}) {
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
        toolsPodborkaFreelance: allContentfulGranichCollectionTools(filter: {toolsAttachmentTo: {eq: "Осознанный фриланс"}}, sort: {fields: [toolsOrderNumber], order: ASC}) {
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
        offerPodborkaFreelance: contentfulGranichCollectionOffer(collectionOfferAttachmentTo: {eq: "Осознанный фриланс"}) {
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
    console.log(data.coursePodborkaBanner)
    return (
        <Layout>
            <Header type="dark"/>
            <SEO title={`${data.contentfulPodborka.contentTitle}`}
                 url={`https://anton-dev.ru/${data.contentfulPodborka.contentSlug}`} />
            <div className="section-top-block"></div>
            {data.contentfulPodborka.contentBannerSwitch && data.coursePodborkaBanner && <Banner data={data.coursePodborkaBanner}/>}
            {data.contentfulPodborka.contentSlug === 'osoznannaya-podborka-graphdesign' && (
                <>
                    <PodborkaOffer tags={data.contentfulPodborka.contentTags} dataContentPodborka={data.offerPodborkaGraphDesign}/>
                </>

            )}
            {data.contentfulPodborka.contentSlug === 'osoznannaya-podborka-freelance' && (
                <>
                    <PodborkaOffer tags={data.contentfulPodborka.contentTags} dataContentPodborka={data.offerPodborkaFreelance}/>
                </>

            )}

            <Mailing/>
            {data.contentfulPodborka.contentSlug === 'osoznannaya-podborka-graphdesign' && (
                <> 
                    <Video categoryTwo="Далее, лекции, которые не имеют прямого отношения к курсу. 
                                        Но если у вас есть время, то для большего охвата материала полезны ↓" 
                           data={data.videoPodborkaGraphDesign.edges}/>
                    <Books categoryTwo="Далее книги более общие. Уже не столь практичные. Но толково расширяют кругозор в дизайне ↓" 
                           categoryThree="А тут уже книги для крутых дизайнеров, когда одной эстетики уже мало ↓"
                           data={data.booksPodborkaGraphDesign.edges}/>
                    <Tools data={data.toolsPodborkaGraphDesign.edges}/>
                </>

            )}
            {data.contentfulPodborka.contentSlug === 'osoznannaya-podborka-freelance' && (
                <>
                    <Video data={data.videoPodborkaFreelance.edges}/>
                    <Books data={data.booksPodborkaFreelance.edges}/>
                </>

            )}

            <Wishes/>


        </Layout>
    )
}

export default PodborkaPage
