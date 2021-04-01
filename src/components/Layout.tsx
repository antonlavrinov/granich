import React from "react"
import PropTypes from "prop-types"
import "normalize.css"
import { GlobalStyle } from "./style"
import "../styles/App.scss"
import Footer from "./global/footer"
import SideButtons from "./SideButtons"
import Cookies from "./Cookies"

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
      <SideButtons />
      <Cookies />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
