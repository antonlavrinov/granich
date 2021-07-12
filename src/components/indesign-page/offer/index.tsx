import React from "react"
import { Container } from "../../style"
import * as SC from "./IndesignOffer"
import IndesignIcon from "../../../assets/svgs/indesign-icon.svg"

type Props = {
  data: any
}

const IndesignOffer: React.FC<Props> = ({ data }) => {
  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
          <IndesignIcon />
          <SC.Title>
            <span>Adobe InDesign</span>
            <i>бесплатный курс</i>
          </SC.Title>
          <SC.Descr>
            <span>
              Всё самое важное, что вам нужно знать об этой программе +
              закрепление практикой
            </span>
          </SC.Descr>
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default IndesignOffer
