import PropTypes from "prop-types"
import React from "react"
import creditCardRegex, {visa, mastercard} from "credit-card-regex"
import luhn from "luhn"

export const isCreditCard = number =>
  creditCardRegex({exact: true}).test(number) && luhn.validate(number)
export const isVisa = number => visa({exact: true}).test(number)
export const isMastercard = number => mastercard({exact: true}).test(number)

import CB from "./Cb"
import Mastercard from "./Mastercard"
import Visa from "./Visa"

const Logo = ({number}) => {
  if (isVisa(number)) return <Visa />
  if (isMastercard(number)) return <Mastercard />
  if (isCreditCard(number)) return <CB />
  return null
}

Logo.propTypes = {
  number: PropTypes.string.isRequired,
}

export default Logo
