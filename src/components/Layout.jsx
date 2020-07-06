/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "normalize.css";
// import "./layout.css";
import {GlobalStyle} from './style';
import '../styles/App.scss';
import Footer from "./Footer";
import PageTop from "./PageTop";




const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  

  return (
    <>
        <GlobalStyle/>
        <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
        <PageTop/>
        <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
