import React from "react"
import { shallow } from "enzyme"
import CourseList from "./CourseList"
import Course from "./course"

describe("<CourseList> component", () => {
  let wrapper
  const mockCourseData = {
    id: 0,
    courseStatus: true,
    courseStart: "course start",
    courseDescr: "some descr",
    courseDuration: "some date",
    coursePreviewImage: {
      fluid: "imageUrl",
    },
    courseTags: ["1", "2"],
    courseTeachers: {
      id: 3,
      fluid: "imageUrl",
    },
    courseTitle: "title",
    courseType: "type",
    courseSlug: "slug",
    courseTypeDevelopment: false,
    courseTypeEmpty: false,
  }

  beforeEach(() => {
    wrapper = shallow(
      <CourseList data={[mockCourseData, mockCourseData, mockCourseData]} />
    )
  })

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot()
  })
  it("should render same number of courses as in props", () => {
    expect(wrapper.find(Course)).toHaveLength(3)
  })
})
