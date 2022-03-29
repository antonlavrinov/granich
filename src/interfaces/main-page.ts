export interface IIndexOffer {
  headerImage: {
    fluid: any
  }
  headerImageMobile: {
    fluid: any
  }
  headerSubtitleImage: {
    fluid: any
  }
  headerSubtitle_01: string
  headerSubtitle_02: string
  headerTitle: string
}

export interface ICourseCard {
  id: string
  courseStatus: boolean
  courseStart?: string
  courseDescr: string
  courseDuration?: string
  coursePreviewImage: {
    fluid: any
  }
  courseTags: string[]
  courseTeachers: any[]
  courseTitle: string
  courseMainTitle: {
    json: any
  }
  courseStream?: string
  courseType: string
  courseSlug: string
  courseTypeDevelopment: boolean
  courseTypeEmpty: boolean
  courseStartAndEnd?: string
  courseMainImage: {
    fluid: any
  }
  coursePostersCollection?: any[]
  coursePrice?: string
  coursePolicy?: {
    json: any
  }
  courseBannerSubtext?: string
  courseBannerImage: {
    fluid: any
  }
}

export interface IContentCard {
  contentDescription: {
    json: any
  }
  contentTags: string[]
  contentTitle: string
  contentImage: {
    fluid: any
  }
  contentType: string
  contentSlug: string
  contentPDF?: any
  contentAiFileLink?: string
  contentZIPLink?: string
  contentYoutubeVideoLink?: string
  contentYoutubeTiming?: string
  contentLinkPinterest?: string
  contentLinkBehance?: string
  contentLinkMedium?: string
  contentBannerSwitch?: boolean
  contentBanner?: string
}

export interface ITeam {
  id: string
  teacherDescr: {
    json: any
  }
  teacherEmail: string
  teacherImage: any
  teacherName: string
  teacherSocialInstagram: string
  teacherSocialPinterest: string
  teacherSocialTelegram: string
  teacherSocialBehance: string
  teacherSocialVK: string
  teacherSocialsOrder: string[]
  teacherCategory: string
}
