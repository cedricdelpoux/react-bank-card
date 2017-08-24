import {mount} from "enzyme"
import React from "react"
import Field from "./index"

describe("Field", () => {
  it("renders", () => {
    mount(<Field highlighted />)
  })
})
