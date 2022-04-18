import { ContentCard } from "../../../../types/content-card"

export type BehanceContentProps = {
  content: ContentCard
  behanceIcon: string
  behanceLinkIcon: string
  contentExternalLink: string
}

export type PinterestContentProps = {
  content: ContentCard
  pinterestIcon: string
  pinterestLinkIcon: string
  contentExternalLink: string
}

export type MediumContentProps = {
  content: ContentCard
  mediumIcon: string
  mediumLinkIcon: string
  contentExternalLink: string
}

export type PodborkaContentProps = {
  content: ContentCard
  podborkaLinkIcon: string
}

export type YoutubeContentProps = {
  content: ContentCard
  youtubePng: string
  pinterestLinkIcon: string
}

export type YoutubeMixedContentProps = {
  content: ContentCard
  youtubePng: string
  mediumIcon: string
  behanceIcon: string
}

export type YoutubeMixedPinterestContentProps = {
  content: ContentCard
  youtubePng: string
  pinterestIcon: string
}
