import React from "react"
import { Container } from "../../style"
import styled from "styled-components"
// import TimetableVideo from '../../assets/images/graph-design/Timetable/ezgif.com-gif-to-mp4.mp4';
import TimetableImageGif from "../../../assets/images/graph-design/commitment/commitment.gif"
import LazyLoad from "react-lazyload"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const TimetableSection = styled.section`
  margin-bottom: 4vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
  }
`
const TimetableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 3.3vw 3.3vw;
  border-radius: 0.6vw;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    padding: 6vw 6vw 7vw;
    border-radius: 2.5vw;
  }
`

const TimetableTitle = styled.h2`
  color: var(--granich-black);
  font-size: 4vw;
  letter-spacing: -0.2vw;
  font-weight: 700;
  line-height: 1;
  margin-top: -0.6vw;
  margin-bottom: 2.5vw;
  line-height: 1.1;
  white-space: nowrap;
  span {
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    font-size: 5.4vw;
    line-height: 1;
    position: relative;
    margin-left: -0.2vw;
    white-space: normal;
    display: block;
    letter-spacing: -0.115vw;
  }

  @media only screen and (max-width: 575px) {
    font-size: 11vw;
    white-space: normal;
    margin-bottom: 5vw;
    span {
      white-space: normal;
      font-size: 10.4vw;
      margin-left: 0;
      letter-spacing: -0.4vw;
      margin-bottom: 6.8vw;
      line-height: 0.9;
    }
  }
`

const TimetableImageWrapper = styled.div`
  height: auto;
  min-width: 100%;
  width: 100%;
  @media only screen and (max-width: 575px) {
    margin-right: 0;
  }
`

const TimetableImage = styled(props => <Img {...props} />)`
  width: 100%;
  border: 4px solid rgba(0, 0, 0, 0.1);
  @media only screen and (max-width: 575px) {
    border: 2px solid rgba(0, 0, 0, 0.15);
  }
`

const TimetableInfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
  }
`
// const TimetableInfoTextWrapper = styled.div`
//     min-width: 48%;
//     width: 48%;
//     @media only screen and (max-width: 575px) {
//         min-width: 100%;
//         width: 100%;
//         margin-top: 4vw;
//     }
// `
// const TimetableInfoText = styled.div`
//     font-size: 1.35vw;
//     line-height: 1.45;
//     margin-bottom: 2vw;
//     font-weight: 500;
//     @media only screen and (max-width: 575px) {
//         display: none;
//     }
// `

// const TimetableInfoTextMobile = styled.div`

//     display: none;
//     @media only screen and (max-width: 575px) {
//         display: block;
//         font-size: 3.7vw;
//         line-height: 1.45;
//         margin-bottom: 6vw;
//         font-weight: 500;
//     }
// `

// const TimetableInfoGifBlock = styled.div`
//     padding: 1.8vw 1.8vw 2.3vw;
//     border-radius: 0.6vw;
//     background: #2A2A2A;
//     background: #f2f2f2;
//     display: block;
//     @media only screen and (max-width: 575px) {
//         padding: 4vw 4vw 5vw;
//         border-radius: 1.7vw;
//         width: 100%;
//     }
// `

// const TimetableGifWrapper = styled.div`
//     min-width: 100%;
//     width: 100%;
//     margin-right: 3vw;
//     border-radius: 0.5vw;
//     // background: #f2f2f2;
//     min-height: 16vw;
//     height: 16vw;
//     @media only screen and (max-width: 575px) {
//         min-width: 100%;
//         width: 100%;
//         border-radius: 2vw;
//         margin-bottom: 0;
//         min-height: 40vw;
//         height: 40vw;

//     }
// `

// const TimetableGif = styled.img`
//     min-width: 100%;
//     width: 100%;
//     margin-right: 3vw;
//     border-radius: 0.5vw;
//     @media only screen and (max-width: 575px) {
//         min-width: 100%;
//         width: 100%;
//         margin-right: 0;
//         // height: 40.8vw;
//         border-radius: 2vw;
//         margin-bottom: 0;

//     }
// `

// const TimetableGifText = styled.div`
//     color: white;
//     color: var(--granich-black);
//     font-weight: 500;
//     margin-bottom: 1vw;
//     line-height: 1.35;

// `

// const TimetableGifTextWrapper = styled.div`
//     margin-top: 2vw;
//     font-size: 1.25vw;
//     @media only screen and (max-width: 575px) {
//         font-size: 3.7vw;
//     }

// `

// const TimetableGifPS = styled.div`
//     padding-left: 1vw;
//     color: white;
//     border-left: 2px solid var(--granich-red);
//     color: var(--granich-grey);
//     line-height: 1.35;
//     @media only screen and (max-width: 575px) {
//         padding-left: 3vw;
//         font-size: 3vw;
//         margin-top: 2vw;
//     }
// `

const CourseTimetableFreelance = () => {
  const data = useStaticQuery(graphql`
    query timetableFreelanceImage {
      imageFreelanceTimetable: file(
        relativePath: { eq: "freelance/table-freelance.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const imageData = data.imageFreelanceTimetable.childImageSharp.fluid
  // const text = "Я выстроил Программу обучения так, что на каждый из уроков даётся 1 неделя. С понедельника по воскресенье. В день необходимо инвестировать в своё обучение хотя бы пару часов. Уроки насыщены обязательной к изучению и дополнительной информацией, поэтому откладывать обучение на последний день не стоит.  При этом домашнее задание по уроку необходимо выполнить ровно за эту неделю. Это строгий дедлайн. Иначе вы будете отстранены от обучения.";

  return (
    <TimetableSection>
      <Container>
        <TimetableWrapper>
          <TimetableTitle>На каждый урок и ДЗ у вас 1 неделя</TimetableTitle>
          <TimetableInfoWrapper>
            {/* <TimetableInfoTextMobile>
                            {text}
                        </TimetableInfoTextMobile> */}
            <TimetableImageWrapper>
              <TimetableImage fluid={imageData} />
            </TimetableImageWrapper>
            {/* 
                        <TimetableInfoTextWrapper>
                            <TimetableInfoText>
                                {text}
                            </TimetableInfoText>
                            <TimetableInfoGifBlock>
                                <TimetableGifWrapper>
                                    <LazyLoad once>
                                        <TimetableGif src={TimetableImageGif} alt="commitment" />
                                    </LazyLoad>

                                </TimetableGifWrapper>
                                <TimetableGifTextWrapper>
                                    <TimetableGifText>Примерно с таким настроем нужно будет погрузиться в курс. Вы придёте сюда чтобы развивать твёрдые навыки.</TimetableGifText>
                                    <TimetableGifPS>P.S. Сцена из фильма Одержимость. Философия всего курса.</TimetableGifPS>
                                </TimetableGifTextWrapper>


                            </TimetableInfoGifBlock>
                        </TimetableInfoTextWrapper> */}
          </TimetableInfoWrapper>
        </TimetableWrapper>
      </Container>
    </TimetableSection>
  )
}

export default CourseTimetableFreelance
