import React from "react"
import * as SC from "../ContentCard"

const YoutubeMixedPinterestContent = ({
  content,
  youtubePng,
  pinterestIcon,
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
        <SC.Image src={content.contentImage.src}></SC.Image>
        <SC.Title>{content.contentTitle}</SC.Title>
      </SC.Container>
      <SC.Button mixed>
        <SC.ButtonWatchBlockWrapper>
          <SC.ButtonBlockTitle>Посмотреть</SC.ButtonBlockTitle>
          <SC.ButtonWatchBlock>
            <SC.YoutubeMixedIcon fluid={youtubePng} />
            {content.contentYoutubeTiming && (
              <SC.ButtonMixedTiming>
                {content.contentYoutubeTiming}
              </SC.ButtonMixedTiming>
            )}
          </SC.ButtonWatchBlock>
        </SC.ButtonWatchBlockWrapper>
        <SC.ButtonReadBlockWrapper mixedPinterest>
          <SC.ButtonBlockTitle>Изучить</SC.ButtonBlockTitle>
          <SC.ButtonReadBlock>
            <SC.BehanceMixedIcon fluid={pinterestIcon} />
          </SC.ButtonReadBlock>
        </SC.ButtonReadBlockWrapper>
      </SC.Button>
    </SC.WrapperLink>
  )
}

export default YoutubeMixedPinterestContent
