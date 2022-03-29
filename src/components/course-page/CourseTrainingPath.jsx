import React from "react"
import { Container } from "../style"
import styled from "styled-components"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Zoom from "react-medium-image-zoom"
import { graphql, useStaticQuery } from "gatsby"

const TrainingPathSection = styled.section`
  margin-bottom: 4vw;
  margin-top: 4vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
    margin-top: 5vw;
  }
`

const TrainingPathWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1.5vw;
  grid-row-gap: 1.5vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
    grid-template-columns: 1fr;
    grid-row-gap: 4vw;
  }
`

const TrainingPathBlockWrapper = styled.div`
  background: white;
  display: flex;
  flex-direction: column;

  border-radius: 0.6vw;
  position: relative;

  @media only screen and (max-width: 575px) {
    border-radius: 2.5vw;
  }
`
const TrainingPathBlockContainer = styled.div`
  padding: 2.7vw 2vw 1vw;
  display: flex;

  @media only screen and (max-width: 575px) {
    padding: 5vw 5vw 2vw;
    display: flex;
  }
`

const TrainingPathBlockText = styled.div`
  padding: 0.5vw 2vw 2vw;
  line-height: 1.35;

  font-size: 1.15vw;

  p {
    color: var(--granich-grey);
    letter-spacing: -0.01vw;
  }
  b {
    display: block;
    font-weight: 600;
    color: var(--granich-black);
    margin-bottom: 0.35vw;
  }
  i {
    font-weight: 500;
    /* color: var(--granich-red); */
    color: var(--granich-black);
    border-radius: 0.2vw;
    padding: 0 0.3vw;
    font-style: normal;
    white-space: nowrap;
    /* text-decoration: underline; */
    background: var(--granich-light-red);
    /* background: var(--granich-red); */
  }
  @media only screen and (max-width: 575px) {
    padding: 0 5vw 5vw;
    font-size: 3.7vw;
    b {
      margin-bottom: 1vw;
    }
    i {
      padding: 0 1vw;
      border-radius: 0.5vw;
    }

    margin-top: 2vw;
  }
`

const TrainingPathBlockImage = styled.div`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
  margin-top: auto;
  margin: 0 auto;

  div {
    width: 100%;
    height: 18vw;
  }

  @media only screen and (max-width: 575px) {
    width: 100%;
    div {
      height: 45vw;
    }
    :hover {
      transform: none;
    }
  }

  ${props =>
    props.half &&
    `
        width: 48%;
        margin-right: 4%;
        
        :last-child {
            margin-right: 0;
        }


    `}
`

const TrainingPathImage = styled.img`
  height: 100%;
  background-size: cover;
  box-shadow: 0 0 0.4vw rgba(0, 0, 0, 0.4);
  @media only screen and (max-width: 575px) {
    height: 44vw;
    box-shadow: 0 0 1.8vw rgba(0, 0, 0, 0.4);
  }
`

const TrainingPathSectionTitle = styled.h2`
  color: var(--granich-black);
  font-size: 4.55vw;
  letter-spacing: -0.1vw;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 2.5vw;
  span {
    text-transform: uppercase;
    font-weight: 900;
  }
  @media only screen and (max-width: 575px) {
    font-size: 11vw;
    letter-spacing: -0.7vw;
    line-height: 1;
    margin-bottom: 4vw;
    br {
      display: none;
    }
  }
`

const CourseTrainingPath = ({ data }) => {
  const dataImage = useStaticQuery(graphql`
    query trainingPathImages {
      trainingPathImage1: file(
        relativePath: { eq: "graph-design/training-path/training-path-01.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trainingPathImage2: file(
        relativePath: { eq: "graph-design/training-path/training-path-02.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trainingPathImage3: file(
        relativePath: { eq: "graph-design/training-path/training-path-03.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const image1 = dataImage.trainingPathImage1.childImageSharp.fluid
  const image2 = dataImage.trainingPathImage2.childImageSharp.fluid
  const image3 = dataImage.trainingPathImage3.childImageSharp.fluid

  return (
    <TrainingPathSection>
      <Container>
        <TrainingPathSectionTitle>
          Особенность курса — <br />
          <span>много</span> обратной связи
        </TrainingPathSectionTitle>
        <TrainingPathWrapper>
          {data.edges.map(item => {
            return (
              <TrainingPathBlockWrapper key={item.node.id}>
                <TrainingPathBlockContainer>
                  {item.node.trainingPathImage.length > 1 ? (
                    <>
                      {item.node.trainingPathImage.map((itemImage, idx) => {
                        return (
                          <TrainingPathBlockImage key={idx} half>
                            <Zoom>
                              <TrainingPathImage
                                src={itemImage.src}
                              ></TrainingPathImage>
                            </Zoom>
                          </TrainingPathBlockImage>
                        )
                      })}
                    </>
                  ) : (
                    <TrainingPathBlockImage>
                      <Zoom>
                        <TrainingPathImage
                          src={item.node.trainingPathImage[0].src}
                        ></TrainingPathImage>
                      </Zoom>
                    </TrainingPathBlockImage>
                  )}
                </TrainingPathBlockContainer>
                <TrainingPathBlockText>
                  {documentToReactComponents(item.node.trainingPathText.json)}
                </TrainingPathBlockText>
              </TrainingPathBlockWrapper>
            )
          })}
        </TrainingPathWrapper>
      </Container>
    </TrainingPathSection>
  )
}

export default CourseTrainingPath
