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
import ogImageGraphDesign from '../assets/images/seo/conscious-graphic-design-compilation-min.jpg';
import ogImageVKGraphDesign from '../assets/images/seo/vk/conscious-graphic-design-compilation.jpg';
import ogImageFreelance from '../assets/images/seo/conscious-freelance-compilation-min.jpg';
import ogImageVKFreelance from '../assets/images/seo/vk/conscious-freelance-compilation.jpg';
import ContentCourseBanner from '../components/content-page/ContentCourseBanner'


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
        graphicDesignBannerInfo: contentfulGranichCourse(courseTitle: {eq: "Осознанный Графдизайн"}) {
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
        videoPodborkaGraphDesign: allContentfulGranichCollectionVideo(filter: {videoAttachmentTo: {eq: "Осознанный графдизайн"}}, sort: {fields: [videoOrderDecimalNumber], order: ASC}) {
            edges {
                node {
                    id
                    
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
                    
                    videoCategory
                    videoPageLink
                    videoContentIcons

                }
            }
        }
        videoPodborkaFreelance: allContentfulGranichCollectionVideo(filter: {videoAttachmentTo: {eq: "Осознанный фриланс"}}, sort: {fields: [videoOrderDecimalNumber], order: ASC}) {
            edges {
                node {
                    id
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
                    
                    videoCategory
                    videoPageLink
                    videoContentIcons
                    

                }
            }
        }
        booksPodborkaGraphDesign: allContentfulGranichCollectionBooks(filter: {booksAttachmentTo: {eq: "Осознанный графдизайн"}}, sort: {fields: [booksOrderDecimalNumber], order: ASC}) {
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
                    
                    booksCategory

                }
            }
        }
        booksPodborkaFreelance: allContentfulGranichCollectionBooks(filter: {booksAttachmentTo: {eq: "Осознанный фриланс"}}, sort: {fields: [booksOrderDecimalNumber], order: ASC}) {
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
                    
                    booksCategory

                }
            }
        }
        toolsPodborkaGraphDesign: allContentfulGranichCollectionTools(filter: {toolsAttachmentTo: {eq: "Осознанный графдизайн"}}, sort: {fields: [toolsOrderDecimalNumber], order: ASC}) {
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
        toolsPodborkaFreelance: allContentfulGranichCollectionTools(filter: {toolsAttachmentTo: {eq: "Осознанный фриланс"}}, sort: {fields: [toolsOrderDecimalNumber], order: ASC}) {
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
                    ...GatsbyContentfulFluid_withWebp_noBase64
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
                    ...GatsbyContentfulFluid_withWebp_noBase64
                }
            }
        }

    }
`

const PodborkaPage = ({data}) => {

    return (
        <Layout>
            <Header type="dark"/>
            {data.contentfulPodborka.contentSlug === 'conscious-graphic-design-compilation' && (
                <>
                    <SEO title={`${data.contentfulPodborka.contentTitle}`} 
                         ogImageVk={ogImageVKGraphDesign}
                         ogImage={ogImageGraphDesign}
                         keywords={['подборка', 'осознанный', 'гранич', 'granich', 'графдизайн', 'книги', 'лекции', 'инструменты', 'материал', 'презентации']}
                         description="Осознанная подборка книг и лекций для старта в графическом дизайне. В ней по крупицам собран самый толковый материал."
                         url={`https://granich.design/${data.contentfulPodborka.contentSlug}`} />
                </>

            )}
            {data.contentfulPodborka.contentSlug === 'conscious-freelance-compilation' && (
                <>
                    <SEO 
                        title={`${data.contentfulPodborka.contentTitle}`} 
                        ogImageVk={ogImageVKFreelance}
                        ogImage={ogImageFreelance}
                        keywords={['подборка', 'осознанный', 'гранич', 'granich', 'фриланс', 'книги', 'лекции', 'материал']}
                        description="Осознанная подборка книг и лекций для старта во фрилансе. В ней по крупицам собран самый толковый материал."
                        url={`https://granich.design/${data.contentfulPodborka.contentSlug}`} />
                </>

            )}
            
            <div className="section-top-block"></div>
            {data.contentfulPodborka.contentBannerSwitch && data.coursePodborkaBanner && <Banner data={data.coursePodborkaBanner}/>}
            {data.contentfulPodborka.contentSlug === 'conscious-graphic-design-compilation' && (
                <>
                    <PodborkaOffer tags={data.contentfulPodborka.contentTags} dataContentPodborka={data.offerPodborkaGraphDesign}/>
                    <ContentCourseBanner text={(<>Это материалы, использованные при создании <i>Осознанного Графдизайна</i>. Их необязательно изучать, вы можете сразу же записаться на курс<span>→</span><div>↓</div></>)} data={data.graphicDesignBannerInfo}/>
                </>

            )}
            {data.contentfulPodborka.contentSlug === 'conscious-freelance-compilation' && (
                <>
                    <PodborkaOffer tags={data.contentfulPodborka.contentTags} dataContentPodborka={data.offerPodborkaFreelance}/>
                </>

            )}
            

            
            {data.contentfulPodborka.contentSlug === 'conscious-graphic-design-compilation' && (
                <> 
                    <Video categoryTwo="Далее, лекции, которые не имеют прямого отношения к курсу. 
                                        Но если у вас есть время, то для большего охвата материала полезны ↓" 
                           data={data.videoPodborkaGraphDesign.edges}/>
                    <Mailing/>
                    <Books categoryTwo="Далее книги более общие. Уже не столь практичные. Но толково расширяют кругозор в дизайне ↓" 
                           
                           data={data.booksPodborkaGraphDesign.edges}/>
                    <Tools data={data.toolsPodborkaGraphDesign.edges}/>
                </>

            )}
            {data.contentfulPodborka.contentSlug === 'conscious-freelance-compilation' && (
                <>
                    <Video data={data.videoPodborkaFreelance.edges}/>
                    <Mailing/>
                    <Books data={data.booksPodborkaFreelance.edges}/>
                    {data.toolsPodborkaFreelance && data.toolsPodborkaFreelance.edges && data.toolsPodborkaFreelance.edges.length > 0 && (
                        <Tools data={data.toolsPodborkaFreelance.edges}/>
                    )}
                    
                </>

            )}

            <Wishes/>


        </Layout>
    )
}

export default PodborkaPage
