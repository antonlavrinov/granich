/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "normalize.css";
import {GlobalStyle} from './style';
import '../styles/App.scss';
import Footer from "./Footer";
import PageTop from "./PageTop";
import Support from "./Support";




const Layout = ({ children }) => {

  return (
    <>
        <GlobalStyle/>
            <main>{children}</main>
        <PageTop/>
        <Support/>
        <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
