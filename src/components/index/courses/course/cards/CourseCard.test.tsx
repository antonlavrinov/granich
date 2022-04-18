import React from "react"
import { shallow } from "enzyme"
import CourseCard from "./CourseCard"
import { ButtonText } from "../Course"
import { mockCourseData, mockIcons } from "../Course.test"

describe("<CourseCard> component", () => {
  describe("Active ", () => {
    const wrapper = shallow(
      <CourseCard courseData={mockCourseData} icons={mockIcons} />
    )
    it("should render correctly", () => {
      expect(wrapper).toMatchSnapshot()
    })
    it("should have button text 'Участвовать'", () => {
      expect(wrapper.find(ButtonText).text()).toBe("Участвовать")
    })
  })
  describe("Not Active ", () => {
    const wrapper = shallow(
      <CourseCard
        courseData={{ ...mockCourseData, courseStatus: false }}
        icons={mockIcons}
      />
    )
    it("should render correctly", () => {
      expect(wrapper).toMatchSnapshot()
    })
    it("should have button text 'Узнать о наборе'", () => {
      expect(wrapper.find(ButtonText).text()).toBe("Узнать о наборе")
    })
  })
})
