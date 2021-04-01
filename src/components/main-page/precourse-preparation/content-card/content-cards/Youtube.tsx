import React from "react"
import * as SC from "../ContentCard"
import { YoutubeContentProps } from "./types"

const YoutubeContent: React.FC<YoutubeContentProps> = ({
  content,
  youtubePng,
  pinterestLinkIcon,
}) => {
  return (
    <SC.WrapperLink
      className="content"
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
        <SC.Image fluid={content.contentImage.fluid}></SC.Image>
        <SC.Title>{content.contentTitle}</SC.Title>
      </SC.Container>
      <SC.Button youtube>
        <SC.ButtonYoutubeTextWrapper>
          <SC.ButtonYoutubeText>Посмотреть</SC.ButtonYoutubeText>
          {content.contentYoutubeTiming && (
            <SC.ButtonYoutubeTiming>
              {content.contentYoutubeTiming}
            </SC.ButtonYoutubeTiming>
          )}
        </SC.ButtonYoutubeTextWrapper>
        <SC.YoutubeIconsWrapper>
          <SC.YoutubeIcon fluid={youtubePng} />
          <SC.PinterestOutIcon fluid={pinterestLinkIcon} />
        </SC.YoutubeIconsWrapper>
      </SC.Button>
    </SC.WrapperLink>
  )
}

export default YoutubeContent
