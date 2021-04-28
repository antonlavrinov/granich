export interface ICourseOffer {
  courseTags: string[]
  courseMainTitle: {
    json: any
  }
  courseTitle: string
  courseDescr: string
  courseStatus: boolean
  courseType: string
  courseMainImage: any
}

export interface ICourseReviewsHeader {
  reviewsHeaderTitle: string
  reviewsHeaderLinkTelegram: string
  reviewsHeaderLinkVk: string
}

export interface ICoursePortfolioHeader {
  portfolioHeaderTitle: string
  childContentfulGranichCoursePortfolioHeaderPortfolioHeaderSummaryRichTextNode: {
    json: any
  }
  portfolioHeaderInfo: {
    json: any
  }
}

export interface ICourseExplanations {
  id: string
  explanationsImage: any
  explanationsTitle: string
  explanationsText: {
    json: any
  }
}

export interface ICoursePortfolioPosters {
  id: string
  portfolioMedia: any
}

export interface IPriceRange {
  pricesTitle: string
  pricesText: {
    json: any
  }
  pricesSubtext: string
  pricesPrice: number
  id: string
}

export interface IFeatures {
  id: string
  featuresImage: {
    fluid: string
  }
  featuresText: string
  featuresTitle: string
  featuresLink: string
}
