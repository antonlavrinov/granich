require('dotenv').config({
  path: `.env`
})

module.exports = {
  siteMetadata: {
    title: `Онлайн-школа Granich`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-background-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/ // See below to configure properly
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    
    `gatsby-transformer-sharp`,
    
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'yej6fivg4hs3',
        accessToken: 'qM75FANyENYf6D1mk7FPZmm4IG4tMGyQKGkvF5LRJQ4',
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Онлайн-школа Granich`,
        short_name: `Granich`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        // icon: `src/assets/images/512x512.png`,
        icons: [
          {
            src: `16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `64x64.png`,
            sizes: `64x64`,
            type: `image/png`,
          },
          {
            src: `512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ], 
        cache_busting_mode: 'none' // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: ['**/*']
        }
      }
    }
  ],
}
