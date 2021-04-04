import React from "react"
import * as SC from "../Course"

const DevelopmentCard = () => {
  return (
    <SC.DevelopingWrapper development>
      <SC.Container>
        <SC.TagList>
          <SC.Tag development></SC.Tag>
          <SC.Tag development></SC.Tag>
          <SC.Tag development></SC.Tag>
        </SC.TagList>
        <SC.DevelopingImage>
          <SC.Cogwheel />
        </SC.DevelopingImage>
        <SC.DevelopingTitle>
          <div></div>
          <div></div>
        </SC.DevelopingTitle>
        <SC.DevelopingDescr>
          <div></div>
          <div></div>
          <div></div>
        </SC.DevelopingDescr>
      </SC.Container>
      <SC.Button development>
        <SC.ButtonContainer development>
          <SC.ButtonWrapper>
            <SC.ButtonText development>Разрабатываем...</SC.ButtonText>
          </SC.ButtonWrapper>
        </SC.ButtonContainer>
      </SC.Button>
    </SC.DevelopingWrapper>
  )
}

export default DevelopmentCard
