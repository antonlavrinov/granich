import React from "react"
import { Container } from "../../style"
import * as SC from "./IndesignOffer"
import IndesignIcon from "../../../assets/svgs/indesign-icon.svg"
import GranichLogo from "../../../assets/svgs/granich-logo.svg"

type Props = {
  data: any
}

const IndesignOffer: React.FC<Props> = ({ data }) => {
  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
          <SC.LogoWrapper>
            <GranichLogo />
            <IndesignIcon />
          </SC.LogoWrapper>

          <SC.Title>
            <span>Granich InDesign</span>
            <i>бесплатный курс</i>
          </SC.Title>
          <SC.Descr>
            <span>
              Всё важное, что вам следует знать о программе Adobe InDesign +
              закрепление практикой
            </span>
          </SC.Descr>
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default IndesignOffer
