import React from "react"
import { shallow } from "enzyme"
import Offer from "."

describe("<Offer> component", () => {
  let wrapper
  let mockScrollTo

  beforeEach(() => {
    mockScrollTo = jest.fn()
    const mockOfferData = {
      headerImage: { fluid: "imageUrl" },
      headerImageMobile: { fluid: "imageUrl" },
      headerSubtitleImage: { fluid: "imageUrl" },
      headerSubtitle_01: "Онлайн-курсы",
      headerSubtitle_02: "c",
      headerSubtitle_03: "осознанным подходом",
      headerTitle: "Онлайн-школа Granich",
    }

    wrapper = shallow(<Offer data={mockOfferData} scrollTo={mockScrollTo} />)
  })

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should call onScroll when we click 'с осознанным подходом'", () => {
    wrapper.find("span").simulate("click")
    expect(mockScrollTo).toHaveBeenCalled()
  })
})
