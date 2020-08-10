const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;
    const contentContent = path.resolve('./src/templates/content-post.jsx');
    return graphql(`
        {
            allContentfulGranichMainContentCard {
                edges {
                    node {
                        contentSlug
                        contentYoutubeVideoLink
                    }
                }
            }
        }

    `).then(result => {
        if(result.errors) {
            throw result.errors
        }
        const contents = result.data.allContentfulGranichMainContentCard.edges;
        contents.forEach((content, index) => {
            createPage({
                path: content.node.contentSlug,
                component: contentContent,
                context: {
                    slug: content.node.contentSlug,
                    title: content.node.contentTitle
                }
            })
        })
    })
}
