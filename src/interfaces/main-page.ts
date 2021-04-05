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
  headerSubtitle_03: string
  headerTitle: string
}

export interface ICourseCard {
  id: string
  courseStatus: boolean
  courseStart: string
  courseDescr: string
  courseDuration: string
  coursePreviewImage: any
  courseTags: string[]
  courseTeachers: any
  courseTitle: string
  courseType: string
  courseSlug: string
  courseTypeDevelopment: boolean
  courseTypeEmpty: boolean
}

export interface IContentCard {
  contentDescription: {
    json: any
  }
  contentTags: null | string[]
  contentTitle: string
  contentImage: any
  contentType: string
  contentSlug: string
  contentPDF: any
  contentYoutubeVideoLink: string
  contentYoutubeTiming: string
  contentLinkPinterest: string
  contentLinkBehance: string
  contentLinkMedium: string
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
