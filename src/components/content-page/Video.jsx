import React, { useEffect, useState } from "react"
import { Container } from "../style"
import styled from "styled-components"
import Masonry from "react-masonry-css"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import BackgroundImage from "gatsby-background-image"
// import YoutubeIcon from '../../assets/svgs/youtube-icon.svg';
// import { Modal } from "react-responsive-modal";
import { INLINES } from "@contentful/rich-text-types"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

// import Cross from '../../assets/svgs/cross.svg';

// const Youtube = styled(props => <YoutubeIcon {...props}/>)`
//     width: 5vw;
//     height: 3.5vw;
//     transition: transform 0.2s ease;
//     @media only screen and (max-width: 575px) {
//         width: 15vw;
//         height: 11.5vw;
//     }

// `

const VideoSection = styled.section`
  margin-top: 1.7vw;
  margin-bottom: 1.7vw;
  @media only screen and (max-width: 575px) {
    margin-top: 5vw;
    margin-bottom: 5vw;
  }
`

const VideoWrapper = styled.div`
  padding: 5.4vw 3vw 2vw;
  border-bottom: 0.25vw dotted white;
  background: white;
  border-radius: 0.6vw;
  @media only screen and (max-width: 575px) {
    padding: 5.4vw 5vw 5.4vw;
    border-radius: 2.5vw;
  }
`

const VideoHeader = styled.div`
  display: flex;
  padding-bottom: 5.7vw;
  width: 100%;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
  }
`

const VideoSectionTitle = styled.h2`
  color: var(--granich-black);
  font-size: 4.55vw;
  letter-spacing: -0.2vw;
  font-weight: 700;
  line-height: 0.85;
  margin-right: 2vw;
  width: 33vw;
  min-width: 33vw;
  @media only screen and (max-width: 575px) {
    font-size: 11vw;
    letter-spacing: -0.7vw;
    line-height: 1;
    margin-right: 0;
    margin-bottom: 4vw;
    width: 100%;
  }
`

const VideoSectionText = styled.div`
  color: var(--granich-black);
  font-size: 1.5vw;
  margin-top: -1.2vw;
  line-height: 1.55;
  letter-spacing: 0.025vw;
  font-weight: 500;
  @media only screen and (max-width: 575px) {
    font-size: 3.9vw;
    letter-spacing: -0.08vw;
  }
`

const VideoList = styled.div`
  margin-bottom: 7vw;
  :last-child {
    margin-bottom: 0;
  }
`

const VideoListDescr = styled.div`
  color: var(--granich-black);
  font-size: 1.5vw;
  margin-top: -1.2vw;
  line-height: 1.55;
  font-weight: 500;
  width: 45vw;
  margin-bottom: 3vw;
  @media only screen and (max-width: 575px) {
    font-size: 3.9vw;
    letter-spacing: -0.08vw;
    width: 100% !important;
  }
`

const VideoItemWrapper = styled.div`
  padding: 1.8vw 1.8vw 2.3vw;
  border-radius: 0.6vw;
  background: #2a2a2a;
  transition: transform 0.2s ease;
  display: block;
  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }
  @media only screen and (max-width: 575px) {
    padding: 4vw 4vw 7vw;
    border-radius: 1.7vw;
  }
`

const VideoItemWrapperLink = styled.a``

const VideoItemImage = styled(props => <BackgroundImage {...props} />)`
  height: 17vw;
  margin-bottom: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
    svg {
      transform: scale(1.05);
    }
  }
  @media only screen and (max-width: 575px) {
    height: 40vw;
    margin-bottom: 5vw;
  }
`

const VideoItemInfo = styled.div`
  color: white;
  display: flex;
`

const VideoItemInfoDetails = styled.div`
  color: inherit;
  min-width: 6.3vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media only screen and (max-width: 575px) {
    min-width: 17vw;
  }
`

const VideoItemInfoText = styled.div`
  color: inherit;
  p {
    color: var(--granich-light-grey);
    font-size: 1.15vw;
    line-height: 1.35;
  }
  i {
    color: white;
    font-size: 0.8vw;
    font-style: normal;
    display: block;
    margin-bottom: 0.3vw;
  }
  h3 {
    color: white;
    font-size: 1.17vw;
    margin-bottom: 0.7vw;
    font-weight: 500;
    line-height: 1.35;
  }
  b {
    color: white;
    font-size: inherit;
    font-weight: 500;
    line-height: 1.35;
  }
  a {
    text-decoration: underline;
  }
  @media only screen and (max-width: 575px) {
    p {
      font-size: 3.5vw;
    }
    i {
      font-size: 2.6vw;
      margin-bottom: 0.5vw;
    }
    h3 {
      font-size: 3.5vw;
      margin-bottom: 2vw;
    }
  }
`

const VideoItemNumber = styled.div`
  color: var(--granich-red);
  font-family: EB Garamond;
  font-style: italic;
  font-size: 2.3vw;
  @media only screen and (max-width: 575px) {
    font-size: 6.5vw;
  }
`

const VideoItemInfoTiming = styled.div`
  color: inherit;
  font-size: 0.8vw;
  border-bottom: 2px solid var(--granich-red);
  position: relative;
  padding: 0 0.65vw 0.2vw;
  :before {
    content: "";
    width: 0.35vw;
    height: 0.35vw;
    background: var(--granich-red);
    position: absolute;
    top: 20%;
    left: 0;
    border-radius: 100vw;
  }
  @media only screen and (max-width: 575px) {
    font-size: 2.5vw;
    border-bottom: 2px solid var(--granich-red);
    padding: 0 0.8vw 1vw 2.2vw;
    margin-bottom: 0.8vw;
    :before {
      width: 1vw;
      height: 1vw;
      top: 20%;
      left: 0;
    }
  }
`

const VideoIcons = styled.div``

const VideoIconImg = styled(props => <Img {...props} />)`
  width: 2.5vw;
  height: 2.5vw;
  margin: 0.2vw 0;
  @media only screen and (max-width: 575px) {
    width: 9vw;
    height: 9vw;
    margin: 1vw 0;
  }
`

// const VideoModal = styled.div`
//     display: block;
//     padding: 2vw;
//     background: #2b2b2b;
//     border-radius: 0.6vw;
//     @media only screen and (max-width: 575px) {
//         padding: 4vw;
//         background: #2b2b2b;
//         border-radius: 1.7vw;
//     }
// `

// const VideoModalWrapper = styled.div`
//     position: relative;
//     padding-bottom: 56%;
//     height: 0;
//     overflow: hidden;
//     iframe {
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//     }
// `

// const VideoCross = styled.div`
//       position: absolute;
//       top: -0.8vw;
//       right: -4vw;
//       svg {
//           fill: rgba(0,0,0,0.5);
//           width: 4vw;
//           height: 4vw;
//       }
//       :hover {
//           cursor: pointer;
//           svg {
//             fill: var(--granich-red);
//           }

//       }
//       @media only screen and (max-width: 575px) {
//         top: -12vw;
//         right: -2.3vw;
//         svg {
//             width: 12vw;
//             height: 12vw;
//         }
//       }
// `

const breakpointColumnsObj = {
  default: 2,
  575: 1,
}

// const breakpointColumnsObjSecond = {
//     default: 3,
//     575: 1,
// };

// const breakpointColumnsObj1 = {
//     default: 2,
//     575: 1,
// }

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: node => {
      return (
        <a href={node.data.uri} rel="noopener noreferrer" target="_blank">
          {node.content[0].value}
        </a>
      )
    },
  },
}

const VideoItem = ({
  text,
  number,
  image,
  links,
  timing,
  videoPageLink,
  videoIcons,
  mediumIcon,
  behanceIcon,
  pdfIcon,
  zipIcon,
}) => {
  return (
    <VideoItemWrapper>
      <VideoItemWrapperLink
        target="_blank"
        href={videoPageLink}
        rel="noopener noreferrer"
      >
        <VideoItemImage fluid={image}>{/* <Youtube/> */}</VideoItemImage>
        <VideoItemInfo>
          <VideoItemInfoDetails>
            <VideoItemNumber>{`№${number}`}</VideoItemNumber>
            {videoIcons && (
              <VideoIcons>
                {videoIcons.map((item, idx) => {
                  return (
                    <React.Fragment key={idx}>
                      {item === "PDF" && <VideoIconImg fluid={pdfIcon} />}
                      {item === "Behance" && (
                        <VideoIconImg fluid={behanceIcon} />
                      )}
                      {item === "Medium" && <VideoIconImg fluid={mediumIcon} />}
                      {item === "Zip" && <VideoIconImg fluid={zipIcon} />}
                    </React.Fragment>
                  )
                })}
              </VideoIcons>
            )}
            {/* {links && <VideoItemInfoLinks className="collection_link">{documentToReactComponents(links.json, options)}</VideoItemInfoLinks>} */}
            <VideoItemInfoTiming>{timing}</VideoItemInfoTiming>
          </VideoItemInfoDetails>
          <VideoItemInfoText>
            {documentToReactComponents(text, options)}
          </VideoItemInfoText>
        </VideoItemInfo>
      </VideoItemWrapperLink>
    </VideoItemWrapper>
  )
}

const Video = ({ data, topDescription, categoryTwo, categoryThree }) => {
  const [firstCategory, setFirstCategory] = useState([])
  const [secondCategory, setSecondCategory] = useState([])

  useEffect(() => {
    const firstCategoryItems = data.filter(
      videoItem => videoItem.node.videoCategory === "1"
    )
    const secondCategoryItems = data.filter(
      videoItem => videoItem.node.videoCategory === "2"
    )
    setFirstCategory(firstCategoryItems)
    setSecondCategory(secondCategoryItems)
  }, [])

  const videoImageData = useStaticQuery(graphql`
    query videoContentIcons {
      videoContentIconPDFImg: file(relativePath: { eq: "pdf-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      videoContentIconBehance: file(relativePath: { eq: "behance-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      videoContentIconMedium: file(relativePath: { eq: "medium-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      videoContentZipIcon: file(relativePath: { eq: "zip-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const pdf = videoImageData.videoContentIconPDFImg.childImageSharp.fluid
  const behance = videoImageData.videoContentIconBehance.childImageSharp.fluid
  const medium = videoImageData.videoContentIconMedium.childImageSharp.fluid
  const zip = videoImageData.videoContentZipIcon.childImageSharp.fluid
  // const [modalIsOpen, setIsOpen] = useState(false);
  // const [videoLink, setvideoLink] = useState('');

  // const openModal = (link) => {
  //     setIsOpen(true);
  //     setvideoLink(link)

  // }

  // const closeModal = () => {
  //     setIsOpen(false);
  // }
  return (
    <VideoSection>
      <Container>
        {/* <Modal  center 
                        closeIcon={<div></div>}
                        open={modalIsOpen} 
                        onClose={closeModal}
                        focusTrapped={false}
                        classNames={{
                            overlay: 'customOverlay',
                            modal: 'customVideoModal',
                        }}>
                    <VideoModal>
                        <div className="loadingio-spinner-rolling-ta5f1nqy5p">
                            <div className="ldio-6b142d04hhl">
                                <div></div>
                            </div>
                        </div>
                        <VideoCross onClick={closeModal}><Cross/></VideoCross>
                        <VideoModalWrapper>
                            <iframe title="youtubeFrame"  src={videoLink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </VideoModalWrapper>
                       
                    </VideoModal>
                </Modal> */}
        <VideoWrapper>
          <VideoHeader>
            <VideoSectionTitle>Ценные видеолекции</VideoSectionTitle>
            <VideoSectionText>{topDescription}</VideoSectionText>
          </VideoHeader>

          <VideoList>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {firstCategory.map((videoItem, idx) => {
                return (
                  <React.Fragment key={videoItem.node.id}>
                    <VideoItem
                      timing={videoItem.node.videoTiming}
                      image={videoItem.node.videoImagePreview.fluid}
                      //  setIsOpen={openModal}
                      videoPageLink={videoItem.node.videoPageLink}
                      pdfIcon={pdf}
                      behanceIcon={behance}
                      mediumIcon={medium}
                      zipIcon={zip}
                      //  videoLink={videoItem.node.videoLink}
                      videoIcons={videoItem.node.videoContentIcons}
                      number={idx + 1}
                      links={
                        videoItem.node
                          .childContentfulGranichCollectionVideoVideoAdditionalLinksRichTextNode
                      }
                      text={videoItem.node.videoText.json}
                    />
                  </React.Fragment>
                )
              })}
            </Masonry>
          </VideoList>

          <VideoList>
            <VideoListDescr>{categoryTwo}</VideoListDescr>

            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {secondCategory.map((videoItem, idx) => {
                return (
                  <React.Fragment key={videoItem.node.id}>
                    <VideoItem
                      timing={videoItem.node.videoTiming}
                      image={videoItem.node.videoImagePreview.fluid}
                      //  setIsOpen={openModal}
                      videoPageLink={videoItem.node.videoPageLink}
                      pdfIcon={pdf}
                      behanceIcon={behance}
                      mediumIcon={medium}
                      //  videoLink={videoItem.node.videoLink}
                      videoIcons={videoItem.node.videoContentIcons}
                      number={firstCategory.length + idx + 1}
                      links={
                        videoItem.node
                          .childContentfulGranichCollectionVideoVideoAdditionalLinksRichTextNode
                      }
                      text={videoItem.node.videoText.json}
                    />
                  </React.Fragment>
                )
              })}
            </Masonry>
          </VideoList>
          {/* )} */}
          {/* {categoryThree && (
                            <VideoList>
                                <VideoListDescr style={{width: '28vw'}}>
                                    {categoryThree}
                                </VideoListDescr>
                                <Masonry
                                    breakpointCols={breakpointColumnsObj}
                                    className="my-masonry-grid"
                                    columnClassName="my-masonry-grid_column">
                                        {data.map((videoItem, idx) => {
                                            return (
                                                <React.Fragment key={videoItem.node.id}>{videoItem.node.videoCategory === '3' && <VideoItem timing={videoItem.node.videoTiming} 
                                                                                                                                                image={videoItem.node.videoImagePreview.fluid} 
                                                                                                                                                // setIsOpen={openModal}
                                                                                                                                                // videoLink={videoItem.node.videoLink}
                                                                                                                                                pdfIcon={pdf}
                                                                                                                                                behanceIcon={behance}
                                                                                                                                                mediumIcon={medium}
                                                                                                                                                videoIcons={videoItem.node.videoContentIcons}
                                                                                                                                                videoPageLink={videoItem.node.videoPageLink}
                                                                                                                                                number={videoItem.node.videoOrderNumber} 
                                                                                                                                                links={videoItem.node.childContentfulGranichCollectionVideoVideoAdditionalLinksRichTextNode} 
                                                                                                                                                text={videoItem.node.videoText.json}/>}</React.Fragment> 
                                            )
                                        })}
                                </Masonry>
                            </VideoList>
                        )} */}
        </VideoWrapper>
      </Container>
    </VideoSection>
  )
}

export default Video
