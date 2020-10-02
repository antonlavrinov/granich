/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby";




const SEO = ({ description, lang, meta, title, keywords, ogImage, url, ogImageVk }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            ogImage
            OgImageVk
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaKeywords = keywords || site.siteMetadata.keywords
  const metaOgImage = ogImage || site.siteMetadata.OgImage
  const metaTitle = title ||  site.siteMetadata.title
  const metaOgUrl = url || site.siteMetadata.siteUrl
  const metaOgImageVk = ogImageVk || site.siteMetadata.OgImageVk

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      // link={faviconLinks}
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `vk:image`,
          content: metaOgImageVk
        },
        {
          property: `og:image`,
          content: metaOgImage
        },

        {
          property: `og:image:width`,
          content: '1200'
        },        
        {
          property: `og:image:height`,
          content: '630'
        },   
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: metaOgUrl,
        },
        // {
        //   name: `twitter:title`,
        //   content: metaTitle,
        // },
        // {
        //   name: `twitter:image`,
        //   content: metaOgImage,
        // },
        // {
        //   name: `twitter:description`,
        //   content: metaDescription,
        // },
        {
          name: `keywords`,
          content: metaKeywords
        }
      ].concat(meta)}
    >
      {url && <link rel="canonical" href={metaOgUrl}/>}

    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `ru`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
