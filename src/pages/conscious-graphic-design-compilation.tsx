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
import ogImageGraphDesign from "../assets/images/seo/conscious-graphic-design-compilation-min.jpg"
import ogImageVKGraphDesign from "../assets/images/seo/vk/conscious-graphic-design-compilation.jpg"
import ContentCourseBanner from "../components/content-page/ContentCourseBanner"

export const podborkaPageQuery = graphql`
  query ContentfulGraphDesignCompilation {
    contentfulPodborka: contentfulGranichMainContentCard(
      contentSlug: { eq: "conscious-graphic-design-compilation" }
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
      courseTitle: { eq: "Осознанный Графдизайн" }
    ) {
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
    graphicDesignBannerInfo: contentfulGranichCourse(
      courseTitle: { eq: "Осознанный Графдизайн" }
    ) {
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
    videoPodborkaGraphDesign: allContentfulGranichCollectionVideo(
      filter: { videoAttachmentTo: { eq: "Осознанный графдизайн" } }
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

    booksPodborkaGraphDesign: allContentfulGranichCollectionBooks(
      filter: { booksAttachmentTo: { eq: "Осознанный графдизайн" } }
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

    toolsPodborkaGraphDesign: allContentfulGranichCollectionTools(
      filter: { toolsAttachmentTo: { eq: "Осознанный графдизайн" } }
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

    offerPodborkaGraphDesign: contentfulGranichCollectionOffer(
      collectionOfferAttachmentTo: { eq: "Осознанный графдизайн" }
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

type Props = {
  data: any
}

const GraphDesignCompilationPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Header type="dark" />
      <SEO
        title={`${data.contentfulPodborka.contentTitle}`}
        ogImageVk={ogImageVKGraphDesign}
        ogImage={ogImageGraphDesign}
        keywords={[
          "подборка",
          "осознанный",
          "гранич",
          "granich",
          "графдизайн",
          "книги",
          "лекции",
          "инструменты",
          "материал",
          "презентации",
        ]}
        description="Осознанная подборка книг и лекций для старта в графическом дизайне. В ней по крупицам собран самый толковый материал."
        url={`https://granich.design/${data.contentfulPodborka.contentSlug}`}
      />

      <div className="section-top-block"></div>
      {data.contentfulPodborka.contentBannerSwitch && (
        <Banner data={data.coursePodborkaBanner} />
      )}

      <PodborkaOffer
        tags={data.contentfulPodborka.contentTags}
        dataContentPodborka={data.offerPodborkaGraphDesign}
      />
      <ContentCourseBanner
        text={
          <>
            Это материалы, использованные при создании{" "}
            <i>Осознанного Графдизайна</i>. Их необязательно изучать, вы можете
            сразу же записаться на курс<span>→</span>
          </>
        }
        data={data.graphicDesignBannerInfo}
      />

      <Video
        topDescription="Осознанный Графдизайн — интенсивный. Чтобы успеть на курсе как можно больше, вы можете уже сейчас подготовиться, посмотрев эти видео."
        categoryTwo="Далее, лекции, которые не имеют прямого отношения к курсу. 
                                        Но если у вас есть время, то для большего охвата материала полезны ↓"
        data={data.videoPodborkaGraphDesign.edges}
      />
      <Mailing />
      <Books
        categoryTwo="Далее книги более общие. Уже не столь практичные. Но толково расширяют кругозор в дизайне ↓"
        data={data.booksPodborkaGraphDesign.edges}
      />
      <Tools data={data.toolsPodborkaGraphDesign.edges} />

      <Wishes />
    </Layout>
  )
}

export default GraphDesignCompilationPage
