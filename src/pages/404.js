import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Header from "../components/global/header"
import ogImage from "../assets/images/seo/index-main.jpg"
import ogImageVK from "../assets/images/seo/vk/index-main.jpg"
import NotFound from "../components/404"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Страница не найдена" ogImage={ogImage} ogImageVk={ogImageVK} />
    <Header type={"dark"} />
    <div className="section-top-block"></div>
    <NotFound />
  </Layout>
)

export default NotFoundPage
