import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import * as SC from "../ContentCard"

const PodborkaContent = ({
  content,
  podborkaLinkIcon,
}) => {
  return (
    <SC.WrapperLink
      className="content"
      podborka
      href={`/${content.contentSlug}`}
      target="_blank"
      type={content.contentType}
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
      <SC.Button podborka>
        <SC.ButtonText>Изучить</SC.ButtonText>
        <SC.IconsWrapper>
          <SC.PodborkaOut fluid={podborkaLinkIcon} />
        </SC.IconsWrapper>
      </SC.Button>
    </SC.WrapperLink>
  )
}

export default PodborkaContent
