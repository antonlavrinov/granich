import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import * as SC from "../ContentCard"
import { MediumContentProps } from "./types"

const MediumContent: React.FC<MediumContentProps> = ({
  content,
  mediumIcon,
  mediumLinkIcon,
  contentExternalLink,
}) => {
  return (
    <SC.WrapperExternalLink
      className="content"
      medium
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
        <SC.Image src={content.contentImage.src}></SC.Image>
        <SC.Title>{content.contentTitle}</SC.Title>
        <SC.Descr>
          {documentToReactComponents(content.contentDescription.json)}
        </SC.Descr>
      </SC.Container>
      <SC.Button medium>
        <SC.ButtonText>Изучить</SC.ButtonText>
        <SC.IconsWrapper>
          <SC.LinkIcon fluid={mediumIcon} />
          <SC.LinkOutIcon fluid={mediumLinkIcon} />
        </SC.IconsWrapper>
      </SC.Button>
    </SC.WrapperExternalLink>
  )
}

export default MediumContent
