import React from "react"
import { shallow } from "enzyme"
import Mailing from "."
import { Formik } from "formik"

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
  it("should render correctly", () => {
    expect(shallow(<Mailing />)).toMatchSnapshot()
  })
  // it("should return error if there is password validation error", () => {
  //   const tree = shallow(<Mailing />)

  //   const signupForm = (props: formPropsType = { errors: {} }) =>
  //     tree.find(Formik).renderProp("children")(props)

  //   const formWithEmailErrors = signupForm({
  //     errors: {
  //       formParams: {
  //         email: "Это не электропочта  >__<",
  //       },
  //     },
  //     touched: {
  //       formParams: {
  //         email: true,
  //       },
  //     },
  //     isSubmitting: false,
  //     values: {
  //       formParams: {
  //         email: "d",
  //       },
  //     },
  //   })
  //   expect(formWithEmailErrors.find("#formParams[email]").html()).toMatch(
  //     /Это не электропочта  >__</
  //   )
  // })
})
