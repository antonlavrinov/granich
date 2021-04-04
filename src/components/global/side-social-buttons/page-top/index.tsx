import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import * as SC from "./PageTop"

const PageTop: React.FC = () => {
  return (
    <>
      <SC.WrapperDesktop onClick={() => scrollTo("#header")}>
        <SC.Wrapper />
      </SC.WrapperDesktop>
      <SC.WrapperMobile to="#header">
        <SC.WrapperMobileIcon />
      </SC.WrapperMobile>
    </>
  )
}

export default PageTop
