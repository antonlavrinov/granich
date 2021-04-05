import React from "react"
import { shallow } from "enzyme"
import { PureCourse as Course } from "."
import { LinkModal } from "./Course"

export const mockCourseData = {
  id: 0,
  courseStatus: true,
  courseStart: "course start",
  courseDescr: "some descr",
  courseDuration: "some date",
  coursePreviewImage: {
    fluid: "imageUrl",
  },
  courseTags: ["1", "2"],
  courseTeachers: [
    {
      id: 3,
      fluid: "imageUrl",
    },
    {
      id: 4,
      fluid: "imageUrl",
    },
  ],
  courseTitle: "title",
  courseType: "Курс",
  courseSlug: "slug",
  courseTypeDevelopment: false,
  courseTypeEmpty: false,
}

export const mockIcons = {
  calendar: "calendarIcon",
  arrowWhite: "arrowWhiteIcon",
  arrowBlack: "arrowBlackIcon",
}

const mockOpenModal = jest.fn()

const getWrapper = courseData =>
  shallow(
    <Course
      courseData={courseData}
      openModal={mockOpenModal}
      icons={mockIcons}
    />
  )

describe("<Course> component", () => {
  describe("Course card", () => {
    it("should render correctly", () => {
      expect(getWrapper(mockCourseData)).toMatchSnapshot()
    })
    it("Empty should render correctly", () => {
      expect(
        getWrapper({
          ...mockCourseData,
          courseStatus: true,
          courseTypeEmpty: true,
        })
      ).toMatchSnapshot()
    })

    it("Empty should open modal when clicked", () => {
      const wrapper = getWrapper({
        ...mockCourseData,
        courseStatus: false,
        courseTypeEmpty: true,
      })
      wrapper.find(LinkModal).simulate("click")
      expect(mockOpenModal).toHaveBeenCalled()
    })
  })
  describe("MasterClass card", () => {
    it("should render correctly", () => {
      expect(
        getWrapper({
          ...mockCourseData,
          courseStatus: true,
          courseType: "Мастер-класс",
        })
      ).toMatchSnapshot()
    })
    it("Empty should render correctly", () => {
      expect(
        getWrapper({
          ...mockCourseData,
          courseStatus: true,
          courseType: "Мастер-класс",
          courseTypeEmpty: true,
        })
      ).toMatchSnapshot()
    })

    it("Empty should open modal when clicked", () => {
      const wrapper = getWrapper({
        ...mockCourseData,
        courseStatus: true,
        courseType: "Мастер-класс",
        courseTypeEmpty: true,
      })
      wrapper.find(LinkModal).simulate("click")
      expect(mockOpenModal).toHaveBeenCalled()
    })
  })

  describe("Development card", () => {
    it("should render correctly", () => {
      expect(
        getWrapper({
          ...mockCourseData,
          courseTypeDevelopment: true,
        })
      ).toMatchSnapshot()
    })
  })
})
