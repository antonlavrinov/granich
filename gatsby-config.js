// require('dotenv').config({
//   path: `.env`
// })
const { BLOCKS } = require('@contentful/rich-text-types')


module.exports = {
  siteMetadata: {
    title: `Онлайн-школа Granich`,
    description: `Онлайн-школа Granich. Делаем из любви, а не страха. Курсы с осознанным подходом. Выточенно. Интенсивно. С дедлайнами.`,
    author: `Вадим Гранич`,
    keywords: `школа, осознанность, фриланс, графический, дизайн, granich, гранич, графдизайн, курсы`,
    ogImage: `images/index.jpg`,
    ogImageVk: `images/index-vk.jpg`,
    siteUrl: `https://granich.design`
  },
  flags: {
    FAST_DEV: true,
    DEV_SSR: false,
    FAST_REFRESH: true,
  },


  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-179659917-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        // head: false,
        // Setting this parameter is optional
        // anonymize: true,
        // Setting this parameter is also optional
        // respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        // defer: false,
        // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
//     <!-- Global site tag (gtag.js) - Google Analytics -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=UA-179098660-1"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'UA-179098660-1');
// </script>


    `gatsby-plugin-smoothscroll`,
    `gatsby-background-image`,
    "gatsby-plugin-use-query-params",

    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
          implementation: require('sass')
      },
    },
    {
      resolve: '@contentful/gatsby-transformer-contentful-richtext',
      options: {
        renderOptions: {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node => {
              return `<img class='custom-asset' src="${
                node.data.target.fields.file['en-US'].url
              }"/>`
            }
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://granich.design',
        sitemap: 'https://granich.design/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }, {userAgent: 'Yandex', allow: '/'}, {userAgent: 'Googlebot', allow: '/'}]
      }
    },
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
          `inter\:100,200,400,500,600,700,800,900`,
          `EB Garamond\:400,400i,500i,500,600i`,// you can also specify font weights and styles
          // `Bebas Neue\:400`
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
        // icons: [
        //   {
        //     "src": "favicons/32x32.png",
        //     "sizes": "32x32",
        //     "type": "image/png"
        //   },
        //   {
        //     "src": "32x32.png",
        //     "sizes": "32x32",
        //     "type": "image/png"
        //   },
        //   {
        //     "src": "48x48.png",
        //     "sizes": "48x48",
        //     "type": "image/png"
        //   },
        //   {
        //     "src": "64x64.png",
        //     "sizes": "64x64",
        //     "type": "image/png"
        //   },
        //   {
        //     "src": "72x72.png",
        //     "sizes": "72x72",
        //     "type": "image/png"
        //   },
        //   {
        //     "src": "96x96.png",
        //     "sizes": "96x96",
        //     "type": "image/png"
        //   },
        //   {
        //     "src": "144x144.png",
        //     "sizes": "144x144",
        //     "type": "image/png"
        //   },
        //   {
        //     "src": "192x192.png",
        //     "sizes": "192x192",
        //     "type": "image/png"
        //   },
        //   {
        //     "src": "256x256.png",
        //     "sizes": "256x256",
        //     "type": "image/png"
        //   },
        //   {
        //     "src": "384x384.png",
        //     "sizes": "384x384",
        //     "type": "image/png"
        //   },
        //   {
        //     "src": "512x512.png",
        //     "sizes": "512x512",
        //     "type": "image/png"
        //   }
        // ], 
        // cache_busting_mode: 'none' // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     devMode: true,
    //   },
    // },
    // `gatsby-plugin-remove-serviceworker`,
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
