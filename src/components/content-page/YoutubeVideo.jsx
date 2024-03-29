import React from "react"
import { Container } from "../style"
import styled from "styled-components"
import YoutubeIcon from "../../assets/svgs/youtube-icon.svg"

const Youtube = styled(props => <YoutubeIcon {...props} />)`
  width: 7.2vw;
  margin-left: -0.9vw;
  margin-top: -0.2vw;
  margin-right: 1.8vw;
  @media only screen and (max-width: 575px) {
    width: 23vw;
    margin-top: 0;
  }
`

const YoutubeSection = styled.section`
  margin-bottom: 1.7vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
  }
`

const YoutubeWrapper = styled.div`
  border-radius: 0.6vw;
  background: #2a2a2a;
  @media only screen and (max-width: 575px) {
    border-radius: 2.5vw;
  }
`

const YoutubeBlock = styled.div`
  // width: 100%;
  height: 45vw;
  padding: 3vw;
  position: relative;

  iframe {
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
  }
  @media only screen and (max-width: 575px) {
    padding: 4vw 6.6vw;
    height: auto;
    iframe {
      position: relative;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      height: 43vw;
    }
  }
`

const ContentInfo = styled.div`
  background: #1e1e1e;
  padding: 2.5vw 3vw;
  display: flex;
  align-items: flex-start;
  border-radius: 0 0 0.6vw 0.6vw;
  @media only screen and (max-width: 575px) {
    border-radius: 0 0 2.5vw 2.5vw;
    padding: 4vw 6.6vw;
    align-items: center;
  }
`
const ContentInfoTitle = styled.h1`
  font-size: 2vw;
  font-weight: 500;
  color: white;
  width: 35vw;
  margin-top: -0.25vw;
  @media only screen and (max-width: 575px) {
    font-size: 3.6vw;
    width: 100%;
    margin-top: -1.5vw;
    letter-spacing: -0.02vw;
  }
`
const ContentInfoTags = styled.div`
  margin-left: auto;
  display: flex;
  // height: auto;
  // height: 0%;
  @media only screen and (max-width: 575px) {
    display: none;
  }
`
const ContentInfoTagsMobile = styled.div`
  display: none;
  @media only screen and (max-width: 575px) {
    display: flex;
    margin-bottom: 3vw;
  }
`

const ContentInfoTag = styled.div`
  border: 1px solid white;
  padding: 0.4vw 0.9vw;
  display: block;
  // line-height: 0;
  border-radius: 100vw;
  color: white;
  margin-right: 1vw;
  font-size: 1.18vw;
  :last-child {
    margin-right: 0;
  }
  @media only screen and (max-width: 575px) {
    font-size: 3.5vw;
    padding: 1.2vw 2vw;
    margin-right: 2.5vw;
    :last-child {
      margin-right: 0;
    }
  }
`

const YoutubeVideo = ({ data }) => {
  return (
    <YoutubeSection>
      <Container>
        <YoutubeWrapper>
          <YoutubeBlock>
            <ContentInfoTagsMobile>
              {data.contentTags.map((tag, idx) => {
                return <ContentInfoTag key={idx}>{tag}</ContentInfoTag>
              })}
            </ContentInfoTagsMobile>
            <div className="loadingio-spinner-rolling-ta5f1nqy5p">
              <div className="ldio-6b142d04hhl">
                <div></div>
              </div>
            </div>
            {data.contentYoutubeVideoLink && (
              <iframe
                title="youtubeFrame"
                width="100%"
                src={`${data.contentYoutubeVideoLink}?vq=hd1080`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </YoutubeBlock>
          <ContentInfo>
            <Youtube />
            <ContentInfoTitle>
              {data.contentTitle}
            </ContentInfoTitle>
            <ContentInfoTags>
              {data.contentTags.map((tag, idx) => {
                return <ContentInfoTag key={idx}>{tag}</ContentInfoTag>
              })}
            </ContentInfoTags>
          </ContentInfo>
        </YoutubeWrapper>
      </Container>
    </YoutubeSection>
  )
}

export default YoutubeVideo
