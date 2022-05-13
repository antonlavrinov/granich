import React from "react"
import BehanceContent from "./content-cards/Behance"
import MediumContent from "./content-cards/Medium"
import PinterestContent from "./content-cards/Pinterest"
import PodborkaContent from "./content-cards/Podborka"
import YoutubeContent from "./content-cards/Youtube"
import YoutubeMixed from "./content-cards/YoutubeMixed"
import YoutubeMixedPinterestContent from "./content-cards/YoutubeMixedPinterest"
import { useLocalQuery } from "./useLocalQuery"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

const contentTypes = {
  Youtube: "Youtube",
  Behance: "Behance",
  Pinterest: "Pinterest",
  Medium: "Medium",
  Mixed: "Youtube + Medium + Behance",
  MixedPinterest: "Youtube + Pinterest",
  Podborka: "Осознанная подборка",
}

const ContentCard = ({ content }) => {
  const icons = useLocalQuery()

  const findContentExternalLink = contentType => {
    switch (contentType) {
      case contentTypes.Pinterest:
        return content.contentLinkPinterest
      case contentTypes.Behance:
        return content.contentLinkBehance
      case contentTypes.Medium:
        return content.contentLinkMedium
      default:
        return "/"
    }
  }

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
      {content.contentType === contentTypes.Mixed && (
        <YoutubeMixed
          content={content}
          behanceIcon={icons.behanceIcon}
          youtubePng={icons.youtubePng}
          mediumIcon={icons.mediumIcon}
        />
      )}
      {content.contentType === contentTypes.Youtube && (
        <YoutubeContent
          pinterestLinkIcon={icons.pinterestLinkIcon}
          content={content}
          youtubePng={icons.youtubePng}
        />
      )}
      {content.contentType === contentTypes.Behance && (
        <BehanceContent
          contentExternalLink={findContentExternalLink(content.contentType)}
          behanceLinkIcon={icons.behanceLinkIcon}
          content={content}
          behanceIcon={icons.behanceIcon}
        />
      )}
      {content.contentType === contentTypes.Pinterest && (
        <PinterestContent
          contentExternalLink={findContentExternalLink(content.contentType)}
          pinterestLinkIcon={icons.pinterestLinkIcon}
          content={content}
          pinterestIcon={icons.pinterestIcon}
        />
      )}
      {content.contentType === contentTypes.Medium && (
        <MediumContent
          contentExternalLink={findContentExternalLink(content.contentType)}
          mediumLinkIcon={icons.mediumLinkIcon}
          content={content}
          mediumIcon={icons.mediumIcon}
        />
      )}
      {content.contentType === contentTypes.Podborka && (
        <PodborkaContent
          podborkaLinkIcon={icons.podborkaLinkIcon}
          content={content}
        />
      )}
      {content.contentType === contentTypes.MixedPinterest && (
        <YoutubeMixedPinterestContent
          content={content}
          youtubePng={icons.youtubePng}
          pinterestIcon={icons.pinterestIcon}
        />
      )}
    </div>
  )
}

export default ContentCard
