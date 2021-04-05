import React from "react"
import { shallow } from "enzyme"
import Mailing from "../../global/mailing"
import { SubmitButton } from "../../global/mailing/Mailing"

describe("<Mailing> component", () => {
  it("should render correctly", () => {
    expect(shallow(<Mailing />)).toMatchSnapshot()
  })
  it("should show state", () => {
    // expect(shallow(<Mailing />)).toMatchSnapshot()
    // const
    // console.log(shallow(<Mailing />).state()) < SubmitButton
  })
})
