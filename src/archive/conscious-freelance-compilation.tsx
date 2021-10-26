import React from "react"
import Layout from "../components/Layout"
import Header from "../components/global/header"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Mailing from "../components/global/mailing"
import Banner from "../components/global/banner"
import Books from "../components/content-page/Books"
import Tools from "../components/content-page/Tools"
import Video from "../components/content-page/Video"
import Wishes from "../components/content-page/Wishes"
import PodborkaOffer from "../components/content-page/PodborkaOffer"
import ogImageFreelance from "../assets/images/seo/conscious-freelance-compilation-min.jpg"
import ogImageVKFreelance from "../assets/images/seo/vk/conscious-freelance-compilation.jpg"
import ContentCourseBanner from "../components/content-page/ContentCourseBanner"

export const podborkaPageQuery = graphql`
  query ContentfulFreelanceCompilation {
    contentfulPodborka: contentfulGranichMainContentCard(
      contentSlug: { eq: "conscious-freelance-compilation" }
    ) {
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
    coursePodborkaBanner: contentfulGranichCourse(
      courseTitle: { eq: "Осознанный Фриланс" }
    ) {
      courseTitle
      courseStart
      courseDuration
      courseStatus
      courseButtonText
      courseExternalLinkTransition
      courseAdditionalType
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

    videoPodborkaFreelance: allContentfulGranichCollectionVideo(
      filter: { videoAttachmentTo: { eq: "Осознанный фриланс" } }
      sort: { fields: [videoOrderDecimalNumber], order: ASC }
    ) {
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

    booksPodborkaFreelance: allContentfulGranichCollectionBooks(
      filter: { booksAttachmentTo: { eq: "Осознанный фриланс" } }
      sort: { fields: [booksOrderDecimalNumber], order: ASC }
    ) {
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

    toolsPodborkaFreelance: allContentfulGranichCollectionTools(
      filter: { toolsAttachmentTo: { eq: "Осознанный фриланс" } }
      sort: { fields: [toolsOrderDecimalNumber], order: ASC }
    ) {
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

    offerPodborkaFreelance: contentfulGranichCollectionOffer(
      collectionOfferAttachmentTo: { eq: "Осознанный фриланс" }
    ) {
      collectionOfferTitle {
        json
      }
      collectionOfferMainImage {
        fluid(maxWidth: 850) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      childContentfulGranichCollectionOfferCollectionOfferDescrWithAssetRichTextNode {
        json
      }
    }
  }
`

const PodborkaPage = ({ data }) => {
  return (
    <Layout>
      <Header type="dark" />

      <SEO
        title={`${data.contentfulPodborka.contentTitle}`}
        ogImageVk={ogImageVKFreelance}
        ogImage={ogImageFreelance}
        keywords={[
          "подборка",
          "осознанный",
          "гранич",
          "granich",
          "фриланс",
          "книги",
          "лекции",
          "материал",
        ]}
        description="Осознанная подборка книг и лекций для старта во фрилансе. В ней по крупицам собран самый толковый материал."
        url={`https://granich.design/${data.contentfulPodborka.contentSlug}`}
      />

      <div className="section-top-block"></div>
      {data.contentfulPodborka.contentBannerSwitch && (
        <Banner data={data.coursePodborkaBanner} />
      )}

      <PodborkaOffer
        tags={data.contentfulPodborka.contentTags}
        dataContentPodborka={data.offerPodborkaFreelance}
      />

      <Video
        categoryTwo="Далее, лекции, которые не имеют прямого отношения к курсу. Но если у вас есть время, то для большего охвата материала полезны ↓"
        topDescription="Осознанный Фриланс — интенсивный. Чтобы успеть на курсе как можно больше, вы можете уже сейчас подготовиться, посмотрев эти видео."
        data={data.videoPodborkaFreelance.edges}
      />
      <Mailing />
      <Books data={data.booksPodborkaFreelance.edges} />
      {data.toolsPodborkaFreelance &&
        data.toolsPodborkaFreelance.edges &&
        data.toolsPodborkaFreelance.edges.length > 0 && (
          <Tools data={data.toolsPodborkaFreelance.edges} />
        )}

      <Wishes />
    </Layout>
  )
}

export default PodborkaPage
