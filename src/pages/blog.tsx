import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Header from "../components/global/header"
import Blog from "../components/blog"
import ogImage from "../assets/images/seo/index-main.jpg"
import ogImageVK from "../assets/images/seo/vk/index-main.jpg"

const BlogPage: React.FC = () => (
  <Layout>
    <SEO
      title="Ведём блог для дизайнеров"
      ogImage={ogImage}
      ogImageVk={ogImageVK}
    />
    <Header type={"dark"} />
    <div className="section-top-block"></div>
    <Blog />
  </Layout>
)

export default BlogPage
