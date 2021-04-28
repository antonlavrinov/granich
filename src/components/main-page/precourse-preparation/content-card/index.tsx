import React from "react"
import { useLocalQuery } from "./useLocalQuery"
import { IContentCard } from "../../../../interfaces/main-page"
import { PureContentCard } from "./PureContentCard"

export enum ContentTypes {
  Youtube = "Youtube",
  Behance = "Behance",
  Pinterest = "Pinterest",
  Medium = "Medium",
  Mixed = "Youtube + Medium + Behance",
  MixedPinterest = "Youtube + Pinterest",
  Podborka = "Осознанная подборка",
}

type ContentProps = {
  content: IContentCard
}

const ContentCard: React.FC<ContentProps> = ({ content }) => {
  const icons = useLocalQuery()

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
    <PureContentCard
      content={content}
      icons={icons}
      findContentExternalLink={findContentExternalLink}
    />
  )
}

export default ContentCard
