import React from "react"
import { shallow } from "enzyme"
import { PureCourseBanner as CourseBanner } from "../../course-page/CourseBanner"

describe("<CourseBanner> component", () => {
  it("should render correctly", () => {
    const mockBoxImage = "imageString"

    expect(shallow(<CourseBanner box={mockBoxImage} />)).toMatchSnapshot()
  })
})
