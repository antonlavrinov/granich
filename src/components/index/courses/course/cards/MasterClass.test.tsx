import React from "react"
import { shallow } from "enzyme"
import MasterClassCard from "./MasterClassCard"
import { ButtonText } from "../Course"
import { mockCourseData, mockIcons } from "../Course.test"

describe("<MasterClassCard> component", () => {
  describe("Active ", () => {
    const wrapper = shallow(
      <MasterClassCard courseData={mockCourseData} icons={mockIcons} />
    )
    it("should render correctly", () => {
      expect(wrapper).toMatchSnapshot()
    })
    it("should have button text 'Купить'", () => {
      expect(wrapper.find(ButtonText).text()).toBe("Купить")
    })
  })
  describe("Not Active ", () => {
    const wrapper = shallow(
      <MasterClassCard
        courseData={{ ...mockCourseData, courseStatus: false }}
        icons={mockIcons}
      />
    )
    it("should render correctly", () => {
      expect(wrapper).toMatchSnapshot()
    })
    it("should have button text 'Предзаказ'", () => {
      expect(wrapper.find(ButtonText).text()).toBe("Предзаказ")
    })
  })
})
