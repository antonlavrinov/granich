const path = require("path")
const contentData = require("./src/data/pages/index");
// const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const contentContent = path.resolve("./src/templates/content-post.tsx")
  // const osoznannayaPodborkaPage = path.resolve("./src/templates/podborka")
  // return graphql(`
  //   {
  //     content: allContentfulGranichMainContentCard(
  //       filter: {
  //         contentType: {
  //           in: ["Youtube", "Youtube + Medium + Behance", "Youtube + Pinterest"]
  //         }
  //       }
  //     ) {
  //       edges {
  //         node {
  //           contentSlug
  //           contentYoutubeVideoLink
  //           contentBanner
  //         }
  //       }
  //     }
  //   }
  // `).then(result => {

    const contents = contentData.contentCardsRecommended.nodes;
    // console.log("CONTENT DATA", contents);
    // const podborkas = result.data.podborkaPage.edges
    contents.filter(el => el.contentType === "Youtube" || el.contentType === "Youtube + Medium + Behance" || el.contentType === "Pinterest").forEach(content => {
      createPage({
        path: content.contentSlug,
        component: contentContent,
        context: {
          slug: content.contentSlug,
          banner: content.contentBanner,
          contentTitle: content.contentTitle,
          contentYoutubeVideoLink: content.contentYoutubeVideoLink,
          contentLinkBehance: content.contentLinkBehance,
          contentLinkPinterest: content.contentLinkPinterest,
          contentLinkMedium: content.contentLinkMedium,
          contentPDF: content.contentPDF,
          contentZIPLink: content.contentZIPLink,
          contentBannerSwitch: content.contentBannerSwitch,
          contentTags: content.contentTags,
          contentType: content.contentType,
          contentAiFileLink: content.contentAiFileLink,
        },
      })
    })
    // podborkas.forEach(podborka => {
    //   createPage({
    //     path: podborka.node.contentSlug,
    //     component: osoznannayaPodborkaPage,
    //     context: {
    //       slug: podborka.node.contentSlug,
    //       banner: podborka.node.contentBanner,
    //     },
    //   })
    // })
}

// podborkaPage: allContentfulGranichMainContentCard(
//   filter: { contentType: { in: ["Осознанная подборка"] } }
// ) {
//   edges {
//     node {
//       contentSlug
//       contentBanner
//     }
//   }
// }

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }

  //to remove error when opening lessons in freelance page (react spring error with webpack bundling)
  if (stage.startsWith("build-javascript")) {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-spring/,
            sideEffects: true,
          },
        ],
      },
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `


      type ContentfulGranichMainTeachers implements Node {
        teacherSocialVK: String
        teacherSocialBehance: String
        teacherSocialPinterest: String
        teacherSocialInstagram: String
        teacherSocialTelegram: String
        teacherEmail: String
      }

      type ContentfulGranichMainContentCard implements Node {
        contentLinkPinterest: String
        contentLinkBehance: String
        contentLinkMedium: String
        contentYoutubeTiming: String
        contentYoutubeVideoLink: String
        contentBannerSwitch: Boolean
        contentBanner: String
        contentAiFileLink: String
        contentZIPLink: String
      }



      type ContentfulGranichCourse implements Node {
        courseStart: String
        courseDuration: String
        courseStartAndEnd: String
        courseStream: String
        coursePrice: String
        courseButtonText: String
        courseAdditionalType: String
        courseBannerSubtext: String   
        childContentfulGranichCourseCoursePolicyRichTextNode: ContentfulCoursePolicy      
      }
      type ContentfulCoursePolicy {
        json: JSON
      }







      type ContentfulGranichCourseCurriculum implements Node {
        curriculumImportantText: ContentfulCurriculumImportantText
        childContentfulGranichCourseCurriculumCurriculumFirstColumnRichTextNode: ContentfulCurriculumFirstColumn
        childContentfulGranichCourseCurriculumCurriculumSecondColumnRichTextNode: ContentfulCurriculumSecondColumn
        childContentfulGranichCourseCurriculumCurriculumThirdColumnRichTextNode: ContentfulCurriculumThirdColumn
        childContentfulGranichCourseCurriculumCurriculumFourthColumnRichTextNode: ContentfulCurriculumFourthColumn
        childContentfulGranichCourseCurriculumCurriculumImportantTextRichTextNode: ContentfulCurriculumImportantText
        curriculumImportantDescr: String
      }
      type ContentfulCurriculumImportantText {
        json: JSON
      }
      type ContentfulCurriculumFirstColumn {
        json: JSON
      }
      type ContentfulCurriculumSecondColumn {
        json: JSON
      }
      type ContentfulCurriculumThirdColumn {
        json: JSON
      }
      type ContentfulCurriculumFourthColumn {
        json: JSON
      }


      type ContentfulGranichCourseFeatures implements Node {
        featuresLink: String
      }



      type ContentfulGranichCourseAnswers implements Node {
        childContentfulGranichCourseAnswersAnswersFirstColumnRichTextNode: ContentfulAnswersFirstColumn
        childContentfulGranichCourseAnswersAnswersSecondColumnRichTextNode: ContentfulAnswersSecondColumn
      }
      type ContentfulAnswersFirstColumn {
        json: JSON
      }
      type ContentfulAnswersSecondColumn {
        json: JSON
      }



      type ContentfulGranichCollectionVideo implements Node {
        videoPageLink: String
        videoContentIcons: [String]
        childContentfulGranichCollectionVideoVideoAdditionalLinksRichTextNode: ContentfulVideoAdditionalLinks
      }
      type ContentfulVideoAdditionalLinks {
        json: JSON
      }


      type ContentfulGranichCourseReviewsHeader implements Node {
        reviewsHeaderLinkVk: String
      }



      type ContentfulGranichCourseCurriculumHeader implements Node {
        childContentfulGranichCourseCurriculumHeaderCurriculumHeaderSummaryRichTextNode: ContentfulCurriculumHeaderSummary
      }
      type ContentfulCurriculumHeaderSummary {
        json: JSON
      }

      type ContentfulGranichCoursePortfolioHeader implements Node {
        childContentfulGranichCoursePortfolioHeaderPortfolioHeaderSummaryRichTextNode: ContentfulPortfolioHeaderSummary
      }
      type ContentfulPortfolioHeaderSummary {
        json: JSON
      }


      
        


    `
  createTypes(typeDefs)
}
