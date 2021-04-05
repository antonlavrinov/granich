import React from "react"
import { Container } from "../../style"
import * as SC from "./Offer"
import { IIndexOffer } from "../../../interfaces/main-page"

type Props = {
  data: IIndexOffer
  scrollTo: (
    selector: string,
    blockPosition?: "start" | "center" | "end" | "nearest"
  ) => boolean
}

const Offer: React.FC<Props> = ({ data, scrollTo }) => {
  const headerImage = data.headerImage.fluid
  const headerImageMobile = data.headerImageMobile.fluid
  const headerSubtitleImage = data.headerSubtitleImage.fluid
  const headerSubtitle_01 = data.headerSubtitle_01
  const headerSubtitle_02 = data.headerSubtitle_02
  const headerSubtitle_03 = data.headerSubtitle_03
  const headerTitle = data.headerTitle

  return (
    <>
      <SC.Section id="offer">
        <SC.MainImage fluid={headerImage} />
        <SC.MainImageMobile fluid={headerImageMobile} />
        <Container>
          <SC.Wrapper>
            <SC.Title>{headerTitle}</SC.Title>
            <SC.Descr>
              {headerSubtitle_01}{" "}
              <SC.FlagsImg alt="flags" fluid={headerSubtitleImage} /> <br />{" "}
              {headerSubtitle_02}{" "}
              <span
                role="button"
                onKeyDown={() => scrollTo("#manifest")}
                onClick={() => scrollTo("#manifest")}
              >
                {headerSubtitle_03} <SC.UnderlineIcon />
              </span>
            </SC.Descr>
          </SC.Wrapper>
        </Container>
      </SC.Section>
      <SC.SvgClip />
    </>
  )
}

export default Offer
