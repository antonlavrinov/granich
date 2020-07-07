/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "normalize.css";
// import "./layout.css";
import {GlobalStyle} from './style';
import '../styles/App.scss';
import Footer from "./Footer";
import PageTop from "./PageTop";
import Support from "./Support";




const Layout = ({ children }) => {
  const [pageTop, setPageTop] = useState(true)
  // useEffect(() => {
  //     // const scrollFunc = () => {
  
  //     // }

  //     window.addEventListener('scroll', () => {
  //         if(window.pageYOffset > 900) {
  //             setPageTop(true)
  //         } else {
  //             setPageTop(false)
  //         }
  //     })
  //     // return () => {

  //     // }
  // }, [])


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
        <PageTop pageTop={pageTop}/>
        <Support/>
        <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
