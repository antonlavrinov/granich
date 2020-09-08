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




const SEO = ({ description, lang, meta, title, keywords, ogImage, ogDescription }) => {
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
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaKeywords = keywords || site.siteMetadata.keywords
  const metaOgImage = ogImage || site.siteMetadata.OgImage
  const metaOgDescription = ogDescription || site.siteMetadata.description
  const metaTitle = title ||  site.siteMetadata.title

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
          content: ogDescription,
        },
        {
          property: `og:image`,
          content: ogImage
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
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: metaKeywords
        }
      ].concat(meta)}
    >
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
