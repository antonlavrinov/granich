import React from "react"
import { shallow } from "enzyme"
import Mailing from "."
import { Form, Formik } from "formik"
import { Input } from "./Mailing"

type formPropsType = {
  errors?: {
    formParams?: any
  }
  touched?: {
    formParams?: any
  }
  isSubmitting?: any
  values?: {
    formParams?: any
  }
}

describe("<Manifest> component", () => {
  const wrapper = shallow(<Mailing />)
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot()
  })
  it("should return error if there is email validation error", () => {
    const signupForm = (props: formPropsType = { errors: {} }) =>
      wrapper.find(Formik).renderProp("children")(props)

    const formWithEmailErrors = signupForm({
      errors: {
        formParams: {
          email: "Это не электропочта  >__<",
        },
      },
      touched: {
        formParams: {
          email: true,
        },
      },
      isSubmitting: false,
      values: {
        formParams: {
          email: "somejibberish",
        },
      },
    })

    expect(formWithEmailErrors.find(Input).props().placeholder).toMatch(
      /Это не электропочта  >__</
    )
  })
})
