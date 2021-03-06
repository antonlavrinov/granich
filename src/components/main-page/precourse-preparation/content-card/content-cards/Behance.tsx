import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import * as SC from "../ContentCard"
import { BehanceContentProps } from "./types"

const BehanceContent: React.FC<BehanceContentProps> = ({
  content,
  behanceIcon,
  behanceLinkIcon,
  contentExternalLink,
}) => {
  return (
    <SC.WrapperExternalLink
      className="content"
      behance
      rel="noopener noreferrer"
      href={contentExternalLink}
      target="_blank"
    >
      <SC.Container>
        <SC.TagList>
          {content.contentTags.map((contentTag, idx) => {
            return <SC.Tag key={idx}>{contentTag}</SC.Tag>
          })}
        </SC.TagList>
        <SC.Image fluid={content.contentImage.fluid}></SC.Image>
        <SC.Title>{content.contentTitle}</SC.Title>
        <SC.Descr>
          {documentToReactComponents(content.contentDescription.json)}
        </SC.Descr>
      </SC.Container>
      <SC.Button behance>
        <SC.ButtonText>Изучить</SC.ButtonText>
        <SC.IconsWrapper>
          <SC.BehanceIcon fluid={behanceIcon} />
          <SC.BehanceOutIcon fluid={behanceLinkIcon} />
        </SC.IconsWrapper>
      </SC.Button>
    </SC.WrapperExternalLink>
  )
}

export default BehanceContent
