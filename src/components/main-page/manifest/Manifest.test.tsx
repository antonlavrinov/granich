import React from "react"
import { shallow } from "enzyme"
import { ManifestRule, PureManifest as Manifest } from "."

describe("<Manifest> component", () => {
  it("should render correctly", () => {
    expect(shallow(<Manifest image="imageUrl" />)).toMatchSnapshot()
  })
})

describe("<ManifestRule> component", () => {
  it("should render correctly", () => {
    expect(
      shallow(<ManifestRule title="title" text="text" number={3} />)
    ).toMatchSnapshot()
  })
})
