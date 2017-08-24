import {mount, shallow} from "enzyme"
import React from "react"
import Logo from "./index"
import Visa from "./Visa"
import Mastercard from "./Mastercard"
import Cb from "./Cb"

const visaNumber = "4929588303328334"
const mastercardNumber = "5536838507150030"
const americanExpressNumber = "370218180742397"
const randomNumber = "1111111111111111"
const LogoVisaFixture = <Logo number={visaNumber} />
const LogoMastercardFixture = <Logo number={mastercardNumber} />
const LogoCbFixture = <Logo number={americanExpressNumber} />

describe("Logo", () => {
  it("renders", () => {
    mount(LogoVisaFixture)
  })

  it("renders Visa logo", () => {
    const logo = shallow(LogoVisaFixture)
    expect(logo.equals(<Visa />)).toBeTruthy()
  })

  it("renders Mastercard logo", () => {
    const logo = shallow(LogoMastercardFixture)
    expect(logo.equals(<Mastercard />)).toBeTruthy()
  })

  it("renders Cb logo", () => {
    const logo = shallow(LogoCbFixture)
    expect(logo.equals(<Cb />)).toBeTruthy()
  })

  it("doesn't render logo", () => {
    const logo = shallow(<Logo number={randomNumber} />)
    expect(logo.equals(null)).toBeTruthy()
  })
})
