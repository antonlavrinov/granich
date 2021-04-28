import React from "react"
import { shallow } from "enzyme"
import { PureContentCard as ContentCard } from "../PureContentCard"

describe("<ContentCard> component", () => {
  const mockFunc = jest.fn()
  const mockIcons = {
    behanceIcon: "behanceIcon",
    pinterestIcon: "pinterestIcon",
    pinterestLinkIcon: "pinterestLinkIcon",
    behanceLinkIcon: "behanceLinkIcon",
    mediumIcon: "mediumIcon",
    mediumLinkIcon: "mediumLinkIcon",
    youtubePng: "youtubePng",
    podborkaLinkIcon: "podborkaLinkIcon",
  }
  const mockContent = {
    contentDescription: {
        json: 'Здесь, с командой и учениками упорядочиваем знания о графдизайне'
      },
      contentTags: ['Графидея']
      contentTitle: ['']
      contentImage {
        fluid(maxWidth: 350) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      contentType
      contentSlug
      contentPDF {
        file {
          url
        }
      }
      contentYoutubeVideoLink
      contentYoutubeTiming
      contentLinkPinterest
      contentLinkBehance
      contentLinkMedium
  }
  const wrapper = shallow(
    <ContentCard
      content={}
      icons={mockIcons}
      findContentExternalLink={mockFunc}
    />
  )
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
