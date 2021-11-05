import React, { useState } from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { graphql, PageProps } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import Offer from "../components/main-page/offer"
import Courses from "../components/main-page/courses"
import Mailing from "../components/global/mailing"
import Manifest from "../components/main-page/manifest"
import Header from "../components/global/header"
import PreCoursePreparation from "../components/main-page/precourse-preparation/content-list"
import OurTeam from "../components/main-page/team"
import BestGraduates from "../components/main-page/best-graduates"
import {
  IContentCard,
  ICourseCard,
  IIndexOffer,
  ITeam,
} from "../interfaces/main-page"

// import ogImage from '../assets/images/seo/index.jpg';

export const contentfulQuery = graphql`
  query contentfulQuery {
    offer: contentfulGranichMainHeader(
      headerTitle: { eq: "Онлайн-школа Granich" }
    ) {
      headerImage {
        fluid(maxWidth: 2729) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      headerImageMobile {
        fluid(maxWidth: 575) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      headerSubtitleImage {
        fluid(maxWidth: 50) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      headerSubtitle_01
      headerSubtitle_02
      headerSubtitle_03
      headerTitle
    }
    courseCards: allContentfulGranichCourse(
      sort: { fields: [courseOrderNumber], order: ASC }
    ) {
      edges {
        node {
          id
          courseStatus
          courseButtonText
          courseExternalLinkTransition
          courseAdditionalType
          courseStart
          courseDescr
          courseDuration
          coursePreviewImage {
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          courseTags
          courseTeachers {
            id
            fluid(maxWidth: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          courseTitle
          courseType
          courseSlug
          courseTypeDevelopment
          courseTypeEmpty
        }
      }
    }
    contentCardsNew: allContentfulGranichMainContentCard(
      sort: { fields: [contentOrderDecimalNumberNew], order: DESC }
    ) {
      nodes {
        contentDescription {
          json
        }
        contentTags
        contentTitle
        contentImage {
          fluid(maxWidth: 350) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        contentType
        contentSlug
        contentPDF {
          file {
            url
          }
        }
        contentYoutubeVideoLink
        contentYoutubeTiming
        contentLinkPinterest
        contentLinkBehance
        contentLinkMedium
      }
    }

    contentCardsRecommended: allContentfulGranichMainContentCard(
      sort: { fields: [contentOrderDecimalNumber], order: DESC }
    ) {
      nodes {
        contentDescription {
          json
        }
        contentTags
        contentTitle
        contentImage {
          fluid(maxWidth: 350) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        contentType
        contentSlug
        contentYoutubeVideoLink
        contentPDF {
          file {
            url
          }
        }
        contentLinkPinterest
        contentLinkBehance
        contentLinkMedium
        contentYoutubeTiming
      }
    }
    team: allContentfulGranichMainTeachers(
      sort: { fields: [teacherOrderNumber], order: ASC }
    ) {
      edges {
        node {
          id
          teacherDescr {
            json
          }
          teacherEmail
          teacherImage {
            fluid(maxWidth: 250) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          teacherName
          teacherSocialInstagram
          teacherSocialPinterest
          teacherSocialTelegram
          teacherSocialBehance
          teacherSocialVK
          teacherSocialsOrder
          teacherCategory
        }
      }
    }
  }
`

type GraphQlResults = {
  offer: IIndexOffer
  courseCards: {
    edges: {
      node: ICourseCard
    }
  }
  contentCardsNew: {
    nodes: IContentCard
  }
  contentCardsRecommended: {
    nodes: IContentCard
  }
  team: {
    edges: {
      node: ITeam
    }
  }
}

const IndexPage: React.FC<PageProps<GraphQlResults>> = ({ data }) => {
  // const [mailingActive, setMailingActive] = useState<boolean>(true)

  // const toggleMailingActive = (bool: boolean): void => {
  //   setMailingActive(bool)
  // }
  return (
    <Layout>
      <Header type={"light"} scrollTo={scrollTo} />
      <SEO
        title="Онлайн-школа Granich"
        description="Делаем из любви, а не страха. Курсы с осознанным подходом. Выточенно. Интенсивно. С дедлайнами."
        keywords={[
          "школа",
          "осознанность",
          "фриланс",
          "графический",
          "дизайн",
          "granich",
          "гранич",
          "графдизайн",
          "курсы",
        ]}
        url="https://granich.design/"
      />
      <Offer data={data.offer} scrollTo={scrollTo} />
      <nosnippet>
        <Courses
          data={data.courseCards.edges}
          // toggleMailingActive={toggleMailingActive}
        />

        <Manifest />
        {/* {mailingActive && <Mailing />} */}
        <Mailing />
        <div style={{ height: "0.2vw", marginTop: "0.5vw" }} id="content"></div>
        <PreCoursePreparation
          dataRecommended={data.contentCardsRecommended.nodes}
          // dataNew={data.contentCardsNew.nodes}
        />
        <BestGraduates />
        <OurTeam data={data.team} />
      </nosnippet>   
    </Layout>
  )
}

export default IndexPage
