const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;
    const contentPost = path.resolve('./src/pages/content-post.jsx');
    return graphql(`
        {
            allContentfulGranichMainPostCard {
                edges {
                    node {
                        postSlug
                    }
                }
            }
        }

    `).then(result => {
        if(result.errors) {
            throw result.errors
        }
        const posts = result.data.allContentfulGranichMainPostCard.edges;
        posts.forEach((post, index) => {
            createPage({
                path: post.node.postSlug,
                component: contentPost,
                context: {
                    slug: post.node.postSlug
                }
            })
        })
    })
}
