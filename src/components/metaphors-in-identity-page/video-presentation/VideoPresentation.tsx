import React from "react"
import styled from "styled-components"
import PotokIcon from "../../../assets/svgs/graph-design/graph-design-potok-icon.svg"
import DateIcon from "../../../assets/svgs/graph-design/graph-design-date-icon.svg"

export const Potok = styled(props => <PotokIcon {...props} />)`
  width: 1.3vw;
  height: 1.3vw;
  margin-right: 0.3vw;
  fill: white;
  @media only screen and (max-width: 575px) {
    width: 4.3vw;
    height: 4vw;
    margin-right: 1vw;
    margin-top: -0.3vw;
  }
`

export const Date = styled(props => <DateIcon {...props} />)`
  width: 1.3vw;
  height: 1.3vw;
  fill: var(--granich-red);
  margin-right: 0.3vw;
  @media only screen and (max-width: 575px) {
    width: 4.3vw;
    height: 4vw;
    margin-right: 1vw;
    margin-top: -0.8vw;
  }
`

export const Section = styled.section`
  margin-bottom: 2vw;
`

export const Wrapper = styled.div`
  background: white;
  // background: #2A2A2A;
  border-radius: 0.6vw;
  padding: 4vw;

  @media only screen and (max-width: 575px) {
    padding: 6vw;
    border-radius: 2.5vw;
  }
`

// export const YoutubeBlock = styled.div`
//   // width: 100%;
//   height: 38vw;
//   // padding: 3vw;
//   position: relative;

//   iframe {
//     border: 2px solid rgba(0, 0, 0, 0.2);
//     position: relative;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     height: 100%;
//   }
//   @media only screen and (max-width: 575px) {
//     padding: 0;
//     height: auto;
//     iframe {
//       position: relative;
//       top: 0;
//       left: 0;
//       bottom: 0;
//       right: 0;
//       height: 43vw;
//     }
//   }
// `

export const Title = styled.h1`
  font-size: 6.9vw;
  font-weight: 500;
  font-family: EB Garamond;
  font-style: italic;
  letter-spacing: -0.1rem;
  line-height: 1;
  margin: 0;
  margin-bottom: 3vw;
  text-align: center;
  span {
    font-family: Inter;
    font-weight: bold;
    font-style: normal;
    font-size: 6.5vw;
    letter-spacing: -0.1rem;
    display: block;
  }
  @media only screen and (max-width: 575px) {
    // text-align: left;
    font-size: 11vw;
    letter-spacing: -0.1rem;
    margin-bottom: 6vw;
    span {
      font-size: 11vw;
      letter-spacing: -0.05rem;
      // white-space: nowrap;
    }
  }
`

export const TagList = styled.div`
  display: flex;
  margin-bottom: 2.1vw;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
  @media only screen and (max-width: 575px) {
    padding: 0 3.5vw;
    max-width: 100%;
  }
`

export const Tag = styled.div`
  font-size: 1.2vw;
  display: flex;
  color: var(--granich-red);
  border: 1.5px solid var(--granich-red);
  padding: 0.3vw 0.8vw;
  border-radius: 100vw;
  margin-right: 0.5vw;
  margin-bottom: 1vw;
  font-weight: 500;
  align-items: center;
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
    padding: 1.8vw 2.5vw 1.6vw;
    margin-right: 3vw;
    white-space: nowrap;
    margin-bottom: 3vw;
    line-height: 1;
  }
`

export const MainTag = styled.div`
  font-size: 1.2vw;
  display: flex;
  color: white;
  background: var(--granich-red);
  border: 1.5px solid var(--granich-red);
  padding: 0.3vw 0.8vw;
  border-radius: 100vw;
  margin-right: 0.5vw;
  font-weight: 500;
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
    padding: 1.6vw 2.5vw;
    margin-right: 3vw;
    white-space: nowrap;
    margin-bottom: 3vw;
  }
`

export const Header = styled.div`
  margin-bottom: 5vw;
`

export const HeaderDescr = styled.p`
    font-size: 1.55vw;
    font-weight: 500;
    margin-bottom: 3vw;
    /* width: 100 */
    padding: 0 5vw;
    text-align: center;
    /* margin-left: 2vw; */
    line-height: 1.5;
    @media only screen and (max-width: 575px) {
        font-size: 4.6vw;
        margin-bottom: 0;
        line-height: 1.5;
    }
`

export const VideoSection = styled.div`
  display: flex;
  /* flex-direction: column; */
  margin-bottom: 6vw;
  :last-child {
    margin-bottom: 0;
    flex-direction: row-reverse;
    .metaphors-video-section-content {
      margin-left: 2vw;
      margin-right: 0;
    }
    .metaphors-video-section-descr {
      letter-spacing: -0.008vw;
    }
  }
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    margin-bottom: 10vw;

    :last-child {
      flex-direction: column;
      .metaphors-video-section-content {
        margin-left: 0;
      }
    }
  }
`

export const VideoSectionTitle = styled.h2`
  color: var(--granich-black);
  /* font-size: 5.7vw; */
  font-size: 3.8vw;
  letter-spacing: -0.1vw;
  font-weight: 500;
  line-height: 1;
  margin-top: -1vw;
  margin-bottom: 1.5vw;
  line-height: 1.05;
  /* white-space: nowrap; */
  font-family: "EB Garamond";
  font-style: italic;
  /* margin-left: -1vw; */
  @media only screen and (max-width: 575px) {
    font-size: 10.5vw;
    white-space: normal;
    margin-bottom: 5vw;
    line-height: 1;
  }
`

export const VideoSectionDescr = styled.div.attrs({ className: "metaphors-video-section-descr"})`
    font-size: 1.45vw;
    font-weight: 500;
    line-height: 1.5;

    @media only screen and (max-width: 575px) {
        font-size: 4.6vw;
        margin-bottom: 5vw;
        line-height: 1.5;
        max-width: 100%;
        margin-left: 0;
    }
`

export const YoutubeBlock = styled.div`
  // width: 100%;
  /* height: 38vw; */
  // padding: 3vw;
  position: relative;
  width: 100%;
    height: 21vw;


  iframe {
    border: 2px solid rgba(0, 0, 0, 0.2);
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
  }
  @media only screen and (max-width: 575px) {
    padding: 0;
    height: auto;
    margin-bottom: 3vw;
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

export const VideoSectionContent = styled.div.attrs({ className: "metaphors-video-section-content"})`
  /* display: flex; */
  /* flex-direction: row-reverse; */
  max-width: 40%;
  margin-right: 2vw;
  @media only screen and (max-width: 575px) {
    /* flex-direction: column-reverse; */
    max-width: 100%;
    margin-right: 0;
  }
`