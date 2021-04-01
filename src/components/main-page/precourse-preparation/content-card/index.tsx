import React from "react"
import YoutubeMixedContent from "./content-cards/YoutubeMixed"
import YoutubeMixedPinterestContent from "./content-cards/YoutubeMixedPinterest"
import YoutubeContent from "./content-cards/Youtube"
import BehanceContent from "./content-cards/Behance"
import MediumContent from "./content-cards/Medium"
import PinterestContent from "./content-cards/Pinterest"
import PodborkaContent from "./content-cards/Podborka"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import { useLocalQuery } from "./useLocalQuery"

const PreparationContent = ({ content }) => {
  const [
    behanceIcon,
    pinterestIcon,
    pinterestLinkIcon,
    behanceLinkIcon,
    mediumIcon,
    mediumLinkIcon,
    youtubePng,
    podborkaLinkIcon,
  ] = useLocalQuery()

  enum ContentTypes {
    Youtube = "Youtube",
    Behance = "Behance",
    Pinterest = "Pinterest",
    Medium = "Medium",
    Mixed = "Youtube + Medium + Behance",
    MixedPinterest = "Youtube + Pinterest",
    Podborka = "Осознанная подборка",
  }

  const findContentExternalLink = contentType => {
    switch (contentType) {
      case ContentTypes.Pinterest:
        return content.contentLinkPinterest
      case ContentTypes.Behance:
        return content.contentLinkBehance
      case ContentTypes.Medium:
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
      {content.contentType === ContentTypes.Mixed && (
        <YoutubeMixedContent
          content={content}
          behanceIcon={behanceIcon}
          youtubePng={youtubePng}
          mediumIcon={mediumIcon}
        />
      )}
      {content.contentType === ContentTypes.Youtube && (
        <YoutubeContent
          pinterestLinkIcon={pinterestLinkIcon}
          content={content}
          youtubePng={youtubePng}
        />
      )}
      {content.contentType === ContentTypes.Behance && (
        <BehanceContent
          contentExternalLink={findContentExternalLink(content.contentType)}
          behanceLinkIcon={behanceLinkIcon}
          content={content}
          behanceIcon={behanceIcon}
        />
      )}
      {content.contentType === ContentTypes.Pinterest && (
        <PinterestContent
          contentExternalLink={findContentExternalLink(content.contentType)}
          pinterestLinkIcon={pinterestLinkIcon}
          content={content}
          pinterestIcon={pinterestIcon}
        />
      )}
      {content.contentType === ContentTypes.Medium && (
        <MediumContent
          contentExternalLink={findContentExternalLink(content.contentType)}
          mediumLinkIcon={mediumLinkIcon}
          content={content}
          mediumIcon={mediumIcon}
        />
      )}
      {content.contentType === ContentTypes.Podborka && (
        <PodborkaContent
          podborkaLinkIcon={podborkaLinkIcon}
          content={content}
        />
      )}
      {content.contentType === ContentTypes.MixedPinterest && (
        <YoutubeMixedPinterestContent
          content={content}
          youtubePng={youtubePng}
          pinterestIcon={pinterestIcon}
        />
      )}
    </div>
  )
}

export default PreparationContent
