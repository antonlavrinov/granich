import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import SEO from '../components/seo'
import {graphql} from 'gatsby'
import styled from 'styled-components';
import {Container} from '../components/style';
import YoutubeVideo from '../components/content-page/YoutubeVideo'
import Mailing from '../components/Mailing';
import ContentLinks from '../components/content-page/ContentLinks'

const ContentSection = styled.section`
    padding-top: 10vw;
`

const ContentWrapper = styled.div`
`


export const pageQuery = graphql`
    query ContentfulContentBySlug($slug: String!) {
        contentfulContent: contentfulGranichMainContentCard( contentSlug: { eq: $slug }) {
            contentSlug
            contentTitle
            contentYoutubeVideoLink
            contentLinkBehance {
                contentLinkBehance
            }
            contentLinkMedium {
                contentLinkMedium
            }
            contentPDF {
                file { 
                  url 
                }
              }
            contentDescription {
                contentDescription
            }

        }
    }
`

const ContentPage = ({data}) => {
    return (
        <Layout>
            <Header type="dark"/>
            <YoutubeVideo data={data}/>
            <ContentLinks data={data}/>
            {/* <ContentSection>
                <Container>
                    <ContentWrapper>
                        <div>{data.contentfulContent.contentTitle}</div>
                        {data.contentfulContent.contentPDF ? (
                            <a download target="_blank" href={data.contentfulContent.contentPDF.file.url}>Скачать PDF</a>
                        ) : null}

                        {data.contentfulContent.contentYoutubeVideoLink ? (
                            <div>
                                dffdfd
                                <iframe width="560" height="315" src={data.contentfulContent.contentYoutubeVideoLink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            
                        ) : null}
                        
                    </ContentWrapper>
                </Container>
            </ContentSection> */}
            <Mailing/>
            <SEO title="Онлайн-школа Granich" />
        </Layout>
    )
}

export default ContentPage
