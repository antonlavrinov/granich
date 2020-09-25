// require('dotenv').config({
//   path: `.env`
// })

module.exports = {
  siteMetadata: {
    title: `Онлайн-школа Granich`,
    description: `Осознанный курс по графическому дизайну от Вадима Гранича (Granich). За 2 месяца вы получите упорядоченные знания о графическом дизайне и создадите свое портфолио. А еще изучите Adobe InDesign`,
    author: `Вадим Гранич`,
    keywords: `курс, осознанный, индизайн, indesign, графический, дизайн, granich, гранич, графдизайн`,
    ogImage: `${__dirname}/src/assets/images/author.jpg`,
    siteUrl: `https://granich.design`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-background-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/ // See below to configure properly
        }
      }
    },
    `gatsby-plugin-htaccess`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `inter\:400,500,600,700`,
          `EB Garamond\:400,500i,500`// you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        // The ID of yandex metrika.
        trackingId: 67665898,
        // Enabled a webvisor. The default value is `false`.
        webvisor: true,
        // Enables tracking a hash in URL. The default value is `false`.
        trackHash: true,
        // Defines where to place the tracking script - `false` means before body (slower loading, more hits)
        // and `true` means after the body (faster loading, less hits). The default value is `false`.
        afterBody: true,
        // Use `defer` attribute of metrika script. If set to `false` - script will be loaded with `async` attribute.
        // Async enables earlier loading of the metrika but it can negatively affect page loading speed. The default value is `false`.
        defer: false,
      },
    },
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
        icon: `src/assets/images/512x512.png`,
        icons: [
          {
            "src": "favicons/32x32.png",
            "sizes": "32x32",
            "type": "image/png"
          },
          {
            "src": "32x32.png",
            "sizes": "32x32",
            "type": "image/png"
          },
          {
            "src": "48x48.png",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "src": "64x64.png",
            "sizes": "64x64",
            "type": "image/png"
          },
          {
            "src": "72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ], 
        // cache_busting_mode: 'none' // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     workboxConfig: {
    //       globPatterns: ['**/*']
    //     }
    //   }
    // }
  ],
}
