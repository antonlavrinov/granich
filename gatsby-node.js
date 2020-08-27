const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;
    const contentContent = path.resolve('./src/templates/content-post.jsx');
    return graphql(`
        {
            content: allContentfulGranichMainContentCard(filter: {contentType: {in: ["Youtube", "Youtube + Medium + Behance"]}}) {
                edges {
                    node {
                        contentSlug
                        contentYoutubeVideoLink
                        contentBanner
                    }
                }
            }
        }

    `).then(result => {
        if(result.errors) {
            throw result.errors
        }
        const contents = result.data.content.edges;
        contents.forEach((content, index) => {
            createPage({
                path: content.node.contentSlug,
                component: contentContent,
                context: {
                    slug: content.node.contentSlug,
                    banner: content.node.contentBanner
                }
            })
        })
    })
}



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
  }