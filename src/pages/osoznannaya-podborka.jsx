import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import {graphql} from 'gatsby';
import Tools from '../components/content-page/Tools';
import Video from '../components/content-page/Video';
import Books from '../components/content-page/Books';
import Mailing from '../components/Mailing';



// export const pageQuery = graphql`
//     query ContentfulOsoznannayaPodborkaBySlug {
//         osoznannayaPodborkaContent: contentfulGranichMainContentCard( contentSlug: { eq: 'osoznannaya-podborka' }) {
//             contentSlug
//             contentBannerSwitch
//             contentTags
//         }
//         courseBanner: contentfulGranichCourse(courseTitle: {eq: $banner}) {
//             courseTitle
//             courseStart
//             courseDuration
//             courseStatus
//             courseType
//             courseBannerImage {
//                 fluid(maxWidth: 120) {
//                     ...GatsbyContentfulFluid
//                   }
//             }
//             courseBannerSubtext
//             courseSlug
//             courseTags
//         }
//     }
// `




const OsoznannayaPodborkaPage = () => {
    return (
        <Layout>
            <Header type={'dark'}/>
            <div className="section-top-block"></div>
            <SEO title="Осознанная подборка"
                // description="Мастер-класс по графической системе VHS"
                // keywords={['vhs', 'графсистема']}
                // ogImage={ogImage}
                url="https://anton-dev.ru/osoznannaya-podborka" />
            {/* <CourseOffer/> */}
            <Mailing/>
            <Video/>
            <Books/>
            <Tools/>

    
      </Layout>
    )
}

export default OsoznannayaPodborkaPage
