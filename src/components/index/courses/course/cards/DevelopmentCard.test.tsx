import React from "react"
import { shallow } from "enzyme"
import DevelopmentCard from "./DevelopmentCard"
import { ButtonText } from "../Course"

describe("<DevelopmentCard> component", () => {
  const wrapper = shallow(<DevelopmentCard />)
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot()
  })
  it("should have button text 'Разрабатываем...'", () => {
    expect(wrapper.find(ButtonText).text()).toBe("Разрабатываем...")
  })
})
