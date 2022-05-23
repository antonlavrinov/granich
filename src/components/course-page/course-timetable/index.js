import React from "react";
import { Container } from "../../style";

import ArrowCurly from '../../../assets/svgs/arrow-curly.svg';
import ArrowMobile from '../../../assets/svgs/arrow-long-down.svg';
import TimetableImageGif from "../../../assets/images/graph-design/commitment/commitment.gif"
import LazyLoad from "react-lazyload"
import { graphql, useStaticQuery } from "gatsby";
import * as SC from "./style";
import CourseDontWorry from "../CourseDontWorry"
import { useLocalQuery } from "../../index/precourse-preparation/content-card/useLocalQuery";

const CourseTimetable = ({noGif, noKeepCalm, text, courseTitle, withCards}) => {
  const { behanceIcon, behanceLinkIcon } = useLocalQuery();

  const data = useStaticQuery(graphql`
    query timetableImage {
      imageTimetable: file(
        relativePath: { eq: "graph-design/timetable/timetable-image.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      posterImageTimetable: file(
        relativePath: { eq: "poster-graphic-design/timetable-image.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      foundationImageTimetable: file(
        relativePath: { eq: "foundation-of-graph-design/timetable-image.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      metaphorsImageTimetable: file(
        relativePath: { eq: "metaphors-in-identity-page/timetable-image.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const imageData = data.imageTimetable.childImageSharp.fluid

  const timetableImages = {
    "Графические метафоры": data.metaphorsImageTimetable.childImageSharp.fluid,
    "Фундамент Графдизайна": data.foundationImageTimetable.childImageSharp.fluid,
    "Плакатный Графдизайн": data.posterImageTimetable.childImageSharp.fluid,
  };

  return (
    <SC.TimetableSection>
      <Container>
        <SC.TimetableWrapper>
          <SC.TimetableTitle>
            Курс можно совмещать с работой.{" "}
            <span>Но расслабиться не получится!</span>
          </SC.TimetableTitle>
          <SC.TimetableInfoWrapper>
            <SC.TimetableInfoTextMobile>{text}</SC.TimetableInfoTextMobile>
            <SC.TimetableImageWrapper>
              <SC.TimetableImage fluid={noGif ? timetableImages[courseTitle] : imageData} />
            </SC.TimetableImageWrapper>

            <SC.TimetableInfoTextWrapper>
              <SC.TimetableInfoText>{text}</SC.TimetableInfoText>
              {!noGif && (
                <SC.TimetableInfoGifBlock>
                  <SC.TimetableGifWrapper>
                    <LazyLoad once>
                      <SC.TimetableGif src={TimetableImageGif} alt="commitment" />
                    </LazyLoad>
                  </SC.TimetableGifWrapper>
                  <SC.TimetableGifTextWrapper>
                    <SC.TimetableGifText>
                      Примерно с таким настроем нужно будет погрузиться в курс. Вы
                      придёте сюда чтобы развивать твёрдые навыки.
                    </SC.TimetableGifText>
                    <SC.TimetableGifPS>
                      P.S. Сцена из фильма Одержимость. Философия всего курса.
                    </SC.TimetableGifPS>
                  </SC.TimetableGifTextWrapper>
                </SC.TimetableInfoGifBlock>
              )}
            </SC.TimetableInfoTextWrapper>
          </SC.TimetableInfoWrapper>
          {!noKeepCalm && (
            <CourseDontWorry />
          )}
          {withCards && (
            <SC.BehanceContentCards>
              <ArrowCurly/>
              <ArrowMobile />
              <SC.ArrowText>
                Примеры готовых экзаменов
              </SC.ArrowText>
              {[
                {
                  imageUrl: "/images/poster-graphic-design/timetable-behance-cases/01.png",
                  link: "https://www.behance.net/gallery/142593515/redizajn-instagram-profilja",
                },
                {
                  imageUrl: "/images/poster-graphic-design/timetable-behance-cases/02.jpg",
                  link: "https://www.behance.net/gallery/141729021/redizajn-instagram-profilja-repetitora-po-obschestvoznaniju",
                },
                {
                  imageUrl: "/images/poster-graphic-design/timetable-behance-cases/03.jpg",
                  link: "https://www.behance.net/gallery/141394269/Content-redesign-for-the-theatre",
                },
                {
                  imageUrl: "/images/poster-graphic-design/timetable-behance-cases/04.png",
                  link: "https://www.behance.net/gallery/142241941/rjadom-%29",
                },
                {
                  imageUrl: "/images/poster-graphic-design/timetable-behance-cases/05.jpg",
                  link: "https://www.behance.net/gallery/141076167/Redesign-of-the-cyber-schools-instagram-profile",
                },
                // {
                //   imageUrl: "/images/poster-graphic-design/timetable-behance-cases/06.jpg",
                //   link: "https://www.behance.net/gallery/142537241/Farm-Bird-Food-Packaging-Design-and-Identity",
                // },
                {
                  imageUrl: "/images/poster-graphic-design/timetable-behance-cases/07.jpg",
                  link: "https://www.behance.net/gallery/141287597/redizajn-instagram-profilja",
                },
              ].map(({ imageUrl, link }) => (
                <SC.WrapperExternalLink
                    className="content"
                    behance
                    rel="noopener noreferrer"
                    href={link}
                    target="_blank"
                  >
                    <SC.Image src={imageUrl}></SC.Image>
                    <SC.Button>
                      <SC.ButtonText>Полный кейс</SC.ButtonText>
                      <SC.IconsWrapper>
                        <SC.BehanceIcon fluid={behanceIcon} />
                        <SC.BehanceOutIcon fluid={behanceLinkIcon} />
                      </SC.IconsWrapper>
                    </SC.Button>
                  </SC.WrapperExternalLink>
                )
              )}
            </SC.BehanceContentCards>
          )}
        </SC.TimetableWrapper>
      </Container>
    </SC.TimetableSection>
  )
};

export default CourseTimetable;
