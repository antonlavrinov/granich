import React from "react"
import YoutubeMixedContent from "./content-cards/YoutubeMixed"
import YoutubeMixedPinterestContent from "./content-cards/YoutubeMixedPinterest"
import YoutubeContent from "./content-cards/Youtube"
import BehanceContent from "./content-cards/Behance"
import MediumContent from "./content-cards/Medium"
import PinterestContent from "./content-cards/Pinterest"
import PodborkaContent from "./content-cards/Podborka"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import { IContentCard } from "../../../../interfaces/index"
import { ContentTypes } from "."

type PureContentProps = {
  content: IContentCard
  icons: {
    behanceIcon: string
    pinterestIcon: string
    pinterestLinkIcon: string
    behanceLinkIcon: string
    mediumIcon: string
    mediumLinkIcon: string
    youtubePng: string
    podborkaLinkIcon: string
  }
  findContentExternalLink: (contentType: string) => string
}

export const PureContentCard: React.FC<PureContentProps> = ({
  content,
  icons,
  findContentExternalLink,
}) => {
  return (
    <div
      onClick={() =>
        trackCustomEvent({
          category: `Главная: контент "${content.contentTitle}"`,
          action: "click",
          label: "Контент",
        })
      }
    >
      {content.contentType === ContentTypes.Mixed && (
        <YoutubeMixedContent
          content={content}
          behanceIcon={icons.behanceIcon}
          youtubePng={icons.youtubePng}
          mediumIcon={icons.mediumIcon}
        />
      )}
      {content.contentType === ContentTypes.Youtube && (
        <YoutubeContent
          pinterestLinkIcon={icons.pinterestLinkIcon}
          content={content}
          youtubePng={icons.youtubePng}
        />
      )}
      {content.contentType === ContentTypes.Behance && (
        <BehanceContent
          contentExternalLink={findContentExternalLink(content.contentType)}
          behanceLinkIcon={icons.behanceLinkIcon}
          content={content}
          behanceIcon={icons.behanceIcon}
        />
      )}
      {content.contentType === ContentTypes.Pinterest && (
        <PinterestContent
          contentExternalLink={findContentExternalLink(content.contentType)}
          pinterestLinkIcon={icons.pinterestLinkIcon}
          content={content}
          pinterestIcon={icons.pinterestIcon}
        />
      )}
      {content.contentType === ContentTypes.Medium && (
        <MediumContent
          contentExternalLink={findContentExternalLink(content.contentType)}
          mediumLinkIcon={icons.mediumLinkIcon}
          content={content}
          mediumIcon={icons.mediumIcon}
        />
      )}
      {content.contentType === ContentTypes.Podborka && (
        <PodborkaContent
          podborkaLinkIcon={icons.podborkaLinkIcon}
          content={content}
        />
      )}
      {content.contentType === ContentTypes.MixedPinterest && (
        <YoutubeMixedPinterestContent
          content={content}
          youtubePng={icons.youtubePng}
          pinterestIcon={icons.pinterestIcon}
        />
      )}
    </div>
  )
}
